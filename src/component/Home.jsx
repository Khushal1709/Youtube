// import React from "react";
// import Header from "./Header";
// import Footer from "./Footer";

// const Home = () => {
 
    
//   return (
//     <>
//     <Header />
//     <div className="bg-blue-50 min-h-screen flex flex-col items-center py-10">
//       {/* Main Container */}
//       <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start">
//         {/* Left Section */}
//         <div className="w-full md:w-1/2 mb-10 md:mb-0">
//           <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
//             Incorporation of Company
//           </h1>
//           <ul className="space-y-4 text-gray-700">
//             {[
//               "Registration completed in 7-10 business days",
//               "Issuance of Company PAN and TAN",
//               "Company Name Approval",
//               "Issuance of Incorporation Certificate",
//               "Drafting of MOA & AOA",
//               "Provision of Digital Signature Certificates (DSC)",
//               "Director’s Identification Number (DIN) secured",
//               "Exclusive Partner Benefits for Vakilsearch Clients",
//             ].map((item, index) => (
//               <li key={index} className="flex items-start space-x-2">
//                 <span className="text-blue-500">✔</span>
//                 <span>{item}</span>
//               </li>
//             ))}
//           </ul>

//           {/* Testimonial Section */}
//           <div className="mt-8 bg-white shadow-md rounded-lg p-4 text-center">
//             <p className="italic text-gray-600">
//               "Very prompt in service and response. Vakilsearch is a one-stop
//               solution for business & trademark registrations."
//             </p>
//             <p className="mt-4 font-bold text-gray-800">Saiteja Dasoju</p>
//             <p className="text-sm text-gray-500">Managing Director of Party Wright Events</p>
//           </div>
//         </div>

//         {/* Right Section - Registration Form */}
//         <div className="w-full md:w-1/3 bg-white shadow-md rounded-lg p-6 mb-10">
//           <h2 className="text-xl font-semibold text-gray-800 mb-4">Register Your Company Today</h2>
//           <form className="space-y-4">
//             {[
//               { label: "Name", type: "text", placeholder: "Enter your name" },
//               { label: "Email", type: "email", placeholder: "Enter your email" },
//               { label: "Mobile Number", type: "tel", placeholder: "Enter your mobile number" },
//               { label: "City/Pincode", type: "text", placeholder: "Enter city or pincode" },
//             ].map((field, index) => (
//               <div key={index}>
//                 <label className="block text-sm font-medium text-gray-700">{field.label}</label>
//                 <input
//                   type={field.type}
//                   placeholder={field.placeholder}
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 />
//               </div>
//             ))}

//             {/* Language Dropdown */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Language</label>
//               <select
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 defaultValue=""
//               >
//                 <option value="" disabled>
//                   Select language
//                 </option>
//                 <option value="english">English</option>
//                 <option value="hindi">Hindi</option>
//                 {/* Add more options as needed */}
//               </select>
//             </div>

//             {/* Service Dropdown */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Service</label>
//               <select
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 defaultValue=""
//               >
//                 <option value="" disabled>
//                   Select service
//                 </option>
//                 <option value="registration">Company Registration</option>
//                 {/* Add more options as needed */}
//               </select>
//             </div>

//             {/* WhatsApp Updates */}
//             <div className="flex items-center space-x-2">
//               <input
//                 type="checkbox"
//                 id="whatsapp-updates"
//                 className="h-4 w-4 text-blue-600 border-gray-300 rounded"
//               />
//               <label htmlFor="whatsapp-updates" className="text-sm text-gray-700">
//                 Get easy updates through WhatsApp
//               </label>
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-md"
//             >
//               Get Started
//             </button>
//           </form>

//           {/* Footer Text */}
//           <p className="mt-6 text-center text-sm text-gray-500">
//             India’s highest-rated legal tax and compliance platform. ⭐ 4.5/5 | 17k+ Happy Reviews
//           </p>
//         </div>
//       </div>
//       <div className="bg-gray-50 min-h-screen py-10">
//       <div className="container mx-auto px-4 space-y-10">
//         {/* Section 1: Company Law in India */}
//         <div className="text-center">
//           <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
//             Company Law in India
//           </h2>
//           <p className="text-gray-700 leading-relaxed">
//             Company law in India, governed by the Companies Act, 2013, regulates the formation, operation, and dissolution of companies. The Act is administered by the Ministry of Corporate Affairs (MCA) and establishes the business operations. It focuses on ensuring compliance with statutory obligations, maintaining transparency, and defining accountability structures within the context of legal requirements.
//           </p>
//           <p className="mt-4 text-gray-700 leading-relaxed">
//             While the Companies Act, 2013, lays the groundwork for governance from a legal perspective, sector-specific governance requirements may also fall under the purview of other regulatory bodies, such as the Securities and Exchange Board of India (SEBI) or the Reserve Bank of India (RBI). These authorities oversee specific industries, ensuring that entities operate according to their respective frameworks in addition to the broader provisions of the Companies Act.
//           </p>
//         </div>

//         {/* Section 2: What is Company Incorporation in India? */}
//         <div className="text-center">
//           <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
//             What is Company Incorporation in India?
//           </h2>
//           <p className="text-gray-700 leading-relaxed">
//             In India, incorporation of a company is the legal process of forming a corporate entity under the Companies Act, 2013. This process involves registering the company with the Ministry of Corporate Affairs (MCA), after which the company becomes a separate legal entity, distinct from its owners, and is recognized by law.
//           </p>
//           <p className="mt-4 text-gray-700 leading-relaxed">
//             Incorporation applies to entities such as Private Limited Companies (Pvt Ltd), Public Limited Companies, Limited Liability Partnerships (LLP), One Person Companies (OPC), and Section 8 Companies. It does not apply to unincorporated entities like sole proprietorships or general partnerships.
//           </p>
//         </div>
//         <div className="bg-gray-50 min-h-screen py-10">
//       {/* Header Section */}
//       <div className="text-center mb-10">
//         <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
//           Company structures in <span className="text-blue-600">India</span>
//         </h1>
//       </div>

//       {/* Tabs Section */}
//       <div className="container mx-auto px-4">
//         <div className="flex justify-center space-x-6 border-b border-gray-200 pb-2 mb-6">
//           {[
//             "Business Registration",
//             "International Business Setup",
//             "Compliance Services",
//             "Other Services",
//           ].map((tab, index) => (
//             <button
//               key={index}
//               className={`text-sm md:text-base font-medium ${
//                 index === 0 ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         {/* Description */}
//         <p className="text-center text-gray-600 mb-8">
//           Start your business seamlessly with expert guidance. Whether you’re forming a private
//           limited company, LLP, or any other entity, we ensure a hassle-free process by managing
//           everything from documentation to government approvals.
//         </p>

//         {/* Cards Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {[
//             {
//               title: "Private Limited Company Registration",
//               description:
//                 "Ideal for startups, offering limited liability and simplified venture capital raising. Secure investor funding effortlessly and protect your personal assets.",
//               icon: "🏢", // Replace with an actual icon if needed
//             },
//             {
//               title: "Limited Liability Partnership (LLP) Registration",
//               description:
//                 "LLP combines limited liability with operational flexibility. Perfect for small businesses and professionals seeking liability protection without the rigid corporate structure.",
//               icon: "👥", // Replace with an actual icon if needed
//             },
//             {
//               title: "One Person Company (OPC) Registration",
//               description:
//                 "OPC is the ideal choice for solo entrepreneurs, offering limited liability and a corporate structure without the need for partners.",
//               icon: "👤", // Replace with an actual icon if needed
//             },
//             {
//               title: "Sole Proprietorship Registration",
//               description:
//                 "A sole proprietorship is the simplest business structure, ideal for small businesses. Enjoy full control, minimal compliance, and easy setup.",
//               icon: "💼", // Replace with an actual icon if needed
//             },
//             {
//               title: "Nidhi Company Registration",
//               description:
//                 "Nidhi Companies are mutual benefit societies that provide loans to their members at reasonable rates.",
//               icon: "🏦", // Replace with an actual icon if needed
//             },
//             {
//               title: "Producer Company Registration",
//               description:
//                 "Producer Companies are designed for farmers and agriculturalists to promote their mutual interests and provide support in production and marketing.",
//               icon: "🌾", // Replace with an actual icon if needed
//             },
//           ].map((card, index) => (
//             <div
//               key={index}
//               className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
//             >
//               <div className="flex items-center space-x-4 mb-4">
//                 <div className="text-blue-600 text-xl">{card.icon}</div>
//                 <h3 className="text-lg font-semibold text-gray-800">{card.title}</h3>
//               </div>
//               <p className="text-sm text-gray-600">{card.description}</p>
//             </div>
//           ))}
//         </div>

