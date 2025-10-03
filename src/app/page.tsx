"use client";

import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, Code, Briefcase, User, MessageSquare } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const projects = [
    {
      title: "EduMark Marketplace",
      description: "A full-stack mobile application that uses OCR technology to aid educators in marking and grading students.",
      tech: ["React", "Python", "TensorFlow", "TypeScript"],
      link: "#"
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat application with AI-powered responses and sentiment analysis.",
      tech: ["TypeScript", "WebSocket", "OpenAI", "Redis"],
      link: "#"
    },
    {
      title: "Portfolio Analytics",
      description: "Data visualization dashboard for tracking portfolio performance and metrics.",
      tech: ["Next.js", "D3.js", "PostgreSQL", "Tailwind"],
      link: "#"
    }
  ];

  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js"] },
    { category: "Backend", items: ["Node.js", "Python", "Express", "PostgreSQL", "MongoDB"] },
    { category: "Tools", items: ["Git", "Vercel", "Figma"] }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Portfolio
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`hover:text-cyan-400 transition-colors ${
                    activeSection === item.toLowerCase() ? 'text-cyan-400' : ''
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800">
            <div className="px-4 py-4 space-y-3">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 hover:text-cyan-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6">
            <div className="inline-block">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 p-1">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                  <User size={48} className="text-cyan-400" />
                </div>
              </div>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              Hi, I'm <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Caleb Chilufya</span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-400 max-w-2xl mx-auto">
              Full Stack Developer & Designer
            </p>
            <p className="text-slate-500 max-w-xl mx-auto">
              Crafting beautiful, functional, and scalable web and mobile applications with modern technologies.
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <a href="#" className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3">
            <User className="text-cyan-400" size={32} />
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <p className="text-slate-300 leading-relaxed">
                I'm a passionate developer with 2+ years of experience building web and mobile applications. 
                I love turning complex problems into simple, beautiful, and intuitive solutions.
              </p>
              <p className="text-slate-300 leading-relaxed">
                When I'm not coding, you'll find me doing graphics design and video editing.
              </p>
            </div>
            <div className="space-y-6">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category}>
                  <h3 className="text-cyan-400 font-semibold mb-3">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-slate-800 rounded-full text-sm border border-slate-700 hover:border-cyan-400 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3">
            <Briefcase className="text-cyan-400" size={32} />
            Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-400 transition-all hover:transform hover:scale-105"
              >
                <div className="flex items-start justify-between mb-4">
                  <Code className="text-cyan-400" size={24} />
                  <a href={project.link} className="text-slate-400 hover:text-cyan-400 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 bg-slate-900 rounded text-cyan-400">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 flex items-center justify-center gap-3">
            <MessageSquare className="text-cyan-400" size={32} />
            Get In Touch
          </h2>
          <p className="text-slate-400 mb-8 text-lg">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <a
            href="mailto:your.email@example.com"
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Say Hello
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center text-slate-500">
          <p>© 2025 Caleb Chilufya. Built with React, TypeScript & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;