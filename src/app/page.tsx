import { HeaderHome,About,Footer } from "@/components";
import Script from 'next/script'
export default function Home() {
  
  return (
 <>
 <HeaderHome/>
 <About/>
 <Footer/>
 <Script src="/scrollreveal.min.js"/>
 <Script src="/main.js"/>
 
 </>
  );
}
