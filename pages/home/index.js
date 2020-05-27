import React from 'react'
import { Main, MainLeft, MainRight } from './style'
import { Breadcrumb } from 'antd'
import MainList from '../../components/List'
import Ad from '../../components/Ad'
import Author from '../../components/Author'
export default function Home() {
  return (
    <Main justify="center">
      <MainLeft>
        <Breadcrumb>
          <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
          <Breadcrumb.Item><a href="/">视频列表</a></Breadcrumb.Item>
        </Breadcrumb>
        <MainList/>
      </MainLeft>
      <MainRight>
        <Author/>
        <Ad/>
      </MainRight>
    </Main>
  )
}