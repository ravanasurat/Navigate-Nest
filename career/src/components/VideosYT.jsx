// src/components/VideosYT.jsx
import React, { useState } from 'react';

function VideosYT() {
  const [activeCategory, setActiveCategory] = useState(1);

  // Video data structure with education level categories and direct image URLs
  const videoCategories = [
    {
      id: 1,
      title: "After 10th Grade",
      description: "Explore your options after completing 10th grade and choose the right path for your future.",
      icon: "📚",
      videos: [
        {
          id: 101,
          thumbnail: "https://i.ytimg.com/vi/ueEOngDY268/maxresdefault.jpg",
          title: "Choosing the Right Stream After 10th",
          duration: "15:24",
          youtubeLink: "https://youtu.be/ueEOngDY268?si=zPfdSldSo5-vQcRk"
        },
        {
          id: 102,
          thumbnail: "https://i.ytimg.com/vi/hBh_nKKVh-E/maxresdefault.jpg",
          title: "Career Options in Science After 10th",
          duration: "12:38",
          youtubeLink: "https://youtu.be/2UUGrEa7vDc?si=qUCMy-_HGCBm9oCD"
        },
        {
          id: 103,
          thumbnail: "https://i.ytimg.com/vi/VlqE1VBYVzk/maxresdefault.jpg",
          title: "Career Options in Commerce After 10th",
          duration: "18:05",
          youtubeLink: "https://www.youtube.com/watch?v=VlqE1VBYVzk"
        },
        {
          id: 104,
          thumbnail: "https://i.ytimg.com/vi/XOPxBG-vRFs/maxresdefault.jpg",
          title: "Career Options in Arts After 10th",
          duration: "14:42",
          youtubeLink: "https://www.youtube.com/watch?v=XOPxBG-vRFs"
        },
        {
          id: 105,
          thumbnail: "https://i.ytimg.com/vi/O4MqC5FIoHM/maxresdefault.jpg",
          title: "Vocational Courses After 10th",
          duration: "16:31",
          youtubeLink: "https://www.youtube.com/watch?v=O4MqC5FIoHM"
        }
      ]
    },
    {
      id: 2,
      title: "After 12th Grade",
      description: "Discover the wide range of career paths and higher education options available after 12th grade.",
      icon: "🎓",
      videos: [
        {
          id: 201,
          thumbnail: "https://i.ytimg.com/vi/mz7TlpxUZfA/maxresdefault.jpg",
          title: "Top Engineering Colleges in India",
          duration: "20:17",
          youtubeLink: "https://youtu.be/HhDhFkbUJtE?si=mf3M2aoOhrkOdbRH"
        },
        {
          id: 202,
          thumbnail: "https://i.ytimg.com/vi/QQrdRTrC0mM/maxresdefault.jpg",
          title: "Medical Career Options After 12th",
          duration: "17:45",
          youtubeLink: "https://www.youtube.com/watch?v=QQrdRTrC0mM"
        },
        {
          id: 203,
          thumbnail: "https://i.ytimg.com/vi/iPWIoKrGGNI/maxresdefault.jpg",
          title: "Business & Management Careers",
          duration: "15:30",
          youtubeLink: "https://www.youtube.com/watch?v=iPWIoKrGGNI"
        },
        {
          id: 204,
          thumbnail: "https://i.ytimg.com/vi/2J9xwRb5oQY/maxresdefault.jpg",
          title: "Law as a Career Option",
          duration: "19:22",
          youtubeLink: "https://www.youtube.com/watch?v=2J9xwRb5oQY"
        },
        {
          id: 205,
          thumbnail: "https://i.ytimg.com/vi/6mMr8EJKDnQ/maxresdefault.jpg",
          title: "Design & Creative Career Paths",
          duration: "14:08",
          youtubeLink: "https://www.youtube.com/watch?v=6mMr8EJKDnQ"
        }
      ]
    },
    {
      id: 3,
      title: "After Graduation",
      description: "Navigate your post-graduation journey with insights on higher education, job preparation, and entrepreneurship.",
      icon: "💼",
      videos: [
        {
          id: 301,
          thumbnail: "https://i.ytimg.com/vi/mK0LHmCQnEM/maxresdefault.jpg",
          title: "Job vs Higher Education After Graduation",
          duration: "22:14",
          youtubeLink: "https://youtu.be/TnmUSWS5vj4?si=q3jn37jN9D1PuRlV"
        },
        {
          id: 302,
          thumbnail: "https://i.ytimg.com/vi/Tt08KmFfIYQ/maxresdefault.jpg",
          title: "How to Prepare for Campus Placements",
          duration: "16:53",
          youtubeLink: "https://www.youtube.com/watch?v=Tt08KmFfIYQ"
        },
        {
          id: 303,
          thumbnail: "https://i.ytimg.com/vi/u75hUSShvnc/maxresdefault.jpg",
          title: "Resume Building & Interview Tips",
          duration: "19:37",
          youtubeLink: "https://www.youtube.com/watch?v=u75hUSShvnc"
        },
        {
          id: 304,
          thumbnail: "https://i.ytimg.com/vi/KlT-4cMhA5c/maxresdefault.jpg",
          title: "Masters & PhD Options Abroad",
          duration: "25:10",
          youtubeLink: "https://www.youtube.com/watch?v=KlT-4cMhA5c"
        },
        {
          id: 305,
          thumbnail: "https://i.ytimg.com/vi/ULAJMGiHbag/maxresdefault.jpg",
          title: "Entrepreneurship for Fresh Graduates",
          duration: "18:22",
          youtubeLink: "https://www.youtube.com/watch?v=ULAJMGiHbag"
        }
      ]
    }
  ];

  // Component for video card that redirects to YouTube when clicked
  const VideoCard = ({ video }) => {
    return (
      <a
        href={video.youtubeLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col w-full rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-102 hover:shadow-xl bg-white h-full"
      >
        <div className="relative pb-[56.25%]">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-red-600 opacity-90 flex items-center justify-center group-hover:bg-red-700 transition-all transform group-hover:scale-110">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-xs text-white font-medium">
            {video.duration}
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-sm md:text-base font-medium text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {video.title}
          </h3>
        </div>
      </a>
    );
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Career Guidance Videos</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore our curated collection of career guidance videos to help you make informed decisions at every stage of your educational journey.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {videoCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-3 rounded-full font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.title}
            </button>
          ))}
        </div>

        {videoCategories.map((category) => (
          <div 
            key={category.id} 
            className={`transition-opacity duration-300 ${
              activeCategory === category.id ? 'block opacity-100' : 'hidden opacity-0'
            }`}
          >
            <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
              <div className="flex flex-col md:flex-row md:items-center mb-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                    {category.title}
                  </h2>
                  <p className="text-gray-600 md:max-w-2xl">
                    {category.description}
                  </p>
                </div>
                <div className="mt-4 md:mt-0 md:ml-auto">
                  <a
                    href="#"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    View all videos
                    <svg 
                      className="ml-1 w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {category.videos.map((video) => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-xl p-8 text-white text-center mt-10">
          <h3 className="text-2xl font-bold mb-3">Need Personalized Career Guidance?</h3>
          <p className="opacity-90 mb-6 max-w-2xl mx-auto">
            Our career experts can help you analyze your strengths and interests to find the perfect career path for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-700 hover:bg-blue-50 py-3 px-6 rounded-full font-medium transition-colors shadow-md">
              Book a Consultation
            </button>
            <button className="bg-transparent hover:bg-white/10 border border-white py-3 px-6 rounded-full font-medium transition-colors">
              Explore More Resources
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideosYT;