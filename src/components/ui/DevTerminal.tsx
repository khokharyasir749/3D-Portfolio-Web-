import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Terminal as TerminalIcon,
  X,
  Minus,
  Maximize2,
  Minimize2,
  CornerDownLeft,
  Sparkles,
  ExternalLink,
  Github,
  Mail,
  Linkedin,
  MessageCircle,
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { audioManager } from '../../utils/audioSystem';

interface OutputLine {
  id: string;
  type: 'input' | 'output' | 'error' | 'success' | 'system' | 'custom';
  content?: string;
  customComponent?: React.ReactNode;
}

interface DevTerminalProps {
  theme?: 'dark' | 'light';
  onToggleTheme?: () => void;
  isMuted?: boolean;
  onToggleAudio?: () => void;
  onNavigate?: (sectionId: string) => void;
}

const WELCOME_BANNER = `
  ██╗   ██╗ █████╗ ███████╗██╗██████╗ 
  ╚██╗ ██╔╝██╔══██╗██╔════╝██║██╔══██╗
   ╚████╔╝ ███████║███████╗██║██████╔╝
    ╚██╔╝  ██╔══██║╚════██║██║██╔══██╗
     ██║   ██║  ██║███████║██║██║  ██║
     ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝╚═╝  ╚═╝
  ══════════════════════════════════════════════
  ⚡ YASIR_OS // INTERACTIVE DEV CONSOLE v2.6.4
  Type 'help' to inspect available system commands
  or click the quick command chips above.
  ══════════════════════════════════════════════`;

const AVAILABLE_COMMANDS = [
  { cmd: 'help', desc: 'Display all available protocols & commands' },
  { cmd: 'skills', desc: 'Inspect full-stack & 3D WebGL technical matrix' },
  { cmd: 'projects', desc: 'Browse featured client & open-source projects' },
  { cmd: 'contact', desc: 'Show direct communication & social channels' },
  { cmd: 'about', desc: 'View developer biography & background dossier' },
  { cmd: 'theme', desc: 'Toggle between Cyber Dark & Ultra Light mode' },
  { cmd: 'audio', desc: 'Toggle cyberpunk ambient synth soundscape' },
  { cmd: 'date', desc: 'Show local & system UTC time' },
  { cmd: 'whoami', desc: 'Display current terminal user session & privilege' },
  { cmd: 'clear', desc: 'Purge console display buffer' },
  { cmd: 'exit', desc: 'Terminate terminal session & close drawer' },
];

