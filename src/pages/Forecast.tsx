import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

const ASTROLOGER_PHOTO = 'https://cdn.poehali.dev/projects/d891ad6e-28b9-4ac2-91d3-915cf9ec7d67/files/eaa16d23-ab1c-46c5-a146-2a282d4abd27.jpg';

const trustItems = [
  { icon: '✦', text: 'Первый вопрос бесплатно' },
  { icon: '◈', text: 'Минимальный аванс' },
  { icon: '✓', text: 'Оплата после результата' },
  { icon: '◎', text: 'Прогноз под личный запрос' },
  { icon: '◐', text: 'Сопровождение 30 дней' },
];

const whenNeeded = [
  { icon: '◈', text: 'Хотите понять, какой год вас ждёт' },
  { icon: '✦', text: 'Планируете важные решения на год вперёд' },
  { icon: '◎', text: 'Нужно знать лучшее время для старта' },
  { icon: '◐', text: 'Много неопределённости и хочется ориентиров' },
  { icon: '◉', text: 'Готовитесь к переменам — переезд, смена работы' },
  { icon: '✓', text: 'Хотите использовать периоды по максимуму' },
];

const whatYouGet = [
  { icon: '◉', title: 'Ключевые периоды', desc: 'Благоприятные и сложные месяцы с конкретными датами и рекомендациями' },
  { icon: '◈', title: 'Карьера и финансы', desc: 'Лучшее время для старта, переговоров, инвестиций и смен' },
  { icon: '♡', title: 'Отношения и окружение', desc: 'Периоды для сближения, разговоров и важных решений' },
  { icon: '◐', title: 'Здоровье и ресурс', desc: 'Когда восстанавливаться, а когда можно брать больше нагрузки' },
  { icon: '✦', title: 'Ваш личный запрос', desc: 'Раздел под то, что важно именно вам прямо сейчас' },
  { icon: '◎', title: 'Итоговые рекомендации', desc: 'Что делать, чего избегать и на что делать ставку в этом году' },
];

const tariffs = [
  {
    name: 'Базовый прогноз',
    price: '5 900 ₽',
    prepay: 'Предоплата 900 ₽',
    popular: false,
    features: ['Ключевые периоды на 12 месяцев', 'Карьера и финансы', 'Рекомендации', 'Чат 30 дней'],
  },
  {
    name: 'Расширенный прогноз',
    price: '7 900 ₽',
    prepay: 'Предоплата 900 ₽',
    popular: true,
    features: ['Все сферы жизни', 'Ваш личный запрос', 'Глубокий разбор', 'Видео-пояснение', 'Чат 30 дней'],
  },
  {
    name: 'Прогноз + онлайн',
    price: '10 900 ₽',
    prepay: 'Предоплата 2 900 ₽',
    popular: false,
    features: ['Всё из расширенного', '1–1,5 часа встречи', 'Запись встречи', 'Разбор под вопросы'],
  },
];

const reviews = [
  { name: 'Ирина С.', text: 'Заказывала прогноз перед началом нового года. Елена расписала каждый месяц так подробно, что я практически жила по этому плану. Многое совпало.', date: 'Декабрь 2024' },
  { name: 'Светлана Н.', text: 'Прогноз помог понять, когда не стоит торопиться с решениями. Я смогла спокойно дождаться нужного момента — и всё получилось.', date: 'Ноябрь 2024' },
  { name: 'Екатерина М.', text: 'Сделала прогноз в период неопределённости. Стало намного спокойнее — появились ориентиры. Елена объясняет очень понятно и тепло.', date: 'Октябрь 2024' },
];

const advantages = [
  { icon: '◈', title: 'Под ваш запрос', desc: 'Прогноз строится вокруг ваших приоритетов — карьера, отношения, переезд или что-то личное' },
  { icon: '✓', title: 'Конкретные сроки', desc: 'Не «когда-нибудь», а месяц и неделя. Вы знаете, когда действовать' },
  { icon: '◎', title: 'Без мистики', desc: 'Практические выводы — что делать, что отложить и на что обратить внимание' },
  { icon: '◐', title: 'Корректировка включена', desc: 'Можете задать уточняющие вопросы после получения прогноза' },
];

