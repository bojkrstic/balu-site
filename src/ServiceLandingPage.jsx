import { contactPhone, servicePages, testimonials } from './servicePageContent'

export default function ServiceLandingPage({ pageKey }) {
  const page = servicePages[pageKey]
  const sitePrefix =
    typeof window !== 'undefined' && window.location.pathname.startsWith('/balu-site/') ? '/balu-site' : ''

  if (!page) {
    return null
  }

  const withSitePrefix = (path) => `${sitePrefix}${path}`

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: page.title,
    provider: {
      '@type': 'HealthAndBeautyBusiness',
      name: 'Balu Baby Spa',
      url: 'https://balufamily.rs/',
      telephone: '+381603277105',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Danila Kisa 2',
        addressLocality: 'Pirot',
        postalCode: '18300',
        addressCountry: 'RS',
      },
    },
    areaServed: 'Pirot',
    description: page.description,
    url: `https://balufamily.rs${page.path}`,
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-rose-50 via-white to-sky-50 text-slate-800">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(186,230,253,0.45),transparent_28%),radial-gradient(circle_at_top_left,rgba(251,207,232,0.45),transparent_32%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-10">
          <header className="flex flex-col items-center justify-between gap-3 rounded-[2rem] border border-white/70 bg-white/85 px-5 py-4 text-center shadow-sm backdrop-blur sm:rounded-full sm:flex-row sm:text-left">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-400 sm:tracking-[0.3em]">Balu Family</p>
              <p className="text-lg font-semibold">Balu Baby Spa</p>
              <p className="text-sm text-slate-500">Pirot · balufamily.rs</p>
            </div>
            <div className="flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
              <a href={withSitePrefix('/')} className="w-full rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 sm:w-auto">
                Početna
              </a>
              <a href="#kontakt" className="w-full rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white sm:w-auto">
                Zakažite termin
              </a>
            </div>
          </header>

          <div className="grid gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-20">
            <div>
              <p className="break-words text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600 sm:tracking-[0.3em]">{page.eyebrow}</p>
              <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                {page.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{page.intro}</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <a
                  href={`https://wa.me/381603277105?text=${encodeURIComponent(`Pozdrav, zanima me ${page.title}.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full rounded-full bg-rose-400 px-6 py-3 text-center font-medium text-white shadow-lg shadow-rose-200 sm:w-auto"
                >
                  Pišite na WhatsApp
                </a>
                <a href="#faq" className="w-full rounded-full border border-slate-200 bg-white px-6 py-3 text-center font-medium text-slate-700 sm:w-auto">
                  Česta pitanja
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/80 bg-white p-6 shadow-xl shadow-slate-100">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-500">Brze informacije</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-sm text-slate-500">Adresa</p>
                  <p className="mt-2 font-medium text-slate-900">Danila Kiša br. 2, Pirot</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-sm text-slate-500">Radno vreme</p>
                  <p className="mt-2 font-medium text-slate-900">Po zakazivanju</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-5 sm:col-span-2">
                  <p className="text-sm text-slate-500">Kontakt</p>
                  <p className="mt-2 font-medium text-slate-900">{contactPhone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-lg shadow-slate-100">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-400">Benefiti</p>
            <h2 className="mt-4 text-3xl font-bold text-slate-900">Zašto roditelji traže baš ovu uslugu u Pirotu</h2>
            <div className="mt-6 space-y-4">
              {page.benefits.map((item) => (
                <div key={item} className="rounded-2xl bg-slate-50 px-5 py-4 text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-slate-900 p-7 text-white shadow-xl shadow-slate-200">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-200">Kome Je Namenjeno</p>
            <h2 className="mt-4 text-3xl font-bold">Jasno objašnjeno za roditelje i porodice</h2>
            <div className="mt-6 space-y-4">
              {page.goodFor.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white/85">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-10">
        <div className="rounded-[2rem] border border-emerald-100 bg-white p-7 shadow-lg shadow-emerald-50">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-500 sm:tracking-[0.25em]">Povezane Stranice</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {Object.entries(servicePages).map(([key, item]) => (
              <a
                key={key}
                href={withSitePrefix(item.path)}
                className={`rounded-[1.5rem] border p-5 transition hover:-translate-y-0.5 ${
                  key === pageKey ? 'border-emerald-200 bg-emerald-50' : 'border-slate-100 bg-slate-50'
                }`}
              >
                <p className="break-words text-sm font-semibold uppercase tracking-[0.12em] text-slate-500 sm:tracking-[0.2em]">{item.eyebrow}</p>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">{item.title}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-10" id="faq">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] bg-white p-7 shadow-lg shadow-slate-100">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-500">Česta Pitanja</p>
            <h2 className="mt-4 text-3xl font-bold text-slate-900">Odgovori pre prvog dolaska</h2>
            <div className="mt-6 space-y-4">
              {page.faq.map((item) => (
                <div key={item.question} className="rounded-[1.5rem] border border-slate-100 bg-slate-50 p-5">
                  <h3 className="text-lg font-semibold text-slate-900">{item.question}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-7 text-white shadow-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose-200 sm:tracking-[0.25em]">Utisci Roditelja</p>
            <h2 className="mt-4 text-3xl font-bold">Toplina prostora i poverenje</h2>
            <div className="mt-6 space-y-4">
              {testimonials.map((item) => (
                <blockquote key={item.author} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                  <p className="leading-8 text-white/90">“{item.quote}”</p>
                  <footer className="mt-4 break-words text-sm font-semibold uppercase tracking-[0.08em] text-rose-100 sm:tracking-[0.15em]">{item.author}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="kontakt" className="pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] bg-white p-7 shadow-xl shadow-slate-100">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-400">Kontakt</p>
              <h2 className="mt-4 text-3xl font-bold text-slate-900">Posetite nas u Pirotu</h2>
              <p className="mt-4 leading-8 text-slate-600">
                Zakazivanje se obavlja unapred, a najbrže je da pošaljete poruku na WhatsApp ili Viber. Adresa je Danila Kiša br. 2, Pirot.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={`https://wa.me/381603277105?text=${encodeURIComponent(`Pozdrav, zanima me ${page.title}.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full rounded-full bg-slate-900 px-5 py-3 text-center text-sm font-semibold text-white sm:w-auto"
                >
                  WhatsApp
                </a>
                <a
                  href="viber://chat?number=%2B381603277105"
                  className="w-full rounded-full border border-slate-300 bg-white px-5 py-3 text-center text-sm font-semibold text-slate-800 sm:w-auto"
                >
                  Viber
                </a>
                <a
                  href="https://www.google.com/maps?q=Danila+Ki%C5%A1a+2,+Pirot"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full rounded-full border border-slate-300 bg-white px-5 py-3 text-center text-sm font-semibold text-slate-800 sm:w-auto"
                >
                  Otvori mapu
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-sm">
              <iframe
                title="Mapa lokacije Balu Baby Spa u Pirotu"
                src="https://www.google.com/maps?q=Danila+Ki%C5%A1a+2,+Pirot&z=15&output=embed"
                width="100%"
                height="360"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full border-0"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
