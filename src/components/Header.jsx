import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getSession, logout } from '../lib/api';

const Bar = styled.header`
  position:sticky; top:0; z-index:10; background:#fff; box-shadow:var(--shadow);
  padding:12px 20px; font-size: 18px; display:flex; justify-content:space-between; align-items:center;
`;
const Brand = styled(Link)` color:var(--brand); font-weight:800; `;
const Nav = styled.nav`
  display:flex; gap:12px;
  a,button{ padding:8px 12px; border-radius:999px; background:var(--card); border:0 }
  button{ cursor:pointer }
`;

export default function Header(){
  const session = getSession();
  const nav = useNavigate();
  return (
    <Bar>
      <Brand to="/">Home</Brand>
      <Nav>
        <Link to="/signup">회원가입</Link>
        <Link to="/members">회원보기</Link>
        {!session ? <Link to="/login">로그인</Link>
                  : <button onClick={()=>{logout(); nav('/');}}>로그아웃</button>}
  </Nav>
    </Bar>
  );
}