const Forecast = () => {
  return (
    <div className="min-h-screen font-golos" style={{ background: 'var(--color-bg)', color: 'var(--color-text)' }}>
      <Header />

      {/* HERO */}
      <section className="hero-bg relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-purple-light/40 blur-3xl" />
          <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-purple-light/30 blur-2xl" />
        </div>
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl animate-fade-up">
            <p className="star-decor mb-6">✦ ✦ ✦</p>
            <h1 className="section-title mb-5" style={{ fontSize: 'clamp(36px, 5.5vw, 60px)', lineHeight: 1.1 }}>
              Персональный<br />
              <em className="not-italic text-purple-deep">прогноз на год</em>
            </h1>
            <p className="section-subtitle mb-8 max-w-xl">
              Ключевые периоды, важные решения и приоритетные сферы на ближайшие 12 месяцев — с практическими рекомендациями
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {trustItems.map((item, i) => (
                <div key={i} className="trust-pill">
                  <span className="text-purple-mid text-xs">{item.icon}</span>
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="#tariffs" className="btn-primary">Заказать прогноз на год</a>
              <a href="#form" className="btn-secondary">Задать первый вопрос бесплатно</a>
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="form" className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-8">
            <div className="divider-soft mx-auto mb-4" />
            <h2 className="section-title mb-2">Оставить заявку</h2>
            <p className="section-subtitle">Отвечу в течение нескольких часов</p>
          </div>
          <ContactForm bgLight />
        </div>
      </section>

      {/* WHEN NEEDED */}
      <section className="py-16 section-alt">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="divider-soft mx-auto mb-4" />
            <h2 className="section-title mb-3">Когда особенно нужен прогноз</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {whenNeeded.map((item, i) => (
              <div key={i} className="card-soft p-5 flex items-start gap-3">
                <span className="text-purple-mid text-base mt-0.5">{item.icon}</span>
                <p className="font-golos text-sm text-astro-text leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="divider-soft mx-auto mb-4" />
            <h2 className="section-title mb-3">Что вы получите</h2>
            <p className="section-subtitle max-w-lg mx-auto">Прогноз под ваш конкретный запрос и приоритеты</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatYouGet.map((item, i) => (
              <div key={i} className="card-soft p-6">
                <span className="text-2xl text-purple-mid mb-3 block">{item.icon}</span>
                <h3 className="font-cormorant text-xl font-medium text-astro-text mb-2">{item.title}</h3>
                <p className="text-sm text-astro-muted font-golos leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TARIFFS */}
      <section id="tariffs" className="py-16 section-alt">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="divider-soft mx-auto mb-4" />
            <h2 className="section-title mb-3">Тарифы</h2>
            <p className="section-subtitle max-w-lg mx-auto">Выберите подходящий формат</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {tariffs.map((t, i) => (
              <div key={i} className={`card-soft p-8 relative flex flex-col ${t.popular ? 'ring-1 ring-purple-mid/30' : ''}`}>
                {t.popular && (
                  <div className="absolute -top-3 left-6">
                    <span className="badge-popular">Популярный</span>
                  </div>
                )}
                <h3 className="font-cormorant text-2xl font-medium text-astro-text mb-1">{t.name}</h3>
                <p className="font-cormorant text-3xl font-semibold text-purple-deep mb-1">{t.price}</p>
                <p className="text-xs text-astro-muted font-golos mb-5">{t.prepay}</p>
                <ul className="flex flex-col gap-2 flex-1 mb-6">
                  {t.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm font-golos text-astro-text">
                      <span className="text-purple-mid mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#form" className={t.popular ? 'btn-primary text-center' : 'btn-secondary text-center'}>
                  Заказать
                </a>
              </div>
            ))}
          </div>
          <div className="bg-purple-light/60 border border-purple-mid/20 rounded-2xl p-5 text-center max-w-2xl mx-auto">
            <p className="font-cormorant text-lg text-astro-text">
              ✦ Основная сумма оплачивается <strong>после получения готового прогноза</strong>
            </p>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="divider-soft mx-auto mb-4" />
            <h2 className="section-title mb-3">Отзывы</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {reviews.map((r, i) => (
              <div key={i} className="card-soft p-6">
                <p className="text-purple-mid text-lg mb-3">✦✦✦✦✦</p>
                <p className="text-sm font-golos text-astro-text leading-relaxed mb-4 italic">«{r.text}»</p>
                <div className="flex items-center justify-between pt-3 border-t border-purple-light/50">
                  <p className="font-golos font-medium text-sm text-astro-text">{r.name}</p>
                  <p className="text-xs text-astro-muted">{r.date}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="https://t.me/otzivsamadhi" target="_blank" rel="noreferrer" className="btn-secondary">
              Все отзывы в Telegram ✈
            </a>
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="py-16 section-alt">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="divider-soft mx-auto mb-4" />
            <h2 className="section-title mb-3">Почему это удобно</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((item, i) => (
              <div key={i} className="text-center p-6">
                <div className="w-12 h-12 rounded-2xl bg-purple-light flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-deep text-lg">{item.icon}</span>
                </div>
                <h3 className="font-cormorant text-xl font-medium text-astro-text mb-2">{item.title}</h3>
                <p className="text-sm text-astro-muted font-golos leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SHORT */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="w-64 h-72 rounded-3xl overflow-hidden shadow-xl">
                <img src={ASTROLOGER_PHOTO} alt="Елена Самади" className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <div className="divider-soft mb-4" />
              <h2 className="section-title mb-4">Кратко обо мне</h2>
              <p className="section-subtitle mb-4">
                Елена Самади — астролог с 9+ годами практики. Составляю прогнозы для клиентов из России, Европы и США.
              </p>
              <p className="text-base text-astro-muted font-golos leading-relaxed mb-5">
                Мои прогнозы — это не предсказания, а инструмент планирования. Практические ориентиры, которые помогают принимать решения с пониманием своего времени.
              </p>
              <div className="flex flex-wrap gap-2">
                <div className="trust-pill"><span className="text-purple-mid text-xs">◉</span><span className="text-sm">9+ лет практики</span></div>
                <div className="trust-pill"><span className="text-purple-mid text-xs">✦</span><span className="text-sm">Клиенты по всему миру</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 section-alt">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-8">
            <div className="divider-soft mx-auto mb-4" />
            <h2 className="section-title mb-2">Заказать прогноз на год</h2>
            <p className="section-subtitle">Оставьте заявку, и я выйду на связь в ближайшее время</p>
          </div>
          <ContactForm bgLight />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Forecast;
