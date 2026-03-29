import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import Icon from '@/components/ui/icon';

const ASTROLOGER_PHOTO = 'https://cdn.poehali.dev/files/91cae771-7a1a-4a08-bbd0-f331bfb3e789.jpg';

const trustItems = [
  { icon: '✦', text: 'Первый вопрос бесплатно' },
  { icon: '◈', text: 'Минимальный аванс' },
  { icon: '✓', text: 'Оплата после результата' },
  { icon: '◎', text: 'Работа под ваш запрос' },
  { icon: '◐', text: 'Практический итог' },
];

const queries = [
  { icon: '♡', title: 'Отношения и партнёрство', desc: 'Совместимость, разборы пар, понимание динамики' },
  { icon: '◈', title: 'Карьера и призвание', desc: 'Ваши сильные стороны, лучшие направления и периоды' },
  { icon: '◎', title: 'Финансы и достаток', desc: 'Когда и как развивать материальную сферу' },
  { icon: '✦', title: 'Здоровье и ресурсы', desc: 'Слабые места и способы поддержки' },
  { icon: '◐', title: 'Переезд и изменения', desc: 'Подходящее время и направление для перемен' },
  { icon: '◉', title: 'Личностный рост', desc: 'Ваши глубинные мотивы, таланты и ограничения' },
];

const howItWorks = [
  { step: '01', title: 'Оставляете заявку', desc: 'Коротко рассказываете о своём запросе. Я выхожу на связь в течение нескольких часов.' },
  { step: '02', title: 'Вносите предоплату', desc: 'Небольшая сумма для фиксации даты — основная оплата только после получения разбора.' },
  { step: '03', title: 'Получаете готовый разбор', desc: 'Документ с практическими выводами, рекомендациями и видео-пояснением.' },
  { step: '04', title: 'Задаёте вопросы', desc: 'В течение 30 дней я отвечаю на уточняющие вопросы и помогаю разобраться с ситуацией.' },
];

const services = [
  {
    href: '/natal',
    popular: true,
    icon: '◉',
    title: 'Натальная карта',
    desc: 'Полный разбор личности, отношений, карьеры и ключевых жизненных периодов',
    price: 'от 4 900 ₽',
    prepay: 'Предоплата 400 ₽',
  },
  {
    href: '/forecast',
    popular: false,
    icon: '◐',
    title: 'Годовой прогноз',
    desc: 'Ключевые периоды, благоприятные окна и рекомендации на ближайшие 12 месяцев',
    price: 'от 5 900 ₽',
    prepay: 'Предоплата 900 ₽',
  },
  {
    href: '/',
    popular: false,
    icon: '✦',
    title: 'Личный вопрос',
    desc: 'Развёрнутый ответ на один конкретный вопрос. Первый — бесплатно',
    price: 'Первый бесплатно',
    prepay: '',
  },
];

const whyTrust = [
  { icon: '◈', title: 'Без давления', desc: 'Начните с бесплатного вопроса. Переходите к большой консультации только когда будете готовы.' },
  { icon: '✓', title: 'Понятный язык', desc: 'Никаких сложных терминов. Только практические выводы, понятные рекомендации.' },
  { icon: '◎', title: 'Оплата по факту', desc: 'Вносите небольшой аванс, основную сумму — только после получения готового разбора.' },
  { icon: '◐', title: 'Сопровождение 30 дней', desc: 'После консультации я остаюсь на связи и отвечаю на дополнительные вопросы.' },
];

