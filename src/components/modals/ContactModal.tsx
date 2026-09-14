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
      badgeColor="text-emerald-400 border-emerald-500/40 bg-emerald-500/10"
      onClose={onClose}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Direct Links & Fast Copy Channels */}
        <div className="lg:col-span-6 space-y-3.5">
          <div className="text-xs font-code text-slate-400 uppercase tracking-wider mb-2">
            Direct Uplink Channels
          </div>

          {portfolioData.contacts.map((contact, idx) => {
            const isCopied = copiedKey === contact.name;
            return (
              <div
                key={idx}
                className="p-4 rounded-sm bg-[#101424] border border-slate-800 hover:border-emerald-500/40 transition-all flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3.5 overflow-hidden">
                  <div className="p-2 rounded bg-slate-900 text-emerald-400 border border-slate-800 shrink-0">
                    {getContactIcon(contact.type)}
                  </div>
                  <div className="truncate">
                    <p className="font-cyber font-bold text-sm text-slate-100">
                      {contact.name}
                    </p>
                    <p className="font-code text-xs text-slate-400 truncate">
                      {contact.handle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {/* Copy Button */}
                  <button
                    onClick={() => handleCopy(contact.handle, contact.name)}
                    className="p-2 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-emerald-400 border border-slate-700 transition-colors cursor-pointer"
                    title={`Copy ${contact.name}`}
                  >
                    {isCopied ? (
                      <Check className="w-4 h-4 text-emerald-400" />
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
                      className="p-2 rounded bg-slate-800/80 hover:bg-emerald-500/20 text-slate-300 hover:text-emerald-400 border border-slate-700 hover:border-emerald-500/40 transition-colors"
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
          <div className="p-3 rounded bg-slate-900/60 border border-slate-800 text-xs font-sans text-slate-400">
            ⚡ Direct Reach: <strong className="text-emerald-400">+92 328 0709704</strong> / <strong className="text-cyan-400">khokharyasir749@gmail.com</strong>
          </div>
        </div>

        {/* Right Column: Encrypted Message Dispatcher Form */}
        <div className="lg:col-span-6 bg-[#101424] border border-emerald-500/30 p-5 rounded-sm flex flex-col justify-between">
          <form onSubmit={handleSendMessage} className="space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <span className="font-cyber font-bold text-sm text-slate-100 tracking-wide">
                DISPATCH ENCRYPTED TRANSMISSION
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-code text-slate-400">YOUR CALLSIGN / NAME</label>
              <input
                type="text"
                required
                placeholder="Agent John Doe"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full px-3 py-2 rounded-sm bg-slate-950/80 border border-slate-700 text-xs font-code text-slate-200 focus:outline-none focus:border-emerald-400 transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-code text-slate-400">YOUR RETURN EMAIL</label>
              <input
                type="email"
                required
                placeholder="agent@matrix.io"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full px-3 py-2 rounded-sm bg-slate-950/80 border border-slate-700 text-xs font-code text-slate-200 focus:outline-none focus:border-emerald-400 transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-code text-slate-400">TRANSMISSION PAYLOAD</label>
              <textarea
                required
                rows={4}
                placeholder="Project inquiries, contract proposals, or greetings..."
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-3 py-2 rounded-sm bg-slate-950/80 border border-slate-700 text-xs font-sans text-slate-200 focus:outline-none focus:border-emerald-400 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={sentMessage}
              className={`w-full py-2.5 px-4 rounded-sm font-cyber font-bold tracking-wider text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                sentMessage
                  ? 'bg-emerald-500 text-slate-950'
                  : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/20 active:scale-98'
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
