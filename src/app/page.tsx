"use client"

import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, Code, Briefcase, User, MessageSquare, Download, Send } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');

  const projects = [
    {
      title: "UniMatch",
      description: "A fullstack web app that assists recent school leavers with recommedation of universities to them, based on their interests and results.",
      tech: ["Django", "Python", "MongoDB", "Tailwind"],
      link: "https://github.com/POLLARD1145/UniMatchOfficial"
    },
    {
      title: "ProjectScream website",
      description: "A website for ProjectScream foundation.",
      tech: ["TypeScript", "React native", "Tailwind"],
      link: "https://www.projectscreamfoundation.com/"
    },
    {
      title: "EduMark",
      description: "A mobile application that assists lecturers in the grading of students answer scripts using OCR technology and AI.",
      tech: ["React with Expo GO", "TypeScript", "Python", "Flask"],
      link: "#"
    }
  ];

  const skills = [
    { category: "Development", items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Node.js", "Python"] },
    { category: "Design", items: ["Adobe Photoshop", "Illustrator", "Figma", "Canva", "Brand Identity"] },
    { category: "Social Media", items: ["Content Strategy", "Instagram", "Facebook", "LinkedIn", "Analytics"] }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/mblzynnq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormStatus('Message sent successfully! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      setFormStatus('Failed to send message. Please try again.');
    }
    setTimeout(() => setFormStatus(''), 5000);
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Caleb's Portfolio
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
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
                  <img 
                    src="/profile.jpg" 
                    alt="Caleb Chilufya" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = '<div class="flex items-center justify-center w-full h-full"><svg class="text-cyan-400" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>';
                    }}
                  />
                </div>
              </div>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              Hi, I'm <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Caleb Chilufya</span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-400 max-w-2xl mx-auto">
              Full Stack Developer | Author | Graphic Designer | Social Media Manager
            </p>
            <p className="text-slate-500 max-w-xl mx-auto">
              Crafting beautiful web and mobile applications, stunning designs, and engaging social media content that drives results.
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <a href="https://github.com/CBarna1" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/caleb-chilufya-808571279" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:Caleb11chilufya@gmail.com" className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors">
                <Mail size={24} />
              </a>
            </div>
            <div className="pt-6 flex justify-center gap-4">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                <Download size={20} />
                Download Resume
              </a>

              <a
                href="/The Peak - Complete.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-cyan-400 font-semibold rounded-lg hover:bg-slate-700 transition-colors"
              >
                <ExternalLink size={20} />
                Download Book
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
                I'm a versatile creative professional who blends technical development skills with 
                design expertise and social media savvy. I build responsive web applications, create 
                compelling visual content, and craft strategies that engage audiences.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Whether it's coding a complex feature, designing a brand identity, or managing a 
                social media campaign, I bring passion and precision to every project.
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
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 flex items-center justify-center gap-3">
            <MessageSquare className="text-cyan-400" size={32} />
            Get In Touch
          </h2>
          <p className="text-slate-400 mb-8 text-lg text-center">
            Have a project in mind? Let's work together to bring your ideas to life!
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6 bg-slate-800/50 p-8 rounded-xl border border-slate-700">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-cyan-400 transition-colors"
                placeholder=""
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-cyan-400 transition-colors"
                placeholder="john@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            
            {formStatus && (
              <div className="p-4 bg-green-500/10 border border-green-500/50 rounded-lg text-green-400 text-center">
                {formStatus}
              </div>
            )}
            
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              <Send size={20} />
              Send Message
            </button>
          </form>
          
          <div className="mt-8 text-center">
            <p className="text-slate-400">Or email me directly at</p>
            <a href="mailto:Caleb11chilufya@gmail.com" className="text-cyan-400 hover:underline text-lg">
              Caleb11chilufya@gmail.com
            </a>
          </div>
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