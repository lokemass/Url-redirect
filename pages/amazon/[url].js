import { useRouter } from "next/router";
export default function urlredirect(){
    // const hash = global.window && window.location.hash;
    // console.log('window', window)
    const router=useRouter()
    const url=router.query.url;
    // setTimeout(function() {
    // //   window.location.replace('https://google.com');
    // window.open( 
    //     "https://www.google.com/search?q="+url,"_blank");
    // }, 5000);
    // const linkurl="https://www.google.com/search?q="+url
    const linkurl="https://www.amzn.to/"+url
    return(
      <div >
    hello world
    <br/>
    
    <a target="_blank" href={linkurl}>
              next link
          </a>
  </div> 
    )
    
  }
