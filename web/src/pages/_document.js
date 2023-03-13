import Acessibilidade from '@/components/Acessibilidade'
import Background from '@/components/Background'
import Navbar from '@/components/Navbar'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='h-screen w-screen'>
      
        <Main />
        {/* <Background/> */}
        {/* <Acessibilidade/> */}
        <NextScript />
        
      </body>
    </Html>
  )
}
