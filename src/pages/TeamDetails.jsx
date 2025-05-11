import React from 'react';
import { useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { Phone, Mail, Award, Users } from 'lucide-react';

const TeamDetails = () => {
  const { id } = useParams();

  // Mock team member data
  const memberData = {
    name: 'David Jackson',
    role: 'IT Consultant',
    experience: 'More Than 10 Years',
    email: 'info@traga.com',
    phone: '+(190)-8800-8987',
    fax: '+265478962',
    image: '/api/placeholder/400/500',
    biography: 'Continually utilize 24/365 bandwidth before real-time interfaces. Credibly grow team core competencies with pandemic commerce. Objectively initiate pandemic users with deliver bricks clicks meta services for bricks-and-clicks innovation streamline from end paradigms expedite granular human capital rather than intuitive testing.',
    skills: [
      { name: 'Dashboard Design', percentage: 95 },
      { name: 'Web Template', percentage: 90 },
      { name: 'UX Research', percentage: 85 }
    ],
    activities: [
      'Experienced Attorneys Professional.',
      'Independence Makes Difference.',
      'Experienced Attorneys Approach.',
      'Committed To Helping Our Clients.'
    ],
    education: [
      { year: '1+', title: 'IT Consultant', desc: '2016 - Present (Thaga Inc)' },
      { year: '2+', title: 'Software Developer', desc: '2010 - 2015 (Lazon Trade)' },
      { year: '3+', title: 'Junior Inovator', desc: '2006 - 2009 (Oneum Plan)' },
      { year: '4+', title: 'Junior Developer', desc: '2000 - 2005 (Gragis Ltd)' }
    ]
  };

  return (
    <div>
      <PageHeader title="Team Details" breadcrumb={[{ name: 'Home', path: '/' }, { name: 'Team Details' }]} />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Image and Info */}
            <div className="lg:col-span-1">
              <img 
                src={memberData.image} 
                alt={memberData.name} 
                className="w-full rounded-lg shadow-lg mb-8"
              />
              
              <div className="space-y-4">
                <div className="bg-purple-100 p-4 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Award className="h-6 w-6 text-purple-600" />
                    <div>
                      <p className="text-sm text-gray-600">Experience</p>
                      <p className="font-semibold">{memberData.experience}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-100 p-4 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-6 w-6 text-purple-600" />
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <p className="font-semibold">{memberData.email}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-100 p-4 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-6 w-6 text-purple-600" />
                    <div>
                      <p className="text-sm text-gray-600">Phone</p>
                      <p className="font-semibold">{memberData.phone}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-100 p-4 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-6 w-6 text-purple-600" />
                    <div>
                      <p className="text-sm text-gray-600">Fax</p>
                      <p className="font-semibold">{memberData.fax}</p>
                    </div>
                  </div>
                </div>
              </div>

              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors mt-6">
                GET IN TOUCH →
              </button>
            </div>

            {/* Right Column - Details */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-2">{memberData.name}</h2>
              <p className="text-purple-600 font-semibold mb-6">{memberData.role}</p>

              {/* Personal Biography */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-4">Personal Biography</h3>
                <p className="text-gray-600 mb-6">{memberData.biography}</p>
              </div>

              {/* Professional Skills */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6">Professional Skills</h3>
                <div className="space-y-6">
                  {memberData.skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold">{skill.name}</span>
                        <span className="text-purple-600 font-semibold">{skill.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-gradient-to-r from-purple-600 to-purple-700 h-3 rounded-full"
                          style={{ width: `${skill.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activities and Education */}
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Activities</h3>
                  <p className="text-gray-600 mb-4">
                    Energistically myocardinate parallel market with co efficient channel. 
                    Competently enable proactive relationships with stand-alone infomediaries.
                  </p>
                  <ul className="space-y-3">
                    {memberData.activities.map((activity, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-6">Educational Qualification</h3>
                  <p className="text-gray-600 mb-6">
                    Credibly scale plug-and-play customer service after high-payoff idea. 
                    Monotonectali incentivize installed base intellectual capital.
                  </p>
                  <div className="space-y-6">
                    {memberData.education.map((edu, index) => (
                      <div key={index} className="flex space-x-4">
                        <div className="bg-purple-600 text-white rounded-lg px-4 py-2 font-bold">
                          {edu.year}
                        </div>
                        <div>
                          <h4 className="font-semibold">{edu.title}</h4>
                          <p className="text-sm text-gray-600">{edu.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamDetails;