import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { db } from '../lib/api';


/* ✅ Hero 이미지 크게 + 안 잘리게 */
const Hero = styled.div`
  position: relative;
  height: 420px;
  margin: 4px 20px;
  border-radius: 20px;
  overflow: hidden;
  background: #fff;
  

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

/* ✅ 치킨 이름 크게 */
const Title = styled.h1`
  margin: 0px 10px 10px;
  padding: 10px 10px 10px;
  font-size: 15px;
  font-weight: 900;
  letter-spacing: -0.5px;
`;

const TopBar = styled.div`
  padding: 0 20px;
  margin: 8px 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;

const LangBox = styled.div`
  display: flex;
  gap: 6px;
  margin: 10px 2px 10px;
  flex-wrap: wrap
`;

const LangBtn = styled.button`
  padding: 6px 10px;
  border-radius: 10px;
  border: 0;
  cursor: pointer;
  background: ${p => (p.active ? '#ff385c' : '#f1f1f1')};
  color: ${p => (p.active ? '#fff' : '#222')};
  font-weight: 700;
  font-size: 15px;
  white-space: nowrap;
 
`;

const HomeBtn = styled.button`
  padding:18px 18px;
  border: 0;
  border-radius: 14px;
  cursor: pointer;
  background: #ff385c;
  color: #fff;
  font-weight: 700;
  font-size: 13px;
  margin: 1px 5px 5px;
`;

const Grid = styled.div`
  padding: 18px 18px;
  display: grid;
  gap: 24px;
  
  
`;

const Card = styled.div`
  background: #fff;
  border-radius: 20px;
  box-shadow: 10px 10px 20px rgba(0,0,0,.08);
  margin: 10px 10px 20px;
`;

const Body = styled.div`
  padding: 16px;
`;

const Name = styled.div`
  font-size: 35px;
  font-weight: 900;
  color: #111;
  margin-bottom: 30px;
`;

const Desc = styled.p`
  font-size: 18px;
  line-height: 1.5;
  color: #444;
  margin: 0 0 10px;
`;


const PortionBox = styled.div`
  font-size: 16px;
  color: #333;

  strong {
    display: block;
    font-size: 17px;
    margin-bottom: 18px;
  }

  ul {
    padding-left: 16px;
    margin: 1.0rem;
    line-height: 3; 
  }

  li {
    margin-bottom: 6px;
    line-height: 1.5;
    
  }
`;

export default function RegionDetail() {
  const { regionId } = useParams();
  const nav = useNavigate();

  const [region, setRegion] = useState(null);
  const [spots, setSpots] = useState([]);
  const [lang, setLang] = useState('ko');
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState('');

useEffect(() => {
  try {
    setLoading(true);

    // 1️⃣ region 찾기
    const reg = db.regions.find(r => r.id === regionId);
    if (!reg) throw new Error('치킨 정보를 찾을 수 없습니다.');
    setRegion(reg);

    // 2️⃣ 해당 region의 치킨 목록
    const list = db.attractions.filter(
      a => a.regionId === regionId
    );
    setSpots(list);

  } catch (e) {
    setErr(e.message);
  } finally {
    setLoading(false);
  }
}, [regionId]);


  if (loading) return <p style={{ padding: 20 }}>로딩 중…</p>;
  if (err) return <p style={{ padding: 20, color: 'crimson' }}>{err}</p>;

  return (
    <div>
      {/* ✅ 치킨 이름 */}
      <Title>{region.name}</Title>

      {/* ✅ Hero 이미지 */}
      <Hero>
        <img src={region.cover} alt={region.name} />
      </Hero>

      <TopBar>
        <LangBox>
          <LangBtn active={lang === 'ko'} onClick={() => setLang('ko')}>한국어</LangBtn>
          <LangBtn active={lang === 'en'} onClick={() => setLang('en')}>EN</LangBtn>
          <LangBtn active={lang === 'ja'} onClick={() => setLang('ja')}>日本語</LangBtn>
          <LangBtn active={lang === 'zh'} onClick={() => setLang('zh')}>中文</LangBtn>
        </LangBox>
        <HomeBtn onClick={() => nav('/')}>back</HomeBtn>
      </TopBar>

      <Grid>
        {spots.map(s => (
          <Card key={s.id}>
            <Body>
              <Name>{s.name?.[lang] ?? s.name}</Name>
              <Desc>{s.desc?.[lang]}</Desc>

              {/* ✅ 구성 안내 (공통) */}
              <PortionBox>
                <strong>
                  {lang === 'ko' && '구성 안내'}
                  {lang === 'en' && 'Portion Information'}
                  {lang === 'ja' && '内容量のご案内'}
                  {lang === 'zh' && '份量说明'}
                </strong>
                <ul>
                  <li>
                    {lang === 'ko' && '한 마리 : 14조각'}
                    {lang === 'en' && 'Whole chicken: 14 pieces'}
                    {lang === 'ja' && '丸ごと1羽：14ピース'}
                    {lang === 'zh' && '整只：14块'}
                  </li>
                  <li>
                    {lang === 'ko' && '콤보 : 다리 5 + 봉 5 + 윙 5'}
                    {lang === 'en' && 'Combo: Drumettes 5 · Wings 5 · Wingsticks 5'}
                    {lang === 'ja' && 'コンボ：ドラム5・ウィング5・スティック5'}
                    {lang === 'zh' && '组合：鸡腿5 · 翅根5 · 鸡翅5'}
                  </li>
                  <li>
                    {lang === 'ko' && '윙봉 : 윙 10 + 봉 10 (총 20조각)'}
                    {lang === 'en' && 'Wing combo: 10 wings + 10 sticks (20 pieces)'}
                    {lang === 'ja' && 'ウィングボン：ウィング10＋スティック10（20ピース）'}
                    {lang === 'zh' && '翅根组合：翅10 + 翅根10（共20块）'}
                  </li>
                  <li>
                    {lang === 'ko' && '다리 : 10조각'}
                    {lang === 'en' && 'Drumsticks: 10 pieces'}
                    {lang === 'ja' && 'ドラムスティック：10ピース'}
                    {lang === 'zh' && '鸡腿（鼓槌）：10块'}
                  </li>
                  <li>
                    {lang === 'ko' && '순살 : 22조각'}
                    {lang === 'en' && 'Boneless: 22 pieces'}
                    {lang === 'ja' && '骨なし：22ピース'}
                    {lang === 'zh' && '无骨：22块'}
                  </li>
                  <li>
                    {lang === 'ko' && '※ 반마리 메뉴는 판매하지 않습니다'}
                    {lang === 'en' && '* Half-chicken menu is not available'}
                    {lang === 'ja' && '※ ハーフサイズの販売はありません'}
                    {lang === 'zh' && '※ 不提供半只装'}
                  </li>
                </ul>
              </PortionBox>
            </Body>
          </Card>
        ))}
      </Grid>
    </div>
  );
}