//         <div className="md:py-24 py-[52px]">
//       <div className="flex max-md:flex-col md:border md:border-[#B3D8FF] max-w-[1200px] mx-auto rounded-md max-md-rounded-none md:p-10 py-6 px-4 gap-6 bg-[linear-gradient(135deg,#F9F9F9_0%,#E6F2FF_99.28%)]">
//         <div className="flex flex-col gap-2">
//           <p className="font-bold text-2xl">Register your business outside India</p>
//           <p className="font-normal text-lg text-[#606162]">Take your business global with Vakilsearch's expert guidance.</p>
//           <img
//             alt="icon"
//             loading="lazy"
//             width="494"
//             height="230"
//             decoding="async"
//             style={{ color: "transparent" }}
//             src="https://assets.vakilsearch.com/live-images/world.svg"
//           />
//         </div>
//         <div className="w-px h-[348.5px] bg-gray-300 max-md:hidden"></div>
//         <div className="grid grid-cols-2 md:gap-8 gap-3">
//           {incorporationOptions.map((option, index) => (
//             <div key={index} className="shadow-lg rounded-lg bg-white flex items-center">
//               <img
//                 alt={option.alt}
//                 loading="lazy"
//                 width="56"
//                 height="90"
//                 decoding="async"
//                 style={{ color: "transparent" }}
//                 className="max-md-w-20 max-md-h-20"
//                 src={option.src}
//               />
//               <p className="max-md:font-medium max-md:text-sm text-lg font-semibold p-4 text-start">{option.text}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//         <div className="bg-[#FDF9F5] md:my-[100px] mx-3 px-[20px] max-md:py-[24px] max-md:mb-[45px] md:max-w-[1200px] md:mx-auto rounded-md flex max-md:flex-col md:gap-[100px] gap-[24px] md:px-[62px] md:pt-[25px] border-[1px] border-[#FFEFDE]">
//       <img
//         alt="ttl-logo"
//         loading="lazy"
//         width="300"
//         height="121"
//         decoding="async"
//         className="md:w-[470px] md:h-[190px]"
//         style={{ color: 'transparent' }}
//         src="https://assets.vakilsearch.com/ttl.svg"
//       />
//       <div className="flex flex-col gap-[12px] md:gap-[14px]">
//         <p className="text-[20px] font-semibold md:text-[28px]">
//           Not Sure About Your Business Type?
//         </p>
//         <p className="text-[14px] font-normal md:text-[16px] text-[#606162]">
//           Feeling uncertain about the ideal business structure? Consult with our experts for guidance and support in finding the right one for you
//         </p>
//         <button className="text-[18px] font-medium bg-[#FCD209] py-[10px] md:px-[39px] rounded mr-[8px] md:w-fit">
//           Talk to expert
//         </button>
//       </div>
      
//     </div>
//     <div className="bg-[#FFF] px-0 lg:gap-[209px] md:py-[25px] md:mt-[40px] items-center max-md:mb-[38px] flex max-md:flex-col-reverse gap-3 bg-[#F9F9F9] px-6 pt-2 md:pt-5 rounded-lg md:gap-10 md:p-8 md:flex-row-reverse">
//       <img
//         src="https://assets.vakilsearch.com/live-images/Company-registration-note.svg"
//         alt="Register Your Company in India"
//         title="Register Your Company in India"
//         className="md:h-[390px] md:w-[390px] md:w-[278px] md:h-[250px]"
//       />
//       <div className="pb-3 flex flex-col gap-5">
//         <h2 className="max-md:text-left text-[30px] text-[#231F20] font-bold text-[24px] md:text-[30px] max-md:text-center">
//           Register Your Company in India
//         </h2>
//         <p className="text-[#606162] text-[16px] md:text-[18px]">
//           Registering a company in India is the foundational step for legally
//           establishing your business. Under the Companies Act of 2013, any
//           entity can be formed for lawful purposes by following the guidelines
//           set by the Ministry of Corporate Affairs (MCA). Company registration
//           not only provides the entity with a unique legal identity but also
//           grants various rights and protections under Indian law.
//           <br />
//           <br />
//           Choosing the correct company structure is critical, as it impacts
//           operational efficiency, compliance requirements, and the ability to
//           meet business objectives. Options include private limited companies,
//           limited liability partnerships, and sole proprietorships, each
//           offering distinct advantages. Registering a company in India enables
//           businesses to access government incentives, claim legal rights, and
//           build credibility in the market.
//           <br />
//           <br />
//           The MCA’s official portal offers a streamlined process for registering a company,
//           allowing businesses to obtain their legal identity and operate with compliance.
//         </p>
//       </div>
//     </div>
    

//     <div className="text-[#606162] text-[18px] flex flex-col gap-4 md:gap-8">
//       <h2 className="font-semibold text-[28px] md:text-[32px] text-[#231F20] text-center">
//         <span className="text-[#007AFF]">Benefits</span> of Incorporating a Company in India
//       </h2>
//       <p className="max-md:pb-6 text-center">
//         The process is governed by the Ministry of Corporate Affairs (MCA) and involves registering business with the Registrar of Companies (RoC), along with obtaining a Digital Signature Certificate (DSC) and Director Identification Number (DIN).
//       </p>
//       <div className="flex flex-wrap gap-6 md:gap-9 w-full justify-center">
//         {benefits.map((benefit, index) => (
//           <div
//             key={index}
//             className="w-[100%] md:w-[47%] lg:w-[31%] p-6 shadow-[0px_0px_24px_0px_#00000014] flex flex-col gap-4 max-md:m-2"
//           >
//             <p className="text-[#231F20] text-[18px] md:text-[20px] font-semibold text-center">
//               {benefit.title}
//             </p>
//             <p className="text-center text-[16px] md:text-[18px]">{benefit.description}</p>
//             {benefit.list && (
//               <ul>
//                 {benefit.list.map((item, idx) => (
//                   <li key={idx}>
//                     <b>{item.name}:</b> {item.detail}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//     <div className="!px-0 !py-[38px] !items-center !bg-[#FAFAFA] lg:!gap-[209px] flex max-md:flex-col-reverse gap-3 bg-[#F9F9F9] px-6 pt-2 md:pt-5 rounded-lg md:gap-10 md:p-8 md:flex-row-reverse">
//       <img
//         src="https://assets.vakilsearch.com/bluelap.svg"
//         alt="Eligibility Criteria for Company Registration"
//         title="Eligibility Criteria for Company Registration"
//         className="md:!h-[390px] md:!w-[390px] md:w-[278px] md:h-[250px]"
//       />
//       <div className="pb-3 flex flex-col gap-5">
//         <h2 className="max-md:text-left text-[30px] text-[#231F20] font-bold text-[24px] md:text-[30px] max-md:text-center">
//           <b style={{ color: "#007aff" }}>Eligibility Criteria</b> for Company Registration
//         </h2>
//         <p className="text-[#606162] text-[16px] md:text-[18px]">
//           As per the Companies Act of 2013, the eligibility criteria for every business entity type varies drastically. Here is a general outline of eligibility criteria for registering your company in MCA.
//         </p>
//         <ul>
//           <li className="md:leading-[28px] text-[#606162] text-[16px] md:text-[18px] ml-4 list-disc md:mb-[14px] mb-[12px] md:ml-7">
//             Registered company should have at least one Indian resident director
//           </li>
//           <li className="md:leading-[28px] text-[#606162] text-[16px] md:text-[18px] ml-4 list-disc md:mb-[14px] mb-[12px] md:ml-7">
//             Directors should have DSC and DIN
//           </li>
//           <li className="md:leading-[28px] text-[#606162] text-[16px] md:text-[18px] ml-4 list-disc md:mb-[14px] mb-[12px] md:ml-7">
//             Should not conduct any illegal activities as outlined by the Indian legislature
//           </li>
//           <li className="md:leading-[28px] text-[#606162] text-[16px] md:text-[18px] ml-4 list-disc md:mb-[14px] mb-[12px] md:ml-7">
//             Directors and shareholders should be legally of Age
//           </li>
//           <li className="md:leading-[28px] text-[#606162] text-[16px] md:text-[18px] ml-4 list-disc md:mb-[14px] mb-[12px] md:ml-7">
//             Address proof and the Identity proof of the directors has to be submitted
//           </li>
//           <li className="md:leading-[28px] text-[#606162] text-[16px] md:text-[18px] ml-4 list-disc md:mb-[14px] mb-[12px] md:ml-7">
//             Company should have a unique name.
//           </li>
//         </ul>
//       </div>
//     </div>
//       </div>
//       <div className=" flex  !px-0 !pb-[38px] items-center gap-4 !bg-[#FAFAFA] lg:!gap-[209px] wrc-flex max-md:wrc-flex-col-reverse wrc-gap-3 wrc-bg-[#F9F9F9] wrc-px-6 wrc-pt-2 md:wrc-pt-5 wrc-rounded-lg md:wrc-gap-10 md:p-8">
//       <img
//         src="https://assets.vakilsearch.com/displayimg.svg"
//         alt="Checklist for Company Registration"
//         title="Checklist for Company Registration"
//         className="md:!h-[390px] md:!w-[390px] md:wrc-w-[278px] md:wrc-h-[250px]"
//       />
//       <div className="wrc-pb-3 wrc-flex wrc-flex-col wrc-gap-5">
//         <h2 className="max-md:!text-left !text-[30px] wrc-text-[#231F20] wrc-font-bold wrc-text-[24px] md:wrc-text-[30px] max-md:wrc-text-center">
//           <b style={{ color: "#007aff" }}>Checklist</b> for Company Registration
//         </h2>
//         <p className="!text-[#606162] wrc-text-[#606162] wrc-text-[16px] md:wrc-text-[18px]">
//           Based on the type of company being incorporated the requirements might
//           vary. However, here is a comprehensive checklist for registering your
//           company in India:
//         </p>
//         <li className="space-y-2">
//           {[
//             "Finalise the type of company that you want to register",
//             "Select a name for the company as provided under the company incorporation rules of 2014",
//             "Have an official address for your firm",
//             "Collect all the ID and address proof of the partners",
//             "Have at least two shareholders and two directors",
//             "Make sure to have one Indian resident director",
//             "Finalise the capital required for the company",
//             "Draft the objective of the company in and memorandum of association",
//             "Apply for DSC and DIN for all the directors if required",
//             "Provide address proof and utility bills of the registered office address",
//             "Apply for GST if required",
//             "Open a current account in the company's name",
//             "Appoint an auditor, chartered accountant, and CS if applicable",
//             "Get your company TAN and PAN records",
//             "Make sure to register your intellectual property like logos and trademarks.",
//           ].map((item, index) => (
//             <li
//               key={index}
//               className="md:!leading-[28px] wrc-text-[#606162] wrc-text-[16px] md:wrc-text-[18px] wrc-ml-4 wrc-list-disc md:wrc-mb-[14px] wrc-mb-[12px] md:wrc-ml-7"
//             >
//               {item}
//             </li>
//           ))}
//         </li>
//       </div>
      
