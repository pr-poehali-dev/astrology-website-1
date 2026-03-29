import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-astro-text text-white/80">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="mb-4">
              <span className="font-cormorant text-xl font-semibold text-white tracking-wide block">
                Елена Самади
              </span>
              <span className="text-xs text-white/50 font-golos tracking-widest uppercase">
                Профессиональный астролог
              </span>
            </div>
            <p className="text-sm font-golos text-white/60 leading-relaxed">
              Консультации без сложных терминов. Первый вопрос — бесплатно.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://t.me/elena_samadhi"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-purple-mid/40 transition-colors text-base"
                title="Telegram"
              >
                ✈
              </a>
              <a
                href="https://wa.me/79203574470"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-purple-mid/40 transition-colors text-base"
                title="WhatsApp"
              >
                📱
              </a>
              <a
                href="https://max.ru/elena_samadhi"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-purple-mid/40 transition-colors text-base"
                title="Max"
              >
                💬
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-golos font-medium text-white mb-4 text-sm uppercase tracking-widest">
              Услуги
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link to="/natal" className="text-sm font-golos text-white/60 hover:text-white transition-colors">
                  Натальная карта
                </Link>
              </li>
              <li>
                <Link to="/forecast" className="text-sm font-golos text-white/60 hover:text-white transition-colors">
                  Годовой прогноз
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm font-golos text-white/60 hover:text-white transition-colors">
                  Ответ на личный вопрос
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-golos font-medium text-white mb-4 text-sm uppercase tracking-widest">
              Контакты
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2">
                <span className="text-purple-mid mt-0.5">✉</span>
                <a href="mailto:info@elena-samadhi.ru" className="text-sm font-golos text-white/60 hover:text-white transition-colors">
                  info@elena-samadhi.ru
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-mid mt-0.5">☎</span>
                <a href="tel:+79203574470" className="text-sm font-golos text-white/60 hover:text-white transition-colors">
                  +7 920 357 4470
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-mid mt-0.5">◷</span>
                <span className="text-sm font-golos text-white/60">
                  Пн–Вс 10:00–22:00
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-mid mt-0.5">◉</span>
                <span className="text-sm font-golos text-white/60">
                  Россия, Москва,<br/>
                  ул. Маршала Бирюзова, 32 к 1
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs font-golos text-white/40">
            © 2024 Елена Самади. Все права защищены.
          </p>
          <p className="text-xs font-golos text-white/40">
            Клиенты по всему миру · Опыт 9+ лет
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
