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
export const DetailInfo = styled.div`
  .bread-div{
  padding: .5rem;
  border-bottom:1px solid #eee;
  background-color: #e1f0ff;
}
.detailed-title{
  font-size: 1.8rem;
  text-align: center;
  padding: 1rem;
}
.center{
  text-align: center;
}
.detailed-content{
  padding: 1.3rem;
  font-size: 1rem;
}
code {
  display: block ;
   background-color:#f3f3f3;
   padding: .5rem !important;
   overflow-y: auto;
   font-weight: 300;
   font-family: Menlo, monospace;
   border-radius: .3rem;
}

.title-anchor{
  color:#888 !important;
  padding:4px !important;
  margin: 0rem !important;
  height: auto !important;
  line-height: 1.2rem !important;
  font-size: .9rem !important;
  border-bottom: 1px dashed #eee;
}
.active{
  color:rgb(30, 144, 255) !important;
}
.nav-title{
  text-align: center;
  color: #888;
  border-bottom: 1px solid rgb(30, 144, 255);

}
`;