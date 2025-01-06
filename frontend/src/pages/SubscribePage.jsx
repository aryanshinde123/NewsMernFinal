import React from 'react';

const SubscribePage = () => {
  return (
    <div className="container mx-auto pt-4 px-5 font-bold">
      <h1 className="text-4xl font-semibold text-center font-headline text-gray-800 mb-6">
        Subscribe to The Daily News India
      </h1>
      
      <div className="flex justify-center space-x-10">
        
        <div className="border p-6 rounded-lg shadow-lg text-center max-w-sm bg-white">
          <h2 className="text-3xl font-semibold text-gray-800 font-headline mb-4">Premium Plan</h2>
          <p className="text-lg text-gray-700 mb-4">Access to everything, including premium content.</p>
          
          <div className="mb-8">
            <p className="text-4xl font-bold text-gray-900 mb-4 font-headline">₹199/month</p>
            <ul className="text-left mb-6 space-y-2 text-gray-600">
              <li>Daily News Updates</li>
              <li>Access to National and International News</li>
              <li>Exclusive Premium Articles</li>
              <li>Early Access to Special Reports</li>
            </ul>
            <button className="w-full px-6 py-3 font-headline text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300 mb-6">
              Subscribe Monthly
            </button>
          </div>

          <div>
            <p className="text-4xl font-bold font-headline text-gray-900 mb-4">
              ₹2,199/year 
              <span className="text-sm text-gray-500">(Save ₹189)</span>
            </p>
            <ul className="text-left mb-6 space-y-2 text-gray-600">
              <li>All Benefits of Monthly Plan</li>
              <li>Additional Discounts and Offers</li>
            </ul>
            <button className="w-full px-6 py-3 font-headline text-white bg-green-600 rounded-lg hover:bg-green-700 transition duration-300">
              Subscribe Yearly
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-lg text-gray-600">
          Not sure which plan is right for you? <a href="/contact" className="text-blue-600 hover:underline">Contact us</a> for assistance.
        </p>
      </div>
    </div>
  );
};

export default SubscribePage;
