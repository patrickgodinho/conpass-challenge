import * as React from 'react';
import styled from 'styled-components';

const renderMenus = list => list.map(a => <div style={{color: '#fff', fontFamily: 'Roboto', fontSize: '16px'}} key={a}>{a}</div>);

export const Header = (props) => {

  const Nav = styled.div`
    display: flex;
    align-items: left;
    padding: 10px;
    margin: auto;
`;
  const HeaderNav = Nav.extend`
    border-bottom: solid 1px #e1e8eb;
    background: #4CAF50;
    justify-content: center;
    align-items: center; 
`;

  const Logo = styled.div`
  flex: 1;
`;

  const MenuNav = Nav.extend`
  align-items: left;
  justify-content: space-around;
  flex: 4;
`;

  return (
    <HeaderNav>
      <Logo><img src={props.imageURL}/></Logo>
      <MenuNav>{renderMenus(props.menuList)}</MenuNav>
    </HeaderNav>
  )
};