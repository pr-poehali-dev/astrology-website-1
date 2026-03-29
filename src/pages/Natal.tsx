import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

const ASTROLOGER_PHOTO = 'https://cdn.poehali.dev/files/91cae771-7a1a-4a08-bbd0-f331bfb3e789.jpg';
const DIPLOMA_PHOTO = 'https://cdn.poehali.dev/files/00eb1383-705d-4dca-8739-62c7ef5c0f8d.jpg';

const trustItems = [
  { icon: '✦', text: 'Первый вопрос бесплатно' },
  { icon: '◈', text: 'Минимальный аванс' },
  { icon: '✓', text: 'Оплата после результата' },
  { icon: '◎', text: 'Видео-пояснение' },
  { icon: '◐', text: 'Сопровождение 30 дней' },
  { icon: '◉', text: 'Конфиденциальность' },
];

const whenNeeded = [
  { icon: '◈', text: 'Чувствуете, что живёте «не своей» жизнью' },
  { icon: '✦', text: 'Сложно принять важное решение' },
  { icon: '◎', text: 'Хотите понять свои сильные стороны и таланты' },
  { icon: '◐', text: 'Повторяющиеся паттерны в отношениях или работе' },
  { icon: '◉', text: 'Готовитесь к важному жизненному этапу' },
  { icon: '✓', text: 'Просто хотите лучше понять себя' },
];

const whatYouGet = [
  { icon: '◉', title: 'Разбор личности', desc: 'Ваши сильные стороны, таланты, ключевые мотивы и глубинные ценности' },
  { icon: '◈', title: 'Карьера и призвание', desc: 'В каких сферах вы наиболее сильны и какие направления дадут развитие' },
  { icon: '♡', title: 'Отношения', desc: 'Как вы строите связи, что важно в партнёрстве, зоны роста' },
  { icon: '◐', title: 'Жизненные периоды', desc: 'Ключевые циклы и наиболее значимые периоды вашей жизни' },
  { icon: '✦', title: 'Практические рекомендации', desc: 'Конкретные выводы, которые можно применить прямо сейчас' },
  { icon: '◎', title: 'Видео-пояснение', desc: 'Дополнительное видео, где объясняю ключевые моменты разбора' },
];

const tariffs = [
  {
    name: 'Стандартный формат',
    subtitle: 'Письменный разбор',
    price: '4 900 ₽',
    prepayNote: 'Предоплата 400 рублей. Остаток — после получения разбора.',
    popular: false,
    features: [
      'Разбор личности',
      'Точки роста',
      'Обзор основных сфер жизни',
      'Видео-пояснение',
      '15–18 страниц',
      'Подготовка: 2–3 дня',
      'Поддержка в чате 30 дней',
    ],
    caption: 'Подходит, если вы хотите лучше понять себя и получить ясные ориентиры в жизни.',
  },
  {
    name: 'Расширенный формат',
    subtitle: 'Глубокий разбор',
    price: '7 900 ₽',
    prepayNote: 'Предоплата 900 рублей. Остаток — после получения разбора.',
    popular: true,
    features: [
      'Всё, что входит в базовый',
      'Глубокий разбор причин',
      'Полный разбор всех сфер',
      'Детальный анализ аспектов',
      'Повторяющиеся сценарии',
      '25–30 страниц',
      'Поддержка в чате 30 дней',
    ],
    caption: 'Подходит, если вы хотите увидеть полную картину и глубоко разобраться в причинах происходящего.',
  },
  {
    name: 'Online-встреча',
    subtitle: '+видеоразбор до встречи',
    price: '10 900 ₽',
    prepayNote: 'Предоплата 2900 рублей. Остаток — после получения разбора.',
    popular: false,
    features: [
      'Всё, что входит в базовый',
      'Глубокий разбор причин',
      'Полный разбор всех сфер',
      'Детальный анализ аспектов',
      'Повторяющиеся сценарии',
      '1–1,5 часа личной встречи',
      'Поддержка в чате 30 дней',
    ],
    caption: 'Подходит, если вам важно живое общение и возможность задать вопросы лично.',
  },
];

const reviews = [
  { name: 'Мария К.', text: 'Очень точный разбор! Елена описала мои качества так, как будто знала меня всю жизнь. Особенно помогло понять причины повторяющихся ситуаций в работе.', date: 'Ноябрь 2024' },
  { name: 'Анна В.', text: 'Делала натальную карту перед важным решением о переезде. Разбор был очень конкретным — с рекомендациями и сроками. Теперь понимаю, что делаю правильно.', date: 'Октябрь 2024' },
  { name: 'Ольга Д.', text: 'Много лет интересовалась астрологией, но всегда казалось слишком сложным. Елена объясняет понятно, без терминов. Перечитываю разбор снова и нахожу новые смыслы.', date: 'Сентябрь 2024' },
];

