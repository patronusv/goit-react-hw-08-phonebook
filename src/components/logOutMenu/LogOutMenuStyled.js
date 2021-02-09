import styled from 'styled-components';
const LogOutMenuStyled = styled.div`
  right: 20px;
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  .logOutMenuText {
    margin-right: 20px;
  }
  .logOutMenuButton {
    padding: 5px 15px;
    border: 1px solid navy;
    border-radius: 5px;
    background-color: lightblue;
    box-shadow: 1px 1px 7px 0px rgba(140, 140, 140, 0.75);
  }
  .logOutMenuButton:hover,
  .logOutMenuButton:focus {
    background-color: yellowgreen;
  }
`;
export default LogOutMenuStyled;
