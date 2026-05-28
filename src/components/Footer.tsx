import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="font-semibold text-slate-900 tracking-tight">Michael Soucek</p>
            <p className="text-sm text-slate-400 mt-0.5">Software Engineer</p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {/* TODO: Add resume.pdf to /public/ before deploying */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-blue-600 border border-blue-200 hover:border-blue-600 px-4 py-1.5 rounded transition-colors"
            >
              View Resume
            </a>

            <a
              href="mailto:michaelsoucek73@gmail.com"
              className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
            >
              michaelsoucek73@gmail.com
            </a>

            <a
              href="https://github.com/michael-soucek"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-slate-400 hover:text-slate-900 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.166 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.45-1.14-1.11-1.45-1.11-1.45-.91-.62.07-.6.07-.6 1 .07 1.52 1.03 1.52 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.116 2.51.34 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.38.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/michael-soucek/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-slate-400 hover:text-blue-600 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.026-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.942v5.664H9.353V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.369-1.85 3.602 0 4.268 2.369 4.268 5.451v6.29zM5.337 7.433c-1.144 0-2.07-.928-2.07-2.072 0-1.144.926-2.073 2.07-2.073 1.145 0 2.073.929 2.073 2.073 0 1.144-.928 2.072-2.073 2.072zM7.119 20.452H3.554V9h3.565v11.452z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 text-xs text-slate-400 text-center tracking-wide">
          © {new Date().getFullYear()} Michael Soucek
        </div>
      </div>
    </footer>
  );
};

export default Footer;
