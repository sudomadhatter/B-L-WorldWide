import { useEffect } from 'react';

export default function LegalModal({ isOpen, onClose, type }) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  const content = {
    privacy: {
      title: "Privacy Policy",
      text: "At B&L Worldwide, we value your privacy. We currently do not capture, store, or sell any personal data through this website. We do not use Google Analytics, tracking pixels, or invasive third-party cookies. Any information submitted via our contact forms is sent directly to our team for the sole purpose of responding to your inquiry and is not stored in a web-accessible database."
    },
    terms: {
      title: "Terms of Service",
      text: "By accessing the website of B&L Worldwide Holding Companies, you agree to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. The materials contained in this website are provided for informational purposes and are protected by applicable copyright and trademark law. This website is provided 'as is' without any representations or warranties, express or implied."
    },
    disclosure: {
      title: "Disclosures",
      text: "B&L Worldwide Holding Companies provides this website for informational purposes only. The information contained herein does not constitute professional investment advice, an offer to sell, or a solicitation of an offer to buy any securities, products, or related financial instruments in any jurisdiction. All forward-looking statements are subject to risk and uncertainty."
    }
  };

  const data = content[type] || content.privacy;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#0f172a]/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div 
        className="relative bg-white text-slate-900 rounded-2xl w-full max-w-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col transform transition-all"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-slate-50/50">
          <h3 className="text-2xl font-bold tracking-tight text-[#1b263b]">{data.title}</h3>
          <button 
            onClick={onClose}
            className="p-2 -mr-2 rounded-full hover:bg-slate-200 transition-colors text-slate-500 hover:text-slate-900 flex items-center justify-center"
            aria-label="Close dialog"
          >
            <iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
          </button>
        </div>
        <div className="p-6 md:p-8">
          <p className="text-slate-600 leading-relaxed text-base md:text-lg whitespace-pre-line">
            {data.text}
          </p>
          <div className="mt-10 flex justify-end">
            <button 
              onClick={onClose}
              className="px-8 py-3 bg-[#274c77] text-white rounded-full text-sm font-bold tracking-wide hover:bg-[#1b3554] transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              Acknowledge
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
