import React from 'react';
import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const SocialSidebar: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'github':
        return <Github className="w-4 h-4" />;
      case 'linkedin':
        return <Linkedin className="w-4 h-4" />;
      case 'email':
        return <Mail className="w-4 h-4" />;
      case 'whatsapp':
        return <MessageCircle className="w-4 h-4" />;
      default:
        return <Mail className="w-4 h-4" />;
    }
  };

  return (
    <aside className="fixed left-6 md:left-8 top-1/2 -translate-y-1/2 z-30 hidden sm:flex flex-col items-center gap-5 select-none pointer-events-auto">
      {/* Top Subtle Vertical Line */}
      <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/15 to-white/30" />

      {/* Social Icons Stack (Clean Minimalist White) */}
      <div className="flex flex-col items-center gap-4 py-2">
        {portfolioData.contacts.map((contact, idx) => (
          <a
            key={idx}
            href={contact.link}
            target="_blank"
            rel="noreferrer"
            aria-label={contact.name}
            className="group relative p-2 text-slate-400 hover:text-white hover:scale-115 transition-all duration-200 cursor-pointer"
          >
            {getIcon(contact.type)}

            {/* Hover Tooltip Label */}
            <span className="absolute left-full ml-3 px-2 py-0.5 rounded bg-[#111116] border border-white/10 text-[11px] font-mono text-slate-300 whitespace-nowrap opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all pointer-events-none shadow-2xl z-30">
              {contact.name}
            </span>
          </a>
        ))}
      </div>

      {/* Bottom Subtle Vertical Line */}
      <div className="w-[1px] h-20 bg-gradient-to-b from-white/30 via-white/15 to-transparent" />
    </aside>
  );
};

export default SocialSidebar;
