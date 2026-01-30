import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { API } from '../lib/api';
import WelcomeBanner from '../components/WelcomeBanner';

const Grid = styled.div`
  padding:20px 20px 20px 0; margin-top: 0; display:grid; gap:13px; grid-template-columns:repeat(auto-fill, minmax(260px,1fr));
`;
const Card = styled(Link)`
  display:block; background:var(--card); border-radius:var(--radius); box-shadow:var(--shadow); overflow:hidden; min-height:240px;
`;
const Cover = styled.div` height:170px; background:#eee; `;
const Meta = styled.div` padding:20px 30px; display:flex; justify-content:space-between; font-size:22px; `;
const Title = styled.div` font-weight:700; font-size:25px;`;
const Arrow = styled.span` color:var(--brand);  `;

export default function Home(){
  const [regions, setRegions] = useState([]);
  useEffect(()=>{ fetch(`${API}/regions`).then(r=>r.json()).then(setRegions); },[]);
  return (
    <div>
  <WelcomeBanner />
  {/* 모든 마진/패딩 제거, 줄 간격 최소화 */}
<h2 style={{ margin: '0', padding: '0', marginTop: '60px', lineHeight: '1', fontSize: '20px' }}>
  TASTY,
</h2>
<h2 style={{ margin: '0', padding: '0', lineHeight: '2.0', fontSize: '25px' }}>
     CRISPY,
</h2>
<h2 style={{ margin: '0', padding: '0', lineHeight: '1.3', fontSize: '30px' }}>
  JUICY !
</h2>

  <Grid>

        {regions.map(r=>(
          <Card key={r.id} to={`/region/${r.id}`}>
            <Cover>{r.cover && <img src={r.cover} alt={r.name} />}</Cover>
            <Meta><Title>{r.name}</Title><Arrow> click here →</Arrow></Meta>
          </Card>
        ))}
      </Grid>
    </div>
  );
}