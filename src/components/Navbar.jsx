import React from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Product', href: '#product' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header className="sticky top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-xl border border-white/20 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-sm">
          <nav className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center text-white font-bold">V</div>
              <div className="leading-tight">
                <p className="text-zinc-900 font-semibold -mb-0.5">VitalEdge</p>
                <p className="text-xs text-zinc-500">Medical IoT</p>
              </div>
            </a>

            <div className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-zinc-700 hover:text-zinc-900 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="inline-flex items-center rounded-lg bg-gradient-to-r from-teal-500 to-blue-600 px-4 py-2 text-white text-sm shadow hover:opacity-95 active:opacity-90"
              >
                Get in touch
              </a>
            </div>

            <button
              aria-label="Toggle Menu"
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-zinc-200 text-zinc-700"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>

          {open && (
            <div className="lg:hidden border-t border-zinc-200 px-4 py-3">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-sm text-zinc-700 hover:text-zinc-900"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-teal-500 to-blue-600 px-4 py-2 text-white text-sm shadow"
                >
                  Get in touch
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
