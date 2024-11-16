// import React from 'react';

// const HelpCenter = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen py-12">
//       <div className="max-w-6xl mx-auto px-4">
//         <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">Hi, how can we help you today?</h1>
        
//         <div className="flex justify-center mb-6">
//           <input 
//             type="text" 
//             placeholder="Search our articles" 
//             className="w-full md:w-2/3 lg:w-1/2 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div className="text-center mb-8">
//           <h2 className="text-xl font-semibold text-gray-700">Trending topics:</h2>
//           <p className="text-blue-500 cursor-pointer hover:underline">Admin-Managed Workflows</p>
//           <p className="text-blue-500 cursor-pointer hover:underline">Video Conferencing</p>
//           <p className="text-blue-500 cursor-pointer hover:underline">Calendly Routing</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Section Cards */}
//           <SectionCard 
//             title="Getting Started" 
//             description="Start scheduling by learning the basics" 
//           />
//           <SectionCard 
//             title="Be A Calendly Pro" 
//             description="Learn how Calendly works, from availability to team events and beyond" 
//           />
//           <SectionCard 
//             title="Integrations & Apps" 
//             description="Optimize your meeting lifecycle with tools and workflows" 
//           />
//           <SectionCard 
//             title="Use Cases" 
//             description="Discover tailored strategies for key industries and job functions" 
//           />
//           <SectionCard 
//             title="Calendly for Mobile" 
//             description="Stay productive and schedule on the go with our iOS and Android apps" 
//           />
//           <SectionCard 
//             title="Account Settings" 
//             description="Manage your subscription, single sign-on, and security" 
//           />
//           <SectionCard 
//             title="Video Tutorials" 
//             description="Explore our how-to videos and feature overviews" 
//           />
//         </div>

//         <div className="mt-12">
//           <h2 className="text-2xl font-semibold text-gray-900">Frequently Asked Questions</h2>
//           <ul className="list-disc list-inside mt-4 text-gray-700 space-y-2">
//             <li>How do I set up my availability?</li>
//             <li>How do I change my login email?</li>
//             <li>How do I upgrade my subscription plan?</li>
//             <li>How do I set up a round robin event type?</li>
//             <li>How do I change my login method using SSO?</li>
//             <li>How do I add new users to my organization?</li>
//           </ul>
//         </div>

//         <footer className="text-center mt-12 text-gray-600">
//           <p className="text-lg font-semibold">Easy ahead™</p>
//           <p>We take the work out of connecting with others so you can accomplish more.</p>
//         </footer>
//       </div>
//     </div>
//   );
// };

// const SectionCard = ({ title, description }) => (
//   <div className="bg-white p-6 shadow-lg rounded-lg">
//     <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
//     <p className="text-gray-600">{description}</p>
//   </div>
// );

// export default HelpCenter;



import React from 'react';

const HelpCenter = () => {
  document.title = 'Baoiam - Help Center'
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">Hi, how can we help you today?</h1>
        
        <div className="flex justify-center mb-6">
          <input 
            type="text" 
            placeholder="Search our articles" 
            className="w-full md:w-2/3 lg:w-1/2 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="text-center mb-8 flex flex-row gap-2 items-center justify-center">
          <h2 className="text-sm md:text-xl font-semibold text-gray-700">Trending topics:</h2>
          <p className="text-sm md:text-[16px] text-indigo-500 cursor-pointer hover:underline">Lorem, </p>
          <p className="text-sm md:text-[16px] text-indigo-500 cursor-pointer hover:underline">Ipsum, </p>
          <p className="text-sm md:text-[16px] text-indigo-500 cursor-pointer hover:underline">Dolor, </p>
          <p className="text-sm md:text-[16px] text-indigo-500 cursor-pointer hover:underline">Sit</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                {
                    title: "Getting Started", 
                    description: "Start scheduling by learning the basics"
                },
                {
                    title: "Be A Baoiam Pro", 
                    description: "Learn how Calendly works, from availability to team events and beyond"
                },
                {
                    title: "Integrations & Apps", 
                    description: "Optimize your meeting lifecycle with tools and workflows"
                },
                {
                    title: "Use Cases", 
                    description: "Discover tailored strategies for key industries and job functions"
                },
                {
                    title: "Baoiam for Mobile", 
                    description: "Stay productive and schedule on the go with our iOS and Android apps"
                },
                {
                    title: "Account Settings", 
                    description: "Manage your subscription, single sign-on, and security"
                },
                {
                    title: "Video Tutorials", 
                    description: "Explore our how-to videos and feature overviews"
                },
            ].map((card, index)=>(
                <div
                    key={index} 
                    className="bg-white p-6 min-h-[250px] rounded-2xl shadow-md transition-transform transform hover:scale-105 group cursor-pointer border hover:border-indigo-500"
                >
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{card.title}</h3>
                    <p className="text-gray-600 mt-4">{card.description}</p>
                </div>
            ))}

        </div>


        <div className="mt-16 flex flex-col items-center justify-center">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <ul className="list-disc list-inside grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 mt-4 font-semibold">
                <li>How do I set up my availability?</li>
                <li>How do I change my login email?</li>
                <li>How do I upgrade my subscription plan?</li>
                <li>How do I set up a round robin event type?</li>
                <li>How do I change my login method using SSO?</li>
                <li>How do I add new users to my organization?</li>
            </ul>
        </div>


        <div className="text-center mt-20 text-gray-600">
          <p className="text-4xl font-bold">Be <span className='text-indigo-500'>One</span> in a million</p>
          <p className='text-lg mt-4'>We take the work out of connecting with others so you can accomplish more.</p>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
