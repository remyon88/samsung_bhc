import styled from 'styled-components';
const Wrap = styled.div`
  margin: 16px 20px 0;
  padding: 30px 30px;
  border-radius: 10px;
  background: #f5dd07ff;
  border: 1px solid #f6f8f9ff;
  color: #d0f307ff;
  font-size:30px;
`;

export default function WelcomeBanner() {
return (
    <Wrap>
      <strong>BHC CHICKEN</strong> 
    </Wrap>
  );
}