export const DevTerminal: React.FC<DevTerminalProps> = ({
  theme = 'dark',
  onToggleTheme,
  isMuted,
  onToggleAudio,
  onNavigate,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<OutputLine[]>([
    {
      id: 'welcome-0',
      type: 'system',
      content: WELCOME_BANNER,
    },
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

  const outputContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll the inner terminal buffer to the latest output on update
  useEffect(() => {
    if (isOpen && outputContainerRef.current) {
      outputContainerRef.current.scrollTo({
        top: outputContainerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [history, isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  // Global Keyboard shortcuts: `~` or `Ctrl+\`` to toggle terminal, `Escape` to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '`' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        toggleTerminal();
      } else if (e.key === 'Escape' && isOpen) {
        e.preventDefault();
        closeTerminal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const toggleTerminal = () => {
    if (!isOpen) {
      audioManager.playModalOpenSound();
      setIsOpen(true);
    } else {
      audioManager.playModalCloseSound();
      setIsOpen(false);
    }
  };

  const closeTerminal = () => {
    audioManager.playModalCloseSound();
    setIsOpen(false);
  };

  const handleCommandExecution = (commandStr: string) => {
    const trimmed = commandStr.trim();
    if (!trimmed) return;

    audioManager.playClickSound();

    // Add user command to history
    const userLine: OutputLine = {
      id: `cmd-${Date.now()}`,
      type: 'input',
      content: trimmed,
    };

    // Store in command recall history
    setCommandHistory((prev) => [trimmed, ...prev.filter((c) => c !== trimmed)]);
    setHistoryIndex(-1);

    const [cmd, ...args] = trimmed.toLowerCase().split(' ');

    let responseLine: OutputLine;

    switch (cmd) {
      case 'help':
        responseLine = {
          id: `resp-${Date.now()}`,
          type: 'custom',
          customComponent: (
            <div className="py-2 space-y-1.5 font-mono text-xs">
              <div className="text-purple-400 font-bold tracking-wider">
                === AVAILABLE SYSTEM PROTOCOLS ===
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 pt-1">
                {AVAILABLE_COMMANDS.map((item) => (
                  <div
                    key={item.cmd}
                    onClick={() => handleCommandExecution(item.cmd)}
                    className="flex items-center gap-2 cursor-pointer hover:text-cyan-300 transition-colors py-0.5 group"
                  >
                    <span className="text-cyan-400 font-bold group-hover:underline">
                      {item.cmd.padEnd(9, ' ')}
                    </span>
                    <span className="text-slate-400 group-hover:text-slate-200">
                      - {item.desc}
                    </span>
                  </div>
                ))}
              </div>
              <div className="text-slate-500 text-[11px] pt-1 italic">
                Tip: Click any command above or use Tab for autocomplete.
              </div>
            </div>
          ),
        };
        break;

      case 'skills':
      case 'tech':
      case 'stack':
        responseLine = {
          id: `resp-${Date.now()}`,
          type: 'custom',
          customComponent: (
            <div className="py-2 space-y-3 font-mono text-xs">
              <div className="text-purple-400 font-bold tracking-wider">
                === TECHNICAL CAPABILITIES MATRIX ===
              </div>
              <div className="space-y-3">
                <div>
                  <div className="text-cyan-400 font-bold mb-1">
                    [ 01 // 3D & CREATIVE WEBGL ]
                  </div>
                  <div className="text-slate-300 pl-3 border-l-2 border-cyan-500/40 space-y-0.5">
                    <div>• Three.js • React Three Fiber • Drei • GLSL Shaders</div>
                    <div>• Post-Processing Bloom • Camera Controls • Spatial UI</div>
                  </div>
                </div>

                <div>
                  <div className="text-purple-400 font-bold mb-1">
                    [ 02 // FRONTEND & UI ARCHITECTURE ]
                  </div>
                  <div className="text-slate-300 pl-3 border-l-2 border-purple-500/40 space-y-0.5">
                    <div>• React 18 • TypeScript • Next.js • Vite</div>
                    <div>• Tailwind CSS • Framer Motion • Lenis Smooth Scroll</div>
                  </div>
                </div>

                <div>
                  <div className="text-emerald-400 font-bold mb-1">
                    [ 03 // BACKEND & REAL-TIME ]
                  </div>
                  <div className="text-slate-300 pl-3 border-l-2 border-emerald-500/40 space-y-0.5">
                    <div>• Node.js • Express • REST APIs • WebSockets / Socket.io</div>
                    <div>• MongoDB • Mongoose • JWT Auth • Cloudflare Workers</div>
                  </div>
                </div>
              </div>
            </div>
          ),
        };
        break;

      case 'projects':
      case 'work':
        responseLine = {
          id: `resp-${Date.now()}`,
          type: 'custom',
          customComponent: (
            <div className="py-2 space-y-2.5 font-mono text-xs">
              <div className="text-purple-400 font-bold tracking-wider">
                === FEATURED DEPLOYED PROJECTS ===
              </div>
              <div className="space-y-2">
                {portfolioData.projects.map((proj) => (
                  <div
                    key={proj.id}
                    className="p-2.5 rounded bg-white/5 border border-white/10 hover:border-cyan-400/50 transition-all space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-cyan-300">
                        {proj.number}. {proj.title}
                      </span>
                      <div className="flex items-center gap-2">
                        {proj.demoUrl && (
                          <a
                            href={proj.demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 text-[11px] underline"
                          >
                            Demo <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                        {proj.githubUrl && (
                          <a
                            href={proj.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-purple-400 hover:text-purple-300 flex items-center gap-1 text-[11px] underline"
                          >
                            Code <Github className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="text-slate-400 text-[11px]">{proj.tagline}</p>
                    <div className="flex flex-wrap gap-1 pt-0.5">
                      {proj.tags.map((t) => (
                        <span
                          key={t}
                          className="px-1.5 py-0.2 rounded bg-purple-500/10 text-purple-300 text-[10px] border border-purple-500/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ),
        };
        break;

      case 'contact':
      case 'socials':
        responseLine = {
          id: `resp-${Date.now()}`,
          type: 'custom',
          customComponent: (
            <div className="py-2 space-y-2 font-mono text-xs">
              <div className="text-purple-400 font-bold tracking-wider">
                === COMMUNICATION CHANNELS ===
              </div>
              <div className="space-y-1.5 pl-2">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-slate-400">Email:</span>
                  <a
                    href="mailto:khokharyasir749@gmail.com"
                    className="text-cyan-300 hover:underline"
                  >
                    khokharyasir749@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                  <span className="text-slate-400">LinkedIn:</span>
                  <a
                    href="https://linkedin.com/in/yasirkhokhar"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-300 hover:underline flex items-center gap-1"
                  >
                    in/yasirkhokhar <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="w-3.5 h-3.5 text-purple-400" />
                  <span className="text-slate-400">GitHub:</span>
                  <a
                    href="https://github.com/khokharyasir749"
                    target="_blank"
                    rel="noreferrer"
                    className="text-purple-300 hover:underline flex items-center gap-1"
                  >
                    github.com/khokharyasir749 <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-slate-400">WhatsApp / Direct:</span>
                  <a
                    href="https://wa.me/923000000000"
                    target="_blank"
                    rel="noreferrer"
                    className="text-emerald-300 hover:underline"
                  >
                    +92 300 0000000 (Available)
                  </a>
                </div>
                <div className="text-slate-500 pt-1 text-[11px]">
                  📍 Location: Lahore, Pakistan • Timezone: UTC+5 • Ready for Remote Roles
                </div>
              </div>
            </div>
          ),
        };
        break;

      case 'about':
      case 'bio':
        responseLine = {
          id: `resp-${Date.now()}`,
          type: 'custom',
          customComponent: (
            <div className="py-2 space-y-2 font-mono text-xs">
              <div className="text-purple-400 font-bold tracking-wider">
                === DEVELOPER DOSSIER ===
              </div>
              <div className="text-slate-200 space-y-1">
                <p>
                  <span className="text-cyan-400 font-bold">NAME:</span> {portfolioData.about.name}
                </p>
                <p>
                  <span className="text-cyan-400 font-bold">ROLE:</span> {portfolioData.about.role}
                </p>
                <p>
                  <span className="text-cyan-400 font-bold">STATUS:</span>{' '}
                  <span className="text-emerald-400 font-bold">● {portfolioData.about.status}</span>
                </p>
                <p className="text-slate-400 pt-1 leading-relaxed">
                  {portfolioData.about.bio[0]}
                </p>
              </div>
            </div>
          ),
        };
        break;

      case 'theme':
        if (onToggleTheme) {
          onToggleTheme();
          const newTheme = theme === 'dark' ? 'LIGHT' : 'DARK';
          responseLine = {
            id: `resp-${Date.now()}`,
            type: 'success',
            content: `✓ Interface visual theme successfully switched to: [${newTheme} MODE]`,
          };
        } else {
          responseLine = {
            id: `resp-${Date.now()}`,
            type: 'output',
            content: 'Theme toggle controller not bound.',
          };
        }
        break;

      case 'audio':
      case 'sound':
      case 'music':
        if (onToggleAudio) {
          onToggleAudio();
          const audioStatus = isMuted ? 'UNMUTED (Playing Cyber Soundscape)' : 'MUTED (Silent)';
          responseLine = {
            id: `resp-${Date.now()}`,
            type: 'success',
            content: `✓ Audio state updated: [${audioStatus}]`,
          };
        } else {
          responseLine = {
            id: `resp-${Date.now()}`,
            type: 'output',
            content: 'Audio engine toggle controller not bound.',
          };
        }
        break;

      case 'date':
      case 'time':
        responseLine = {
          id: `resp-${Date.now()}`,
          type: 'output',
          content: `Current System Time: ${new Date().toLocaleString()} (UTC ${
            -new Date().getTimezoneOffset() / 60 >= 0 ? '+' : ''
          }${-new Date().getTimezoneOffset() / 60}:00)`,
        };
        break;

      case 'whoami':
        responseLine = {
          id: `resp-${Date.now()}`,
          type: 'output',
          content: 'guest@khokharyasir.dev [Access Level: Level 99 Creative Explorer // Root]',
        };
        break;

      case 'sudo':
        responseLine = {
          id: `resp-${Date.now()}`,
          type: 'success',
          content: '⚡ Root privileges unlocked. You already possess full administrative authorization.',
        };
        break;

      case 'goto':
      case 'navigate':
        if (args.length > 0 && onNavigate) {
          const target = args[0].toLowerCase();
          onNavigate(target);
          responseLine = {
            id: `resp-${Date.now()}`,
            type: 'success',
            content: `Navigating viewport to section: #${target}`,
          };
        } else {
          responseLine = {
            id: `resp-${Date.now()}`,
            type: 'error',
            content: 'Usage: goto <hero | about | what-i-do | experience | work | tech-stack | contact>',
          };
        }
        break;

      case 'clear':
      case 'cls':
        setHistory([]);
        setInputVal('');
        return;

      case 'exit':
      case 'close':
      case 'quit':
        closeTerminal();
        return;

      default:
        responseLine = {
          id: `resp-${Date.now()}`,
          type: 'error',
          content: `zsh: command not found: '${trimmed}'. Type 'help' to view valid system protocols.`,
        };
        break;
    }

    setHistory((prev) => [...prev, userLine, responseLine]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCommandExecution(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIdx = Math.min(historyIndex + 1, commandHistory.length - 1);
      setHistoryIndex(nextIdx);
      setInputVal(commandHistory[nextIdx]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[nextIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const current = inputVal.toLowerCase().trim();
      if (current) {
        const match = AVAILABLE_COMMANDS.find((c) => c.cmd.startsWith(current));
        if (match) {
          setInputVal(match.cmd);
        }
      }
    }
  };

  return (
    <>
      {/* 1. Floating Bottom-Right Cyberpunk Terminal Pill Trigger */}
      <motion.button
        onClick={toggleTerminal}
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 group flex items-center gap-2.5 px-3.5 py-2 rounded-xl backdrop-blur-xl bg-zinc-950/85 dark:bg-black/85 border border-purple-500/40 hover:border-cyan-400 shadow-xl shadow-purple-950/40 hover:shadow-cyan-500/20 text-slate-200 transition-all duration-300 select-none cursor-pointer"
        aria-label="Open Interactive Dev Terminal Console"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <TerminalIcon className="w-3.5 h-3.5 text-purple-400 group-hover:text-cyan-300 transition-colors" />
        <span className="font-mono text-xs font-bold tracking-wider text-slate-200 group-hover:text-white">
          &gt;_ TERMINAL
        </span>
        <span className="hidden sm:inline-block text-[10px] font-mono text-slate-400 bg-white/5 px-1.5 py-0.5 rounded border border-white/10">
          ~
        </span>
      </motion.button>

      {/* 2. Slide-up Retro Glassmorphic Terminal Window Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 60, scale: 0.96 }}
            transition={{ type: 'spring', damping: 28, stiffness: 350 }}
            data-lenis-prevent="true"
            className={`fixed z-50 transition-all duration-300 shadow-2xl flex flex-col overflow-hidden backdrop-blur-2xl bg-[#090b14]/95 dark:bg-[#06080e]/95 border border-purple-500/30 dark:border-white/15 ${
              isExpanded
                ? 'inset-3 sm:inset-6 rounded-2xl sm:rounded-3xl shadow-purple-950/70'
                : 'bottom-4 right-4 sm:bottom-6 sm:right-6 w-[calc(100vw-32px)] sm:w-[600px] h-[520px] max-h-[85vh] rounded-2xl shadow-purple-950/60'
            }`}
          >
            {/* Terminal Header Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0d101d]/90 border-b border-white/10 select-none shrink-0">
              <div className="flex items-center gap-2">
                {/* Traffic lights */}
                <button
                  onClick={closeTerminal}
                  className="w-3 h-3 rounded-full bg-rose-500/80 hover:bg-rose-500 transition-colors cursor-pointer flex items-center justify-center group"
                  title="Close Terminal"
                >
                  <X className="w-2 h-2 text-rose-950 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <button
                  onClick={() => handleCommandExecution('clear')}
                  className="w-3 h-3 rounded-full bg-amber-500/80 hover:bg-amber-500 transition-colors cursor-pointer flex items-center justify-center group"
                  title="Clear Screen"
                >
                  <Minus className="w-2 h-2 text-amber-950 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-500 transition-colors cursor-pointer flex items-center justify-center group"
                  title="Expand Window"
                >
                  <Maximize2 className="w-2 h-2 text-emerald-950 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>

                <span className="ml-2 font-mono text-[11px] font-bold text-slate-300 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-purple-400" />
                  <span>YASIR_OS // DEV_CONSOLE</span>
                  <span className="hidden sm:inline text-purple-400 text-[10px]">
                    [ONLINE]
                  </span>
                </span>
              </div>

              {/* Right actions */}
              <div className="flex items-center gap-1.5 text-slate-400">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="p-1 rounded hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
                  title={isExpanded ? 'Restore' : 'Maximize'}
                >
                  {isExpanded ? (
                    <Minimize2 className="w-3.5 h-3.5" />
                  ) : (
                    <Maximize2 className="w-3.5 h-3.5" />
                  )}
                </button>
                <button
                  onClick={closeTerminal}
                  className="p-1 rounded hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
                  title="Close (Esc)"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Quick Command Action Chips */}
            <div className="flex items-center gap-1.5 px-4 py-2 bg-black/40 border-b border-white/5 overflow-x-auto no-scrollbar shrink-0 select-none">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider shrink-0">
                QUICK:
              </span>
              {['help', 'skills', 'projects', 'contact', 'about', 'clear'].map((c) => (
                <button
                  key={c}
                  onClick={() => handleCommandExecution(c)}
                  className="px-2 py-0.5 rounded text-[11px] font-mono bg-purple-500/10 hover:bg-cyan-500/20 text-purple-300 hover:text-cyan-200 border border-purple-500/25 hover:border-cyan-400/40 transition-all shrink-0 cursor-pointer active:scale-95"
                >
                  {c}
                </button>
              ))}
            </div>

            {/* Terminal Body / Output Log (Smooth Scrollable Buffer) */}
            <div
              ref={outputContainerRef}
              data-lenis-prevent="true"
              className="flex-1 min-h-0 overflow-y-auto cyber-scrollbar p-4 font-mono text-xs text-slate-200 space-y-2.5 select-text overscroll-contain"
              style={{ overscrollBehavior: 'contain' }}
              onClick={() => inputRef.current?.focus()}
            >
              {history.map((line) => {
                if (line.type === 'system') {
                  return (
                    <pre
                      key={line.id}
                      className="text-purple-400 font-mono text-[10px] sm:text-[11px] leading-tight select-none opacity-90 overflow-x-auto"
                    >
                      {line.content}
                    </pre>
                  );
                }

                if (line.type === 'input') {
                  return (
                    <div key={line.id} className="flex items-center gap-2 text-cyan-400">
                      <span className="text-emerald-400 font-bold">guest@yasir:~$</span>
                      <span className="text-white">{line.content}</span>
                    </div>
                  );
                }

                if (line.type === 'error') {
                  return (
                    <div key={line.id} className="text-rose-400 pl-4 border-l-2 border-rose-500/50">
                      {line.content}
                    </div>
                  );
                }

                if (line.type === 'success') {
                  return (
                    <div
                      key={line.id}
                      className="text-emerald-400 pl-4 border-l-2 border-emerald-500/50"
                    >
                      {line.content}
                    </div>
                  );
                }

                if (line.type === 'custom') {
                  return <div key={line.id}>{line.customComponent}</div>;
                }

                return (
                  <div key={line.id} className="text-slate-300 whitespace-pre-wrap">
                    {line.content}
                  </div>
                );
              })}
            </div>

            {/* Terminal Input Prompt Bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#0d101d]/95 border-t border-white/10 shrink-0">
              <span className="font-mono text-xs font-bold text-emerald-400 shrink-0 select-none">
                guest@yasir:~$
              </span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type 'help' or any command..."
                className="flex-1 bg-transparent font-mono text-xs text-white placeholder-slate-500 outline-none border-none"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
              />
              <button
                onClick={() => handleCommandExecution(inputVal)}
                className="p-1.5 rounded bg-purple-500/20 hover:bg-purple-500/40 text-purple-300 hover:text-white border border-purple-500/30 transition-all cursor-pointer"
                title="Execute Command"
              >
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DevTerminal;
