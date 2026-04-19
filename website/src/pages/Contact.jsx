import React from 'react';
import InnerPageHero from '../components/InnerPageHero/InnerPageHero';
import PageSection from '../components/PageSection/PageSection';

export default function Contact() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] flex items-center justify-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <img 
            src="/images/shared_09.jpg" 
            alt="Contact Us Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <h1 className="text-4xl md:text-5xl font-light text-white tracking-wide uppercase mb-4">
            Contact Us
          </h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-slate-300 font-light max-w-2xl mx-auto">
            Get in touch with B&L Worldwide. We are ready to discuss strategic partnerships, operations, and global opportunities.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <PageSection className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-light text-slate-900 tracking-wide uppercase mb-8">
                Global Headquarters
              </h2>
              <p className="text-slate-600 font-light leading-relaxed mb-12">
                Our team operates across diverse markets and industries. Whether you are inquiring about aviation, logistics, distribution, or real estate, please reach out to us using the contact details below.
              </p>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h4 className="text-sm font-bold text-slate-900 tracking-widest uppercase mb-1">Company Address</h4>
                    <p className="text-slate-600 font-light leading-relaxed">
                      1314 East Las Olas Blvd<br />
                      Ft. Lauderdale, FL<br />
                      33301
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h4 className="text-sm font-bold text-slate-900 tracking-widest uppercase mb-1">Call</h4>
                    <p className="text-slate-600 font-light leading-relaxed">
                      (561) 400-0465
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h4 className="text-sm font-bold text-slate-900 tracking-widest uppercase mb-1">Email</h4>
                    <a href="mailto:info@b-lworldwide.company" className="text-blue-600 hover:text-blue-800 font-light leading-relaxed transition-colors duration-300">
                      info@b-lworldwide.company
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-10 border border-slate-200 shadow-sm rounded-sm">
              <h3 className="text-2xl font-light text-slate-900 tracking-wide mb-6">Send an Inquiry</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">First Name</label>
                    <input type="text" id="firstName" className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block p-3 outline-none transition-colors" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Last Name</label>
                    <input type="text" id="lastName" className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block p-3 outline-none transition-colors" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Email Address</label>
                  <input type="email" id="email" className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block p-3 outline-none transition-colors" placeholder="john.doe@company.com" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Subject</label>
                  <input type="text" id="subject" className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block p-3 outline-none transition-colors" placeholder="How can we assist?" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Message</label>
                  <textarea id="message" rows="4" className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block p-3 outline-none transition-colors resize-none" placeholder="Your message..."></textarea>
                </div>
                <button type="button" className="w-full text-white bg-slate-900 hover:bg-blue-600 font-medium tracking-wide rounded-sm text-sm px-5 py-4 transition-colors duration-300 uppercase">
                  Submit Inquiry
                </button>
              </form>
            </div>

          </div>
        </div>
      </PageSection>

      {/* Full Width Map Section */}
      <div className="w-full h-96 grayscale hover:grayscale-0 transition-all duration-700">
        <iframe 
          loading="lazy"
          src="https://maps.google.com/maps?q=1314%20east%20las%20olas%20blvd%20%20Ft%20lauderdale%20FL%2033301&t=m&z=14&output=embed&iwloc=near"
          title="B&L Worldwide Headquarters Location"
          aria-label="Map showing B&L Worldwide Headquarters"
          className="w-full h-full border-0"
        ></iframe>
      </div>
    </div>
  );
}
