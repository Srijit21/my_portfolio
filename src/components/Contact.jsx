// src/components/Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#07080a] via-[#0a0b0e] to-[#07080a] text-slate-100 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/5 blur-[140px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wider uppercase">
            Get In Touch
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100 leading-tight">
            Let's Build Something <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">Extraordinary Together</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Have a question, a project proposal, or want to hire me? Reach out directly through any of my channels or drop a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Details & Social Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0e1017]/90 border border-amber-500/20 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-slate-100">
                Contact Information
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Feel free to connect with me directly. I am prompt with responses and always open to discussing new opportunities in frontend engineering.
              </p>

              <div className="space-y-4 pt-2">
                
                {/* Email Channel */}
                <a 
                  href="mailto:srijitp31@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-amber-500/10 hover:border-amber-400/50 transition group"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400 font-medium">Email Me</span>
                    <span className="text-sm font-semibold text-slate-200 group-hover:text-amber-400 transition">srijitp31@gmail.com</span>
                  </div>
                </a>

                {/* WhatsApp Channel */}
                <a 
                  href="https://wa.me/918249834820"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-amber-500/10 hover:border-amber-400/50 transition group"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.124-.669-1.612-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400 font-medium">WhatsApp</span>
                    <span className="text-sm font-semibold text-slate-200 group-hover:text-amber-400 transition">+91 82498 34820</span>
                  </div>
                </a>

                {/* GitHub Channel */}
                <a 
                  href="https://github.com/Srijit21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-amber-500/10 hover:border-amber-400/50 transition group"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400 font-medium">GitHub</span>
                    <span className="text-sm font-semibold text-slate-200 group-hover:text-amber-400 transition">View Code Repositories</span>
                  </div>
                </a>

                {/* LinkedIn Channel */}
                <a 
                  href="https://www.linkedin.com/in/srijit-priyanshu-50773930a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-amber-500/10 hover:border-amber-400/50 transition group"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400 font-medium">LinkedIn</span>
                    <span className="text-sm font-semibold text-slate-200 group-hover:text-amber-400 transition">Professional Profile</span>
                  </div>
                </a>

              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0e1017]/90 border border-amber-500/20 rounded-3xl p-6 sm:p-10 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {submitted && (
                  <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm text-center font-medium">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Your Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Full Name" 
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-amber-500/20 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Your Email</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Mail Id" 
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-amber-500/20 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Subject</label>
                  <input 
                    type="text" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project Inquiry / Job Opportunity" 
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-amber-500/20 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition"
                  />
                </div>

                {/* Message Textarea */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Message</label>
                  <textarea 
                    name="message" 
                    rows="5" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Write your message here..." 
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-amber-500/20 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit"
                  className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm tracking-wide transition-all duration-300 shadow-lg shadow-amber-500/25 hover:scale-[1.02]"
                >
                  Send Message
                </button>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;