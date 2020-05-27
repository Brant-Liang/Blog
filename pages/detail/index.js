import React from 'react'
import { Main, MainLeft, MainRight, DetailInfo } from './style'
import { Breadcrumb, Affix } from 'antd'
import { CalendarOutlined, FolderOutlined, FireOutlined } from '@ant-design/icons';
import Ad from '../../components/Ad'
import Author from '../../components/Author'
import ReactMarkdown from 'react-markdown'
import MarkNav from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css'
export default function Detail() {
  let markdown = '# P01:课程介绍和环境搭建\n' +
    '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
    '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
    '**这是加粗的文字**\n\n' +
    '*这是倾斜的文字*`\n\n' +
    '***这是斜体加粗的文字***\n\n' +
    '~~这是加删除线的文字~~ \n\n' +
    '\`console.log(111)\` \n\n' +
    '# p02:来个Hello World 初始Vue3.0\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n' +
    '***\n\n\n' +
    '# p03:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '# p04:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '#5 p05:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '# p06:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '# p07:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '``` var a=11; ```'
  return (
    <Main justify="center">
      <MainLeft>
        <DetailInfo>
          <div className="bread-div">
            <Breadcrumb>
              <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
              <Breadcrumb.Item>视频列表</Breadcrumb.Item>
              <Breadcrumb.Item>xxxx</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div>
            <div className="detailed-title">
              React实战视频教程-技术胖Blog开发(更新08集)
                </div>
            <div className="list-icon center">
              <span><CalendarOutlined /> 2019-06-28</span>
              <span><FolderOutlined /> 视频教程</span>
              <span><FireOutlined /> 5498人</span>
            </div>
            <div className="detailed-content" >
              <ReactMarkdown
                source={markdown}
                escapeHtml={false}
              />
            </div>
          </div>
        </DetailInfo>
      </MainLeft>
      <MainRight>
        <Author />
        <Ad />
        <Affix offsetTop={5}>
          <div className="detailed-nav comm-box">
            <div className="nav-title">文章目录</div>
            <MarkNav
              className="article-menu"
              source={markdown}
              // headingTopOffset={0}
              order={true}
            />
          </div>
        </Affix>
      </MainRight>
    </Main>
  )
}