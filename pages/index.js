import Head from 'next/head'
import { GlobalStyle } from './style'
import Header from '../components/header/Header'
import Home from '../pages/home'
import Footer from '../components/footer'

Homef.getServerSideProps = async ()=>{
  console.log(1);
  const promise = new Promise((resolve)=>{
    axios('http://127.0.0.1:7001/default/articleList').then(
      (res)=>{
        console.log('远程获取数据结果:',res.data.data)
        resolve(res.data)
      }
    )
  })

  return await promise
}


export default Homef = () => {
  return (
    <div>
      <GlobalStyle/>
      <Head>
        <title>
          Home
        </title>
      </Head>
      <Header/>
      <Home/>
      <Footer/>
    </div>
  )
}
