import { useRouter } from "next/router";
import 'bootstrap/dist/css/bootstrap.css'
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
    const linkurl="https://www.bit.ly/"+url
    return(
      <div class="text-white">
    <div class="px-4 py-5 my-5 text-center">
    <h1 class="display-5 fw-bold">Welcome to URL-Redirect</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">click below button to reach your destination</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <a className="btn btn-primary btn-lg px-4 gap-3" target="_blank" href={linkurl}>
              Click here to Continue
          </a>
      </div>
    </div>
  </div>
      <br/>


  </div> 
    )
  }
//   <style JSX>{`
//   .body {
//       width:100%;
//       height:100%;
//       position:absolute;
//       background: url("https://source.unsplash.com/random/200x200?sig=1") no-repeat;
//   }
// `}</style>