import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { db } from '../lib/api';
import WelcomeBanner from '../components/WelcomeBanner';

const Grid = styled.div`
  padding:20px 20px 20px 0;
  display:grid;
  gap:13px;
  grid-template-columns:repeat(auto-fill, minmax(260px,1fr));
`;

const Card = styled(Link)`
  display:block;
  background:var(--card);
  border-radius:var(--radius);
  box-shadow:var(--shadow);
  overflow:hidden;
  min-height:240px;
`;

const Cover = styled.div`
  height:170px;
  background:#eee;
  img { width:100%; height:100%; object-fit:cover; }
`;

const Meta = styled.div`
  padding:20px 30px;
  display:flex;
  justify-content:space-between;
  font-size:22px;
`;

const Title = styled.div` font-weight:700; font-size:25px;`;
const Arrow = styled.span` color:var(--brand);`;

const Slogan = styled.div`
  margin-top:60px;

  h2 {
    font-size:14px;
    line-height:1.2;
    margin:4px 0;
    font-weight:600;
  }
`;

export default function Home(){
  const regions = db.regions;

  return (
    <div>
      <WelcomeBanner />

      <Slogan>
        <h2>TASTY, CRISPY, JUICY !</h2>
        
        
      </Slogan>

      <Grid>
        {regions.map(r => (
          <Card key={r.id} to={`/region/${r.id}`}>
            <Cover>
              <img src={r.cover} alt={r.name} />
            </Cover>
            <Meta>
              <Title>{r.name}</Title>
              <Arrow>click →</Arrow>
            </Meta>
          </Card>
        ))}
      </Grid>
    </div>
  );
}
