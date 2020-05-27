import { Avatar, Divider, Typography} from 'antd'
import { GithubOutlined, QqCircleFilled, WeiboCircleFilled } from '@ant-design/icons'
import { AuthorInfo } from './style'
export default function Author() {
  const { Text } = Typography;
  return (
    <AuthorInfo>
      <div><Avatar size={100} /></div>
      <div className="author-introduction">个人介绍：大河网又打电话瓦工嗲业务端古代都会武汉东湖哦哈的外观多个wayDAU挖方段无法读福娃·</div>
      <Divider><Text type="secondary">社交账号</Text></Divider>
      <Avatar size={28} icon={<GithubOutlined/>}></Avatar>
      <Avatar size={28} icon={<QqCircleFilled/>}></Avatar>
      <Avatar size={28} icon={<WeiboCircleFilled/>}></Avatar>
    </AuthorInfo>
  )
}