//     </div>
//         <div
//       className="bg-[#F1F7FF] md:mb-[90px] pt-[30px] p-4"
//       id="section4"
//       data-gtm-vis-first-on-screen702279_260="3521"
//       data-gtm-vis-total-visible-time702279_260="5000"
//       data-gtm-vis-first-on-screen702279_249="3782"
//       data-gtm-vis-total-visible-time702279_249="5000"
//       data-gtm-vis-has-fired702279_260="1"
//       data-gtm-vis-has-fired702279_249="1"
//     >
//       <div className="flex !px-7 !pb-[38px] items-center !bg-[#F1F7FF] wrc-flex max-md:wrc-flex-col-reverse wrc-gap-3 wrc-bg-[#F9F9F9] wrc-px-6 wrc-pt-2 md:wrc-pt-5 wrc-rounded-lg md:wrc-gap-10 md:p-8 md:wrc-flex-row-reverse">
//         <img
//           src="https://assets.vakilsearch.com/solepropdoc_required.svg"
//           alt="Required Documents for Company Registration"
//           title="Required Documents for Company Registration"
//           className="md:!h-[390px] md:!w-[420px] md:wrc-w-[278px] md:wrc-h-[250px]"
//         />
//         <div className="wrc-pb-3 wrc-flex wrc-flex-col wrc-gap-5">
//           <h2 className="wrc-text-[#231F20] wrc-font-bold wrc-text-[24px] md:wrc-text-[30px] max-md:wrc-text-center">
//             <b style={{ color: "#007aff" }}>Required Documents</b> for Company Registration
//           </h2>
//           <p className="wrc-text-[#606162] wrc-text-[16px] md:wrc-text-[18px]">
//             For company registration in India the applicant should provide director and shareholder documents along with the proof of registered office address. Here is a list of the required documents for company incorporation:
//           </p>
//           <ul>
//             {[
//               "Passport size photos of directors and shareholders",
//               "PAN card of all the directors",
//               "Aadhar, driver license, passport or voter ID of the directors",
//               "Proof of residence",
//               "NOC of the registered office address",
//               "Utility bills for registered office proof",
//               "Memorandum of Association (MOA)",
//               "Articles of Association (AOA)",
//               "Director and Shareholder Details",
//               "Digital Signature Certificate (DSC)",
//               "Director Identification Number (DIN)",
//             ].map((item, index) => (
//               <li
//                 key={index}
//                 className="wrc-text-[#606162] wrc-text-[16px] md:wrc-text-[18px] wrc-ml-4 wrc-list-disc md:wrc-mb-[14px] wrc-mb-[12px] md:wrc-ml-7"
//               >
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//       <div className="!bg-[#F1F7FF] wrc-p-4 wrc-bg-[#F9F9F9] wrc-text-center wrc-rounded-b-lg wrc-border-gray-300 text-center font-bold text-lg">
//         <div className="wrc-rounded wrc-max-w-[757px] wrc-bg-gradient-to-t wrc-from-[#F1F7FF] wrc-to-[#D4EAFE] md:wrc-mx-auto wrc-p-5">
//           Note: The documents may vary based on the type of company you are planning to register. For more detailed information get in touch with our experts today.
//         </div>
//       </div>
      
//     </div>
//     <div className="max-w-[1200px] mx-auto p-4 rounded-xl">
//       <h2 className="pb-3 md:pb-5 font-semibold text-[24px] md:text-[32px] text-black text-center">
//         Company Registration Process -{" "}
//         <span style={{ color: "#007AFF" }}>Step-by-Step</span>
//       </h2>
//       <div className="max-md:flex-col-reverse gap-3 rounded-lg md:gap-10 px-0 max-md:items-center justify-around">
//         <div className="flex flex-col gap-4">
//           {/* Step 1 */}
//           <div className="pb-3 flex flex-col gap-5">
//             <h3 className="text-[#231F20] font-bold md:text-[24px] max-md:text-left text-[20px]">
//               Step 1: Choose a Business Structure
//             </h3>
//             <p className="text-[#606162] text-[16px] md:text-[18px]">
//               The first decision is selecting the type of business entity you
//               wish to register. In India, there are six main types:
//             </p>
//             <ul className="text-[#606162] text-[16px] md:text-[18px] ml-4 list-disc mt-1 leading-8 md:ml-7">
//               <li>
//                 <b>Private Limited Company (Pvt Ltd):</b> Ideal for startups,
//                 offering limited liability protection.
//               </li>
//               <li>
//                 <b>Limited Liability Partnership (LLP):</b> Combines the
//                 flexibility of a partnership with the benefits of limited
//                 liability.
//               </li>
//               <li>
//                 <b>One Person Company (OPC):</b> Suitable for solo
//                 entrepreneurs who want limited liability.
//               </li>
//               <li>
//                 <b>Public Limited Company (PLC):</b> Designed for larger
//                 businesses aiming to raise capital from the public.
//               </li>
//               <li>
//                 <b>Sole Proprietorship:</b> Simple structure with full control
//                 but unlimited liability.
//               </li>
//               <li>
//                 <b>Partnership Firm:</b> Best for small businesses with shared
//                 responsibilities.
//               </li>
//             </ul>
//           </div>

//           {/* Step 2 */}
//           <div className="pb-3 flex flex-col gap-5">
//             <h3 className="text-[#231F20] font-bold md:text-[24px] max-md:text-left text-[20px]">
//               Step 2: Obtain Director Identification Number (DIN)
//             </h3>
//             <p className="text-[#606162] text-[16px] md:text-[18px]">
//               The Director Identification Number (DIN) is mandatory for anyone
//               who wishes to be a director in the company.
//               <br />
//               <br />
//               <b>How to Apply:</b>
//             </p>
//             <ul className="text-[#606162] text-[16px] md:text-[18px] ml-4 list-disc mt-1 leading-8 md:ml-7">
//               <li>
//                 Apply for DIN online via the Ministry of Corporate Affairs (MCA)
//                 portal.
//               </li>
//               <li>
//                 Use the SPICe+ form (Simplified Proforma for Incorporating a
//                 Company Electronically) during the company registration process.
//               </li>
//             </ul>
//           </div>

//           {/* Step 3 */}
//           <div className="pb-3 flex flex-col gap-5">
//             <h3 className="text-[#231F20] font-bold md:text-[24px] max-md:text-left text-[20px]">
//               Step 3: Obtain Digital Signature Certificate (DSC)
//             </h3>
//             <p className="text-[#606162] text-[16px] md:text-[18px]">
//               A Digital Signature Certificate (DSC) is required to sign forms
//               electronically on the MCA portal.
//             </p>
//             <ul className="text-[#606162] text-[16px] md:text-[18px] ml-4 list-disc mt-1 leading-8 md:ml-7">
//               <li>
//                 <b>How to Obtain:</b> Get a DSC from government-approved
//                 Certifying Authorities (e.g., eMudhra, Sify, Ncode).
//               </li>
//               <li>
//                 <b>Documents Required:</b> PAN card, Address proof, and a
//                 passport-size photo.
//               </li>
//             </ul>
//           </div>
//           {/* Step 4 */}
//           <div className="pb-3 flex flex-col gap-5">
//             <h3 className="text-[#231F20] font-bold md:text-[24px] max-md:text-left text-[20px]">
//             Step 4: Choose a Unique Company Name
//             </h3>
//             <p className="text-[#606162] text-[16px] md:text-[18px]">
//             Select a name that aligns with your brand and complies with MCA guidelines.
//             </p>
//             <ul className="text-[#606162] text-[16px] md:text-[18px] ml-4 list-disc mt-1 leading-8 md:ml-7">
//               <li>
//                 <b>Ensure the name:</b> Is unique and not similar to existing company names.
//               </li>
//               <li>
//               Does not infringe on trademarks.
//               </li>
//               <li>
//               Complies with the Companies (Incorporation) Rules, 2014.
//               </li>
//             </ul>
//           </div>
//           {/* Step 5 */}
//           <div className="pb-3 flex flex-col gap-5">
//             <h3 className="text-[#231F20] font-bold md:text-[24px] max-md:text-left text-[20px]">
//             Step 5: Apply for Name Approval
//             </h3>
//             <p className="text-[#606162] text-[16px] md:text-[18px]">
//             Once you have selected a name, you need to reserve it.


