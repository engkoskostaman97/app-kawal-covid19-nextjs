import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import CardStatus from "./CardStatus";
import Grafik from "./Grafik";
function IndexPage(props){
  const contentStyle={
    minHeight:"200vh",
    top:"56px",
    backgrounColor:"#f1f1f9",
    overflowX: "hidden"
  }
  return (
    <div style={{backgroundColor:"#f1f1f9",width:"100%"}}>
      <Header/>
      <div className="container conten position-relative" style={contentStyle}>
        <div className="row">
          <div className="col-12 d-flex justify-content-center text-center">
          <p className="mt-5 h2 text-danger font-weight-bold fs-1">KAWAL COVID19 2022</p>
          </div>
          <div className="col-12 d-flex justify-content-center text-center">
          <p className="mt-3 f18">Website Pemantauan Terkini Kasus Virus Covid19</p>
          </div>
        </div>  
        <CardStatus/>
        <Grafik isGlobal={props.isGlobal}/>
      </div>
      <Footer rightContent={""}
              leftContent={<div className="ml-2 font-weight-bold">Niomic-Tech @2023 All Right Reserved </div>}/>
    </div>
  )
}

export default IndexPage;