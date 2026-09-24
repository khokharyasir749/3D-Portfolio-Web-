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
      <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-zinc-300 dark:via-[#25524B] to-zinc-300/40 dark:to-[#2C665D]/40" />

      {/* Social Icons Stack (Clean Minimalist White) */}
      <div className="flex flex-col items-center gap-4 py-2">
        {portfolioData.contacts.map((contact, idx) => (
          <a
            key={idx}
            href={contact.link}
            target="_blank"
            rel="noreferrer"
            aria-label={contact.name}
            className="group relative p-2 text-zinc-600 hover:text-zinc-950 dark:text-[#E6F4F1]/60 dark:hover:text-[#E6F4F1] hover:scale-115 transition-all duration-200 cursor-pointer"
          >
            {getIcon(contact.type)}

            {/* Hover Tooltip Label */}
            <span className="absolute left-full ml-3 px-2 py-0.5 rounded bg-white dark:bg-[#132B27] border border-zinc-200 dark:border-[#25524B] text-[11px] font-mono text-zinc-800 dark:text-[#E6F4F1] whitespace-nowrap opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all pointer-events-none shadow-lg z-30">
              {contact.name}
            </span>
          </a>
        ))}
      </div>

      {/* Bottom Subtle Vertical Line */}
      <div className="w-[1px] h-20 bg-gradient-to-b from-zinc-300/40 dark:from-[#2C665D]/40 via-zinc-300 dark:via-[#25524B] to-transparent" />
    </aside>
  );
};

export default SocialSidebar;
