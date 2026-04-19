import ScrollReveal from '../ScrollReveal';

const newsItems = [
  {
    category: 'Port Development',
    title: 'Government approves development plan for hotel and waterpark adjacent to port',
    date: 'February 2024',
    img: '/images/home_14.jpg',
    snippet: 'The Council of Ministers (CoM) recently approved the vision plan known as the Quarter Development...',
    link: 'https://www.thedailyherald.sx/islands/government-approves-development-plan-for-hotel-and-waterpark-adjacent-to-port'
  },
  {
    category: 'Hospitality',
    title: 'Hard Rock Hotel Rooms & Suites',
    date: 'January 2024',
    img: '/images/home_15.jpg',
    snippet: 'Expanding our premium hospitality portfolio with the introduction of new luxury accommodations and strategic resort partnerships.',
    link: 'https://hotel.hardrock.com/'
  },
  {
    category: 'Infrastructure',
    title: 'Cruise Ship Port in Partnership with Royal Caribbean',
    date: 'December 2023',
    img: '/images/home_16.jpg',
    snippet: 'Collaborative development initiative to elevate marine infrastructure and drive economic expansion across key port jurisdictions.',
    link: 'https://www.royalcaribbean.com/'
  }
];

export default function NewsSection() {
  return (
    <section className="py-28 bg-[#e7ecef]" id="news">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
            <div>
              <h2 className="text-xs font-bold tracking-widest text-[#6096ba] uppercase mb-4">Newsroom</h2>
              <h3 className="text-4xl md:text-5xl font-semibold text-[#274c77] tracking-tight">Latest news.</h3>
            </div>
            <a href="#" className="hidden md:flex text-[#274c77] font-medium items-center gap-2 hover:text-[#6096ba] transition-colors pb-1 border-b border-[#8b8c89]/50 hover:border-[#6096ba]">
              View all press releases
              <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
            </a>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((news, idx) => (
            <ScrollReveal key={idx} delay={idx * 150}>
              <a 
                href={news.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(39,76,119,0.06)] hover:shadow-[0_20px_40px_rgb(39,76,119,0.12)] transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-48 w-full overflow-hidden bg-gray-100 shrink-0">
                  <img 
                    src={news.img} 
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#274c77]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold tracking-wider text-[#6096ba] uppercase">{news.category}</span>
                    <span className="text-xs text-[#8b8c89]">{news.date}</span>
                  </div>
                  <h4 className="text-xl font-semibold text-[#274c77] tracking-tight mb-4 group-hover:text-[#6096ba] transition-colors line-clamp-2">
                    {news.title}
                  </h4>
                  <p className="text-[#8b8c89] text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                    {news.snippet}
                  </p>
                  <div className="mt-auto text-[#274c77] font-medium text-sm flex items-center gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                    Read article
                    <iconify-icon icon="solar:arrow-right-linear" width="16" className="transform group-hover:translate-x-1 transition-transform"></iconify-icon>
                  </div>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={500} className="md:hidden mt-10 text-center">
          <a href="#" className="inline-flex text-[#274c77] font-medium items-center gap-2 hover:text-[#6096ba] transition-colors pb-1 border-b border-[#8b8c89]/50">
            View all press releases
            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
          </a>
        </ScrollReveal>

      </div>
    </section>
  );
}
