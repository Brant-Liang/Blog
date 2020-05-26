import React from 'react'
import { Row, Col, Menu } from 'antd';
import { NavHeader, HeaderLogo, HeaderDesc } from './style'
import { HomeOutlined, YoutubeOutlined } from '@ant-design/icons';
export default function Header() {
  return (
    <NavHeader>
      <Row justify="center" align="middle">
        <Col flex xs={24} sm={24} md={10} lg={15} xl={12}>
          <HeaderLogo>Brant-Liang</HeaderLogo>
          <HeaderDesc>专注前端学习、开发</HeaderDesc>
        </Col>
        <Col xs={0} sm={0} md={14} lg={8} xl={6}>
          <Menu mode="horizontal">
            <Menu.Item key="home" icon={<HomeOutlined />}>
              首页
            </Menu.Item>
            <Menu.Item key="video" icon={<YoutubeOutlined />}>
              写文章
            </Menu.Item>
            <Menu.Item key="mine" icon={<YoutubeOutlined />}>
              我的
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </NavHeader>
  )
}
