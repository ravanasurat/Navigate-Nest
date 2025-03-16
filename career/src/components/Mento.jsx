import React, { useState } from 'react';

const MentorCard = ({ mentor, onBook }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className={`w-12 h-12 ${mentor.bgColor} rounded-full flex items-center justify-center mr-3`}>
            <span className={`${mentor.textColor} font-bold`}>{mentor.initials}</span>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800">{mentor.name}</h3>
            <p className="text-sm text-gray-600">{mentor.role}</p>
          </div>
        </div>
        
        <p className="text-sm text-gray-700 mb-4">{mentor.expertise}</p>
        
        <button 
          onClick={() => onBook(mentor)} 
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center"
        >
          <span>Book Consultation</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const BookingPopup = ({ mentor, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-800">Booking Confirmed!</h3>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="mb-4">
          <div className="flex items-center mb-3">
            <div className={`w-12 h-12 ${mentor.bgColor} rounded-full flex items-center justify-center mr-3`}>
              <span className={`${mentor.textColor} font-bold`}>{mentor.initials}</span>
            </div>
            <div>
              <h4 className="font-semibold">{mentor.name}</h4>
              <p className="text-sm text-gray-600">{mentor.role}</p>
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg mb-4">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-green-700 font-medium">Your consultation has been booked successfully!</p>
            </div>
          </div>
          
          <p className="text-gray-700 mb-2">
            You'll receive an email with the meeting details and a calendar invitation shortly.
          </p>
        </div>
        
        <button
          onClick={onClose}
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Got it!
        </button>
      </div>
    </div>
  );
};

const Mento= () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState(null);
  
  const mentors = [
    {
      id: 1,
      name: "Priya Reddy",
      initials: "PR",
      role: "Data Scientist at Google",
      expertise: "Specializes in machine learning, data visualization, and AI ethics with 8+ years of experience in tech industry.",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600"
    },
    {
      id: 2,
      name: "Anil Kumar",
      initials: "AK",
      role: "UI/UX Designer at Amazon",
      expertise: "Expert in user-centered design, prototyping, and UX research with experience working on major e-commerce platforms.",
      bgColor: "bg-green-100",
      textColor: "text-green-600"
    },
    {
      id: 3,
      name: "Sania Mirza",
      initials: "SM",
      role: "Biotechnology Researcher",
      expertise: "Researcher in genomics and biotechnology with publications in leading scientific journals and biotech industry experience.",
      bgColor: "bg-purple-100",
      textColor: "text-purple-600"
    },
    {
      id: 4,
      name: "Raj Patel",
      initials: "RP",
      role: "Software Engineering Manager",
      expertise: "15+ years in software development leadership, specializing in cloud architecture and agile methodology implementation.",
      bgColor: "bg-red-100",
      textColor: "text-red-600"
    },
    {
      id: 5,
      name: "Maya Singh",
      initials: "MS",
      role: "Marketing Director",
      expertise: "Digital marketing expert with experience in building brands, growth marketing, and consumer psychology analysis.",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-600"
    },
    {
      id: 6,
      name: "David Chen",
      initials: "DC",
      role: "Finance Consultant",
      expertise: "Financial advisor specializing in investment strategies, personal finance management, and early career financial planning.",
      bgColor: "bg-indigo-100",
      textColor: "text-indigo-600"
    }
  ];
  
  const handleBookMentor = (mentor) => {
    setSelectedMentor(mentor);
    setShowPopup(true);
  };
  
  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedMentor(null);
  };

  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header Section */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">
            🧠 Book a Session with Expert Mentors
          </h2>
          <p className="text-gray-700 text-center mb-0">
            Connect with industry professionals who can provide personalized guidance for your career journey.
          </p>
        </div>

        {/* Mentor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {mentors.map((mentor) => (
            <MentorCard 
              key={mentor.id} 
              mentor={mentor}
              onBook={handleBookMentor}
            />
          ))}
        </div>
        
        {/* Popup */}
        {showPopup && selectedMentor && (
          <BookingPopup 
            mentor={selectedMentor}
            onClose={handleClosePopup}
          />
        )}
      </div>
    </div>
  );
};

export default Mento;