const Home = () => {
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
            <p className="star-decor mb-6 font-golos">✦ ✦ ✦</p>
            <h1 className="section-title mb-5" style={{ fontSize: 'clamp(38px, 6vw, 64px)', lineHeight: 1.1 }}>
              Консультации<br />
              <em className="not-italic" style={{ color: 'var(--color-purple-deep)' }}>профессионального</em><br />
              астролога
            </h1>
            <p className="section-subtitle mb-8 max-w-xl">
              Натальная карта, прогнозы и ответы на личные вопросы — без сложных терминов, с практическими выводами и рекомендациями
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
              <a href="#form" className="btn-primary">
                Задать первый вопрос бесплатно
              </a>
              <a href="#services" className="btn-secondary">
                Заказать консультацию
              </a>
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

      {/* QUERIES */}
      <section className="py-16 section-alt">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="divider-soft mx-auto mb-4" />
            <h2 className="section-title mb-3">Какие запросы можно решить</h2>
            <p className="section-subtitle max-w-xl mx-auto">
              Астрология даёт ответы там, где рациональный анализ буксует
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {queries.map((q, i) => (
              <div key={i} className="card-soft p-6">
                <span className="text-2xl text-purple-mid mb-3 block">{q.icon}</span>
                <h3 className="font-cormorant text-xl font-medium text-astro-text mb-2">{q.title}</h3>
                <p className="text-sm text-astro-muted font-golos leading-relaxed">{q.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY TRUST */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="divider-soft mx-auto mb-4" />
            <h2 className="section-title mb-3">Почему клиентам спокойнее</h2>
            <p className="section-subtitle max-w-xl mx-auto">
              Я выстраивала работу так, чтобы вам не нужно было рисковать
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyTrust.map((item, i) => (
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

      {/* ABOUT */}
      <section className="py-16 section-alt">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="divider-soft mb-4" />
              <h2 className="section-title mb-4">О специалисте</h2>
              <p className="section-subtitle mb-5">
                Меня зовут Елена Самади. Раньше я работала бухгалтером — и именно в тот период, когда всё шло по плану, но что-то внутри не давало покоя, я пришла к астрологии.
              </p>
              <p className="text-base text-astro-muted font-golos leading-relaxed mb-6">
                За 9 лет практики я провела тысячи консультаций для клиентов из России, Европы и США. Астрология для меня — это не предсказания, а инструмент понимания себя и своих периодов.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="trust-pill">
                  <span className="text-purple-mid text-xs">◉</span>
                  <span className="text-sm">9+ лет практики</span>
                </div>
                <div className="trust-pill">
                  <span className="text-purple-mid text-xs">✦</span>
                  <span className="text-sm">Клиенты по всему миру</span>
                </div>
                <div className="trust-pill">
                  <span className="text-purple-mid text-xs">◈</span>
                  <span className="text-sm">Понятный язык</span>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                <div className="w-72 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden shadow-xl">
                  <img
                    src={ASTROLOGER_PHOTO}
                    alt="Елена Самади — астролог"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-4 py-3 shadow-md border border-purple-light/50">
                  <p className="font-cormorant text-lg font-medium text-astro-text">Елена Самади</p>
                  <p className="text-xs text-astro-muted font-golos">Профессиональный астролог</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="divider-soft mx-auto mb-4" />
            <h2 className="section-title mb-3">Как проходит работа</h2>
            <p className="section-subtitle max-w-xl mx-auto">Просто и прозрачно</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step, i) => (
              <div key={i} className="relative">
                {i < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-purple-light z-0" style={{ width: 'calc(100% - 2rem)', left: '80%' }} />
                )}
                <div className="card-soft p-6 relative z-10">
                  <span className="font-cormorant text-4xl font-light text-purple-light block mb-3" style={{ color: 'rgba(169,113,194,0.4)' }}>
                    {step.step}
                  </span>
                  <h3 className="font-cormorant text-xl font-medium text-astro-text mb-2">{step.title}</h3>
                  <p className="text-sm text-astro-muted font-golos leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 section-alt">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="divider-soft mx-auto mb-4" />
            <h2 className="section-title mb-3">Популярные услуги</h2>
            <p className="section-subtitle max-w-xl mx-auto">Выберите подходящий формат консультации</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className={`card-soft p-8 relative flex flex-col ${s.popular ? 'border-purple-mid/30 ring-1 ring-purple-mid/20' : ''}`}>
                {s.popular && (
                  <div className="absolute -top-3 left-6">
                    <span className="badge-popular">Популярное</span>
                  </div>
                )}
                <span className="text-3xl text-purple-mid mb-4 block">{s.icon}</span>
                <h3 className="font-cormorant text-2xl font-medium text-astro-text mb-2">{s.title}</h3>
                <p className="text-sm text-astro-muted font-golos leading-relaxed flex-1 mb-5">{s.desc}</p>
                <div className="flex items-end justify-between mb-5 pt-4 border-t border-purple-light/50">
                  <div>
                    <p className="font-cormorant text-2xl font-semibold" style={{ color: 'var(--color-purple-deep)' }}>{s.price}</p>
                    {s.prepay && <p className="text-xs text-astro-muted mt-0.5">{s.prepay}</p>}
                  </div>
                </div>
                <Link to={s.href} className="btn-primary text-center">
                  Подробнее
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="divider-soft mx-auto mb-6" />
          <h2 className="section-title mb-4">
            Задайте первый вопрос<br />
            <em className="not-italic text-purple-deep">бесплатно</em>
          </h2>
          <p className="section-subtitle mb-8 max-w-lg mx-auto">
            Нет обязательств. Просто попробуйте — и посмотрите, насколько точным может быть ответ.
          </p>
          <ContactForm
            title="Задать вопрос бесплатно"
            subtitle="Напишите ваш вопрос — отвечу в течение нескольких часов"
            bgLight
          />
        </div>
      </section>

      {/* CONTACTS */}
      <section className="py-16 section-alt">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="divider-soft mx-auto mb-4" />
            <h2 className="section-title mb-2">Контакты</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-5">
            <a href="mailto:info@elena-samadhi.ru" className="card-soft px-6 py-4 flex items-center gap-3">
              <span className="text-purple-mid text-lg">✉</span>
              <span className="font-golos text-sm text-astro-text">info@elena-samadhi.ru</span>
            </a>
            <a href="tel:+79203574470" className="card-soft px-6 py-4 flex items-center gap-3">
              <span className="text-purple-mid text-lg">☎</span>
              <span className="font-golos text-sm text-astro-text">+7 920 357 4470</span>
            </a>
            <div className="card-soft px-6 py-4 flex items-center gap-3">
              <span className="text-purple-mid text-lg">◷</span>
              <span className="font-golos text-sm text-astro-text">Пн–Вс 10:00–22:00</span>
            </div>
            <div className="card-soft px-6 py-4 flex items-center gap-3">
              <span className="text-purple-mid text-lg">◉</span>
              <span className="font-golos text-sm text-astro-text">Москва, ул. Маршала Бирюзова, 32 к 1</span>
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <a href="https://t.me/elena_samadhi" target="_blank" rel="noreferrer"
              className="btn-secondary" style={{ padding: '12px 24px', fontSize: '14px' }}>
              ✈ Telegram
            </a>
            <a href="https://wa.me/79203574470" target="_blank" rel="noreferrer"
              className="btn-secondary" style={{ padding: '12px 24px', fontSize: '14px' }}>
              📱 WhatsApp
            </a>
            <a href="https://max.ru/elena_samadhi" target="_blank" rel="noreferrer"
              className="btn-secondary" style={{ padding: '12px 24px', fontSize: '14px' }}>
              💬 Max
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;