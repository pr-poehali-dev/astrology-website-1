import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: '/', label: 'Главная' },
    { href: '/natal', label: 'Натальная карта' },
    { href: '/forecast', label: 'Годовой прогноз' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-purple-light/60">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex flex-col leading-none group">
          <span className="font-cormorant text-xl font-semibold text-astro-text tracking-wide">
            Елена Самади
          </span>
          <span className="text-xs text-astro-muted font-golos tracking-widest uppercase mt-0.5">
            Астролог
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`font-golos text-sm transition-colors duration-200 ${
                location.pathname === link.href
                  ? 'text-purple-deep font-medium'
                  : 'text-astro-muted hover:text-astro-text'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="https://t.me/elena_samadhi" target="_blank" rel="noreferrer"
            className="w-9 h-9 rounded-full bg-purple-light flex items-center justify-center hover:bg-purple-mid/20 transition-colors">
            <span className="text-purple-deep text-base">✈</span>
          </a>
          <Link to="/" className="btn-primary text-sm py-3 px-5" style={{padding: '12px 22px', fontSize: '14px'}}>
            Первый вопрос бесплатно
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-purple-light"
        >
          <Icon name={menuOpen ? 'X' : 'Menu'} size={20} className="text-purple-deep" />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-purple-light/60 px-6 py-4 flex flex-col gap-4 animate-fade-up">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMenuOpen(false)}
              className={`font-golos text-base py-2 border-b border-purple-light/50 ${
                location.pathname === link.href
                  ? 'text-purple-deep font-medium'
                  : 'text-astro-text'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="btn-primary w-full text-center block"
              style={{padding: '14px 24px', fontSize: '15px'}}
            >
              Первый вопрос бесплатно
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
