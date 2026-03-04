import React from "react";

export default function Footer() {
  return (
    <footer id="contact" className="py-20 border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="text-center md:text-left">
          <h3 className="text-white font-bold text-3xl mb-3 tracking-tight">Let&apos;s Connect</h3>
          <p className="text-slate-400 text-sm max-w-sm leading-relaxed mb-6 md:mb-0">Innovating at the intersection of AI and Software Engineering.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:mcoding532@gmail.com"
            className="text-slate-300 hover:text-blue-400 transition-all flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border border-white/10 hover:border-blue-500/40"
            aria-label="Email"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
              <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
            </svg>
            Email
          </a>
          <a
            href="https://github.com/hardeeparekh/interview-agent"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-blue-400 transition-all flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border border-white/10 hover:border-blue-500/40"
            aria-label="GitHub"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.2.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.5-1.3-1.2-1.7-1.2-1.7-1-.6.1-.6.1-.6 1.1.1 1.7 1.1 1.7 1.1 1 .1.8 2.1 2.6 2.3.8.1 1.2-.3 1.5-.6-2.7-.3-5.5-1.4-5.5-6A4.7 4.7 0 0 1 6 11c-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11 11 0 0 1 6 0c2.2-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1a4.7 4.7 0 0 1 1.2 3.3c0 4.6-2.8 5.7-5.5 6 .4.3.8 1 .8 2v3c0 .4.2.7.8.6A12 12 0 0 0 12 .5Z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
