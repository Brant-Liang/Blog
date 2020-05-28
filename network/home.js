import { request } from './request'

export function getArticleList() {
  request({
    url: '/default/articleList'
  })
}