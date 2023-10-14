import React from "react";
import Footer from "./Components/Footer";

const PrivacyPolicy = () => {
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
            <p className="font-rubik font-bold w-1/2 lg:w-auto text-5xl md:text-6xl text-white">
              Privacy Policy
            </p>
          </div>
        </div>
      </div>

      <div className="min-h-screen py-16 flex justify-center">
        <div className="flex flex-col w-[70%] space-y-5">
          <p className="font-rubik font-normal text-xl text-[#2A4F6D]">
            ReeRoute, is a registered business entity based out of Jaipur, Rajasthan, India. Its corporate address is at G-17, Ashirwad Complex, Transport Nagar, Jaipur - 302003 ("ReeRoute"). ReeRoute is focused towards providing tech enabled business services and solutions to Indian Truck Owners. It provides a number of services like GPS Location Tracking, Toll Collection Management, Diesel Purchase, Load Booking Management etc. It operates these services using an ecosystem of mobile applications and websites. It is one of the top app publishers on Google Playstore in the Business Category, with more than 2 Million "users" using its mobile applications and websites collectively.
          </p>
          <p className="font-rubik font-normal text-xl text-[#2A4F6D]">
            ReeRoute is committed to protect the online privacy of its "users". As such, this document is written in order to allow "users" to understand ReeRoute's Privacy Policy, as well as how their personal information will be handled when using its mobile applications and websites. The information if any collected will be secured, safeguarded and shall be utilised for providing better and appropriate services to you and for lawful usage and purpose. We are committed to abide by Indian Laws and shall comply with the Information Technology Act, 2000 (“Act”) and also the Information Technology (Reasonable Security Practices And Procedures And Sensitive Personal Data Or Information) Rules 2011 (“Rules”) or any other statues which are in place to govern the Information Technology practice in India.
          </p>
          <br/>
          <p className="font-rubik font-semibold font-normal text-xl text-[#2A4F6D]">
            USERS, SCOPE AND DEFINITION
          </p>
          <p className="font-rubik font-normal text-xl text-[#2A4F6D]">
            This policy shall govern ReeRoute’s collection and use of Data and Handling (“usage”) of the Personal Information (“PI”) and the Sensitive Personal Data or Information (“SPDI”) by ReeRoute in accordance with the Rules.
          </p>
          <p className="font-rubik font-normal text-xl text-[#2A4F6D]">
            Users of ReeRoute Pro app are ReeRoute’s executives - they are majorly the procurement officers and fulfilment partners who act as a bridge between the shipper and the fleet owner and ensure the order gets fulfilled in a timely manner. For this purpose, they make and receive calls from hundreds of FOs on a day-to-day basis addressing their concerns and provide a seamless experience while working with ReeRoute.
          </p>  
          <p className="font-rubik font-normal text-xl text-[#2A4F6D]">
            "Personal information" means any information that relates to a natural person, which, either directly or indirectly, in combination with other information available or likely to be available with a body corporate, is capable of identifying such a person. “Sensitive personal data or information” means any information of a person means such personal information which consists of information relating to;—
          </p>
          <ol className="list-decimal space-y-5 list-inside">
            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">Password</li>
            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">Financial information such as Bank account or credit card or debit card or other payment </li>
            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">Instrument details</li>
            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">Physical, physiological and mental health condition</li>
            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">Sexual orientation</li>
            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">Medical records and history</li>
            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">Biometric information</li>
            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">Any detail relating to the above clauses as provided to body corporate for providing service</li>
            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">Any of the information received under above clauses by body corporate for processing, stored or processed under lawful contract or otherwise</li>
            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">Pictures uploaded by the user while registration</li>
            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">Personal Identification documents such as PAN, Passport, Driving license, etc.</li>
            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">Provided that, any information that is freely available or accessible in public domain or furnished under the Right to Information Act, 2005 or any other law for the time being in force shall not be regarded as sensitive personal data or information.</li>
          </ol>
          
          <p className="font-rubik font-normal text-xl text-[#2A4F6D]">
            By clicking the accept button below you hereby expressly give consent to use your PI and SPDI as more fully described herein below. Your consent to the same shall be construed as a lawful contract between you and ReeRoute in accordance with the Act and Rules.
          </p>
          <br/>
          <p className="font-rubik font-normal font-semibold text-xl text-[#2A4F6D]">COLLECTION PROCESS OF PI AND SPDI AND ITS INTENDED USE</p>
          <p className="font-rubik font-normal text-xl text-[#2A4F6D]">ReeRoute may, collect, use, receive, possess, process, store, deal, disclose, transfer or handle Personal Information, Password and Financial Information such as Bank Account Number for the following purpose:-</p>
          <ol className="list-decimal space-y-5 list-inside">
            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">For authentication of user and his trucks, for making payments, crediting cashbacks & deducting TDS (if applicable), for researching and developing new products and services, and in the context of but not limited to our GPS Platform, Fastag Flatform, Fuel Platform, Loads Platform, Credit Platform, and for WTI Logistics Private Limited and other trademarks or registered entities from time to time.</li>
            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">For providing the access to these platforms and its services, ReeRoute will collect, use, receive, possess, process, store, deal, disclose, transfer or handle SPDI.</li>
            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">PI and SPDI may also be used to market the services of ReeRoute and its subsidiaries', to improve the content, to improve the service and make it easier to use and more appropriate to individual "users". Occasionally this information may be used to contact its "users" with updates to the web site or for other marketing purposes. ReeRoute may also use this information, with the "users"' permission, for the above purposes.</li>
            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">Users’ Cookies may be used with permissions as described in this privacy policy. Information obtained from registered "users" may also also be used in accordance with agreements governing access to and use of ReeRoute mobile applications and websites.</li>
          </ol>
          <br/>

          <p className="font-rubik font-normal font-semibold text-xl text-[#2A4F6D]">SHARING OF PI AND SPDI</p>
          <p className="font-rubik font-normal text-xl text-[#2A4F6D]">ReeRoute never shares, exposes or discloses any information obtained on or from ReeRoute mobile applications and websites with the public, any other organization, and will continue to not do so in the future, unless required by law or required by the owner of such information. ReeRoute will not sell information obtained through ReeRoute mobile applications and websites to any party or parties. ReeRoute may share your PI and SPDI with the following entities:</p>
          <ol className="list-decimal space-y-5 list-inside">
            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">Governmental Agency or Courts or Regulators as required under the applicable law</li>
            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">Any employee, agent, contractor or third party or service provider in connection with ReeRoute’s business</li>
            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">Any other person under duty of confidentiality to ReeRoute.</li>
            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">We may also disclose information about you if we determine that disclosure is reasonably necessary to enforce our terms and conditions or protect our operations or users.</li>
            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">Additionally, in the event of a reorganization, merger, or sale we may transfer any and all personal information we collect to the relevant third party. It may also be necessary for us − by law, legal process, litigation, and/or requests from public and governmental authorities to disclose your personal information. We may also disclose information about you if we determine that for purposes of national security, law enforcement, or other issues of public importance, disclosure is necessary or appropriate.</li>
            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">At times we may make certain personal information available to strategic partners that work with us to services, or that help our customers. Personal information will only be shared by us to provide or improve our products, services and advertising; it will not be shared with third parties for their marketing purposes</li>
          </ol>
          <br/>
          <p className="font-rubik font-normal text-xl font-semibold text-[#2A4F6D]">DATA RETENTION</p>
          <p className="font-rubik font-normal text-xl text-[#2A4F6D]">The PI or the SDPI that ReeRoute may collect, use, receive, possess, process, store, deal, disclose, transfer or handle shall be stored till the purpose for which it is being collected for is fulfilled.</p>
          <br/>
          <p className="font-rubik font-normal text-xl font-semibold text-[#2A4F6D]">OPENNESS AND DATA ACCESS</p>
          <p className="font-rubik font-normal text-xl text-[#2A4F6D]">The user whose PI and/or SPDI is collected, received, possessed, processed, stored, transferred, dealt or handled may inquire as to the nature of data stored or processed by ReeRoute. The person will be provided reasonable access to the person’s PI and SPDI held by ReeRoute. If any data is inaccurate or incomplete, such a person may request that the data be amended or modified or updated.</p>
          <br/>
          <p className="font-rubik font-normal text-xl font-semibold text-[#2A4F6D]">OPTION TO OPT OUT</p>
          <p className="font-rubik font-normal text-xl text-[#2A4F6D]">The person has an option to withdraw the consent to use the PI or SPDI by ReeRoute in accordance with this Policy. In that case the person should contact the Data Privacy and Grievance officer designated by ReeRoute below.</p>
          <br/>
          <p className="font-rubik font-normal text-xl font-semibold text-[#2A4F6D]">SECURITY MEASURES</p>
          <p className="font-rubik font-normal text-xl text-[#2A4F6D]">As stated earlier we have high regards for the privacy of our end users and hence we take all possible measures to store and secure the PI and SDPI collected by us. We have engaged the services of one of the Best ISO certified cloud based data storage service providers. Our service providers are ISO/IEC 27001:2013 certified.</p>
          <br/>
          <p className="font-rubik font-normal text-xl text-[#2A4F6D]">We ourselves or through our service providers, systematically evaluate our information security risks, taking into account the impact of threats and vulnerabilities.</p>
          <br/>
          <p className="font-rubik font-normal text-xl text-[#2A4F6D]">We undertake to the following:</p>
          <ol className="list-decimal space-y-5 list-inside">
            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">The usage of PI and SPDI will be in compliance with the Act and the Rules</li>
            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">PI and SPDI will be used for the purposes for which it has been collected or obtained</li>
            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">PI and SPDI will be relevant/necessary to/for the purposes for which it is collected and used</li>
            <li className="font-rubik font-normal text-xl text-[#2A4F6D]">Appropriate reasonable measures will be taken to prevent unauthorized use, processing, and accidental loss, destruction, or damage to such PI or SPDI.</li>
          </ol>
          <br/>
          <p className="font-rubik font-normal font-semibold text-xl text-[#2A4F6D]">PERMISSIONS REQUIRED FOR USING OUR MOBILE APPLICATIONS</p>
          <p className="font-rubik font-normal text-xl text-[#2A4F6D]">When any of ReeRoute mobile apps is installed on a smartphone device, a list of permissions appear and are required for the app to function effectively. There is no option to customize this list. For Android based smartphones the permissions that ReeRoute requires and the data that shall be accessed and its use is as below:</p>
          <ol className="list-decimal space-y-5 list-inside">
            <li className="font-rubik font-normal font-semibold text-xl text-[#2A4F6D]">CALL_PHONE</li>
            <p className="font-rubik font-normal text-xl text-[#2A4F6D]">The app requires access to make phone calls so that you can make phone calls to your contacts directly through the app.</p>
            <li className="font-rubik font-normal font-semibold text-xl text-[#2A4F6D]">INTERNET</li>
            <p className="font-rubik font-normal text-xl text-[#2A4F6D]">The Internet is essential for the working of the APP.</p>
            <li className="font-rubik font-normal font-semibold text-xl text-[#2A4F6D]">ACCESS_NETWORK_STATE</li>
            <p className="font-rubik font-normal text-xl text-[#2A4F6D]">This permission is required to get information about the network, this is required to know whether the user is having an active network connection or not. Helps us notify the user in case the APP doesn’t work when there is no network connection.</p>
            <li className="font-rubik font-normal font-semibold text-xl text-[#2A4F6D]">ACCESS_COARSE_LOCATION</li>
            <p className="font-rubik font-normal text-xl text-[#2A4F6D]">This helps us identify the rough location of the customer.</p>
            <li className="font-rubik font-normal font-semibold text-xl text-[#2A4F6D]">ACCESS_FINE_LOCATION</li>
            <p className="font-rubik font-normal text-xl text-[#2A4F6D]">This permission helps in getting the exact location of the customer where they usually need the service</p>
            <li className="font-rubik font-normal font-semibold text-xl text-[#2A4F6D]">ACCESS_NETWORK_STATE</li>
            <p className="font-rubik font-normal text-xl text-[#2A4F6D]">This permission is required to get information about the network, this is required to know whether the user is having an active network connection or not. Helps us notify the user in case the APP doesn’t work when there is no network connection.</p>
            <li className="font-rubik font-normal font-semibold text-xl text-[#2A4F6D]">WRITE_EXTERNAL_STORAGE</li>
            <p className="font-rubik font-normal text-xl text-[#2A4F6D]">Customers need to save or download user/vehicle documents for future references or external usage.</p>
            <li className="font-rubik font-normal font-semibold text-xl text-[#2A4F6D]">READ_EXTERNAL_STORAGE</li>
            <p className="font-rubik font-normal text-xl text-[#2A4F6D]">Customers need to upload user/vehicle documents/images for completing the KYC.</p>
            <li className="font-rubik font-normal font-semibold text-xl text-[#2A4F6D]">RECEIVE</li>
            <p className="font-rubik font-normal text-xl text-[#2A4F6D]">This permission is needed for setting up a Cloud Messaging Client App on Android for sending push notifications</p>
            <li className="font-rubik font-normal text-xl font-semibold text-[#2A4F6D]">RECEIVE_SMS</li>
            <p className="font-rubik font-normal text-xl text-[#2A4F6D]">This permission is needed for reading messages like OTP related sent by ReeRoute for better customer experience while performing any transaction or logging in</p>
            <li className="font-rubik font-normal text-xl font-semibold text-[#2A4F6D]">READ_CONTACTS</li>
            <p className="font-rubik font-normal text-xl text-[#2A4F6D]">This permission is needed for reading contacts on customer phone and call them through app</p>
            <li className="font-rubik font-normal text-xl font-semibold text-[#2A4F6D]">READ_GSERVICES</li>
            <p className="font-rubik font-normal text-xl text-[#2A4F6D]">Allows this app to read Google service configuration for accessing the maps</p>
            <li className="font-rubik font-normal text-xl font-semibold text-[#2A4F6D]">WAKE_LOCK</li>
            <p className="font-rubik font-normal text-xl text-[#2A4F6D]">To restrict phone from getting locked by itself while user is tracking the vehicle</p>
            <li className="font-rubik font-normal text-xl font-semibold text-[#2A4F6D]">RECEIVE_BOOT_COMPLETED</li>
            <p className="font-rubik font-normal text-xl text-[#2A4F6D]">To receive a callback after system gets booted</p>
            <li className="font-rubik font-normal text-xl font-semibold text-[#2A4F6D]">SYSTEM_ALERT_WINDOW</li>
            <p className="font-rubik font-normal text-xl text-[#2A4F6D]">In order to allow notifications to float on other apps, this is needed when emergency alerts need to be sent to the customer</p>
            <li className="font-rubik font-normal text-xl font-semibold text-[#2A4F6D]">FOREGROUND_SERVICE</li>
            <p className="font-rubik font-normal text-xl text-[#2A4F6D]">In order to show notifications to installers while using the app about relevant instructions.</p>
            <li className="font-rubik font-normal text-xl font-semibold text-[#2A4F6D]">READ_PHONE_STATE</li>
            <p className="font-rubik font-normal text-xl text-[#2A4F6D]">Allows read only access to phone state, including the current cellular network information, the status of any ongoing calls, and a list of any PhoneAccounts registered on the device</p>
          </ol>
          <br/>

          <p className="font-rubik font-normal text-xl text-[#2A4F6D]">ReeRoute web server uses an extended log file format which captures date and time of visit, referring address (location from which a visitor comes to ReeRoute website), type of Internet browser, and visitor's IP address.</p>
          <p className="font-rubik font-normal text-xl text-[#2A4F6D]">Manner of use of the user information collected on ReeRoute website. The information collected through ReeRoute website helps ReeRoute identify the type of web site content the customers value most. ReeRoute uses this information to market and improve ReeRoute's website and its services. ReeRoute also uses this information to send you email notifications about updates to ReeRoute website, and to contact the "users" by other means for marketing and other purposes. ReeRoute's policy is to not give, sell or otherwise distribute the information collected through this site to third parties outside of ReeRoute and its subsidiaries (unless required by law); provided, however, in some cases ReeRoute may use suppliers to assist ReeRoute in collecting, using or otherwise processing for ReeRoute's benefit the information obtained through ReeRoute website.</p>
          <p className="font-rubik font-normal text-xl text-[#2A4F6D]">Use of third-party links on ReeRoute website. Parts of ReeRoute website consist of products and services hosted by subsidiaries and third-party businesses. When "users" leave the ReeRoute website to visit one of these sites, the only information transferred to the third-party is the fact that the user came from the ReeRoute website. This practice allows the third-party to monitor their web site traffic but does not provide them with any information about the "users" of ReeRoute website. ReeRoute is not responsible or liable for the independent privacy policies of third-party sites. "users" are advised to consult the privacy policies at those third-party websites to determine how the user's information may be used. </p>
          <br/>

          <p className="font-rubik font-normal font-semibold text-xl text-[#2A4F6D]">SECURITY ALERT- SPAM MAILS</p>
          <p className="font-rubik font-normal text-xl text-[#2A4F6D]">Fraudulent Email Alert:</p>
          <p className="font-rubik font-normal text-xl text-[#2A4F6D]">You may be receiving reports of fraudulent emails with the subject lines "Shipping Conformation," "Verify Info," Promotion gifts and cheques" "Some important information is missing" and "Please fulfill the documents attached to verify your identity." The fraudulent email may have an attached file that may contain a virus or other malware.</p>
          <p className="font-rubik font-normal text-xl text-[#2A4F6D]">If you receive a message matching this description below, do not open the email or click on the attachment. Delete the email immediately or forward it to the corporate IT team & Vigilance team.</p>
          <p className="ont-rubik font-normal text-xl text-[#2A4F6D]">ReeRoute does not request, via unsolicited mail or e-mail, payment or personal information in return for goods in transit or in ReeRoute custody. If the fraudulent e-mail resulted in financial loss you should contact your banking institution immediately through the appropriate channels. ReeRoute is not responsible for any charges or costs incurred as a result of unauthorized or fraudulent activity that abuses ReeRoute name, service marks and logos</p>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
