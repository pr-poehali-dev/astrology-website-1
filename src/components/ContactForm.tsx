import { useState } from 'react';

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  bgLight?: boolean;
}

const ContactForm = ({ title = 'Оставить заявку', subtitle, bgLight = false }: ContactFormProps) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [messenger, setMessenger] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const messengers = [
    { id: 'telegram', label: 'Telegram', icon: '✈' },
    { id: 'whatsapp', label: 'WhatsApp', icon: '📱' },
    { id: 'max', label: 'Max', icon: '💬' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={`rounded-2xl p-8 md:p-10 text-center ${bgLight ? 'bg-white' : 'bg-purple-pale'} border border-purple-light/50`}>
        <div className="w-16 h-16 rounded-full bg-purple-light flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">✦</span>
        </div>
        <h3 className="font-cormorant text-2xl font-medium text-astro-text mb-2">Заявка отправлена</h3>
        <p className="text-astro-muted font-golos text-base">
          Свяжусь с вами в ближайшее время
          {messenger && ` через ${messengers.find(m => m.id === messenger)?.label}`}.
        </p>
      </div>
    );
  }

  return (
    <div className={`rounded-2xl p-8 md:p-10 ${bgLight ? 'bg-white shadow-sm border border-purple-light/40' : 'bg-purple-pale border border-purple-light/50'}`}>
      {title && (
        <h3 className="font-cormorant text-2xl md:text-3xl font-medium text-astro-text mb-2">
          {title}
        </h3>
      )}
      {subtitle && (
        <p className="text-astro-muted font-golos text-sm mb-6">{subtitle}</p>
      )}
      {!subtitle && title && <div className="mb-6" />}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-golos font-medium text-astro-text mb-1.5">
            Ваше имя <span className="text-purple-mid">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="Как вас зовут?"
            value={name}
            onChange={e => setName(e.target.value)}
            className="input-elegant"
          />
        </div>

        <div>
          <label className="block text-sm font-golos font-medium text-astro-text mb-1.5">
            Телефон <span className="text-astro-muted text-xs font-normal">(необязательно)</span>
          </label>
          <input
            type="tel"
            placeholder="+7 (___) ___-__-__"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            className="input-elegant"
          />
        </div>

        <div>
          <label className="block text-sm font-golos font-medium text-astro-text mb-2">
            Способ связи
          </label>
          <div className="flex gap-2 contact-btn-group flex-wrap">
            {messengers.map(m => (
              <button
                key={m.id}
                type="button"
                onClick={() => setMessenger(m.id)}
                className={messenger === m.id ? 'active' : ''}
              >
                <span className="mr-1">{m.icon}</span>
                {m.label}
              </button>
            ))}
          </div>
          {messenger && (
            <p className="text-xs text-purple-deep mt-2 font-golos">
              Свяжемся с вами в {messengers.find(m => m.id === messenger)?.label}
            </p>
          )}
        </div>

        <button type="submit" className="btn-primary w-full mt-2">
          Отправить заявку
        </button>

        <p className="text-center text-xs text-astro-muted font-golos">
          Вы сами выбираете удобный способ связи
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
