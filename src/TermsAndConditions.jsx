import React from "react";
import Footer from "./Components/Footer";

const TermsAndConditions = () => {
  return (
    <div className="w-full h-auto">
      <div className="relative h-1/2vh">
        <img
          src={`/Assets/terms-and-conditions.png`}
          className="w-full h-full object-cover inset-0 hidden lg:block"
        />
        <img
          src={`/Assets/joinUsBannerMobile.png`}
          className="w-full h-full object-cover inset-0 lg:hidden"
        />
        <div className={`absolute inset-0 bg-black opacity-80 `}></div>
        <div className="absolute inset-0 flex flex-col py-2 space-y-16 lg:space-y-0 justify-center lg:flex-row items-center ">
          <div className="flex flex-col w-full px-4 lg:px-0 lg:w-[70%] space-y-3">
            <p className="font-rubik font-bold w-[60%] lg:w-auto text-5xl md:text-6xl text-white">
              Terms & Conditions
            </p>
          </div>
        </div>
      </div>

      <div className="min-h-screen py-16 flex justify-center">
        <div className="flex flex-col w-[70%] space-y-5">
          <p className="font-rubik font-normal text-xl text-[#2A4F6D]">
          This Terms of Service Agreement (the “Agreement”) describes the terms by which ReeRoute, a Company incorporated under the Companies Act, 2013 with its registered office at G-17, Ashirwad Complex, Transport Nagar, Jaipur - 302003, doing business as “ReeRoute” (hereinafter referred as “ReeRoute”) offers to you, as a Customer, access to its website www.reeroute.in and the associated mobile software application platform owned and operated by ReeRoute (hereinafter referred as “ReeRoute Platform”). ReeRoute provides an online platform to connect Customers with Trucks of Truck Owners (hereinafter referred as “Partners”) for the transportation service whereby Customers can submit a request for the transportation of goods (hereinafter referred as “Orders”). Partners can accept Loads, and both Customers and Partners can track the status of the Loads. ReeRoute does not assess the suitability, legality, regulatory compliance, quality or ability of any Customer or goods scheduled through the use of the Service, and ReeRoute makes no warranty regarding the same.
          </p>
          <p className="font-rubik font-normal text-xl text-[#2A4F6D]">
          This Agreement sets forth the terms for use of the Service by Customers. By signing up and registering with ReeRoute or by accessing or using the Service, you are accepting this Agreement, on behalf of yourself or the company, entity or organization that you represent, and you represent and warrant that you have the right, authority, and capacity to enter into this Agreement, on behalf of yourself or the company, entity or organization that you represent. Please read this Agreement carefully before using the Service. Use of the Service is conditioned on your agreement to all of the terms and conditions contained in the Agreement, including the policies and terms linked to or otherwise referenced in the Agreement, all of which are hereby incorporated into the Agreement. In the event any separate contract or like document governs or otherwise impacts the parties' rights, obligations or relationship, this Agreement shall govern to the extent it does not conflict with the terms of any such other contract or like document.
          </p>
          <p className="font-rubik font-normal text-xl text-[#2A4F6D]">
            YOU MAY NOT ACCESS OR USE THE SERVICE OR ACCEPT THIS AGREEMENT IF YOU ARE NOT AT LEAST 18 YEARS OLD.
          </p>
          <p className="font-rubik font-normal text-xl text-[#2A4F6D]">
            IF YOU DO NOT SO AGREE, YOU SHOULD DECLINE THIS AGREEMENT, IN WHICH CASE YOU ARE PROHIBITED FROM ACCESSING OR USING THE SERVICE.
          </p>
          <p className="font-rubik font-normal font-semibold text-xl text-[#2A4F6D]">
            Transportation Requests
          </p>
          <p className="font-rubik font-normal text-xl text-[#2A4F6D]">
            ReeRoute provides ReeRoute platform through which you may submit proposed transportation of goods. You must provide the following information as part of requesting a transportation service:
          </p>
          <ol className="list-decimal space-y-5 list-inside">
            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">The origin and destination addresses for the load;</li>
            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">The requested dates for pickup of the load;</li>
            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">The material type of the load being transported as part of the transportation service;</li>
            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">The specific truck type requirements; and</li>
            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">Any other information necessary for transportation of the cargo.</li>
          </ol>

          <p className="font-rubik font-normal text-xl text-[#2A4F6D]">Once ReeRoute accepts a order for posting, the order details will be shared to the partners. You may cancel a order at any time prior to a truck owner accepting it. A truck owner may view a list of the orders available to it at any time and accept a orders through ReeRoute platform. Once a truck owner accepts a order, it will be assigned to perform transportation services related to the order. Upon a partner's acceptance, ReeRoute will notify you that the order has been accepted. ReeRoute does not guarantee that an order will be accepted by any truck owner.</p>
          
          <p className="font-rubik font-normal text-xl text-[#2A4F6D]">You shall comply with all applicable domestic and international laws, statutes, ordinances and regulations regarding your use of our service and your listing, shipping requirements should fall within country's legal framework.</p>
          <p className="font-rubik font-normal text-xl text-[#2A4F6D]">You also agree that</p>
          
          <ol className="list-decimal space-y-5 list-inside">
            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">You will not use the Service to transport hazardous materials;</li>
            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">You own the transported goods or have all necessary rights to transport it;</li>
            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">You agree that ReeRoute will not be liable for loss, damage, theft, destruction, or delayed delivery of any cargo;</li>
            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">You are solely responsible for obtaining any first-party insurance to cover any anticipated losses of cargo; and</li>
            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">Your requested pick-up and delivery dates and hours will not require a partners to violate hours of service regulations under applicable law.</li>
          </ol>

          <p className="font-rubik font-semibold font-normal text-xl text-[#2A4F6D]">Lorry Receipt</p>
          <p className="font-rubik font-normal text-xl text-[#2A4F6D]">Customers whose services are engaged hereunder are instructed to issue lorry receipt and to upload copies of those Lorry receipt to ReeRoute platform. Customers are instructed not to name ReeRoute as either a consignor or consignee on any lorry receipt.</p>

          <p className="font-rubik font-normal font-semibold text-xl text-[#2A4F6D]">Proof of delivery</p>
          <p className="font-rubik font-normal text-xl text-[#2A4F6D]">Once a Shipment is completed, the truck owner is instructed to post to the ReeRoute platform a proof of delivery signed by the authorized recipient. partners can and send customers any questions or concerns regarding the Shipment.</p>

          <p className="font-rubik font-semibold font-normal text-xl text-[#2A4F6D]">Payment</p>
          <p className="font-rubik font-normal text-xl text-[#2A4F6D]">For all transportation deals on ReeRoute platform, The customer has to pay advance or full payment (including ReeRoute's service fee) for each booking as displayed and locked-in on ReeRoute platform. The final / balance payment need to be done within 7 days of invoicing of the final bill. The payment would be made electronically through a safe & secure payment gateway process created by ReeRoute in partnership with banking & technology partners.</p>

          {/* <p className="font-rubik font-semibold font-normal text-xl text-[#2A4F6D]">Halting Charges</p>  */}
          
          {/* <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 lg:text-[1rem] font-semibold py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Halting Days
                </th>
                <th scope="col" className="px-6 lg:text-[1rem] font-semibold py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  32 ft MXL
                </th>
                <th scope="col" className="px-6 lg:text-[1rem] font-semibold py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  32 ft SXL
                </th>
                <th scope="col" className="px-6 lg:text-[1rem] font-semibold py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  16 Ton Open
                </th>
              </tr>
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  1
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ₹1000
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ₹800
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ₹800
                </th>
              </tr>
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  2
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ₹2000
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ₹1600
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ₹1600
                </th>
              </tr>
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  3
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ₹4500
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ₹3600
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ₹3600
                </th>
              </tr>
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  4
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ₹6000
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ₹4800
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ₹4800
                </th>
              </tr>
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  5
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ₹10000
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ₹8000
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ₹8000
                </th>
              </tr>
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  6
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ₹12000
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ₹9600
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ₹9600
                </th>
              </tr>
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  7
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ₹17500
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ₹14000
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ₹14000
                </th>
              </tr>
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  8
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ₹20000
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ₹16000
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ₹16000
                </th>
              </tr>
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  More than 8
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ₹3000
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ₹2400
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ₹2400
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
            </tbody>
          </table>
          </div> */}
          
          {/* <p className="font-rubik font-normal text-xl text-[#2A4F6D]">ReeRoute is working on increasing the vehicle utilisation for small fleet owners and hence we discourage long halting delays. If the vehicle is halted for more than 6 days, ReeRoute reserves the right to unload the material in a private warehouse and the charges are to be paid by the client.</p> */}
          
          <p className="font-rubik font-normal font-semibold text-xl text-[#2A4F6D]">Invoicing</p>
          <p className="font-rubik font-normal text-xl text-[#2A4F6D]">For all service through ReeRoute platform, ReeRoute will generate a digital invoice for each trip and this would be sent to email address registered by the customer on ReeRoute platform</p>

          <p className="font-rubik font-normal font-semibold text-xl text-[#2A4F6D]">Taxes</p>
          <p className="font-rubik font-normal text-xl text-[#2A4F6D]">Any freight related tax deductions (TDS) from supplier payment would be adjusted from balance payment only and related declarations / documentation for the same would be managed between the customer & the supplier directly. Standard service taxes on ReeRoute service fees would apply.</p>

          <p className="font-rubik font-normal font-semibold text-xl text-[#2A4F6D]">Refund Claim</p>
          <p className="font-rubik font-normal text-xl text-[#2A4F6D]">Any refund claim by the customer will be taken on case to case basis. ReeRoute on confirmation of payment from the customer, transfers desired amount in account of supply partner.</p>

          <p className="font-rubik font-normal font-semibold text-xl text-[#2A4F6D]">User Content</p>
          <p className="font-rubik font-normal text-xl text-[#2A4F6D]">You are solely responsible for your User Content. You assume all risks associated with use of your User Content, including any reliance on its accuracy, completeness or usefulness by others, or any disclosure of your User Content that makes you or any third party personally identifiable. You hereby represent and warrant that your User Content does not violate any provision of this Agreement. For the avoidance of doubt, User Content may include third party content you submit. You agree not to submit third party content unless you have the consent of the applicable third party owner of such content. You may not state or imply that your User Content is in any way provided, sponsored or endorsed by ReeRoute. You acknowledge and agree that ReeRoute is not responsible for any loss or damage resulting from anyone's use or reliance on User Content and ReeRoute makes no guarantees regarding the accuracy, completeness, usefulness currency, suitability, or quality of any User Content, and assumes no responsibility for any User Content. The customer agrees to receive service or ReeRoute promotional / scheme in-app notifications as well as sms, phone calls and/or email on registered mobile number and email id</p>

          <p className="font-rubik font-normal font-semibold text-xl text-[#2A4F6D]">License</p>
          <p className="font-rubik font-normal text-xl text-[#2A4F6D]">You hereby grant, and represent and warrant that you have the right to grant, to ReeRoute an irrevocable, nonexclusive, royalty-free and fully paid, sublicensable, worldwide license, to use, copy, modify, create derivative works of, distribute, publicly display, publicly perform, and otherwise exploit in any manner such User Content in all formats and distribution channels, now known or hereafter devised (including in connection with the Services and ReeRoute's business and on third-party sites and services), without further notice to or consent from you, and without the requirement of payment to you or any other person or entity. All rights in and to the User Content not expressly granted to ReeRoute in this Agreement are reserved by Users.</p>

          <p className="font-rubik font-normal text-xl font-semibold text-[#2A4F6D]">Anonymous Data</p>
          <p className="font-rubik font-normal text-xl text-[#2A4F6D]">ReeRoute may create anonymous data records (“Anonymous Data”) from your User Content by using commercially reasonable efforts to exclude any and all information (such as company name) that makes the data identifiable to you. ReeRoute may use and disclose Anonymous Data for any purpose, including improving the Service.</p>

          <p className="font-rubik font-normal text-xl font-semibold text-[#2A4F6D]">Disclosure</p>
          <p className="font-rubik font-normal text-xl text-[#2A4F6D]">ReeRoute may share your User Content</p>
          <ol className="list-decimal space-y-5 list-inside">
            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">with third party service providers;</li>
            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">if another company acquires ReeRoute; and/or</li>
          </ol>
          <p className="font-rubik font-normal text-xl text-[#2A4F6D]">
          to comply with relevant laws, to respond to subpoenas or warrants or assist in preventing any violation or potential violation of the law or this Agreement.
          </p>
          <p className="font-rubik font-normal text-xl text-[#2A4F6D]">
            ReeRoute respects the intellectual property of others, and expects Users to do the same. If you believe, in good faith, that any materials on the Services infringe upon your copyrights, please send the following information to ReeRoute info@reeroute.in;
          </p>
          
          <ol className="list-decimal space-y-5 list-inside">
            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">A description of the copyrighted work that you claim has been infringed, including specific location on the Services where the material you claim is infringing is located. Include enough information to allow ReeRoute to locate the material, and explain why you think an infringement has taken place;</li>
            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">A description of the location where the original or an authorized copy of the copyrighted work exists - for example, the URL (Internet address) where it is posted or the name of the book in which it has been published;</li>
            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">Your address, telephone number, and e-mail address;</li>
            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">A statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law;</li>
            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">A statement by you, made under penalty of perjury, that the information in your notice is accurate, and that you are the copyright owner or authorized to act on the copyright owner's behalf; and</li>
            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">An electronic or physical signature of the owner of the copyright or the person authorized to act on behalf of the owner of the copyright interest.</li>
            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">Any commitment with the customer which is done outside the preview of these terms by any individual including any ReeRoute employee, ReeRoute would not be bound by the same.</li>
          </ol>
          
          <p className="font-rubik font-normal font-semibold text-xl text-[#2A4F6D]">Confidentiality/ Non-Disclosure</p>
          <p className="font-rubik font-normal text-xl text-[#2A4F6D]">As a result of the performance of this arrangement and whether due to any intentional or negligent act or omission, ReeRoute may disclose to its customer or customer may otherwise learn of or discover, our documents, business practices, object code, source code, management styles, day-to-day business operations, capabilities, systems, current and future strategies, marketing information, financial information, software, technologies, processes, procedures, methods and applications, or other aspects of ReeRoute's business ("Our Information"). Customer hereby agree and acknowledge that any and all of our information is confidential and shall be ReeRoute's sole and exclusive intellectual property and proprietary information. Customer agree to use such Information only for the specific purposes as allowed by the performance of this arrangement. Any disclosure of such Information to a third party specifically including a direct competitor is strictly prohibited and will be vigorously challenged in a court of law. Furthermore, Customer acknowledge that such information is proprietary, confidential and extremely valuable to ReeRoute, and that ReeRoute would be materially damaged by Customer's disclosure of ReeRoute's Information. Customer acknowledge and agree that monetary damages provide an insufficient remedy for the breach of this confidentiality obligation, and that New Olog shall be entitled to injunctive relief.</p>

          <p className="font-rubik font-normal font-semibold text-xl text-[#2A4F6D]">Limitation of Liability</p>
          <p className="font-rubik font-normal text-xl text-[#2A4F6D]">ReeRoute shall not be liable for indirect, incidental, special, exemplary, punitive, or consequential damages, including lost profits, lost data, personal injury, or property damage related to, in connection with, or otherwise resulting from any use of the services, whether based on warranty, contract, product liability or any other legal theory, and whether or not ReeRoute has been advised of the possibility of such damages, even if a limited remedy set forth herein is found to have failed of its essential purpose. some jurisdictions do not allow the exclusion or limitation of liability for consequential or incidental damages, so the above limitation may not apply to you.</p>
          <p className="font-rubik font-normal text-xl text-[#2A4F6D]">ReeRoute's liability in event of loss / damage, penalties to the consignment would not exceed 10% of total trip freight value or Rs 15,000 (whichever is lower). In no event, shall ReeRoute be liable for any special, incidental, indirect or consequential damages of any kind in connection with these terms of use, even if user has been informed in advance of the possibility of such damages. For any insurance claim filed by either original consignee or customer through their own insurance policies, ReeRoute may assist in required documentation completion. Decision on this would be taken on case to case basis by ReeRoute.</p>

          <p className="font-rubik font-normal font-semibold text-xl text-[#2A4F6D]">Jurisdiction & Dispute Resolution</p>
          <p className="font-rubik font-normal text-xl text-[#2A4F6D]">All disputes arising from or in connection with our business relationship shall be settled under Arbitration by sole Arbitration appointed by ReeRoute. The award of the said Arbitrator shall be final and binding on both ReeRoute and client. The parties herein shall bear the arbitration charges equally and the arbitrator shall be empowered to pass any interim order any time during such arbitration. The arbitration proceedings shall be in English language and conducted as per the provision of The Arbitration and Conciliation Act 1996. The venue of arbitration be at Jaipur.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
