import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";


export const PrivacyPolicy = () => {
    const { t } = useTranslation();
  const data = t("privacyPolicy", { returnObjects: true });
  return (
    <div className='flex flex-col lg:flex-row px-10 lg:px-40 py-10'>
      <div className="">

        {/*Title - Privacy Policy */}
        <h1 className="border-l-4 lg:border-l-8 border-blue-500 px-5 text-xl md:text-2xl lg:text-4xl font-semibold text-blue-900">
          {data.title}
        </h1>

        {/* Description */}
        <div className='flex flex-col text-xs md:text-sm lg:text-base font-medium py-5 gap-y-5 text-black/50 text-center lg:text-left'>
            {data.description.map((desc, index) => (
              <p key={index}>{desc}</p>
            ))}
          </div>

        {/* Information Collection and Use */}
        <div className='py-5 flex flex-col'>
            <h2 className='text-sm md:text-xl lg:text-2xl font-medium text-blue-900 py-2'>
              {data.information_collection}
            </h2>
            <div className='flex flex-col pb-5 text-sx md:text-sm lg:text-base font-medium text-black/50'>
            {data.ic_description.map((desc, index) => (
              <p key={index}>{desc}</p>
            ))}
            <div className="pt-5 font-semibold text-blue-500 hover:text-blue-900 transition-colors duration-300 ease-in-out"><a href="https://policies.google.com/privacy" target="_blank">Google Play Services</a></div>
            <div className="pb-5 pt-2 font-semibold text-blue-500 hover:text-blue-900 transition-colors duration-300 ease-in-out"><a href="https://firebase.google.com/support/privacy" target="_blank">Firebase</a></div>
            <p>{data.ic_description_2}</p>
            </div>
          </div>

        {/* Cookies */}
        <div className='pb-5 flex flex-col'>
            <h2 className='text-sm md:text-xl lg:text-2xl font-medium text-blue-900 py-2'>
              {data.cookies}
            </h2>
            <p className='flex flex-col pb-5 text-sx md:text-sm lg:text-base font-medium text-black/50'>
            {data.cookies_text}
            </p>
          </div>

        {/* Service Providers */}
        <div className='pb-5 flex flex-col'>
            <h1 className='text-sm md:text-xl lg:text-2xl font-medium text-blue-900 py-2'>
              {data.service_providers}
            </h1>
            <div className='flex flex-col pb-5 text-sx md:text-sm lg:text-base font-medium text-black/50'>
                <p>{data.service_providers_text_1}</p>
                <div className="flex flex-col py-3 gap-y-3">
                    {data.service_providers_points.map((desc, index) => (
                    <p key={index}><FontAwesomeIcon icon={['fas', 'caret-right']} className="px-2"/> {desc}</p>
                    ))}
                </div>
                <p>{data.service_providers_text_2}</p>
            </div>
          </div>

        {/* Security */}
        <div className='pb-5 flex flex-col'>
            <h2 className='text-sm md:text-xl lg:text-2xl font-medium text-blue-900 py-2'>
              {data.security}
            </h2>
            <p className='flex flex-col pb-5 text-sx md:text-sm lg:text-base font-medium text-black/50'>
            {data.security_text}
            </p>
          </div>

        {/* Links to Other Sites */}
        <div className='pb-5 flex flex-col'>
            <h2 className='text-sm md:text-xl lg:text-2xl font-medium text-blue-900 py-2'>
              {data.links_to_other_sites}
            </h2>
            <p className='flex flex-col pb-5 text-sx md:text-sm lg:text-base font-medium text-black/50'>
            {data.links_to_other_sites_text}
            </p>
        </div>

        {/* Children’s Privacy */}
        <div className='pb-5 flex flex-col'>
            <h2 className='text-sm md:text-xl lg:text-2xl font-medium text-blue-900 py-2'>
              {data.children_privacy}
            </h2>
            <p className='flex flex-col pb-5 text-sx md:text-sm lg:text-base font-medium text-black/50'>
            {data.children_privacy_text}
            </p>
        </div>

        {/* Changes to This Privacy Policy */}
        <div className='pb-5 flex flex-col'>
            <h2 className='text-sm md:text-xl lg:text-2xl font-medium text-blue-900 py-2'>
              {data.changes_to_this_privacy}
            </h2>
            <div className='flex flex-col pb-5 gap-y-3 text-sx md:text-sm lg:text-base font-medium text-black/50'>
            <p>{data.changes_to_this_privacy_text_1}</p>
            <p>{data.changes_to_this_privacy_text_2}</p>
            </div>
        </div>

        {/* Contact Us */}
        <div className='pb-5 flex flex-col'>
            <h2 className='text-sm md:text-xl lg:text-2xl font-medium text-blue-900 py-2'>
              {data.contact_us}
            </h2>
            <p className='flex flex-col pb-5 text-sx md:text-sm lg:text-base font-medium text-black/50'>
            {data.contact_us_text}
            </p>
        </div>

        </div>
    </div>
  )
}
