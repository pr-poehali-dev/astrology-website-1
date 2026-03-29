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
    name: 'Стандартный',
    price: '4 900 ₽',
    prepay: 'Предоплата 400 ₽',
    popular: false,
    features: ['15–18 страниц разбора', 'Видео-пояснение', 'Срок: 2–3 дня', 'Чат 30 дней'],
  },
  {
    name: 'Расширенный',
    price: '7 900 ₽',
    prepay: 'Предоплата 900 ₽',
    popular: true,
    features: ['Глубокий разбор', '25–30 страниц', 'Видео-пояснение', 'Чат 30 дней', 'Все сферы жизни'],
  },
  {
    name: 'Online-встреча',
    price: '10 900 ₽',
    prepay: 'Предоплата 2 900 ₽',
    popular: false,
    features: ['Всё из расширенного', '1–1,5 часа личной встречи', 'Запись встречи', 'Чат 30 дней'],
  },
];

const reviews = [
  { name: 'Мария К.', text: 'Очень точный разбор! Елена описала мои качества так, как будто знала меня всю жизнь. Особенно помогло понять причины повторяющихся ситуаций в работе.', date: 'Ноябрь 2024' },
  { name: 'Анна В.', text: 'Делала натальную карту перед важным решением о переезде. Разбор был очень конкретным — с рекомендациями и сроками. Теперь понимаю, что делаю правильно.', date: 'Октябрь 2024' },
  { name: 'Ольга Д.', text: 'Много лет интересовалась астрологией, но всегда казалось слишком сложным. Елена объясняет понятно, без терминов. Перечитываю разбор снова и нахожу новые смыслы.', date: 'Сентябрь 2024' },
];

const advantages = [
  { icon: '◈', title: 'Работа под ваш запрос', desc: 'Разбор строится вокруг того, что важно именно для вас — не по шаблону' },
  { icon: '✓', title: 'Возможность корректировки', desc: 'После получения разбора вы можете задать уточняющие вопросы' },
  { icon: '◎', title: 'Без жаргона', desc: 'Всё на понятном языке — вам не нужно знать астрологию' },
  { icon: '◐', title: 'Конфиденциально', desc: 'Ваши данные и вопросы остаются только между нами' },
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
              ✦ Основная сумма оплачивается <strong>после получения готового разбора</strong>
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
            <h2 className="section-title mb-3">Почему это удобно и понятно</h2>
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