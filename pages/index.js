import Head from 'next/head'
import Header from '../components/header/Header'
import '../public/style/pages/common.css'
import { GlobalStyle } from './style'
import { Row, Col } from 'antd'
export default function Home() {
  return (
    <div>
      <GlobalStyle/>
      <Head>
        <title>
          Home
        </title>
      </Head>
      <Header />
      <Row className="main" justify="center">
        <Col className="main-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          左侧
        </Col>
        <Col className="main-left" xs={0} sm={0} md={7} lg={5} xl={4}>
          右侧
        </Col>
      </Row>
    </div>
  )
}
