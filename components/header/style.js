import styled from 'styled-components'

export const NavHeader = styled.div`
  background-color: #fff;
  padding: 0 .4rem;
  overflow: hidden;
  border-bottom: 1px solid #ccc;
  .ant-menu {
    line-height: 2.8rem;
  }
  .ant-menu-item {
    padding: 0 1rem;
  }
`

export const HeaderLogo = styled.span`
  color: #078ce4;
  font-size: 1.4rem;
  text-align: center;
`;

export const HeaderDesc = styled.span`
    font-size: .6rem;
    display: inline-block;
    padding-left: .3rem;
`;