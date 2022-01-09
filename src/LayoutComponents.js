import styled from 'styled-components';

// Named export bcos they don't have DEFAULT

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.header`
  width: 100%;
  text-align: center;
  background-color: green;
  font-size: 24px;
  color: #fefefe;
  padding: 16px 0;
`;

export const CardLayout = styled.div`
  display:  flex;
  flex-direction: column;
  margin: 15px;
`;

// export const RedRectangle = styled.div`
//   background-color: red;
//   width: 100px;
//   height: 100px;
// `;
