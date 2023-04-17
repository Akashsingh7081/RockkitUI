import Footer from "@/sections/Footer";
import Header from "../sections/Header/index";

export default function Layout(props ) {
  return (
    <>
      <Header />
      {props.children}
      <Footer CompanyListFooterItems={props.CompanyListFooterItems} HireUsFooterItems={props.HireUsFooterItems}/>
    </>
  );
}
