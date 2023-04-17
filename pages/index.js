import Layout from "@/layouts/layout";
import HeroSection from "@/sections/HeroSection";
import WorkSection from "@/sections/WorkSection";
import DedicatedSection from "@/sections/DedicatedSection";
import BenefitSection from "@/sections/BenefitSection";
import HireSection from "@/sections/HireSection";
import FreeSection from "@/sections/FreeSection";
import { WorkSectioData,HeroSectionData,DedicatedSectionData,HireSectionData,BenefitSectionData,CompanyListFooterData,HireUsFooterData } from "@/services";
import Head from "next/head";
import Blog from "@/blog";

export default function Index({workSectionItems,dedicatedSectionItems,heroSectionItems,hireSectionItems,benefitSectionItems,CompanyListFooterItems,HireUsFooterItems}) {
  return (
    <>
    <Head>
        <title>Figma Rockit UI</title>
        <meta
          name="description"
          content="Upscale your business efficiency by hiring dedicated software developers with leverage to screen and manage the whole team."
        />
        <meta name="theme-color" content="#317EFB"/>
      </Head>
      {/* <Layout CompanyListFooterItems={CompanyListFooterItems} HireUsFooterItems={HireUsFooterItems}>
        <HeroSection heroSection={heroSectionItems}/>
        <DedicatedSection dedicatedSection={dedicatedSectionItems}/>
        <WorkSection workSectionItems={workSectionItems}/>
        <BenefitSection benefitSectionItems={benefitSectionItems}/>
        <HireSection hireSectionItems={hireSectionItems}/>
        <FreeSection/>
      </Layout> */}
      <Blog></Blog>
      </>
  );
}

export async function getServerSideProps() {

  var HireUsFooterItems,CompanyListFooterItems,workSectionItems, dedicatedSectionItems, heroSectionItems,hireSectionItems,benefitSectionItems;

  try {
    const { data } = await WorkSectioData();
    const content = data.workSectionDetail.data.attributes.WorkSection;
    workSectionItems = content;
  } catch (error) {
    console.log("Error in WorkSectio Data");
  }
  try {
    const { data } = await DedicatedSectionData();
    const content = data.dedicatedTeamDetail.data.attributes.DedicatedSectionDetails;
    dedicatedSectionItems = content;
  } catch (error) {
    console.log("Error in DedicatedSection Data");
  }
  try {
    const { data } = await HeroSectionData();
    const content = data.heroSectionDetail.data.attributes.HeroSectionDetails;
    //console.log("content",content);
    heroSectionItems = content;
  } catch (error) {
    console.log("Error in HeroSection Data");
  }
  try {
    const { data } = await HireSectionData();
    const content = data.hireCards.data[0].attributes;
     hireSectionItems = content;
  } catch (error) {
    console.log("Error in HireSection Data");
  }
  try {
    const { data } = await BenefitSectionData();
    const content = data;
    benefitSectionItems = content;
  } catch (error) {
    console.log("Error in HireSection Data");
  }
  try {
    const { data } = await CompanyListFooterData();
    const content = data;
    CompanyListFooterItems = content.companyDetails.data;
    //console.log("CompanyListFooterItems",CompanyListFooterItems.companyDetails.data);
  } catch (error) {
    console.log("Error in CompanyListFooterItems Data");
  }
  try {
    const { data } = await HireUsFooterData();
    const content = data;
    HireUsFooterItems = content.hireUsFooters.data;
    //console.log("CompanyListFooterItems",CompanyListFooterItems.companyDetails.data);
  } catch (error) {
    console.log("Error in HireUsListFooterItems Data");
  }
  
   
  return {
    props :{
      workSectionItems,
      dedicatedSectionItems,
      heroSectionItems,
      hireSectionItems,
      benefitSectionItems,
      CompanyListFooterItems,
      HireUsFooterItems
    }
  }

}