//             </p>
//             <ul className="text-[#606162] text-[16px] md:text-[18px] ml-4 list-disc mt-1 leading-8 md:ml-7">
//               <li>
//               Use the RUN (Reserve Unique Name) service on the MCA portal.
//               </li>
//               <li>
//               Have a few alternatives ready in case your first choice is unavailable.
//               </li>
//               <li>
//               Approved names are valid for 20 days.
//               </li>
//             </ul>
//           </div>
//           {/* Step 6 */}
//           <div className="pb-3 flex flex-col gap-5">
//             <h3 className="text-[#231F20] font-bold md:text-[24px] max-md:text-left text-[20px]">
//             Step 6: Prepare Memorandum and Articles of Association (MOA & AOA)
//             </h3>
//             <p className="text-[#606162] text-[16px] md:text-[18px]">
//             These legal documents define your company's purpose, structure, and operating rules.


//             </p>
//             <ul className="text-[#606162] text-[16px] md:text-[18px] ml-4 list-disc mt-1 leading-8 md:ml-7">
//               <li>
//                 <b>Memorandum of Association (MOA):</b> Specifies the company’s objectives and activities.
//               </li>
//               <li>
//                   <b>Articles of Association (AOA):</b>Defines the company’s internal rules and regulations.
//               </li>
//               <li>
//               These documents must be signed by directors and shareholders.
//               </li>
//             </ul>
//           </div>
//           {/* step 7 */}
//           <div className="pb-3 flex flex-col gap-5">
//             <h3 className="text-[#231F20] font-bold md:text-[24px] max-md:text-left text-[20px]">
//             Step 7: Obtain Consent and Declarations
//             </h3>
//             <p className="text-[#606162] text-[16px] md:text-[18px]">
//             Before filing for incorporation:




//             </p>
//             <ul className="text-[#606162] text-[16px] md:text-[18px] ml-4 list-disc mt-1 leading-8 md:ml-7">
//               <li>
//               Directors and shareholders must provide their consent to act in their roles.
//               </li>
//               <li>
//               Obtain declarations regarding compliance with legal requirements.
//               <li>Form INC-9 for directors' declarations. </li>
//               <li>Consent forms like DIR-2. </li>
//               </li>
//             </ul>
//           </div>
//           {/* step 8 */}
//           <div className="pb-3 flex flex-col gap-5">
//             <h3 className="text-[#231F20] font-bold md:text-[24px] max-md:text-left text-[20px]">
//             Step 8: File Incorporation Documents
//             </h3>
//             <p className="text-[#606162] text-[16px] md:text-[18px]">
//             This is the most crucial step where all necessary documents are submitted online via the SPICe+ form on the MCA portal.
//             </p>
//             <ul className="text-[#606162] text-[16px] md:text-[18px] ml-4 list-disc mt-1 leading-8 md:ml-7">
              
//                 <b>Documents to Attach:</b> 
              
//               <li>
//               MOA & AOA.
//               </li>
//               <li>
//               DIN & DSC for directors.
//               </li>
//               <li>
//               Address proof for the registered office.
//               </li>
//               <li>
//               Identity and address proofs for directors and shareholders.
//               </li>
              
//                 <b>Additional Forms::</b> 
              
//               <li>
//               MOA & AOA.
//               </li>
//               <li>
//               Form INC-9 for directors' declarations.
//               </li>
//               <li>
//               Consent forms like DIR-2.
//               </li>
//              <b>AGILE-PRO-S:</b><li>For registration of GST, EPFO, and ESIC.</li>
//             </ul>
//           </div>
//           {/* step 9 */}
//           <div className="pb-3 flex flex-col gap-5">
//             <h3 className="text-[#231F20] font-bold md:text-[24px] max-md:text-left text-[20px]">
//             Step 9: Pay Registration Fees
//             </h3>
      
//             <ul className="text-[#606162] text-[16px] md:text-[18px] ml-4 list-disc mt-1 leading-8 md:ml-7">
//               <li>
//               Fees are based on the authorized capital of the company.
//               </li>
//               <li>
//               Payment can be made online on the MCA portal.
//               </li>
//               <li>
//               The fee structure varies depending on the type of company and capital.
//               </li>
//             </ul>
//           </div>
//           {/* step 10 */}
//           <div className="pb-3 flex flex-col gap-5">
//             <h3 className="text-[#231F20] font-bold md:text-[24px] max-md:text-left text-[20px]">
//             Step 10: Receive the Certificate of Incorporation
//             </h3>
//             <p className="text-[#606162] text-[16px] md:text-[18px]">
//             Upon successful verification of all submitted documents and payment:


//             </p>
//             <ul className="text-[#606162] text-[16px] md:text-[18px] ml-4 list-disc mt-1 leading-8 md:ml-7">
//               <li>
//               The Registrar of Companies (ROC) issues the Certificate of Incorporation.
//               </li>
//               <li>
//               The certificate includes a Corporate Identification Number (CIN).
//               </li>
//               <li>
//               Approved names are valid for 20 days.
//               </li>
//             </ul>
//           </div>
          

//           {/* Add other steps similarly */}
//         </div>
//       </div>
//       <div className="flex max-md:flex-col-reverse gap-3 rounded-lg md:gap-10 px-0 max-md:items-center justify-around md:flex-row-reverse">
//       <img
//         alt="Company Registration Certificate"
//         title="Company Registration Certificate"
//         loading="lazy"
//         width="220"
//         height="220"
//         decoding="async"
//         className="undefined"
//         style={{ color: "transparent", paddingTop: "0px", width: "250px", height: "250px" }}
//         src="https://assets.vakilsearch.com/live-images/CompRegCertificate.svg"
//       />
//       <div className="flex flex-col gap-4">
//         <div className="pb-3 flex flex-col gap-5">
//           <h2 className="text-[#231F20] font-bold md:text-[30px] max-md:text-left text-[24px]">
//             Company Registration Certificate
//           </h2>
//           <p className="text-[#606162] text-[16px] md:text-[18px]">
//             A Company Registration Certificate serves as the official document proving your business's legal existence. Issued by the Registrar of Companies (RoC) under the Ministry of Corporate Affairs (MCA), this certificate not only confirms the incorporation of your company but also grants you the legal authority to operate in full compliance with Indian corporate laws.
//           </p>
//         </div>
//       </div>
      
