import React, { useState } from 'react';
import { ModalBackdrop } from './ModalBackdrop';
import { portfolioData } from '../../data/portfolioData';
import { Mail, Github, Linkedin, MessageSquare, Copy, Check, ExternalLink, Send, Phone, MessageCircle } from 'lucide-react';

interface ContactModalProps {
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ onClose }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [sentMessage, setSentMessage] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;
    setSentMessage(true);
    setTimeout(() => {
      setSentMessage(false);
      setFormState({ name: '', email: '', message: '' });
    }, 4000);
  };

  const getContactIcon = (type: string) => {
    switch (type) {
      case 'email':
        return <Mail className="w-5 h-5" />;
      case 'whatsapp':
        return <MessageCircle className="w-5 h-5" />;
      case 'phone':
        return <Phone className="w-5 h-5" />;
      case 'github':
        return <Github className="w-5 h-5" />;
      case 'linkedin':
        return <Linkedin className="w-5 h-5" />;
      case 'discord':
        return <MessageSquare className="w-5 h-5" />;
      default:
        return <Mail className="w-5 h-5" />;
    }
  };

  return (
    <ModalBackdrop
      title="COMMUNICATION TERMINAL"
      badge="INCOMING FREQUENCY OPEN"
      badgeColor="text-[#1D5A50] dark:text-[#2C665D] border-emerald-200 dark:border-[#2C665D]/40 bg-emerald-50 dark:bg-[#2C665D]/10"
      onClose={onClose}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Direct Links & Fast Copy Channels */}
        <div className="lg:col-span-6 space-y-3.5">
          <div className="text-xs font-code text-zinc-500 dark:text-[#E6F4F1]/70 uppercase tracking-wider mb-2 font-semibold">
            Direct Uplink Channels
          </div>

          {portfolioData.contacts.map((contact, idx) => {
            const isCopied = copiedKey === contact.name;
            return (
              <div
                key={idx}
                className="p-4 rounded-xl bg-zinc-50 dark:bg-[#132B27] border border-zinc-200 dark:border-[#25524B] hover:border-[#1D5A50] dark:hover:border-[#2C665D] transition-all flex items-center justify-between gap-3 shadow-sm"
              >
                <div className="flex items-center gap-3.5 overflow-hidden">
                  <div className="p-2.5 rounded-lg bg-white dark:bg-[#0A1312] text-[#1D5A50] dark:text-[#2C665D] border border-zinc-200 dark:border-[#25524B] shrink-0">
                    {getContactIcon(contact.type)}
                  </div>
                  <div className="truncate">
                    <p className="font-cyber font-bold text-sm text-[#0F2420] dark:text-[#E6F4F1]">
                      {contact.name}
                    </p>
                    <p className="font-code text-xs text-zinc-600 dark:text-[#E6F4F1]/70 truncate">
                      {contact.handle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {/* Copy Button */}
                  <button
                    onClick={() => handleCopy(contact.handle, contact.name)}
                    className="p-2 rounded-lg bg-white hover:bg-zinc-100 dark:bg-[#0A1312] dark:hover:bg-[#25524B] text-zinc-700 dark:text-[#E6F4F1]/80 hover:text-[#0F2420] dark:hover:text-[#E6F4F1] border border-zinc-200 dark:border-[#25524B] transition-colors cursor-pointer"
                    title={`Copy ${contact.name}`}
                  >
                    {isCopied ? (
                      <Check className="w-4 h-4 text-[#1D5A50] dark:text-[#2C665D]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>

                  {/* Direct Link */}
                  {contact.link && (
                    <a
                      href={contact.link}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-white hover:bg-zinc-100 dark:bg-[#0A1312] dark:hover:bg-[#2C665D]/20 text-zinc-700 dark:text-[#E6F4F1]/80 hover:text-[#0F2420] dark:hover:text-[#E6F4F1] border border-zinc-200 dark:border-[#25524B] transition-colors"
                      title="Open external link"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}

          {/* Quick Notice */}
          <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-[#132B27] border border-zinc-200 dark:border-[#25524B] text-xs font-sans text-zinc-700 dark:text-[#E6F4F1]/80 shadow-sm">
            ⚡ Direct Reach: <strong className="text-[#1D5A50] dark:text-[#2C665D]">+92 328 0709704</strong> / <strong className="text-[#0F2420] dark:text-[#E6F4F1]">khokharyasir749@gmail.com</strong>
          </div>
        </div>

        {/* Right Column: Encrypted Message Dispatcher Form */}
        <div className="lg:col-span-6 bg-zinc-50 dark:bg-[#132B27] border border-zinc-200 dark:border-[#25524B] p-5 rounded-2xl flex flex-col justify-between shadow-sm">
          <form onSubmit={handleSendMessage} className="space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-zinc-200 dark:border-[#25524B]">
              <span className="font-cyber font-bold text-sm text-[#0F2420] dark:text-[#E6F4F1] tracking-wide">
                DISPATCH ENCRYPTED TRANSMISSION
              </span>
              <span className="w-2 h-2 rounded-full bg-[#1D5A50] dark:bg-[#2C665D] animate-pulse" />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-code text-zinc-600 dark:text-[#E6F4F1]/70 font-semibold">YOUR CALLSIGN / NAME</label>
              <input
                type="text"
                required
                placeholder="Agent John Doe"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#0A1312] border border-zinc-300 dark:border-[#25524B] text-xs font-code text-zinc-900 dark:text-[#E6F4F1] placeholder-zinc-400 dark:placeholder-[#E6F4F1]/40 focus:outline-none focus:border-[#1D5A50] dark:focus:border-[#2C665D] transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-code text-zinc-600 dark:text-[#E6F4F1]/70 font-semibold">YOUR RETURN EMAIL</label>
              <input
                type="email"
                required
                placeholder="agent@matrix.io"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#0A1312] border border-zinc-300 dark:border-[#25524B] text-xs font-code text-zinc-900 dark:text-[#E6F4F1] placeholder-zinc-400 dark:placeholder-[#E6F4F1]/40 focus:outline-none focus:border-[#1D5A50] dark:focus:border-[#2C665D] transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-code text-zinc-600 dark:text-[#E6F4F1]/70 font-semibold">TRANSMISSION PAYLOAD</label>
              <textarea
                required
                rows={4}
                placeholder="Project inquiries, contract proposals, or greetings..."
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#0A1312] border border-zinc-300 dark:border-[#25524B] text-xs font-sans text-zinc-900 dark:text-[#E6F4F1] placeholder-zinc-400 dark:placeholder-[#E6F4F1]/40 focus:outline-none focus:border-[#1D5A50] dark:focus:border-[#2C665D] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={sentMessage}
              className={`w-full py-2.5 px-4 rounded-xl font-cyber font-bold tracking-wider text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                sentMessage
                  ? 'bg-zinc-200 text-zinc-700 dark:bg-[#25524B] dark:text-[#E6F4F1]'
                  : 'bg-[#1D5A50] hover:bg-[#15453D] dark:bg-[#2C665D] dark:hover:bg-[#357B70] text-white dark:text-[#E6F4F1] shadow-lg shadow-[#1D5A50]/20 active:scale-98'
              }`}
            >
              {sentMessage ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>TRANSMISSION DISPATCHED // THANK YOU</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>TRANSMIT MESSAGE</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </ModalBackdrop>
  );
};
