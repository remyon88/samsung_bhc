import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getSession, logout } from '../lib/api';

const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  background: #fff;
  box-shadow: var(--shadow);
  padding: 14px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


const LogoBox = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding: 10px 22px;
  border-radius: 18px;
  background: #ffcc00;
  color: #111;
  font-size: 24px;
  font-weight: 900;
  letter-spacing: -0.6px;
  text-decoration: none;
  box-shadow: 0 6px 18px rgba(0,0,0,0.15);
`;


const Nav = styled.nav`
  display: none;
`;

export default function Header(){
  const session = getSession();
  const nav = useNavigate();

  return (
    <Bar>
      {/* bhc 로고 */}
      <LogoBox to="/">
        home
      </LogoBox>

      
      <Nav>
        <Link to="/signup">회원가입</Link>
        <Link to="/members">회원보기</Link>
        {!session ? (
          <Link to="/login">로그인</Link>
        ) : (
          <button onClick={() => { logout(); nav('/'); }}>
            로그아웃
          </button>
        )}
      </Nav>
    </Bar>
  );
}