//     </div>
//     <div className="px-4">
//       <h2 className="font-bold md:text-[32px] md:leading-[42px] text-center text-[24px] leading-[34px] mb-4 mx-auto md:mb-[32px] text-[#231F20]">
//         Types of Company Registration
//       </h2>
//       <p className="leading-[24px] text-[#606162] text-center text-[16px] md:text-[18px] md:pb-[54px] pb-6">
//         Under the Companies Act of 2013 different types of business entities can be registered. Each and every business entity has its own set of benefits and drawbacks. Here is a complete outline of different business entities and their corresponding information.
//       </p>
//       <div className="block max-md:overflow-x-scroll">
//         <div className="flex flex-col gap-10">
//           <div className="!bg-blue-300 !p-0 text-[#231F20] !pb-4 wrc-p-2 md:wrc-p-8 wrc-pb-4 md:wrc-pt-4 wrc-rounded-[8px] wrc-w-fit">
//             <div className="wrc-max-md:overflow-x-scroll wrc-border-none z-[999] ">
//               <table>
//                 <thead>
//                   <tr className="shadow-[0px_4px_14px_0px_#00000017] text-left wrc-bg-[#EDF6FF]">
//                     <th className="!p-5 wrc-text-[16px] md:wrc-text-[20px] wrc-font-semibold wrc-p-3 wrc-px-5 wrc-text-left md:wrc-px-10 wrc-sticky md:wrc-static wrc-left-[-1px] wrc-top-0 wrc-z-[999] wrc-bg-[#EDF6FF]">
//                       <p></p>
//                     </th>
//                     {[
//                       { name: "Pvt. Limited Company", link: "https://vakilsearch.com/company-registration/private-limited" },
//                       { name: "One Person Company", link: "https://vakilsearch.com/company-registration/opc-registration" },
//                       { name: "Limited Liability Partnership", link: "https://vakilsearch.com/company-registration/llp-registration" },
//                       { name: "Partnership Firm", link: "https://vakilsearch.com/company-registration/partnership-firm" },
//                       { name: "Proprietorship Firm", link: "https://vakilsearch.com/company-registration/sole-proprietorship" },
//                     ].map((header, index) => (
//                       <th key={index} className="!p-5 wrc-text-[16px] md:wrc-text-[20px] wrc-font-semibold wrc-p-3 wrc-px-5 wrc-text-left md:wrc-px-10 false">
//                         <a href={header.link} target="_blank" rel="noopener noreferrer" className="wrc-underline wrc-text-[#007AFF]">
//                           {header.name}
//                         </a>
//                       </th>
//                     ))}
//                   </tr>
//                 </thead>
//                 <tbody className="wrc-text-[14px] wrc-p-3">
//                   {[
//                     {
//                       category: "Compliance Requirement",
//                       values: ["Companies Act, 2013", "Companies Act, 2013", "Limited Liability Partnership Act, 2008", "Indian Partnership Act,1932", "No specified Act"],
//                     },
//                     {
//                       category: "Registration",
//                       values: ["Mandatory", "Mandatory", "Mandatory", "Optional", "No"],
//                     },
//                     {
//                       category: "Number of Owners",
//                       values: ["2 -200", "Only 1", "2 - Unlimited", "2 -50", "Only 1"],
//                     },
//                     {
//                       category: "Separate Legal Entity",
//                       values: ["Yes", "Yes", "Yes", "No", "No"],
//                     },
//                     {
//                       category: "Liability Protection",
//                       values: ["Limited", "Limited", "Limited", "Unlimited", "Unlimited"],
//                     },
//                     {
//                       category: "Statutory Audit",
//                       values: ["Mandatory", "Mandatory", "As Applicable", "Not Mandatory", "Not Mandatory"],
//                     },
//                     {
//                       category: "Ownership Transfer",
//                       values: ["Yes", "Yes (Restricted)", "Yes", "Yes (Restricted)", "No"],
//                     },
//                     {
//                       category: "Perpetual Existence",
//                       values: ["Yes", "Yes", "Yes", "No", "No"],
//                     },
//                     {
//                       category: "Foreign Ownership",
//                       values: ["Allowed", "Not Allowed", "Allowed", "Allowed", "Not Allowed"],
//                     },
//                     {
//                       category: "Taxation Liability",
//                       values: ["Moderate", "Moderate", "High", "High", "Low"],
//                     },
//                   ].map((row, index) => (
//                     <tr key={index} className={`wrc-bg-${index % 2 === 0 ? "[#F5FAFF]" : "[#EDF6FF]"}`}>
//                       <td className="wrc-sticky md:wrc-static wrc-left-[-1px] wrc-top-0 wrc-z-[999] wrc-bg-[#F5FAFF] wrc-border-r-2 wrc-px-2 !align-top text-[#606162] wrc-p-1 md:wrc-p-3 md:wrc-text-left wrc-text-center md:wrc-max-w-[500px] md:wrc-text-[18px] md:wrc-px-10">
//                         <span>{row.category}</span>
//                       </td>
//                       {row.values.map((value, i) => (
//                         <td key={i} className={`false ${i !== row.values.length - 1 ? 'wrc-border-r-2' : ''} wrc-px-2 !align-top text-[#606162] wrc-p-1 md:wrc-p-3 md:wrc-text-left wrc-text-center md:wrc-max-w-[500px] md:wrc-text-[18px] md:wrc-px-10`}>
//                           <span>{value}</span>
//                         </td>
//                       ))}
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//     <div className="bg-[#FFF] px-0 lg:gap-[209px] md:py-[25px] md:mt-[40px] items-center max-md:mb-[38px] flex max-md:flex-col-reverse gap-3 bg-[#F9F9F9] px-6 pt-2 md:pt-5 rounded-lg md:gap-10 md:p-8 md:flex-row-reverse">
//       <img
//         src="https://assets.vakilsearch.com/live-images/company+registration+business+structure.svg"
//         alt="Choosing the Right Business Structure"
//         title="Choosing the Right Business Structure"
//         className="md:h-[390px] md:w-[390px] md:w-[278px] md:h-[250px]"
//       />
//       <div className="pb-3 flex flex-col gap-5">
//         <h2 className="max-md:text-left text-[30px] text-[#231F20] font-bold text-[24px] md:text-[30px] max-md:text-center">
//           Choosing the Right Business Structure
//         </h2>
//         <p className="text-[#606162] text-[16px] md:text-[18px]">
//           It is crucial to select a proper business structure to avail multiple
//           benefits from incorporation. Based on the type of business structure,
//           compliances vary greatly. For instance, a sole proprietorship company
//           is required to file only the income tax return; a private limited
//           company has to file annual returns and income tax returns with the
//           ROC.&nbsp;You can choose the structure of your company based on the
//           total number of partners or owners involved. Also, the initial
//           investment or initial payment made to start your business also plays
//           a crucial role. You can register your company as a sole proprietorship
//           partnership, LLP, OPC, Section 8 or a private limited company.
//         </p>
//       </div>
//     </div>
    
