'use client';

import React, { useState } from 'react';
import { 
  GithubIcon, 
  LinkedinIcon, 
  Mail,
  ChevronRight,
  Briefcase,
  ScrollText,
  GraduationCap
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('experience');
  
  const experience = [
    {
      title: "Research Intern",
      company: "Indian Institute of Technology Patna",
      duration: "May 2024 – Present",
      location: "Mumbai, India (Remote)",
      supervisor: "Dr. Sriparna Saha, Associate Prof. IIT-Patna",
      points: [
        "Analyzed Neuroimaging data using advanced medical image analysis techniques",
        "Developed and implemented deep learning models including CNNs",
        "Optimized machine learning algorithms for Neuroimaging analysis",
        "Utilized NiLearn for neuroimaging data processing",
        "Conducted comprehensive experiments and data validation"
      ]
    },
    {
      title: "Artificial Intelligence Intern",
      company: "Sequus AI",
      duration: "April 2024 – Present",
      location: "Mumbai, India (Remote)",
      points: [
        "Conducted research on advanced LLM and NLP methods",
        "Collected and curated diverse textual datasets",
        "Collaborated in setting up and optimizing training environments",
        "Implemented fine-tuning strategies on pre-trained language models",
        "Developed custom NLP models for construction datasets"
      ]
    }
  ];

  const publications = [
    {
      title: "MobileNet-Based Transfer Learning",
      journal: "International Journal of Intelligent Systems and Applications in Engineering",
      date: "May 2024",
      points: [
        "Published research exploring deep learning techniques for Alzheimer's disease classification",
        "Contributed to advancing AD classification through deep learning methods",
        "Implemented cross-validation and hyperparameter tuning"
      ]
    },
    {
      title: "Comparative Analysis of Vision-Language Models",
      journal: "International Research Journal of Multidisciplinary Technovation (IRJMT)",
      date: "August 2024",
      points: [
        "Conducted comprehensive evaluation of five state-of-the-art Vision-Language Models",
        "Employed zero-shot prompting to assess model generalization",
        "Demonstrated LLaVA and LLAMA-3 excellence in performance"
      ]
    },
    {
      title: "Personalized Chatbot Using LLaMA",
      journal: "Third International Conference on NCCT",
      date: "August 2024",
      points: [
        "Developed a personalized chatbot using LLaMA architecture",
        "Combined LLM-based text generation with information retrieval",
        "Evaluated through web-based application with user feedback"
      ]
    },
    {
      title: "Benchmarking Large Language Models",
      journal: "NCCT 2024 International Scopus Conference",
      date: "August 2024",
      points: [
        "Evaluated models for accuracy, responsiveness, and flexibility",
        "Developed chatbot achieving 92% accuracy with LLaMA 2 7B"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Header */}
      <header className="p-6 md:p-12 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Dhrumil Panchal
          </h1>
          <p className="text-xl text-gray-400 mt-2">AI & Machine Learning Engineer</p>
        </div>
        <div className="flex gap-4">
          <a href="https://github.com/DhrumilPanchal10" 
             className="p-2 hover:bg-gray-700 rounded-full transition-all duration-300">
            <GithubIcon className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/dhrumil-panchal-964a47274/" 
             className="p-2 hover:bg-gray-700 rounded-full transition-all duration-300">
            <LinkedinIcon className="w-6 h-6" />
          </a>
          <a href="mailto:dhrumilvpanchal10@gmail.com" 
             className="p-2 hover:bg-gray-700 rounded-full transition-all duration-300">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </header>

      {/* Navigation */}
      <nav className="max-w-5xl mx-auto p-4">
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveSection('experience')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
              activeSection === 'experience'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-700 hover:bg-gray-600'
            }`}
          >
            <Briefcase className="w-5 h-5" />
            Experience
          </button>
          <button
            onClick={() => setActiveSection('publications')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
              activeSection === 'publications'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-700 hover:bg-gray-600'
            }`}
          >
            <ScrollText className="w-5 h-5" />
            Publications
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto p-4">
        {activeSection === 'experience' && (
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-blue-400">{exp.title}</h3>
                    <p className="text-gray-400">{exp.company}</p>
                    {exp.supervisor && (
                      <p className="text-sm text-gray-500">{exp.supervisor}</p>
                    )}
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="text-gray-400">{exp.duration}</p>
                    <p className="text-sm text-gray-500">{exp.location}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {activeSection === 'publications' && (
          <div className="space-y-8">
            {publications.map((pub, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-purple-400">{pub.title}</h3>
                    <p className="text-gray-400">{pub.journal}</p>
                  </div>
                  <p className="text-gray-400 mt-2 md:mt-0">{pub.date}</p>
                </div>
                <ul className="space-y-2">
                  {pub.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Portfolio;