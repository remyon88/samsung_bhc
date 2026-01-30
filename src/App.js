import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';
import Home from './pages/Home';

import RegionDetail from './pages/RegionDetail';

function App(){
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
 
       <Route path="/region/:regionId" element={<RegionDetail />} />
       <Route path="*" element={<div style={{padding:20}}>페이지를 찾을 수 없습니다.</div>} />

      </Routes>
    </>
  );
}
export default App;
