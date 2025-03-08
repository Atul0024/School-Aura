import React from 'react';

const BenefitCard = ({ icon, title, description }) => {
  return (
    <div className="border rounded-lg p-6 flex flex-col items-center text-center">
      <div className="mb-4 text-gray-800">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const SchoolAuraBenefits = () => {
  const benefits = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4"></path>
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path>
        <line x1="3" y1="9" x2="7" y2="9"></line>
        <line x1="3" y1="13" x2="7" y2="13"></line>
        <line x1="3" y1="17" x2="7" y2="17"></line>
      </svg>,
      title: "Task Activities",
      description: "Daily assignments and tasks can be easily completed through online availability of information. Subject wise homework can be submitted online which helps students to finish their tasks online."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
      </svg>,
      title: "Exam Results",
      description: "Exam and assessment results of each individual student can be seen. The report cards will be generated online for each individual student."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12.01" y2="8"></line>
      </svg>,
      title: "Notice Updates",
      description: "The necessary announcements and updates will reach to the students and parents quickly."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>,
      title: "Monitoring",
      description: "All the essential academic and administrative tasks can be easily monitored, such as students profile, exam results, fee details, transportation details etc."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"></path>
        <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"></path>
      </svg>,
      title: "Connectivity",
      description: "When all the information is available online, and is shared regularly with parents and students transparency will be maintained."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 5l7 7-7 7"></path>
        <path d="M5 12h14"></path>
      </svg>,
      title: "Planning & Sharing",
      description: "It becomes important nowadays for students to share their thoughts and ideas. SchoolAura Smart Education Platform will provide you a perfect stage to showcase and share your brilliant ideas."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          BENEFITS OF SCHOOLAURA
        </h1>
        <h2 className="text-4xl font-bold text-orange-500">
          FOR STUDENT
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <BenefitCard 
            key={index}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
      </div>
    </div>
  );
};

export default SchoolAuraBenefits;