//     </div>
//     <div className="flex !bg-[#FFF] !px-0 lg:!gap-[209px] md:!py-[25px] md:mt-[40px] !items-center max-md:!mb-[38px] wrc-flex max-md:wrc-flex-col-reverse wrc-gap-3 wrc-bg-[#F9F9F9] wrc-px-6 wrc-pt-2 md:wrc-pt-5 wrc-rounded-lg md:wrc-gap-10 md:p-8">
//       <img
//         src="https://assets.vakilsearch.com/live-images/cost+of+company+registration.svg"
//         alt="Cost of Company Registration"
//         title="Cost of Company Registration"
//         className="md:!h-[390px] md:!w-[390px] md:wrc-w-[278px] md:wrc-h-[250px]"
//       />
//       <div className="wrc-pb-3 wrc-flex wrc-flex-col wrc-gap-5">
//         <h2 className="max-md:!text-left !text-[30px] wrc-text-[#231F20] wrc-font-bold wrc-text-[24px] md:wrc-text-[30px] max-md:wrc-text-center">
//           Cost of Company Registration
//         </h2>
//         <p className="!text-[#606162] wrc-text-[#606162] wrc-text-[16px] md:wrc-text-[18px]">
//           The overall cost of registering a company in India includes government fees, professional fees, DSC cost, and stamp duty. The cost may vary from one type of company to another. Get in touch with our incorporation experts to know how much it will cost you to incorporate your company.
//         </p>
//         <ul></ul>
//       </div>
//     </div>
//     <div className="flex !bg-[#FFF] !px-0 lg:!gap-[209px] md:!py-[25px] md:mt-[40px] !items-center max-md:!mb-[38px] wrc-flex max-md:wrc-flex-col-reverse wrc-gap-3 wrc-bg-[#F9F9F9] wrc-px-6 wrc-pt-2 md:wrc-pt-5 wrc-rounded-lg md:wrc-gap-10 md:p-8 md:wrc-flex-row-reverse">
//       <img
//         src="https://assets.vakilsearch.com/live-images/companyStructures/company_img_01.svg"
//         alt="Post-Registration Compliance"
//         title="Post-Registration Compliance"
//         className="md:!h-[390px] md:!w-[390px] md:wrc-w-[278px] md:wrc-h-[250px]"
//       />
//       <div className="wrc-pb-3 wrc-flex wrc-flex-col wrc-gap-5">
//         <h2 className="max-md:!text-left !text-[30px] wrc-text-[#231F20] wrc-font-bold wrc-text-[24px] md:wrc-text-[30px] max-md:wrc-text-center">
//           Post-Registration Compliance&nbsp;
//         </h2>
//         <p className="!text-[#606162] wrc-text-[#606162] wrc-text-[16px] md:wrc-text-[18px]">
//           After registering your company in India, it is crucial to follow all
//           the post-registration company compliances. Based on the type of
//           company with which you have registered, the compliances vary.
//           However, performing a statutory audit, filing annual returns, staying
//           abreast of ROC compliance, maintaining statutory registers, and
//           filing your GST returns are some of the post-registration compliances
//           that you should not miss.
//         </p>
//       </div>
//     </div>
//     <div className="flex !bg-[#FFF] !px-0 lg:!gap-[209px] md:!py-[25px] md:mt-[40px] !items-center max-md:!mb-[38px] wrc-flex max-md:wrc-flex-col-reverse wrc-gap-3 wrc-bg-[#F9F9F9] wrc-px-6 wrc-pt-2 md:wrc-pt-5 wrc-rounded-lg md:wrc-gap-10 md:p-8">
//       <img
//         src="https://assets.vakilsearch.com/live-images/secure+company+name.svg"
//         alt="Secure Your Company Name"
//         title="Secure Your Company Name"
//         className="md:!h-[390px] md:!w-[390px] md:wrc-w-[278px] md:wrc-h-[250px]"
//       />
//       <div className="wrc-pb-3 wrc-flex wrc-flex-col wrc-gap-5">
//         <h2 className="max-md:!text-left !text-[30px] wrc-text-[#231F20] wrc-font-bold wrc-text-[24px] md:wrc-text-[30px] max-md:wrc-text-center">
//           How to Secure Your Company Name?
//         </h2>
//         <p className="!text-[#606162] wrc-text-[#606162] wrc-text-[16px] md:wrc-text-[18px]">
//           Selecting the right company name makes a major difference in business strategy. As per law, the company name should reflect the principle activity of the business. At any cost, the company name should not contain words prohibited under the names and emblems act. The company name should be unique and not similar or identical to the names of the existing registered companies. The company name should be registered using the Spice + application on the MCA portal. A maximum of at least two names can be applied to the spice + form. The ROC will approve the company name after verifying the application. Note that the proved name will be reserved for 20 days from the approval date. Within those 20 days, the applicant should file Spice + Form b. If the Spice Plus form part B is not filed within the provided time frame, the application will be rejected, and the process has to be initiated from the beginning.
//         </p>
//       </div>
//     </div>
//     <div className="flex max-md:flex-col p-4 justify-evenly bg-[#FBFBFB]">
//       <div className="md:w-[600px]">
//         <p className="text-[#231F20] font-bold text-[32px]">
//           How Vakilsearch Helps in Simplifying Company Registration Process?
//         </p>
//         <p>
//           Vakilsearch stands out for simplifying the company registration process by offering expert guidance, a user-friendly online platform, and personalized solutions. Businesses benefit from our expert assistance in document preparation, transparent pricing, and timely updates on registration progress. Vakilsearch's commitment to legal compliance ensures that businesses navigate complexities seamlessly, receiving post-registration support for ongoing compliance requirements. With a focus on accessibility and technology, we empower businesses to complete the registration process efficiently, allowing them to concentrate on their core operations with confidence in their legal standing.
//         </p>
//       </div>
//       <img
//         alt="icon"
//         loading="lazy"
//         width="433"
//         height="252"
//         decoding="async"
//         style={{ color: "transparent" }}
//         src="https://assets.vakilsearch.com/live-images/simplify+company+registration+process.svg"
//       />
//     </div>
//     <div className="flex flex-col gap-[16px] md:m-auto md:max-w-[90%] lg:max-w-[80%] xl:max-w-[80%]">
//       <p className="text-[24px] md:text-[32px] font-bold text-center">
//         Exclusive <span className="text-[#007AFF]">Partner Benefits</span> for Vakilsearch Clients
//       </p>
//       <p className="text-[14px] font-normal text-center text-[#606162]">
//         Benefits worth up to 4 lakhs when you Incorporate with us!
//       </p>
//       <div className="max-md:flex max-md:flex-col max-md:p-4 max-md:gap-3 overflow-auto md:pt-[30px] md:grid md:grid-cols-3 md:gap-[30px]">
//         {benefits2.map((benefit, index) => (
//           <div
//             key={index}
//             className="max-md:p-4 md:py-[32px] md:pl-[24px] md:pr-[50px] border-[1px] border-[#E9EDF4] flex flex-col gap-[16px] rounded-md max-md:min-w-[320px]"
//           >
//             <img
//               alt="partner"
//               loading="lazy"
//               width="285"
//               height="94"
//               decoding="async"
//               style={{ color: "transparent" }}
//               src={benefit.imgSrc}
//             />
//             <p className="text-[16px] text-[#007AFF] font-bold">{benefit.title}</p>
//             {benefit.features.map((feature, idx) => (
//               <div key={idx} className="flex md:gap-[10px] items-start">
//                 <img
//                   alt="tick"
//                   loading="lazy"
//                   width="16"
//                   height="16"
//                   decoding="async"
//                   style={{ color: "transparent" }}
//                   src="https://assets.vakilsearch.com/live-images/blue-white-tick-b2b.svg"
//                 />
//                 <p className="text-[14px] font-normal">{feature}</p>
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//     <div className="flex items-center justify-center px-60 mb-10 bg-blue-200 rounded-xl ">
//       <div className="wrc-flex wrc-flex-col wrc-gap-3 wrc-p-4 wrc-bg-[#E6F2FF] wrc-rounded-2xl wrc-w-full md:wrc-w-[60rem]">
//         <p className="wrc-font-semibold font-bold">Authors</p>
//         <p>Written by Nithya, Reviewed by Mithra Menon. Last updated on Nov 08 2024, 11:00 AM</p>
//         <div>
//           <div className="wrc-flex wrc-flex-col wrc-gap-3">
//             <p>
//               <a
//                 className="wrc-underline wrc-decoration-[#007bff] wrc-text-[#007bff] wrc-inline wrc-pr-2"
//                 href="https://vakilsearch.com/authors/mithra-menon"
//               >
//                 Mithra Menon
//               </a>
//               <span>
//                 {" "}
//                 excels in Corporate Law Matters and Debt and Money Recovery. She
//                 offers assistance in company incorporation both domestically and
//                 internationally, along with partnership firm registration.
//                 Additionally, she provides advisory services on compliance and LLP
//                 registration in India.
//               </span>
//             </p>
//             <p>
//               <a
//                 className="wrc-underline wrc-decoration-[#007bff] wrc-text-[#007bff] wrc-inline wrc-pr-2"
//                 href="https://vakilsearch.com/blog/author/nithya-ramanivakilsearch-com/"
//               >
//                 Nithya Ramani Iyer,
//               </a>
//               <span>
//                 {" "}
//                 a criminologist and writer, serves as the SME and manages
//                 communications at Vakilsearch. Drawing from her experience at
//                 Seasearch Intelligence and Legal domains, she enriches our content
//                 with insightful perspectives.
//               </span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
        
//     </div>
//     </div>
//     </div>
//     <Footer />
//     </>
//   );
// };

// export default Home;

import React from "react";
import { Link } from 'react-router-dom';
import Header from "../component/Header";
import Footer from "../component/Footer";


