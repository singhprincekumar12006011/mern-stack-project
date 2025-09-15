import React, { useState } from "react";

function Placements() {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { title: "Placement Rate", value: "95%", trend: "+5%" },
    { title: "Highest Package", value: "₹45 LPA", trend: "+12%" },
    { title: "Average Package", value: "₹8.5 LPA", trend: "+8%" },
    { title: "Companies Visited", value: "150+", trend: "+25%" },
  ];

  const companies = [
    "https://cdn.i.haymarketmedia.asia/?n=campaign-india%2Fcontent%2F20230531101105_Tata_Consultancy_Services_Logo.svg.png&h=570&w=855&q=100&v=20250320&c=1",
    "data:image/png;base64,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",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbYAAABzCAMAAADDhdfxAAAA0lBMVEX///8AAAChAP/e3t7z8/OhoaH6+vq+vr7Z2dlqamrMzMzy8vKKiorS0tJ/f38lJSUbGxuZAP/++/9FRUWVlZUSEhIMDAzq6urExMRiYmKenp5TU1Pk5OT69P+0tLSOjo5zc3M0NDQ9PT2qqqpVVVUtLS1MTExEREQeHh4xMTF6enpnZ2fhuv/Rlf8mJib36P/lxP+sMv+7Xv/Unf+nG/+xP//Lh//w2v+3VP+pI//Njv/47f+8Yv/Bb//ZqP/v2P/etP/If//pzv/Edv+1Sv/04v+eG/SNAAANQUlEQVR4nO1caWPbOA61Ylm+0zj1JduRzziJ06adXtvpzOwc2/n/f2lt6yIeQYpys7G0w/fNoilBeAQIAqQqlX80rj+/uT63DBa5cd3rffryr3NLYZET172Li97F9zfnlsMiFw60XRyY+/b3uUWxMEdE25643lc7y5UGCW0H5j59eXdueSyMINJmTa40oLQdmPvZznLFh0TbMbB8f26xLPRgaDsy99bOckUGT9uBuK/W5IoLFW3HwPLbL+cWz4KHhrZDYPnrextYFhLvf+tpmfvJznLFxM2/P+uY26/l7CxXTPz+5ZPW5H7+aE2ukLh+80FrchcfrMkVE798/Elrchc355bQgsdf/7nQLAgsbYXFzR/q+MTSVmS8+/YzT5ylreB4/xvnLC1thcf1W0tb6XD9/oN1kmXD73/yi29LW3Fxs1+9KUJJS1tBcfPmqyZXYmkrJLSLbbvcLiTevVWs1iLOer/+dW4RLQA3f3zXV90+f7SmVjTwi2traEXG39+0pbaL3qePdkdJ4XCtd44X1tAKCd0WoL2h2aJ2MaGkzdaziwwFbXbDVrHB0dbrfbDbI4sNmbbep7c2dCw6gDY7o5UDhDZ70KYsSGmzZ2xKhJg2e4i0VDjS1ut9t6FjqbCnzX4goXy4tt9GKCOu7YxmYWFhcRoawbklsMgLN3hwOucWwiIfZp2B41jayoX61DnC0lYejPpDx7G0lQutppPC0lYSdBzH0lY+XFrayghLWylhaSslLG2lhKWtlLC0lRIlps3tjoNJf96v1ccNz7RTN+j40+12u1lMxjPDPqPxZLHZd5r6l0HL9EmHB22OD+rXq6bSCd3rtf58ErTafDOlbZ7//s+H0bgWa2fdcvX/deu7KyL57eU4U6FuMCV9nOGulSlVYz6gne5qo6w+XuDTPs6Cl649qQmYeLGcW+HFJpS57rELfZFNcocRf2N87pq0pqNqRLrVEpkbNf/ecbqcdigNzkqjne7C4XCpNZ/ZJdfnYa1lu77lOi0auj6jDtfnqs+MxCr9z/EfXh+79kURJ+yrx2jxN8Z3pCOxnlxv0G7hgPHWD+FP6a157fgMvXvMcCin2Ck58FhdHvA0VvWpdFeqTgs12ZLWYwzW0n8Z2lr3cs+lMIJrypc/wJC2V6RVRdvVkbbWU/wbaFNrx2csTqkWIjcSoOuzUBDAmmcMBdkNRusJXuNMJdOmMKbUj700bYK6KW1a7WC93VObGt/hCL1nce64mbStHEwhatyD1vo+AxiwEm2qMTlIJHxh2kQnJQrfvtPK4VzSB7LeVCFEAqWDjLGSfd5IZzZHyD4va3g4otlw2q0r+/nnoY0MQ4G20a1WDAdcWJatHSCF25ms7d0X9mkPsjtJAySbNcchYRNod6bpFzvll6TNpQKltLWHTiYEe9PLHGEFMmY4rhCw9PEyPGQImHnVtiJKJ6qQanc4VfQ5YPvytN271LeltBlpJ7ntyOTfOL3phrAAunjgVxiIDeljKJ2Y0qhm/z1B48Vpu4UBn9CmjUZSxAHYDq4Pt81dc3uFf6fmlumFQxAKjOzGgbgVbWU5aY3a1fEOHYowQPLQ1nlx2l6B6mLaxvjUZr3RHnVrGKU0w7+7cHkd0ukGOA+JIY/0moPLcbVaDZp4XejkSVRvao1qtdtfwuWphurE5tsw2vy0D0vbwF8sNvLlVfw+gz3oUBgOIiSJjGehDRFrCLTTTOaKMYzQcIBSm31KZ5Y23KifCugipUnKYQYOeqem+qmrahHCHzB60elOVJ0Y2pphftUbL7ElEtzbQ0olexEUN35W2sB1CsrG8HtxvEgnSFEvMH8JRoDBnejWYDGRvhsMGtF/goNII5mANtBwlk6V6ewm0ybIh/5AFD2rAvA/oS0avHR80gUakx1zyf935O/wimkD2CGJ2cHpJnkPcHd0qqQL4rvkOrXdPulTaZPGB5VRQCLiibaJkdYZaLuPhKPaeYBbU8EC6Z40iwWaTu7Votcp1+DyElVDbAEJamqKcfYCVzygJ2puiSkibXQFDwYspmVelLZlvz5L/a+v6BuC+r1DUNJyhikcmt6D4DvRNISqID41t3jJTU0D0zTgduPRMydXJT1S35oQANod0k4ebRUt+AVpm9NhS7VzJT2ZuIhX+wd7IxHwb/qoxNdQ00AGwLdGF8FysRpER0jMAJ0npdIFZWCh0C641sqStIrkvBhtG1Q01Y5coKUpqazSJH1YrDYIVaSCEfWS0cvReH2KfTwSLUVyg4XK8hFFPcVXQbtYvngkreKgeynaFtKdKS1yaY3GmeqiWAiHvRsdGvdSwtjbr8YSxDsbqOFIleHKTOjUiIYTnUOlDGelQhdi8VXQLtZ1KDlnoA3zhBUMveR2qgkm3R4hFIk+LqaNzjiPynuIgCQyX6pFULP1uy1Al9IWRyxcdVsAHdlnoI2p4pP2W3zPVpdaGw769rh2Ob1VpeljXdOox2ynDDjWzI0jR9DxkYl4viw4bZuKBJgNsiBK5rZ2D/p/x7RRf2d2xJkWwuVQiYVJQUlAPIoLThvj4rTbBGSkK65RJ7OAmdBGHXH2Nq0D6Hx4a9Snssz3NorUYdFoY3ykaZI9QpRNrrhGRYNILZASNpum6CKXmZQ5ZI8kAkWivmi0MRMEpACyEKXNWwZlVSchyKXiabfJJaDRBRMUcsj3MiWhbcDsrT2JNqNCtZPQ1qZZTzPaaBbkn0zbFUObKQMR/Fx9foQ2a20xnok28ygmdpJP3NUMUMEM5zYz352gvLTld5JyzVmJOCR54K5mgAq2NOqTNySJcz7/97RNme3Iw9eLSVAPQVtigujuhqwEWQiarL836gMrjcBztUjUUT7aQNFt/Yu6XsWjz3IeAvGutC2mjaaU2H3EEmiWZGh2MIqWEtSZOED5aMteIgBgZmtSUWhjTButTkp1GxZQujM7m0aTW1iAUaJ8tKl2BChBfSSGCvRuMW00vJBqMFCkCcWHCVEWjPIaXqPhJ5PL43Eu2swOSnG0gaKz/Qp1eKhNereYNtiTIJ/QWDG9aH5RNlFi9q+592XqGTzORRttzUUbpSG7qELjSL0gMW1Q1pc27VPDiRy13qzBIUa6hMS42Qrx5WgbaVtz0UangyHzDwpi2APtrpA01KcRnuQliW+LRYBJFBPQHlkMxl6CDkJZj+727nWCh2cu3MDOpoo0QYNvgl2IuWgDBybPIY1V+qJ3U2pPGOApFgAoIFgBDU4Tg6dr5y3tAyuX+I50chtI7pj2iq8+E213FQQMY4iRYJWZiza67ZGZxkkYuAM3CLTBHrmENhh1sHiWN/Uxl2HapQpJ9jlAcRXNzSMvm2wnP5k2KMvKqxTaPiBtuADORRtuSUVza0DrQPNvXLun+RCoXzbFXpBfUy2CiZt06Qo+dU8wcOBtqBjJADmZNvAictwEdX9xc4BUMstHG3hJmDepMe7nMjpNbXV3EmjD0yHT9CkwYoWgCM/OpOv06lL1IJSBhD90hKYu9GTaMKPbCTXcSOTBnehpZV8+O5mPtgqo4EnckTiijXPplJTwEvKBZyH7KJ0aDr9FMlrj+SrBpqSc9cP6KFsLj72JkwoeE1okA6QOc0m6p+Vk2uSs+nI6XQ7TW0sHjfzjh3BGNSaxm5M26ZxUchpG+jZHWx5gq2DkVbxRt8Nk3wXa+LNI8iUyt3KnEgfMc0T3KW8N3XZqQdCX7jV0VcKZ0wYrmwRJ7MEexlTsmMpJW0U+xeXP18F6Lm2oObhm5rDm7d2SF0TM9Ruc3D6AJLHwJJ0CNIwyfJC4E+lk2iQ/HiENGV8bSuPkp83wfK7zoCBZCVKiMXoB2IwnzZYsYBVrdKKZREWn06YoV6a0aSssS/IrL22m1Ztw0sux14vQhocWOfgomcnhfox9Tb6uQGOp02mTjluGEBZomrde0GgsN20Zn/SJEM8gmnPwA93W9FGmOu/khU+2ZPK2y1k2bytCzem0KcaVQJvGYcDKND9tJhNCOqiXyv9UqdOAOnbWJ2umXFEtyxNwm2WzvhyESYUfoI2fM/rK3gK6P05btjcSKFBpZdiF20jbD7SbvRV1uMZS0+eVYoeDfhjilvgfoc3j5mySxVJ4pxbmgU6hrdKFs64U9HyV98j95/ABuAzaNJ9ju1dvMVE7SvUX7tQPcqbShxN/hLaKJ33sAZOP3Bi6OoTMz0BbxdOYguSJ6kv8y/CYw8iibb9KZD/XtdIeDHDxK5chFtpa/JgPeX2mmpOLNjnPP5aGCAbEkrbCZOlz0LZ3fh1WO09s7XRMBtldLXzXut9M4fM7CaoTYG7VydzM5Y0XsIfFX2duoJhNkDlFp5koddNHE16LzY/cVpjuTmTu3peOOdTFBd5yHklRI9pKldAg56xfZXxC96gdCFhXl0qVeo11f+Fv/N0kMDvGlMJtrCeXzc3mcdFfq75DLD1uVK/ND89rdmrBLPNVogdVg1qnGXcy/pTzCXAb9XWttl7Xu23+w77jyaW/2Sz6gcG3oV0vhWsktdce79l43Kt0N1l3JZX+F7Im5zePSjx7AAAAAElFTkSuQmCC",
    "https://download.logo.wine/logo/IBM/IBM-Logo.wine.png",
    "data:image/png;base64,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",
    "https://download.logo.wine/logo/Cognizant/Cognizant-Logo.wine.png",
    "data:image/png;base64,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",
    "https://download.logo.wine/logo/Microsoft/Microsoft-Logo.wine.png",
  ];

  const successStories = [
    {
      name: "Rahul Sharma",
      role: "Software Engineer, TCS",
      package: "₹12 LPA",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "The university placement cell guided me at every step. I secured my dream job in TCS with confidence.",
      year: "2024"
    },
    {
      name: "Sneha Patel",
      role: "Data Analyst, Accenture",
      package: "₹15 LPA",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      quote: "Thanks to the mock interviews and training sessions, I cracked Accenture's interview with ease.",
      year: "2024"
    },
    {
      name: "Arjun Kumar",
      role: "Product Manager, Amazon",
      package: "₹28 LPA",
      img: "https://randomuser.me/api/portraits/men/15.jpg",
      quote: "The industry exposure and mentorship programs prepared me for the challenges at Amazon.",
      year: "2023"
    },
    {
      name: "Priya Singh",
      role: "Cloud Architect, Microsoft",
      package: "₹35 LPA",
      img: "https://randomuser.me/api/portraits/women/22.jpg",
      quote: "The technical workshops and certification programs gave me the edge I needed.",
      year: "2023"
    }
  ];

  const placementProcess = [
    {
      step: "01",
      title: "Registration",
      description: "Students register with the placement cell and complete their profiles with academic records and skill assessments."
    },
    {
      step: "02",
      title: "Training & Preparation",
      description: "Comprehensive training sessions covering aptitude, technical skills, and soft skills development."
    },
    {
      step: "03",
      title: "Company Applications",
      description: "Apply to companies based on eligibility criteria and career preferences with guidance from placement officers."
    },
    {
      step: "04",
      title: "Interview Process",
      description: "Participate in pre-placement talks, written tests, group discussions, and technical/HR interviews."
    },
    {
      step: "05",
      title: "Offer & Onboarding",
      description: "Receive job offers and complete the onboarding process with continued support from the placement team."
    }
  ];

  const departments = [
    { name: "Computer Science & Engineering", placement: "98%", avgPackage: "₹12.5 LPA" },
    { name: "Information Technology", placement: "96%", avgPackage: "₹11.8 LPA" },
    { name: "Electronics & Communication", placement: "92%", avgPackage: "₹9.2 LPA" },
    { name: "Mechanical Engineering", placement: "89%", avgPackage: "₹8.8 LPA" },
    { name: "Civil Engineering", placement: "85%", avgPackage: "₹7.5 LPA" },
    { name: "MBA", placement: "94%", avgPackage: "₹15.2 LPA" }
  ];

  const upcomingEvents = [
    { date: "Oct 15", event: "Tech Mahindra Pre-Placement Talk", type: "Company Visit" },
    { date: "Oct 18", event: "Mock Interview Session - Round 3", type: "Training" },
    { date: "Oct 22", event: "Resume Building Workshop", type: "Workshop" },
    { date: "Oct 25", event: "Goldman Sachs Campus Drive", type: "Company Visit" },
    { date: "Nov 02", event: "Industry Expert Panel Discussion", type: "Seminar" }
  ];

  const services = [
    {
      title: "Career Counseling",
      description: "One-on-one sessions with career experts to identify strengths and career paths",
      icon: "👥"
    },
    {
      title: "Skill Development",
      description: "Technical and soft skills training programs aligned with industry requirements",
      icon: "🎯"
    },
    {
      title: "Mock Interviews",
      description: "Practice sessions with industry professionals and detailed feedback",
      icon: "🎤"
    },
    {
      title: "Resume Building",
      description: "Professional resume creation and optimization for different job roles",
      icon: "📄"
    },
    {
      title: "Industry Connect",
      description: "Regular interaction with alumni and industry experts through networking events",
      icon: "🌐"
    },
    {
      title: "Internship Support",
      description: "Assistance in securing quality internships to gain practical experience",
      icon: "💼"
    }
  ];

  return (
    <div className="mt-10 bg-gray-50 w-full min-h-screen">
      {/* Hero Section */}
      <div className="bg-[#ff3300] text-white p-10 text-center shadow-xl">
        <h1 className="text-5xl font-bold mb-4">Placements at Our University</h1>
        <p className="text-xl mb-6">
          Empowering students to achieve successful careers with top companies worldwide.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
            View Placement Report
          </button>
          <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-700 transition">
            Register Now
          </button>
        </div>
      </div>

      {/* Enhanced Stats Section */}
      <div className="p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition">
            <div className="flex justify-center items-center mb-2">
              <h2 className="text-3xl font-bold text-blue-700">{stat.value}</h2>
              <span className="ml-2 text-green-500 text-sm font-semibold">{stat.trend}</span>
            </div>
            <p className="text-gray-600">{stat.title}</p>
          </div>
        ))}
      </div>

      {/* Navigation Tabs */}
      <div className="mt-12 bg-white rounded-2xl shadow-lg p-6">
        <div className="flex flex-wrap gap-2 mb-6">
          {['overview', 'process', 'departments', 'services', 'events'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                activeTab === tab 
                  ? 'bg-blue-700 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div>
            {/* Companies Section */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                Our Top Recruiters
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-6 place-items-center">
                {companies.map((logo, i) => (
                  <img
                    key={i}
                    src={logo}
                    alt="Company Logo"
                    className="h-16 object-contain  transition duration-300"
                  />
                ))}
              </div>
            </div>

            {/* Success Stories */}
            <div>
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                Success Stories
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {successStories.map((story, i) => (
                  <div key={i} className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                    <div className="flex items-start gap-4">
                      <img
                        src={story.img}
                        alt={story.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-bold text-lg">{story.name}</h3>
                        <p className="text-blue-700 font-semibold">{story.role}</p>
                        <div className="flex gap-4 text-sm text-gray-600 mb-2">
                          <span>Package: {story.package}</span>
                          <span>Year: {story.year}</span>
                        </div>
                        <p className="text-gray-700 text-sm italic">"{story.quote}"</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'process' && (
          <div>
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
              Placement Process
            </h2>
            <div className="space-y-6">
              {placementProcess.map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'departments' && (
          <div>
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
              Department-wise Placement Statistics
            </h2>
            <div className="space-y-4">
              {departments.map((dept, i) => (
                <div key={i} className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">{dept.name}</h3>
                    <div className="flex gap-6 text-sm">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                        Placement: {dept.placement}
                      </span>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                        Avg Package: {dept.avgPackage}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'services' && (
          <div>
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
              Placement Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <div key={i} className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition">
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'events' && (
          <div>
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
              Upcoming Placement Events
            </h2>
            <div className="space-y-4">
              {upcomingEvents.map((event, i) => (
                <div key={i} className="bg-gray-50 p-6 rounded-xl flex items-center gap-6">
                  <div className="bg-blue-700 text-white px-4 py-2 rounded-lg font-bold min-w-[80px] text-center">
                    {event.date}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{event.event}</h3>
                    <span className="text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                      {event.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Enhanced Call to Action */}
      <div className="mt-12 bg-[#ff3300] w-full text-white p-10  text-center shadow-xl">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Start Your Career Journey?
        </h2>
        <p className="text-lg mb-6">
          Join our university and get access to comprehensive placement support, industry connections, and career guidance.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-purple-700 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition">
            Apply Now
          </button>
          <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-purple-700 transition">
            Download Brochure
          </button>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-12 p-8 grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Contact Placement Cell</h3>
          <div className="space-y-3 text-gray-600">
            <p><strong>Email:</strong> placements@university.edu</p>
            <p><strong>Phone:</strong> +91-9876543210</p>
            <p><strong>Office Hours:</strong> Mon-Fri, 9:00 AM - 5:00 PM</p>
            <p><strong>Location:</strong> Placement Block, Ground Floor</p>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Quick Links</h3>
          <div className="space-y-2">
            <a href="#" className="block text-blue-700 hover:text-blue-900 transition">Placement Policy</a>
            <a href="#" className="block text-blue-700 hover:text-blue-900 transition">Student Guidelines</a>
            <a href="#" className="block text-blue-700 hover:text-blue-900 transition">Company Registration</a>
            <a href="#" className="block text-blue-700 hover:text-blue-900 transition">Alumni Network</a>
            <a href="#" className="block text-blue-700 hover:text-blue-900 transition">Placement Statistics</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Placements;