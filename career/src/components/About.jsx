import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header Section */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">
            🧭 About Navigator Nest
          </h2>
          <div className="italic text-gray-700 text-center mb-4">
            <p>
              Empowering students to navigate their ideal career paths with AI-driven insights
            </p>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Left Column - Mission Statement */}
          <div className="col-span-1 md:col-span-2">
            <div className="bg-white p-6 rounded-xl shadow-md h-full">
              <div className="flex items-center mb-6">
                <div className="p-2 bg-blue-500 rounded-full mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800">Our Mission</h3>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  Welcome to <span className="font-semibold text-blue-600">Navigator Nest</span>, the future of career guidance powered by cutting-edge AI technology. We believe that every student deserves a clear and confident path toward their dream career. In a world where opportunities are vast and diverse, making the right choice can be challenging - and that's where we come in.
                </p>
                <p>
                  Our revolutionary College Stream Predictor leverages advanced algorithms and machine learning to analyze your academic performance, interests, and aspirations. With precise and personalized recommendations, we help students unlock their full potential and navigate the perfect educational and career pathways.
                </p>
                <p>
                  But we go beyond just predictions. Our platform is an evolving ecosystem of insights, industry trends, and expert mentorship. We provide interactive tools, real-time analytics, and a supportive community to empower students to make informed decisions and stay ahead in the competitive job market.
                </p>
                <p>
                  At Navigator Nest, we're not just guiding careers - we're shaping futures. Join us on this transformative journey and discover a world of limitless possibilities.
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Column - Stats and Team */}
          <div className="col-span-1">
            <div className="bg-white p-6 rounded-xl shadow-md mb-8">
              <div className="flex items-center mb-6">
                <div className="p-2 bg-orange-500 rounded-full mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800">Our Impact</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-blue-600">10K+</p>
                  <p className="text-sm text-gray-600">Students Guided</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-purple-600">95%</p>
                  <p className="text-sm text-gray-600">Satisfaction Rate</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-orange-600">100+</p>
                  <p className="text-sm text-gray-600">Career Paths</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-red-600">50+</p>
                  <p className="text-sm text-gray-600">Expert Mentors</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-6">
                <div className="p-2 bg-purple-500 rounded-full mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800">Our Values</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Innovation through AI</p>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Personalized Guidance</p>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Continuous Learning</p>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Empowering Communities</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Section */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="p-2 bg-blue-500 rounded-full mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800">Our Technology</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col">
              <div className="bg-orange-50 p-3 rounded-full inline-block mb-4 self-start">
                <span className="text-orange-500 font-medium">AI</span>
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">Smart Prediction</h4>
              <p className="text-gray-700 mb-4">Our AI algorithms analyze thousands of data points to provide personalized career recommendations based on your unique profile and potential.</p>
              <div className="mt-auto">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-orange-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">92% prediction accuracy</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col">
              <div className="bg-red-50 p-3 rounded-full inline-block mb-4 self-start">
                <span className="text-red-500 font-medium">ML</span>
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">Adaptive Learning</h4>
              <p className="text-gray-700 mb-4">Our platform continuously learns and improves from user interactions, ensuring that recommendations stay relevant with changing education and job markets.</p>
              <div className="mt-auto">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">85% adaptation rate</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col">
              <div className="bg-purple-50 p-3 rounded-full inline-block mb-4 self-start">
                <span className="text-purple-500 font-medium">DATA</span>
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">Trend Analysis</h4>
              <p className="text-gray-700 mb-4">We analyze industry trends and market demand to help you make future-proof career decisions with confidence and clarity.</p>
              <div className="mt-auto">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '97%' }}></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">97% market coverage</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="bg-[#EEF2FF] p-6 rounded-xl shadow-md text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Ready to Discover Your Ideal Career Path?</h3>
          <p className="text-gray-700 mb-6">Let our AI-powered platform guide you toward a future perfectly aligned with your abilities and aspirations.</p>
          <button className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300">
            Start Your Journey Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;