const Home = () => {
    return (
      <>
      <Header/>
        <main className="min-h-screen bg-gradient-to-br">
          <HeroSection />
          <div className="w-[87%] mx-auto">
            <JobListingsSection />
            <CompaniesWorkedAt />
            <JobListingsAndSidebar />
            <ResumeFeatureSection />
            <EmailSignupSection />
          </div>
        </main>
        <Footer/>
      </>
    );
  };
  
  const HeroSection = () => (
    <section className="w-full sm:w-[45%] container mx-auto px-4 py-20 text-center">
      <NewFeatureBadge />
      <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
        Unlock <span className="text-amber-400">Your</span> Potential
      </h1>
      <p className="text-lg text-gray-600 mb-12 font-semibold">
        Let Us help you find your dream job here.
      </p>
      <SearchBar />
    </section>
  );
  
  const NewFeatureBadge = () => (
    <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-100 p-3 mb-8">
      <span className="flex items-center justify-center rounded-full bg-black text-white px-2 py-0.5 text-xs font-medium">
        New
      </span>
      <span className="text-blue-600 text-sm font-medium">
        278+ Jobs Fulfilled 🎉
      </span>
    </div>
  );
  
  const SearchBar = () => (
    <div className="max-w-3xl mx-auto p-4">
      <div className="flex flex-col gap-2 p-2 bg-white rounded-3xl shadow-md border-4 border-gray-800 md:rounded-full md:flex-row">
        <SearchInput icon="🔍" placeholder="Job title or Keyword" />
        <SearchInput icon="📍" placeholder="City, state or zip" isLocation />
        <button className="w-full md:w-auto rounded-full bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 shadow-md transition duration-300">
         
          <Link to="/JobListingPage" > Find Jobs</Link>
          
        </button>
      </div>
    </div>
  )
  
  const SearchInput = ({ icon, placeholder, isLocation = false }) => (
    <div className={`flex-1 flex items-center gap-2 px-4 py-2 ${isLocation ? "md:border-l md:border-gray-200" : ""}`}>
      <span className="h-5 w-5 text-gray-400">{icon}</span>
      <input type="text" placeholder={placeholder} className="border-0 focus:ring-0 w-full outline-none" />
    </div>
  )
  
  const JobListingsAndSidebar = () => (
    <div className="container mx-auto flex flex-col md:flex-row gap-8 px-4 py-10 bg-white w-full">
      <Sidebar />
      <JobListingsSection />
    </div>
  );
  
  const Sidebar = () => (
    <aside className="w-full md:w-1/4 bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Browse Categories
      </h2>
      <input
        type="text"
        placeholder="Search your preferred industry"
        className="w-full mb-4 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-purple-500"
      />
      <div className="space-y-3">
        {Array(12)
          .fill("Information Technology")
          .map((category, index) => (
            <div
              key={index}
              className={`p-3 text-center rounded-md cursor-pointer ${
                index % 3 === 0
                  ? "bg-purple-200"
                  : index % 3 === 1
                  ? "bg-yellow-200"
                  : "bg-blue-200"
              } hover:scale-105 transition-all duration-200`}
            >
              {category}
            </div>
          ))}
      </div>
    </aside>
  );
  
  const JobListingsSection = () => (
    <section className="flex-1 w-full bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-2xl font-semibold mb-6">Job Listings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((job, index) => (
          <JobCard key={job} index={index} />
        ))}
      </div>
    </section>
  );
  
  const JobCard = ({ index }) => (
    <div
      className={`p-6 w-full border border-gray-300 rounded-lg shadow-sm bg-white ${
        index % 2 === 0 ? "bg-purple-50" : ""
      }`}
    >
      <JobCardHeader />
      <JobCardBody />
      <JobTags />
      <JobCardFooter />
    </div>
  );
  
  const JobCardHeader = () => (
    <div className="flex justify-between items-start mb-4">
      <span className="text-sm text-gray-500">1 day ago</span>
      <button className="text-gray-400 hover:text-gray-600">⭐</button>
    </div>
  );
  
  const JobCardBody = () => (
    <div className="flex items-start gap-3 mb-4">
      <div className="h-10 w-10 rounded-full bg-black flex items-center justify-center">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SQEqmRbwyTPSYMKjILQNjsZmQ9UvaW.png"
          alt="Amazon"
          className="h-6 w-6"
        />
      </div>
      <div>
        <h3 className="font-semibold">Sr. UX Designer</h3>
        <p className="text-sm text-gray-500">Amazon</p>
      </div>
    </div>
  );
  
  const JobTags = () => (
    <div className="flex flex-wrap gap-2 mb-4">
      {["Full time", "Remote", "Intermediate", "Project Work"].map((tag) => (
        <span
          key={tag}
          className="px-2 py-1 border rounded-full text-xs font-normal text-gray-600"
        >
          {tag}
        </span>
      ))}
    </div>
  );
  
  const JobCardFooter = () => (
    <div className="flex items-center justify-between mt-4">
      <div>
        <div className="font-semibold">$260/hr</div>
        <div className="text-sm text-gray-500">Davis, CA, USA</div>
      </div>
      <button className="rounded-full border border-black px-4 py-1 text-sm hover:bg-gray-200 transition">
        View Details
      </button>
    </div>
  );
  
  const ResumeFeatureSection = () => (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 sm:px-6 lg:px-8 py-10">
      <ResumeFeatureHeader />
      <ResumeFeatureImageContainer />
      <ResumeBuilderSection />
      <button className="mt-6 px-6 py-3 bg-black text-white rounded-lg shadow-lg hover:bg-gray-800 transition">
        Get Started →
      </button>
    </div>
  );
  
  const ResumeFeatureHeader = () => (
    <div className="text-center">
      <p className="text-sm text-gray-500 font-semibold uppercase">New feature</p>
      <h1 className="text-3xl font-bold mt-2">Resume leveled up</h1>
      <p className="text-gray-600 mt-2">Showcase your skills the better way</p>
    </div>
  );
  
  const CompaniesWorkedAt = () => (
    <section className="w-full py-8 bg-white">
      <div className="text-center mb-6">
        <h2 className="text-lg font-semibold text-gray-600">
          Companies our talent has worked at:
        </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-center items-center px-4">
        {[
          { name: "Airplane", opacity: "opacity-50" },
          { name: "Railway", opacity: "opacity-100" },
          { name: "Resend", opacity: "opacity-100" },
          { name: "CodeSendBox", opacity: "opacity-100" },
          { name: "Clerk", opacity: "opacity-100" },
          { name: "Inngest", opacity: "opacity-100" },
          { name: "Crowddev", opacity: "opacity-100" },
          { name: "Airplane", opacity: "opacity-50" },
        ].map((company, index) => (
          <div
            key={index}
            className={`flex items-center justify-center h-10 w-32 text-center text-sm font-medium rounded-lg transition ${company.opacity}`}
          >
            {company.name}
          </div>
        ))}
      </div>
    </section>
  );
  
  const ResumeFeatureImageContainer = () => (
    <div className="relative mt-10 mb-10 flex flex-col items-center justify-center gap-4 lg:flex-row lg:items-start">
      {/* Main Preview Image */}
      <img
        src="data:image/jpeg;base64,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"
        alt="Main Preview"
        className="w-[300px] lg:w-[425px] h-[150px] lg:h-[225px] rounded-lg shadow-lg border border-gray-200"
      />
  
      {/* Side Image 1 (positioned at bottom-left on medium and larger screens) */}
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC6CL-BltcvLl079OYVnxHyT1izBi6gtLPqQ&s"
        alt = "img2"
        className="w-[120px] lg:w-[150px] h-[70px] lg:h-[80px] rounded-lg shadow-md border border-gray-200 
            mt-4 lg:mt-0 md:absolute md:left-[-135px] md:bottom-[-55px] lg:block"
      />
  
      {/* Side Image 2 (Stacked below Image 1 on small screens, positioned at top-right on medium and larger screens) */}
      <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBAPEA8PEBAPEg8REBIPDw8QEBAQFxUWFxUVFhcYHSggGBomGxUVITEjJSkrLi4vFx8zODMsNygtLisBCgoKDg0OGBAPFysdHR8tLSsrKy0tLSstLSsrLS0tLS0tLS0rLS0tLS0tLS0tLS0rLSs3Nzc3Nzc3NysrKysrK//AABEIAKgBLAMBIgACEQEDEQH/xAAcAAEBAAEFAQAAAAAAAAAAAAAAAQcCAwQFBgj/xAA+EAABAwIDBAgCCQMDBQAAAAABAAIDBBEFEiEGMUFRBxMiYXGBkaEysRQjM0JSYnKCwdHh8EPC8SQlU5Ky/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAEDBAIF/8QAHxEBAQACAwEAAwEAAAAAAAAAAAECEQMSITETIkFR/9oADAMBAAIRAxEAPwDNKIiqtKoUVUQREQEREBERBUCIgt1LolkFREVEJXWYpj1PTNLppWtDd/E+A710G3205pminhdaaQXcQdY2fwSsIbQVjydXk353JcvG/wCPcx82zCelSkB1inLDuLGsd/IXo8C2uoqzswzjPb7ORpjk8gd/kvnijiLGta4n61mZt9w1K475HwvG8a3BBPkQd4Ta9Y+rUusUdHm37i5lNVyZ2uOWGZxGZrvwPPEHgVlYKy7ecpZ9akUCqryqKIgKhFEGoJZRVAslkRAslkRAslkRAslkRBtoiKqiBEURbpdQIgIiICIiChECICqiFAXHxCrbDFJK82bG1zneAXIXiulSv6ujEINjUSBv7B2nfIBS3U2uM3dMYYhiLqiaSok+KVxNuTeHoFw6HAZ8ReTCz6tpsZHGwJ7ua4kjzI4RM3vIaLcBuKzfsvhbaanjiA3NF92pWGWenXjhP6x9UbFv6lsbiQ+P4X6WHd4aLy2K4RNEMszbjg5u7+yzlXsXjdpqbNG7S6z72XTb8eOU3GJoD1by13wO0P8AB8l9AdGu0Jq6bq5HXnprRvJPxt+6/wAwPZYDrorftcWn+F63o0xcwVsDs3Yl+omHCx+Anzstplpy5Y7mmf1VAqtnOIiICqiqCLUtKqCoiICIiAiIgIiINtERVUREUQRFUERECAqERAREQEREEKxD0wVxdUxQj/TjzEfme7T2b7rLpWAukSrDq+re49lj8l+TWtDdPl+5Z8l8a8U924uxtC6Spa4Foym+Z4u1oAve3FetxTaV9O7KzEQXA2Ikp2EE34ZTcLi9EdMyaGSVwBOZzD3anT0IXpK7YmncW5GBmVxezQkMc7UkBYb/AGrs15G5g2JS1EDpHmNxbvdHexHgdyx5j+0s8heI3tihYSC8NLnb1lWgw1lPCYWne11zYAknisdYdhDZeugIbbObhwuNCbHySa36uUuvHhxIHiaz3POhLnts7MNd3+blv4JIWyttpq0jxBuu5xzZ4UZz583WGzgBoAB/QroaduR9uRFj8v8AO5erZfjLpZ9fUFBP1kUcn42Nd6gH+q5C87sJWiahhN9WXYRytw916FdGN3I5Mpq1qRLoq8iqiqAiKoCKIgqKIgqIiAiIg20KIUoiIiChREQFqC0haroIUREBVREBCiINLl809JtxVVDB96onc7vGbQe/svpZy+f9v6YSVM0g1BmkI+Sy5LJY24sbZXN6G65rWzwXOfsyOFtN5bcc9AFlGatvZg+I6LAmy2KfQKyOZ32ZvHJ+h3HyOvqs1t6qdrT8THWcHMcQbbwQQseTy7jr47uav8b2JdewZoyxwy2LXA53O4a3sOKx/hUs0VRLJOA3MXA253uvS47E5gN5akg7sjg7TlYheEngJkzOMoYDmtI86+KSNssZJvbTt3iedoI4aheao6lsrWu3HcQfktzaqrD3ZG73cBwaF1cUZZHm4el16mM6uTPO3NmnolxcAvpyfjs5vfpax71lIL5WwXGJoJGSMcbtIIuLlfR2yOOCtpmS7nWAcBuvZa4XXjDkm/XeFAioWjICIiCoiICIiCoiIKoiICIiDbQohQRERAREQUIgRBVCgQoCIiAiIg4uJT9XFI/k0rBWNzh7JnDhKQD+0H+Csq7aVLn9VRxntzm7/wAkTdXOPL+6w3jVmF8LDmzzy5ONx8LT571y819dfDNR0ONwgRRv5sufeyyxshHI2ippGG5MUZc03seyN3evB01HHU19NQ6FrWtY+3cCT87rLuGYf9FYKbhE0NaebBoD6LzybmMr3x2dq4FdtCxjbPYWnvF/dY22p2ka4uyC5O6yyRjdI17ToFinHcNs8m2l1548pa0zl081Ax00ljq6RwDj3cl3eJQBrQ0ePlpomCUwa4vO5jXOPiTYewVrAXlp/F1h8NdFtcvWEx89XCKcNcHEXDA4nTkNFmXomopIaISP0bO+7RxDALB3gTcrF+z9C6pdHE3QylzXHdZo7RPos+4YWmKEMbla1jOyBYNsLBvsV64/az5fI7BUKXRbsFRRVQVFFUBERBUURAREQVFFUG2hRCgiIiAiIgoVWlUoCFEQERRyDYrKyOFjpJHtjjbq5ziAAPNdHS7c4ZJcithGW5IeTGbDiA7esY9Mu0bpKr6C0ubHS5XOGuV8rhe7rchoPErG75twd5Hn3IMhY/0gtMlS+IEvnJYJD/pwDRrGcr6knvXhxjPa6xoLpNchIsxnfb7xXW1vAc7LeYbCxaRbS4sV4/FN7aTky1pztl8RdTVUVW4klkrXv5lh+L2uvpuogbURNex1jYOjeNRYi48QRb1Xyy1Z16NNoHS4a2Ngzz05MPaNgGb2E8xY28l7yks08TLV20107xI6F7S143g8e8cx3ry+1mHlsLpLd+nLmsh4vStFI+ol7UkZDg46kagEeC4ZgbVU08dvtIHNabfCSPZcN4uuckfQx5O2G2EXyZYXfnyjy/y652GtEwaBbMwkEdx5efzXIxfDmljGMaWvY3LI07usH3h+oW911NFmjeHag+hXuzfjxPHo6KOWllu3Rw1aV6ebbCvawmJ0TLkl31TXa91yvLyYo5wGazxwO5wP8ragxNwP4mneNzvT7yz7ZYvVxxyjJ/R7to+tL6eqa1lTGMzSOyJWcTl4OHdzXuQvnNmM/Rq2kmj+5Mx1wbfUkgPB7t/uvowLtwu44c5qqqFEXp5VFLqoKgUuiCoiXQES6ICIiDQhRCqIiIoCIiAqoqEBChRBVHIoUGDemyJor2FrGgvgYXEaZjmcLnnoLLG0sfC39PLksodOEZ+mQHgacanjZ7ljVw5j3Vg4Uwuy175SPGy3spAHG3yUc0A24O+arpALDwv57kG41e16KMU6muEDj2KtpZ4StBcw+zh5heJbyXKo6h0UkcrLh0bmvbbm0ghB9I49O0Uwa8XbLlZbcLk/2K48FD1beucSGtbaNgNhlI3uHEnl3LkU4jr6SJwNw/qpmEaa3Dh/IXOqWdZlv8I1IPdwWVw3lutZyax1GHNvKSSnjbVAWeZW8NMhDtD6Lr8OqKetiJAyStF3N32/MOYXuulqMOw55A+GWEn/ANrfIrBFFUSRPzRuIc06ckz4+3xcOXrffj24w69xfjbwPArqaqGSJwIJAN9DrYg2IW/TYsXtzt7J0D2ncD/S65VY4vbd4tm101AJ3rm9n10+X2OHiFL9IY0NNpW5uzuLtNbHgV9G4DWdfS083/lhiefEtF/e6+cI4ZDMyRlnMa5ty03IG91xvCzR0UYs2eidG3fSzSRn9Ljnbbyd7Lp4vJpzcs3dvbIoi1YqiIoKiiIKqol0FRS6IKil0QaUKIqqIiKIIiICoUQIKiIgIUQoMU9OlNdlFN+F08R/cGOH/wAuWIXBZE6aq6U1rIS5wijiY6NuuQudfM7kTpa/C1l5vANlJq5rnRTUjS34o5ZrS2voSwA2Cu9RZN/HlJnNO4jQ8DuK2qYZg79Q9lmtmxxmphBXthmkiBbFUwfatbwY7si4GnPQLFGK4HLQTyQyDsk3jePhkZ3d/MLxM5bppnxZYzdbC1D5LS0rUF7ZM2dDWK9ZSOgce1TPLPGN/aZ5XJHkvfVDLOP5tR4rB/RBiPVV5iJs2ojLf3t7Tf8Acs5SG9nfhJ9LFB4vpJp74ZV6/CGO8w9q+ebalZ66W60tw2UXsJZI42ji7W59mlYGug7DABeR7Duc0+wvdd5JMT1MR+6yzv1kG3pZdFs44fSWg/ebI31YV2b369Zxza9y5uSfu6uK/o6yjrzEXkXzAkfFbW6zf0NSxPpZntLOuklvKxpAdZoAaSOA38FgWQ5nudzcV6no2mczE6PISCZQ020uxwIc08wt8Zpz5ZWvpVFFV6QRERFCKKoCJdRBUURQEVsogIiKqhRCiiCIiAiIgqIiAl1Cigxj03UjDDSzWHWB8kV+bC3NbyI9yvI7N7VxtgZST4f9KEIdkfE0OlbGDe1gLkC++69L021etHANwE0zvE5WN9g5YzwzEJKWdlRC7LJG6435XDi1w+808lbNx6wy63bK2zVXh0pJoqiWCQ9p8JeSCRpqx9/DQheK6WKzrRE8aGORzHC1tdRf2Xc4VtnQzzMkq6eOmqG3DJ426G+hzEa27jcLqOkmA1AkfEMwBa4EWs8DW48dVza65u22Zcd/teEjkuFqL1wIZNFr61dTgdthOJGmqIKgH7GRjz+kHtD0uvp2OUPaLHskXvwtvv6L5Kz3+SzvshjxkwfO513RU0oJ13xDKb+yDxfS9tGamojp2aQwgvaOLnOJbmPk027j3rH2Zcqd01XKXNjkkc6wsxpfbSwGncB6Lfn2Zr2tzOo5w3nlB9gbqXKRZL/jraapMb2SDe1zXe+vsuwhxBv1jTuJLmHv3W8F1M0bm6Oa5pHAgg+hW9Tt0vxOilktWWxuxrutma36PWUs97dXNGSe7MAfYrp235aLT1u+3I+a9PL7AaQdRusCPAqrrNm6ts1HTStOZr4YiDzOXX3v6Ls7oCKK3QFbqIgt0URBbpdREFuiiKCoiKqhREUQREQEREFRFEFUKIgxN004PO6SGsY0uhZEYpCBfqyHEgu7jm39yxW66+nNoaJ09JUQM+KWKRjf1EGw9V811EZaS0izmkhwPBwNiPZWDpqkne7Qa6HcB3jiV2jMZnY1kLZHBjAAG6Gw5ajcuunZuP4XrbLruJSyVZbPiviaSXEWJNzYkC62zA3hmvpx/stZKGQM1420RFlDASMrdLA6cVvwVkgbkD3NYb9lriG679N2q4Db213nUrfGg+SDKfRhiuaCSF1rxP7JAAJY4Xseet17SQgg6XWHtg6wx1DhwezW3d/yvd4ntLFTt7cjWk8L3J8ANSuPlxve6d/DnOnqYzTsJvkab82gn3WMtq4i2c2Aa1wBzAbhxXp6rbKF7Tla9x+7pYepXlMTrzM67gBbcAteHHKfWXNnjfjq8zjo0WaNxcqCRvJPlYLWXWWguW7lZ66DsSdLRSwu3QS9jmGvBcR4ZgT+4rJCxZ0Cs/6Wrdznjb6Mv/KykgqKIgqq0og1XRaVUBERBVFEUG5ZREVCyWRFAslkRAsoqiCKoiAoiIBWB+lHBjTV0kgb9VVEzMPDMfjb45rnzRFYPA1Q0d3kFcK/BREAvWjeURBuAgb1pLxcElEQa2Ym+LWJ5a4jLcW+E71s5y85nOc5x3lxJJ80RSLtvCRaTIiL0jSXLSSiKDP/AEEx/wDbZHkayVUnmGNY26yOiKAiIqCIiBdLqIgt0URAS6iKD//Z" alt="Image3" className="w-[120px] lg:w-[150px] h-[70px] lg:h-[80px] rounded-lg shadow-md border border-gray-200 mt-4 lg:mt-0 md:absolute md:right-[-135px] md:top-[-55px] lg:block" />
    </div>
  );
  
  const ResumeBuilderSection = () => (
    <div className="text-center mt-10">
      <h2 className="text-2xl font-semibold">Resume Builder</h2>
      <p className="text-gray-600 mt-2">
        Standard format for users to build their resume with industry standard
      </p>
    </div>
  );
  
  const EmailSignupSection = () => (
    <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <h2 className="text-2xl font-bold text-gray-900">
        Signup for new Job alerts
      </h2>
      <p className="text-gray-600 mt-2 text-sm">
        We will only send you 1 email / day
      </p>
      <div className="relative mt-6 w-full max-w-md">
        <input
          type="email"
          placeholder="Enter your email here..."
          className="w-full pl-4 pr-28 py-3 rounded-full bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button className="absolute right-1 top-1 bottom-1 px-5 bg-purple-500 text-white text-sm font-semibold rounded-full hover:bg-purple-600 transition">
          Get Started &gt;
        </button>
      </div>
    </div>
  
  

    
  );
  
  export default Home;
  

