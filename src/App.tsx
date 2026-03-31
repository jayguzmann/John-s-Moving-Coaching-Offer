import { useState, useEffect } from 'react';
import { Play, Check, ChevronDown, ChevronUp, Star } from 'lucide-react';

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const faqs = [
    {
      q: "Do I need to already have a moving company?",
      a: "Yes. This mentorship is built for operators who are already running. If you're pre-launch, this isn't the right fit yet."
    },
    {
      q: "What if I'm only doing $20k–$30k a month?",
      a: "That's fine. The systems John teaches are exactly what scale you past that ceiling. Most clients see a shift within the first 30 days of implementation."
    },
    {
      q: "Is this a course or live access to John?",
      a: "Live access. You get John directly — not a team member, not pre-recorded videos. Two calls a month plus async access between sessions."
    },
    {
      q: "How do I know if I'm accepted?",
      a: "You apply, John reviews it personally, and if it's a fit you'll get a link to book a 30-minute intro call. No high-pressure sales tactics."
    },
    {
      q: "What makes John different from other moving company coaches?",
      a: "He's 22, fully remote, actively running and scaling right now. He's not teaching from a decade ago — he's showing you his live dashboard in his YouTube videos. That's the difference."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-[#E85D26] selection:text-white">
      {/* 1. NAVIGATION BAR */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#2A2A2A] py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight">John Frell</div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-[#E85D26]/30 rounded-lg blur-md animate-[pulse_4s_ease-in-out_infinite] group-hover:bg-[#E85D26]/50 transition-colors duration-300"></div>
            <button onClick={(e) => e.preventDefault()} className="relative bg-[#E85D26] hover:bg-[#f06d39] text-white px-6 py-2.5 rounded-md font-semibold transition-colors text-sm md:text-base cursor-pointer">
              Apply for Mentorship
            </button>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* URGENCY BADGE */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#141414] border border-[#2A2A2A] mb-8 shadow-[0_0_15px_rgba(232,93,38,0.1)]">
            <div className="w-2 h-2 rounded-full bg-[#E85D26] animate-pulse"></div>
            <span className="text-sm font-semibold text-[#A0A0A0] uppercase tracking-wider">Only 5 Spots Available</span>
          </div>

          {/* A/B Headlines: 
              1. Your Moving Company Is Running. You're Just Not Free Yet.
              2. You Built a Moving Company. Now It's Time to Actually Own It.
              3. Stop Babysitting Movers and Start Scaling Your Business.
          */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Your Moving Company Is Running.<br className="hidden md:block" /> <span className="text-[#E85D26]">You're Just Not Free Yet.</span>
          </h1>
          <p className="text-[#A0A0A0] text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            You're doing decent revenue, but you can't step away for a weekend without something breaking. It's time to build the <span className="text-white font-semibold">remote systems</span> that let you actually <span className="text-white font-semibold">own your business</span>, not just work for it.
          </p>

          {/* VSL PLACEHOLDER */}
          <div className="relative w-full max-w-4xl mx-auto mb-10">
            {/* Animated Glow Behind VSL */}
            <div className="absolute -inset-2 md:-inset-4 bg-[#E85D26]/20 rounded-[2rem] blur-2xl md:blur-3xl animate-[pulse_4s_ease-in-out_infinite]"></div>
            
            <div className="relative w-full aspect-video bg-[#141414] border border-[#2A2A2A] rounded-xl overflow-hidden group cursor-pointer flex items-center justify-center shadow-[0_0_40px_rgba(232,93,38,0.1)]">
              {/* REPLACE WITH REAL VSL VIDEO IFRAME/EMBED */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0A0A0A]/80 to-transparent z-10"></div>
              <div className="z-20 flex flex-col items-center">
                <div className="w-20 h-20 bg-[#E85D26] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_rgba(232,93,38,0.3)]">
                  <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                </div>
                <span className="text-[#A0A0A0] font-medium tracking-wide">[ Add VSL Video Here ]</span>
              </div>
            </div>
          </div>

          <div className="relative inline-block mb-4 group">
            <div className="absolute -inset-1.5 bg-[#E85D26]/30 rounded-lg blur-lg animate-[pulse_4s_ease-in-out_infinite] group-hover:bg-[#E85D26]/50 transition-colors duration-300"></div>
            <button onClick={(e) => e.preventDefault()} className="relative inline-block bg-[#E85D26] hover:bg-[#f06d39] text-white px-8 py-4 rounded-md font-bold text-lg transition-all cursor-pointer">
              Apply to Work With John
            </button>
          </div>
          <p className="text-[#A0A0A0] text-sm font-medium">
            $2M/yr. Fully Remote.
          </p>
        </div>
      </section>

      {/* 3. CREDIBILITY / PROOF BAR */}
      <section className="border-y border-[#2A2A2A] bg-[#141414]/50 py-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x divide-[#2A2A2A]">
          <div className="flex flex-col">
            <span className="text-3xl md:text-4xl font-bold text-white mb-1">$2M+</span>
            <span className="text-[#A0A0A0] text-sm uppercase tracking-wider font-semibold">Annual Revenue</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl md:text-4xl font-bold text-white mb-1">$226K</span>
            <span className="text-[#A0A0A0] text-sm uppercase tracking-wider font-semibold">Single Month</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl md:text-4xl font-bold text-white mb-1">100%</span>
            <span className="text-[#A0A0A0] text-sm uppercase tracking-wider font-semibold">Remote Team</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl md:text-4xl font-bold text-white mb-1">2</span>
            <span className="text-[#A0A0A0] text-sm uppercase tracking-wider font-semibold">Locations &amp; Growing</span>
          </div>
        </div>
      </section>

      {/* 4. PAIN SECTION */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center tracking-tight">Does This Sound Like You?</h2>
          <div className="space-y-4 mb-12">
            {[
              "I can't leave for a weekend without something breaking.",
              "I'm still the one dispatching trucks and babysitting movers.",
              "I built a real business — but I'm working like an employee.",
              "My close rate is embarrassing and I don't know how to fix it.",
              "I have no idea how to get an operator I can actually trust.",
              "I've tried to step back before. It always falls apart."
            ].map((pain, i) => (
              <div key={i} className="flex items-start bg-[#141414] p-6 rounded-lg border border-[#2A2A2A]">
                <div className="mt-1 mr-4 text-[#E85D26]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </div>
                <p className="text-lg text-white font-medium">"{pain}"</p>
              </div>
            ))}
          </div>
          <p className="text-xl text-center text-[#A0A0A0] font-medium">
            That's exactly where John was at 19. <span className="text-white">Here's what changed.</span>
          </p>
        </div>
      </section>

      {/* 5. STORY SECTION */}
      <section className="py-24 px-6 bg-[#141414] border-y border-[#2A2A2A]">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-[#A0A0A0] leading-relaxed mb-6">
              <strong className="text-white">John started moving furniture himself at 17 in Savannah.</strong> He was broke, had no team, and absolutely no systems. He was the marketing department, the sales rep, the dispatcher, and the heavy lifter.
            </p>
            <p className="text-[#A0A0A0] leading-relaxed mb-6">
              When he finally tried to step back, the whole thing fell apart. Trucks were late, customers were angry, and revenue dropped. He realized the problem wasn't the business model — it was that <strong className="text-white">everything lived in his head.</strong>
            </p>
            <p className="text-[#A0A0A0] leading-relaxed mb-10">
              So he built a remote stack. He integrated SmartMoving, set up Discord for operations, hired VAs for the busywork, and put a real operator in place. He completely removed himself from the day-to-day and left Savannah. Now, he runs a $2M+ operation from Austin, Texas, and is opening his second location.
            </p>
            
            <blockquote className="border-l-4 border-[#E85D26] pl-6 py-2 my-10 bg-[#0A0A0A] p-6 rounded-r-lg">
              <p className="text-xl md:text-2xl font-medium text-white italic m-0">
                "The business doesn't need you on the truck. It needs you building the system."
              </p>
            </blockquote>

            <p className="text-[#A0A0A0] leading-relaxed">
              John is not a guru selling theory. He's 22 and actively in the game right now, documenting his journey and sharing the exact systems he uses every single day.
            </p>
          </div>
        </div>
      </section>

      {/* 6. OFFER SECTION */}
      <section className="py-24 px-6" id="offer">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">What Working With John Looks Like</h2>
            <p className="text-[#A0A0A0] text-lg md:text-xl max-w-3xl mx-auto">
              This isn't a course. This isn't a group program. This is John, your business, and a 90-day plan to get you out of the day-to-day.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-3 space-y-6">
              {[
                "2x 60-min 1:1 calls per month with John",
                "Remote stack setup — Discord + SmartMoving done-with-you",
                "John's full hiring funnel (Indeed ads, scripts, bonus system)",
                "Google Ads and GBP framework that scaled John to $1M",
                "All SOPs, templates, and VA role descriptions",
                "Async access to John between calls via Loom or voice note",
                "Weekly accountability check-in"
              ].map((item, i) => (
                <div key={i} className="flex items-start">
                  <div className="mt-1 mr-4 bg-[#E85D26]/20 p-1 rounded-full text-[#E85D26]">
                    <Check className="w-5 h-5" strokeWidth={3} />
                  </div>
                  <p className="text-lg text-[#E0E0E0]">{item}</p>
                </div>
              ))}
            </div>

            <div className="md:col-span-2 bg-[#141414] border border-[#2A2A2A] rounded-2xl p-8 sticky top-32">
              <h3 className="text-2xl font-bold mb-2">Remote Ready</h3>
              <p className="text-[#A0A0A0] mb-8">3 Month Mentorship</p>
              
              <div className="mb-8">
                <span className="text-5xl font-bold text-white">$3,000</span>
              </div>

              <div className="flex items-center gap-3 mb-8 bg-[#0A0A0A] border border-[#2A2A2A] py-3 px-4 rounded-lg">
                <div className="w-3 h-3 bg-[#E85D26] rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold tracking-wide uppercase text-white">5 Spots Open</span>
              </div>

              <div className="relative block w-full mb-4 group">
                <div className="absolute -inset-1.5 bg-[#E85D26]/30 rounded-lg blur-lg animate-[pulse_4s_ease-in-out_infinite] group-hover:bg-[#E85D26]/50 transition-colors duration-300"></div>
                <button onClick={(e) => e.preventDefault()} className="relative block w-full bg-[#E85D26] hover:bg-[#f06d39] text-white text-center py-4 rounded-md font-bold text-lg transition-colors cursor-pointer">
                  Apply Now — Limited Spots
                </button>
              </div>
              <p className="text-xs text-center text-[#A0A0A0]">
                Application only. John reviews every app personally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHO THIS IS FOR / NOT FOR */}
      <section className="py-24 px-6 bg-[#141414] border-y border-[#2A2A2A]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-[#0A0A0A] p-8 rounded-xl border border-[#2A2A2A]">
            <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
              <span className="text-[#E85D26]">This is for you if...</span>
            </h3>
            <ul className="space-y-6">
              {[
                "You're already running a moving company doing real revenue",
                "You want to remove yourself from the day-to-day in 90 days",
                "You're ready to invest in systems, not just information",
                "You want direct access to someone actively doing it right now"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <Check className="w-6 h-6 text-[#E85D26] mr-3 shrink-0 mt-0.5" />
                  <span className="text-[#A0A0A0]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#0A0A0A] p-8 rounded-xl border border-[#2A2A2A]">
            <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
              <span className="text-red-500">This is NOT for you if...</span>
            </h3>
            <ul className="space-y-6">
              {[
                "You haven't started a moving company yet",
                "You're looking for a cheap course or YouTube tips",
                "You're not willing to implement what you learn",
                "You want a guarantee without putting in the work"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <svg className="w-6 h-6 text-red-500 mr-3 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                  <span className="text-[#A0A0A0]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIAL / SOCIAL PROOF PLACEHOLDER */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center tracking-tight">What Operators Are Saying</h2>
          
          {/* // REPLACE WITH REAL TESTIMONIALS */}
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-[#141414] border border-[#2A2A2A] p-8 rounded-xl flex flex-col">
                <div className="flex text-[#E85D26] mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-[#E0E0E0] italic mb-8 flex-grow">
                  "This is a placeholder testimonial. When you have real clients who have gone through the Remote Ready mentorship, their quotes about stepping away from the truck and scaling revenue will go right here."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#2A2A2A] rounded-full flex items-center justify-center text-[#A0A0A0] font-bold">
                    MT
                  </div>
                  <div>
                    <div className="font-bold text-white">Marcus T.</div>
                    <div className="text-sm text-[#A0A0A0]">Atlanta, GA</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ SECTION */}
      <section className="py-24 px-6 bg-[#141414] border-y border-[#2A2A2A]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center tracking-tight">Common Questions</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#0A0A0A] border border-[#2A2A2A] rounded-lg overflow-hidden">
                <button 
                  onClick={() => toggleFaq(i)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                >
                  <span className="font-semibold text-lg pr-8">{faq.q}</span>
                  {openFaq === i ? (
                    <ChevronUp className="w-5 h-5 text-[#A0A0A0] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#A0A0A0] shrink-0" />
                  )}
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-[#A0A0A0] leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA SECTION */}
      <section className="py-32 px-6" id="apply">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
            Your Moving Company Is Already Built.<br className="hidden md:block" /> Now Let's Make It <span className="text-[#E85D26]">Run Without You.</span>
          </h2>
          <p className="text-[#A0A0A0] text-xl mb-12 max-w-2xl mx-auto">
            John takes on 5 clients at a time — maximum. When spots fill, the waitlist opens.
          </p>
          
          <div className="w-full h-[600px] md:h-[700px] rounded-xl overflow-hidden shadow-[0_0_30px_rgba(232,93,38,0.1)] border border-[#2A2A2A] mb-6 flex items-center justify-center bg-[#141414]">
            <span className="text-[#A0A0A0] font-medium tracking-wide">[ Add Typeform Here ]</span>
          </div>
          
          <p className="text-[#A0A0A0] text-sm">
            Takes 3 minutes. John reads every application personally.
          </p>
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer className="py-12 px-6 border-t border-[#2A2A2A] bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="text-xl font-bold tracking-tight mb-6">John Frell</div>
          
          <p className="text-[#A0A0A0] text-sm mb-8">
            © {new Date().getFullYear()} John Frell. All rights reserved.
          </p>
          
          <p className="text-[#555555] text-xs max-w-2xl leading-relaxed">
            Disclaimer: Results vary. Revenue figures shown are John's personal results and are not a guarantee of your outcome. Building a business requires hard work, risk, and consistent effort.
          </p>
        </div>
      </footer>
    </div>
  );
}
