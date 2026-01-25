import React from 'react'

const Hero = () => {
  return (
   <div className="container " >
    <div className="row align-items-center ">
      <div className="col-lg-6 mr-auto  "style={{marginTop:"-80px"}}>
        <h1 className="fw-bold "style={{ color: "#000", fontSize:"3.2rem" }}>Make Your Bussiness More Profitable</h1>
        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quos neque quisquam, dicta optio voluptatibusy.</p>
       <div> <a href="#" className="btn btn-primary mr-2 mt-4"  style={{maxWidth:"90%" , height:"auto"}}>Get Started</a></div>
      </div>
      <div className=" col-lg-6 text-end  " style={{marginLeft:"-70px", marginTop:"-25px", display:"block", height:"auto"}} >
          <img src="https://preview.colorlib.com/theme/imagine/images/undraw_investing_7u74.svg"   alt="" />
      </div>
    </div>
    </div>
  )

}

export default Hero
