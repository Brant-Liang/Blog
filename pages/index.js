import Head from 'next/head'
import { GlobalStyle } from './style'
import Header from '../components/header/Header'
import Home from '../pages/home'
import Footer from '../components/footer'

export default () => {
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
