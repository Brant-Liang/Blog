import styled from 'styled-components'
import { Row, Col } from 'antd'

export const MainLeft = styled(Col).attrs(() => ({
  xs: 24, sm: 24, md:16, lg:18, xl:14
}))`
  background-color: #FFF;
  padding:.3rem;
  border-radius: .3rem;
  border-bottom:1px solid #eee;
`;
export const MainRight = styled(Col).attrs(() => ({
  xs: 0, sm: 0, md:7, lg:5, xl:4
}))`
  background-color: #FFF;
  margin-left: .5rem;
  padding:.3rem;
  border-radius: .3rem;
  border-bottom:1px solid #eee;
`;

export const Main = styled(Row)`
  margin-top: .5rem;
`;