const advantages = [
  {
    svgPath: 'M12 3c0 0-4 4-4 9s4 9 4 9m0-18c0 0 4 4 4 9s-4 9-4 9M3 12h18M4.2 7h15.6M4.2 17h15.6',
    title: 'Работа под ваш запрос',
    desc: 'Разбор строится вокруг того, что важно именно для вас, а не по шаблону.',
  },
  {
    svgPath: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z',
    title: 'Возможность корректировки',
    desc: 'После получения разбора вы можете задать уточняющие вопросы.',
  },
  {
    svgPath: 'M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
    title: 'Понятно и доступно',
    desc: 'Всё объясняется простым языком, без сложных терминов.',
  },
  {
    svgPath: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
    title: 'Конфиденциально',
    desc: 'Ваши данные и личные вопросы остаются только между нами.',
  },
];

const Natal = () => {
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
              Полная расшифровка<br />
              <em className="not-italic text-purple-deep">натальной карты</em>
            </h1>
            <p className="section-subtitle mb-8 max-w-xl">
              Подробный разбор личности, отношений, карьеры и ключевых жизненных периодов — с практическими выводами и рекомендациями
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
              <a href="#tariffs" className="btn-primary">Заказать натальную карту</a>
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
            <h2 className="section-title mb-3">Когда особенно нужна натальная карта</h2>
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
            <p className="section-subtitle max-w-lg mx-auto">Разбор составляется под ваш конкретный запрос</p>
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
      <section id="tariffs" className="py-20 section-alt">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="divider-soft mx-auto mb-4" />
            <h2 className="section-title mb-3">Тарифы</h2>
            <p className="section-subtitle max-w-lg mx-auto">Выберите подходящий формат</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10 items-stretch">
            {tariffs.map((t, i) => (
              <div
                key={i}
                className="flex flex-col rounded-2xl overflow-hidden"
                style={{
                  background: '#fff',
                  border: t.popular ? '1.5px solid var(--color-purple-mid)' : '1.5px solid #e8dff4',
                  boxShadow: '0 2px 12px 0 rgba(142,59,158,0.06)',
                }}
              >
                {/* Шапка */}
                <div
                  className="px-7 pt-7 pb-6"
                  style={{
                    background: t.popular
                      ? 'linear-gradient(135deg, #7a2a8e 0%, #a262c2 100%)'
                      : 'linear-gradient(135deg, #8e3b9e 0%, #b57fd4 100%)',
                  }}
                >
                  {t.popular && (
                    <p className="font-golos text-xs tracking-widest uppercase mb-3" style={{ color: 'rgba(255,255,255,0.7)', letterSpacing: '0.12em' }}>
                      Популярный выбор
                    </p>
                  )}
                  <h3 className="font-cormorant font-semibold text-white mb-1" style={{ fontSize: '1.45rem', lineHeight: 1.2 }}>
                    {t.name}
                  </h3>
                  <p className="font-golos text-sm" style={{ color: 'rgba(255,255,255,0.78)' }}>
                    {t.subtitle}
                  </p>
                </div>

                {/* Цена */}
                <div className="px-7 pt-6 pb-4" style={{ borderBottom: '1px solid #f0eaf8' }}>
                  <p className="font-cormorant font-bold" style={{ fontSize: '2.2rem', color: 'var(--color-purple-deep)', lineHeight: 1 }}>
                    {t.price}
                  </p>
                  <p className="font-golos text-xs mt-2 leading-relaxed" style={{ color: 'var(--color-purple-mid)' }}>
                    {t.prepayNote}
                  </p>
                </div>

                {/* Список */}
                <div className="flex-1 px-7 pt-4 pb-6">
                  <ul className="divide-y" style={{ borderColor: '#f0eaf8' }}>
                    {t.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-3 py-2.5">
                        <span
                          className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                          style={{ background: 'var(--color-purple-light)', color: 'var(--color-purple-deep)' }}
                        >
                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                            <path d="M1 4L3.8 7L9 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                        <span className="font-golos text-sm" style={{ color: 'var(--color-text)' }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Кнопка + подпись */}
                <div className="px-7 pb-8 pt-2 flex flex-col items-center gap-3">
                  <a
                    href="#form"
                    className="font-golos font-medium px-8 py-2.5 rounded-full text-sm transition-all"
                    style={{
                      background: t.popular ? 'var(--color-purple-deep)' : 'transparent',
                      color: t.popular ? '#fff' : 'var(--color-purple-deep)',
                      border: t.popular ? '1.5px solid var(--color-purple-deep)' : '1.5px solid var(--color-purple-mid)',
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.background = 'var(--color-purple-deep)';
                      el.style.color = '#fff';
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      if (t.popular) {
                        el.style.background = 'var(--color-purple-deep)';
                        el.style.color = '#fff';
                      } else {
                        el.style.background = 'transparent';
                        el.style.color = 'var(--color-purple-deep)';
                      }
                    }}
                  >
                    Заказать
                  </a>
                  <p className="font-golos text-xs text-center leading-relaxed" style={{ color: '#a88bbf', maxWidth: '220px' }}>
                    {t.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Нижняя плашка */}
          <div
            className="flex items-center justify-center gap-3 max-w-2xl mx-auto px-6 py-4 rounded-2xl"
            style={{ background: 'var(--color-purple-light)', border: '1px solid #ddd0ef' }}
          >
            <span style={{ color: 'var(--color-purple-mid)', fontSize: '1rem' }}>✦</span>
            <p className="font-cormorant text-base text-center" style={{ color: 'var(--color-text)' }}>
              Основная сумма оплачивается <strong>после получения готового разбора</strong>
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
      <section className="py-20 section-alt">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="divider-soft mx-auto mb-4" />
            <h2 className="section-title mb-3">Почему это удобно и понятно</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {advantages.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-5 rounded-2xl p-7"
                style={{
                  background: '#fff',
                  border: '1.5px solid #ede3f5',
                  boxShadow: '0 2px 14px 0 rgba(142,59,158,0.05)',
                }}
              >
                {/* Иконка */}
                <div
                  className="flex-shrink-0 flex items-center justify-center rounded-xl"
                  style={{
                    width: 52,
                    height: 52,
                    background: 'linear-gradient(135deg, #f3eaf9 0%, #ede3f5 100%)',
                    border: '1px solid #ddd0ef',
                  }}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--color-purple-deep)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={item.svgPath} />
                  </svg>
                </div>

                {/* Текст */}
                <div>
                  <h3
                    className="font-cormorant font-semibold mb-1.5"
                    style={{ fontSize: '1.2rem', lineHeight: 1.25, color: 'var(--color-text)' }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="font-golos leading-relaxed"
                    style={{ fontSize: '0.875rem', color: '#7a6a8a', maxWidth: 280 }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TELEGRAM CHANNEL */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div
            className="rounded-3xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #f7f2fd 0%, #ede3f5 100%)',
              border: '1.5px solid #ddd0ef',
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* Левая колонка — текст */}
              <div className="p-10 md:p-12 flex flex-col justify-center">
                {/* Плашка канала */}
                <div className="flex items-center gap-3 mb-7">
                  <div
                    className="flex items-center justify-center rounded-xl flex-shrink-0"
                    style={{
                      width: 44,
                      height: 44,
                      background: 'linear-gradient(135deg, #8e3b9e 0%, #b57fd4 100%)',
                    }}
                  >
                    {/* Telegram icon */}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M21.8 3.2L2.4 10.7c-1.3.5-1.3 1.3-.2 1.6l4.8 1.5 1.9 5.7c.2.7.5.9 1 .9.4 0 .6-.2.9-.4l2.6-2.5 5.1 3.7c.9.5 1.6.3 1.9-.9l3.3-15.6c.4-1.5-.5-2.1-1.9-1.5z" fill="white" opacity=".9"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-golos font-medium text-sm" style={{ color: 'var(--color-text)' }}>
                      Telegram-канал
                    </p>
                    <p className="font-golos text-xs" style={{ color: 'var(--color-purple-mid)' }}>
                      @samadhielena
                    </p>
                  </div>
                </div>

                <h2
                  className="font-cormorant font-semibold mb-4"
                  style={{ fontSize: 'clamp(1.6rem, 3vw, 2.1rem)', lineHeight: 1.2, color: 'var(--color-text)' }}
                >
                  Загляните в мой Telegram-канал
                </h2>

                <p className="font-golos leading-relaxed mb-4" style={{ fontSize: '0.925rem', color: '#5a4a6a' }}>
                  В Telegram я публикую полезные материалы, наблюдения, разборы и практические заметки по астрологии. Это хороший способ познакомиться с моим подходом, посмотреть стиль работы и понять, насколько вам подходит такой формат.
                </p>

                <p className="font-golos leading-relaxed mb-8" style={{ fontSize: '0.875rem', color: '#8a7a9a' }}>
                  Вы можете перейти, посмотреть публикации и убедиться, что перед вами реальный практикующий специалист.
                </p>

                <div className="flex flex-col items-start gap-3">
                  <a
                    href="https://t.me/samadhielena"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2.5 font-golos font-medium px-7 py-3 rounded-full transition-all"
                    style={{
                      background: 'linear-gradient(135deg, #8e3b9e 0%, #a971c2 100%)',
                      color: '#fff',
                      fontSize: '0.9rem',
                      boxShadow: '0 4px 16px rgba(142,59,158,0.25)',
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M21.8 3.2L2.4 10.7c-1.3.5-1.3 1.3-.2 1.6l4.8 1.5 1.9 5.7c.2.7.5.9 1 .9.4 0 .6-.2.9-.4l2.6-2.5 5.1 3.7c.9.5 1.6.3 1.9-.9l3.3-15.6c.4-1.5-.5-2.1-1.9-1.5z" fill="white"/>
                    </svg>
                    Перейти в Telegram-канал
                  </a>
                  <p className="font-golos text-xs" style={{ color: '#9a8aaa' }}>
                    Подписывайтесь, если хотите получать полезные материалы по астрологии
                  </p>
                </div>
              </div>

              {/* Правая колонка — декоративная */}
              <div
                className="hidden md:flex flex-col items-center justify-center p-12 relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #8e3b9e 0%, #a971c2 60%, #c490d8 100%)' }}
              >
                {/* Декоративные круги */}
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10" style={{ background: '#fff', transform: 'translate(30%, -30%)' }} />
                <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full opacity-10" style={{ background: '#fff', transform: 'translate(-30%, 30%)' }} />

                {/* Центральный символ */}
                <div
                  className="relative z-10 flex flex-col items-center gap-6"
                >
                  <div
                    className="flex items-center justify-center rounded-2xl"
                    style={{
                      width: 80,
                      height: 80,
                      background: 'rgba(255,255,255,0.15)',
                      border: '1.5px solid rgba(255,255,255,0.3)',
                    }}
                  >
                    <svg width="38" height="38" viewBox="0 0 24 24" fill="none">
                      <path d="M21.8 3.2L2.4 10.7c-1.3.5-1.3 1.3-.2 1.6l4.8 1.5 1.9 5.7c.2.7.5.9 1 .9.4 0 .6-.2.9-.4l2.6-2.5 5.1 3.7c.9.5 1.6.3 1.9-.9l3.3-15.6c.4-1.5-.5-2.1-1.9-1.5z" fill="white"/>
                    </svg>
                  </div>
                  <div className="text-center">
                    <p className="font-cormorant text-white font-semibold mb-1" style={{ fontSize: '1.3rem' }}>
                      @samadhielena
                    </p>
                    <p className="font-golos text-xs" style={{ color: 'rgba(255,255,255,0.7)' }}>
                      астрология · практика · разборы
                    </p>
                  </div>
                  {/* Декоративные звёздочки */}
                  <div className="flex gap-3" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.8rem', letterSpacing: '0.2em' }}>
                    ✦ ✦ ✦
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATE PLACEHOLDER */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="divider-soft mx-auto mb-6" />
          <h2 className="section-title mb-4">Сертификаты и образование</h2>
          <p className="section-subtitle mb-8">Профессиональная подготовка и подтверждённая квалификация</p>
          <div className="rounded-2xl overflow-hidden shadow-md border border-purple-light/40 inline-block">
            <img
              src={DIPLOMA_PHOTO}
              alt="Диплом астрологической академии — Самади Елена"
              className="w-full max-w-lg mx-auto block"
            />
          </div>
        </div>
      </section>

      {/* NOT READY */}
      <section className="py-16 section-alt">
        <div className="max-w-3xl mx-auto px-6">
          <div className="card-soft p-8 md:p-10 text-center bg-purple-pale">
            <span className="text-4xl block mb-4">✦</span>
            <h2 className="section-title mb-4">Не готовы сразу заказывать полную консультацию?</h2>
            <p className="section-subtitle mb-6 max-w-lg mx-auto">
              Задайте один вопрос бесплатно. Без обязательств — просто посмотрите, как это работает.
            </p>
            <a href="#form" className="btn-primary">
              Задать первый вопрос бесплатно
            </a>
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
                Елена Самади — астролог с 9+ годами практики. Работаю с клиентами из России, Европы и США.
              </p>
              <p className="text-base text-astro-muted font-golos leading-relaxed mb-5">
                Консультирую без сложных терминов — с практическими выводами и рекомендациями, которые можно применять в реальной жизни.
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
            <h2 className="section-title mb-2">Заказать натальную карту</h2>
            <p className="section-subtitle">Оставьте заявку, и я выйду на связь в ближайшее время</p>
          </div>
          <ContactForm bgLight />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Natal;