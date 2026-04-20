import { useState } from 'react'
import baluImage from './Picture/balu.jpg'

export default function BaluBabySpaWebsite() {
  const sitePrefix =
    typeof window !== 'undefined' && window.location.pathname.startsWith('/balu-site/') ? '/balu-site' : ''
  const [activeMedia, setActiveMedia] = useState(null);
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const services = [
    {
      title: 'Hidroterapija za bebe',
      text: 'Nežno plutanje i pokreti u vodi podstiču razvoj mišića i koordinaciju, uz osećaj slobode i uživanja.',
      icon: '💧',
    },
    {
      title: 'Masaža beba i razvojne aktivnosti',
      text: 'Blagi, stručni dodiri smiruju, opuštaju i podstiču pravilan razvoj nervnog sistema.',
      icon: '🫶',
    },
    {
      title: 'Slana soba za decu i odrasle',
      text: 'Prirodno i prijatno okruženje koje blagotvorno deluje na disajne puteve, kožu i opšte zdravlje.',
      icon: '🌿',
    },
  ];

  const benefits = [
    'pravilan motorički razvoj',
    'jačanje mišića i koordinacije',
    'bolji san i opuštanje',
    'jačanje imuniteta',
  ];

  const steps = [
    'Dolazak i kratke smernice za roditelje',
    'Priprema bebe za tretman u toplom i sigurnom ambijentu',
    'Hidroterapija uz stručno vođenje',
    'Masaža, vežbice ili dodatni relaks tretman',
  ];

  const galleryMedia = [
    {
      type: 'image',
      src: baluImage,
      alt: 'Izdvojeni pogled na Balu Baby Spa prostor',
    },
    {
      type: 'image',
      src: 'https://img3.beautynailhairsalons.com/720/156/122111553987201560.jpg',
      alt: 'Hidroterapija u toplim kadicama za bebe',
    },
    {
      type: 'image',
      src: 'https://img3.beautynailhairsalons.com/720/156/122110333047201560.jpg',
      alt: 'Nežna masaža i stimulacija za najmlađe',
    },
    {
      type: 'image',
      src: 'https://img4.beautynailhairsalons.com/520/156/122108871555201560.jpg',
      alt: 'Slana soba i relaks ambijent u Baluu',
    },
    {
      type: 'image',
      src: 'https://img5.beautynailhairsalons.com/320/156/122112817623201560.jpg',
      alt: 'Priprema bebe pre tretmana u spa prostoru',
    },
    {
      type: 'image',
      src: 'https://img5.beautynailhairsalons.com/320/156/122096289393201560.jpg',
      alt: 'Kutak za relaksaciju i nežno okruženje za bebe',
    },
    {
      type: 'image',
      src: 'https://img5.beautynailhairsalons.com/320/156/122095213683201560.jpg',
      alt: 'Detalji enterijera i dekoracija Balu Baby Spa centra',
    },
    {
      type: 'image',
      src: 'https://img3.beautynailhairsalons.com/120/156/122105721921201560.jpg',
      alt: 'Pripremljeni peškiri i oprema za tretmane',
    },
    {
      type: 'image',
      src: 'https://img3.beautynailhairsalons.com/120/156/122102920521201560.jpg',
      alt: 'Topao ambient sa igračkama i umirujućim svetlom',
    },
    {
      type: 'image',
      src: 'https://img3.beautynailhairsalons.com/120/156/122097949641201560.jpg',
      alt: 'Prijemni deo sa informacijama za roditelje',
    },
  ];

  const saltRoomKidsBenefits = [
    'kod čestih prehlada i zapušenog nosa',
    'jačanju imuniteta',
    'lakšem disanju',
    'smanjenju simptoma alergija',
  ];

  const saltRoomAdultBenefits = [
    'olakšava disanje kod alergija i astme',
    'pomaže kod problema sa sinusima',
    'doprinosi opuštanju i smanjenju stresa',
    'povoljno utiče na kožu',
  ];

  const saltRoomSensoryBenefits = [
    {
      title: 'Taktilni sistem',
      text: 'Dodirivanje podstiče taktilne receptore u koži, što omogućava detetu da istražuje različite teksture i temperature.',
    },
    {
      title: 'Proprioceptivni sistem',
      text: 'Manipulisanje materijalima poput peska i soli pomaže detetu da dobije bolji osećaj o položaju i pokretima svog tela.',
    },
    {
      title: 'Vestibularni sistem',
      text: 'Igranje koje uključuje kopanje, sipanje i prelivanje može pomoći u razvoju osećaja ravnoteže i koordinacije.',
    },
  ];

  const faqItems = [
    {
      question: 'Gde se nalazi slana soba?',
      answer: 'Balu Baby Spa se nalazi na adresi Danila Kiša br. 2, sa sadržajima za bebe, decu, roditelje i odrasle.',
    },
    {
      question: 'Da li je slana soba namenjena i deci i odraslima?',
      answer: 'Da. Prostor je osmišljen tako da bude prijatan i za decu i za odrasle, uz poseban fokus na miran ambijent i lakše disanje.',
    },
    {
      question: 'Kako mogu da zakažem termin za slanu sobu?',
      answer: 'Termin možete zakazati brzo putem WhatsApp-a ili Vibera na broj +381 60 3277 105.',
    },
    {
      question: 'Da li se dolazak u Balu Baby Spa zakazuje unapred?',
      answer: 'Da. Dolazak je najbolje zakazati unapred kako bi termin bio prilagođen uzrastu deteta i usluzi koja vas zanima.',
    },
    {
      question: 'Koje usluge mogu da se zakažu u Balu Baby Spa centru?',
      answer: 'Na sajtu su izdvojene slana soba, hidroterapija za bebe i masaža beba, uz jasno objašnjene informacije i brz kontakt za zakazivanje.',
    },
    {
      question: 'Da li su informacije o adresi i kontaktu iste na svim stranicama sajta?',
      answer: 'Da. Sve važne informacije o lokaciji, kontaktu i zakazivanju usklađene su kroz ceo sajt kako bi posetioci lako došli do tačnih podataka.',
    },
  ];

  const localSearchPhrases = [
    'slana soba Pirot',
    'slana soba za decu Pirot',
    'slana soba za odrasle Pirot',
    'hidroterapija za bebe Pirot',
    'masaža beba Pirot',
  ];

  const serviceHighlightBlocks = [
    {
      eyebrow: 'Hidroterapija za bebe Pirot',
      title: 'Nežna hidroterapija za bebe u toplom i sigurnom ambijentu',
      text:
        'Hidroterapija za bebe u Balu Baby Spa centru u Pirotu osmišljena je da kroz pokret u vodi podstakne koordinaciju, opuštanje i osećaj sigurnosti od najranijih meseci.',
    },
    {
      eyebrow: 'Masaža beba Pirot',
      title: 'Masaža beba i razvojne aktivnosti uz pažljiv individualni pristup',
      text:
        'Masaža beba u Pirotu, u okviru Balu Baby Spa prostora, donosi nežan pristup koji podržava opuštanje, smirenost i prirodan razvoj kroz dodir i blage stimulativne aktivnosti.',
    },
  ];

  const testimonials = [
    {
      quote:
        'Predivan ambijent, mnogo topline i strpljenja. Osećali smo se sigurno od prvog dolaska, a beba je baš uživala.',
      author: 'Roditelji iz Pirota',
    },
    {
      quote:
        'Slana soba i ceo prostor ostavljaju utisak mira i čistoće. Zakazivanje je bilo brzo, a pristup vrlo prijatan i profesionalan.',
      author: 'Mama devojčice, Pirot',
    },
    {
      quote:
        'Najviše nam znači što je sve prilagođeno bebama i što postoji osećaj pažnje prema svakom detalju tokom dolaska.',
      author: 'Porodica iz okoline Pirota',
    },
  ];

  const visitDetails = [
    {
      label: 'Adresa',
      value: 'Danila Kiša br. 2, Pirot',
    },
    {
      label: 'Radno vreme',
      value: 'Po zakazivanju',
    },
    {
      label: 'Kontakt',
      value: '+381 60 3277 105',
    },
    {
      label: 'Dostupno za',
      value: 'bebe, decu, roditelje i odrasle',
    },
  ];

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'HealthAndBeautyBusiness',
    name: 'Balu Baby Spa',
    url: 'https://balufamily.rs/',
    description:
      'Balu Baby Spa u Pirotu nudi hidroterapiju za bebe, masažu beba i slanu sobu za decu i odrasle.',
    telephone: '+381603277105',
    image: 'https://balufamily.rs/og-balu.jpg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Danila Kisa 2',
      addressLocality: 'Pirot',
      postalCode: '18300',
      addressCountry: 'RS',
    },
    areaServed: 'Pirot',
    keywords: 'slana soba Pirot, slana soba, baby spa Pirot, hidroterapija za bebe Pirot, masaža beba Pirot',
    priceRange: '$$',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const closeLightbox = () => setActiveMedia(null);

  const handleInputChange = (field) => (event) => {
    setContactForm((current) => ({
      ...current,
      [field]: event.target.value,
    }));
  };

  const handleInquirySubmit = () => {
    const lines = [
      'Pozdrav, zanima me termin u Balu Baby Spa.',
      contactForm.name ? `Ime: ${contactForm.name}` : null,
      contactForm.phone ? `Telefon: ${contactForm.phone}` : null,
      contactForm.message ? `Poruka: ${contactForm.message}` : null,
    ].filter(Boolean);

    const whatsappUrl = `https://wa.me/381603277105?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const withSitePrefix = (path) => `${sitePrefix}${path}`;

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-rose-50 via-white to-sky-50 text-slate-800">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(186,230,253,0.45),transparent_28%),radial-gradient(circle_at_top_left,rgba(251,207,232,0.45),transparent_32%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-10">
          <header className="flex flex-col items-center justify-between gap-3 rounded-[2rem] border border-white/70 bg-white/80 px-5 py-4 text-center shadow-sm backdrop-blur sm:rounded-full sm:flex-row sm:text-left">
            <div className="w-full sm:w-auto">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-400 sm:tracking-[0.3em]">Balu Family</p>
              <p className="text-lg font-semibold tracking-wide">Balu Baby Spa</p>
              <p className="text-sm text-slate-500">Pirot · nežna nega za najmlađe</p>
            </div>
            <a
              href="#kontakt"
              className="w-full rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:scale-105 sm:w-auto"
            >
              Zakažite termin
            </a>
          </header>

          <div className="grid gap-12 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
            <div className="text-center lg:text-left">
              <span className="inline-flex rounded-full border border-rose-200 bg-white px-4 py-1 text-sm font-medium text-rose-500 shadow-sm">
                Hidroterapija · Masaža · Slana soba
              </span>
              <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Balu Baby Spa
              </h1>
              <p className="mt-3 break-all text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 sm:tracking-[0.3em]">balufamily.rs</p>
              <p className="mt-4 text-xl font-semibold text-slate-700 sm:text-2xl">Centar za rast i razvoj beba</p>
              <p className="mt-3 text-base font-medium text-emerald-700 sm:text-lg">
                Slana soba, hidroterapija za bebe i nežna podrška razvoju na jednom mestu.
              </p>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-rose-400 sm:text-base sm:tracking-[0.35em]">
                Izvor zdravlja i opuštanja
              </p>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Dobrodošli u svet nežne brige, sigurnosti i ljubavi. Balu Baby Spa je mesto gde svaka beba
                dobija pažnju kakvu zaslužuje, a roditelji mir i poverenje.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
                Kroz pažljivo osmišljene tretmane podstičemo pravilan razvoj, jačamo imunitet i stvaramo
                prve lepe navike koje traju ceo život.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap lg:justify-start">
                <a
                  href="#usluge"
                  className="w-full rounded-full bg-rose-400 px-6 py-3 text-center font-medium text-white shadow-lg shadow-rose-200 transition hover:-translate-y-0.5 sm:w-auto"
                >
                  Pogledajte usluge
                </a>
                <a
                  href="#o-nama"
                  className="w-full rounded-full border border-slate-200 bg-white px-6 py-3 text-center font-medium text-slate-700 transition hover:bg-slate-50 sm:w-auto"
                >
                  Saznajte više
                </a>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
                {[
                  ['Za bebe', '#usluge'],
                  ['Slana soba', '#slana-soba'],
                  ['Za odrasle', '#za-odrasle'],
                  ['Galerija', '#galerija'],
                ].map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    className="w-full rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-center text-sm font-medium text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-white sm:w-auto"
                  >
                    {label}
                  </a>
                ))}
              </div>
              <div className="mt-10 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  ['0–18 meseci', 'uzrast'],
                  ['Toplina i sigurnost', 'ambijent'],
                  ['Stručna nega', 'pristup'],
                  ['Pirot', 'lokacija'],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl border border-white/80 bg-white/80 p-4 shadow-sm backdrop-blur">
                    <p className="text-lg font-semibold">{value}</p>
                    <p className="text-sm text-slate-500">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto max-w-md lg:mx-0">
              <div className="rounded-[2rem] border border-white/80 bg-white p-5 shadow-2xl shadow-sky-100">
                <div className="rounded-[1.5rem] bg-gradient-to-br from-sky-100 via-white to-rose-100 p-8">
              <div className="mx-auto flex min-h-[360px] max-w-sm flex-col justify-between rounded-[2rem] border border-white/70 bg-white/70 p-6 text-center shadow-inner backdrop-blur sm:h-[420px] sm:p-8">
                    <div>
                      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white text-4xl shadow-md">
                        🛁
                      </div>
                      <h2 className="mt-6 text-2xl font-semibold text-slate-900">Balu Baby Spa</h2>
                      <p className="mt-3 text-slate-600">
                        Mesto gde se zdravlje, opuštanje i nežna briga susreću od najranijih dana.
                      </p>
                    </div>
                    <div className="rounded-2xl bg-white p-5 shadow-sm">
                      <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Adresa</p>
                      <p className="mt-2 text-lg font-medium text-slate-800">Danila Kiša br. 2, Pirot</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -left-4 top-10 hidden rounded-2xl bg-white px-4 py-3 shadow-lg sm:block">
                <p className="text-sm text-slate-500">Za bebe</p>
                <p className="font-semibold text-slate-800">do 18 meseci</p>
              </div>
              <div className="absolute -right-4 bottom-10 hidden rounded-2xl bg-white px-4 py-3 shadow-lg sm:block">
                <p className="text-sm text-slate-500">Ambijent</p>
                <p className="font-semibold text-slate-800">topao i umirujuć</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-4 sm:px-6 lg:px-10">
        <div className="grid gap-4 md:grid-cols-3">
          <a
            href="#usluge"
            className="rounded-[1.75rem] border border-rose-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5"
          >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose-400 sm:tracking-[0.25em]">Za bebe</p>
            <h3 className="mt-3 text-xl font-semibold text-slate-900">Hidroterapija i masaža</h3>
            <p className="mt-2 leading-7 text-slate-600">Nežan početak kroz pokret, opuštanje i podršku pravilnom razvoju.</p>
          </a>
          <a
            href="#slana-soba"
            className="rounded-[1.75rem] border border-emerald-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5"
          >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-500 sm:tracking-[0.25em]">Slana soba</p>
            <h3 className="mt-3 text-xl font-semibold text-slate-900">Prirodno lakše disanje</h3>
            <p className="mt-2 leading-7 text-slate-600">Posebna celina za zdravlje i opuštanje u ambijentu koji prija celoj porodici.</p>
          </a>
          <a
            href="#za-odrasle"
            className="rounded-[1.75rem] border border-sky-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5"
          >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-500 sm:tracking-[0.25em]">Za odrasle</p>
            <h3 className="mt-3 text-xl font-semibold text-slate-900">Brz pristup benefitima</h3>
            <p className="mt-2 leading-7 text-slate-600">Odmah otvorite deo namenjen roditeljima i odraslima bez traženja kroz celu stranicu.</p>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-10">
        <div className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 sm:tracking-[0.25em]">Izdvajamo</p>
            <h2 className="mt-4 text-3xl font-bold text-slate-900">Usluge koje roditelji najčešće traže</h2>
            <p className="mt-4 leading-8 text-slate-600">
              Na jednom mestu možete brzo da otvorite deo koji vas najviše zanima i da odmah dođete do osnovnih informacija i zakazivanja.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ['/slana-soba-pirot/', 'Slana soba Pirot', 'Više informacija o boravku u slanoj sobi za decu i odrasle.'],
              ['/hidroterapija-za-bebe-pirot/', 'Hidroterapija za bebe Pirot', 'Detaljnije o nežnom pristupu, ambijentu i dolasku sa bebom.'],
              ['/masaza-beba-pirot/', 'Masaža beba Pirot', 'Sve što je važno da znate o masaži beba i zakazivanju termina.'],
            ].map(([href, title, text]) => (
              <a
                key={href}
                href={withSitePrefix(href)}
                className="rounded-[1.75rem] border border-slate-100 bg-slate-50 p-6 transition hover:-translate-y-0.5"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose-400 sm:tracking-[0.25em]">Saznajte više</p>
                <h3 className="mt-3 text-xl font-semibold text-slate-900">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-10">
        <div className="grid items-stretch gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-xl shadow-slate-200">
            <img
              src={baluImage}
              alt="Balu Baby Spa prostor"
              width="1600"
              height="1200"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="h-[320px] w-full object-cover object-center sm:h-[420px]"
            />
          </div>
          <div className="flex flex-col justify-center rounded-[2rem] bg-white p-6 shadow-xl shadow-slate-100 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-400">Izdvajamo</p>
            <h2 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl">Prostor koji spaja toplinu, sigurnost i opuštanje</h2>
            <p className="mt-4 leading-8 text-slate-600">
              Ova fotografija dodatno približava atmosferu Balu Baby Spa centra i daje jasniji utisak o ambijentu u kome se odvijaju tretmani.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="#galerija"
                className="w-full rounded-full bg-slate-900 px-5 py-3 text-center text-sm font-semibold text-white transition hover:-translate-y-0.5 sm:w-auto"
              >
                Pogledajte celu galeriju
              </a>
              <a
                href="#kontakt"
                className="w-full rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-center text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 sm:w-auto"
              >
                Zakažite dolazak
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="galerija" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">Galerija</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Uđite u Balu Baby Spa</h2>
          <p className="mt-4 text-lg text-slate-600">
            Fotografije prikazuju prostor, atmosferu i nežan pristup po kome je Balu Baby Spa prepoznatljiv.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryMedia.map((item, index) => (
            <figure
              key={`${item.src}-${index}`}
              className="group relative cursor-pointer overflow-hidden rounded-3xl border border-white/80 bg-white shadow-lg shadow-slate-200 focus-within:ring-2 focus-within:ring-rose-300"
              role="button"
              tabIndex={0}
              onClick={() => setActiveMedia(item)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setActiveMedia(item);
                }
              }}
            >
              <img
                src={item.src}
                alt={item.alt}
                width="720"
                height="720"
                loading="lazy"
                decoding="async"
                className="h-64 w-full object-cover transition duration-300 group-hover:scale-[1.03] sm:h-64"
              />
              <figcaption className="px-4 py-4 text-sm text-slate-600 sm:px-5">{item.alt}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="usluge" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-400">Usluge</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Sve što je potrebno za nežan početak</h2>
          <p className="mt-4 text-lg text-slate-600">
            Naše usluge pažljivo su osmišljene da podrže prirodan razvoj bebe i donesu roditeljima osećaj mira i poverenja.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-lg shadow-slate-100">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-50 text-3xl">
                {service.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{service.text}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-4xl rounded-3xl border border-emerald-100 bg-emerald-50 px-6 py-5 text-center leading-8 text-slate-700">
          Aktivnosti su nežne, prilagođene uzrastu i usmerene na podsticanje prirodnog razvoja, bez elemenata medicinskog tretmana.
        </p>
      </section>

      <section id="slana-soba" className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 p-6 text-white shadow-2xl sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-200 sm:tracking-[0.25em]">Slana soba za decu i odrasle</p>
              <h2 className="mt-4 text-2xl font-bold sm:text-4xl">Prirodno i prijatno okruženje za lakše disanje i opuštanje</h2>
              <p className="mt-5 text-lg leading-8 text-white/85">
                U okviru Balu Baby Spa centra nudimo i boravak u slanoj sobi, prostoru koji blagotvorno deluje na disajne puteve,
                kožu i opšte zdravlje.
              </p>
              <p className="mt-4 leading-8 text-white/75">
                Prostor je obogaćen mikročesticama soli koje se udišu tokom boravka, stvarajući efekat sličan boravku na moru.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div id="za-decu" className="rounded-[1.75rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
                <p className="text-lg font-semibold">Za decu</p>
                <p className="mt-3 text-sm leading-7 text-white/75">
                  Deca boravak doživljavaju kao igru, dok istovremeno jačaju organizam na prirodan način.
                </p>
                <div className="mt-5 space-y-3">
                  {saltRoomKidsBenefits.map((item) => (
                    <div key={item} className="rounded-2xl bg-white/10 px-4 py-3 text-sm text-white/90">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div id="za-odrasle" className="rounded-[1.75rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
                <p className="text-lg font-semibold">Za odrasle</p>
                <p className="mt-3 text-sm leading-7 text-white/75">
                  Idealna je za roditelje koji žele da zajedno sa decom provedu vreme u zdravom i opuštajućem ambijentu.
                </p>
                <div className="mt-5 space-y-3">
                  {saltRoomAdultBenefits.map((item) => (
                    <div key={item} className="rounded-2xl bg-white/10 px-4 py-3 text-sm text-white/90">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-[1.75rem] border border-emerald-200/20 bg-white/10 px-6 py-6 text-center backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-100 sm:tracking-[0.3em]">Prirodno. Bezbedno. Opuštajuće.</p>
            <p className="mt-4 max-w-4xl text-base leading-8 text-white/85">
              Tretman u slanoj sobi je neinvazivan, prijatan i pogodan za sve generacije. To je mesto gde se zdravlje i opuštanje susreću za celu porodicu.
            </p>
            <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#za-decu"
                className="w-full rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 sm:w-auto"
              >
                Pogledajte deo za decu
              </a>
              <a
                href="#za-odrasle"
                className="w-full rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/20 sm:w-auto"
              >
                Pogledajte deo za odrasle
              </a>
            </div>
          </div>

          <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-white/10 p-6 backdrop-blur sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-100">Senzorna igra u slanoj sobi</p>
            <h3 className="mt-4 text-2xl font-bold text-white">Aktivira više senzornih sistema kroz igru i istraživanje</h3>
            <p className="mt-4 max-w-3xl leading-8 text-white/80">
              Igra sa solju i sličnim materijalima podstiče dete da istražuje kroz dodir, pokret i ravnotežu, pa boravak u slanoj sobi može da doprinese i senzornom razvoju.
            </p>
            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {saltRoomSensoryBenefits.map((item) => (
                <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-slate-950/20 p-5">
                  <p className="text-base font-semibold text-white">✓ {item.title}</p>
                  <p className="mt-3 text-sm leading-7 text-white/80">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-emerald-100 bg-white p-7 shadow-lg shadow-emerald-50 sm:p-9">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-500">Slana soba</p>
            <h2 className="mt-4 text-3xl font-bold text-slate-900">Slana soba za decu i odrasle</h2>
            <p className="mt-5 leading-8 text-slate-600">
              Važno nam je da na jednom mestu jasno vidite gde se nalazimo, kome je boravak namenjen i kako možete brzo da zakažete termin za sebe ili dete.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              Balu Baby Spa nudi prijatan prostor za boravak u slanoj sobi, uz dodatne sadržaje za bebe, decu i roditelje, u ambijentu koji spaja mir, toplinu i opuštanje.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              Ovde odmah možete da pronađete lokaciju, način zakazivanja, informacije za decu i roditelje, kao i detalje o tome da je prostor namenjen i odraslima.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] bg-emerald-50 p-5">
                <p className="text-base font-semibold text-slate-900">Za koga je namenjena</p>
                <p className="mt-2 text-slate-600">Za decu, roditelje i odrasle koji žele prijatan i miran boravak.</p>
              </div>
              <div className="rounded-[1.5rem] bg-sky-50 p-5">
                <p className="text-base font-semibold text-slate-900">Kako se zakazuje</p>
                <p className="mt-2 text-slate-600">Brzo i jednostavno putem WhatsApp-a ili Vibera.</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {localSearchPhrases.map((phrase) => (
                <span key={phrase} className="w-full rounded-full border border-emerald-100 bg-white px-4 py-2 text-center text-sm font-medium text-slate-700 sm:w-auto">
                  {phrase}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-100 bg-slate-900 p-7 text-white shadow-lg shadow-slate-200 sm:p-9">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-200">Česta pitanja</p>
            <div className="mt-6 space-y-4">
              {faqItems.map((item) => (
                <div key={item.question} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                  <h3 className="text-lg font-semibold">{item.question}</h3>
                  <p className="mt-3 leading-7 text-white/75">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10">
        <div className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-lg shadow-slate-100 sm:p-9">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-500">Česta pitanja</p>
            <h2 className="mt-4 text-3xl font-bold text-slate-900">Najvažnije informacije na jednom mestu</h2>
            <p className="mt-4 leading-8 text-slate-600">
              Proširen FAQ pomaže roditeljima da brzo pronađu najvažnije informacije o lokaciji, uslugama i načinu zakazivanja.
            </p>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {faqItems.map((item) => (
              <div key={item.question} className="rounded-[1.75rem] border border-slate-100 bg-slate-50 p-6">
                <h3 className="text-lg font-semibold text-slate-900">{item.question}</h3>
                <p className="mt-3 leading-8 text-slate-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10">
        <div className="rounded-[2rem] border border-sky-100 bg-white p-7 shadow-lg shadow-slate-100 sm:p-9">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-500">Dodatne usluge</p>
            <h2 className="mt-4 text-3xl font-bold text-slate-900">Hidroterapija za bebe i masaža beba</h2>
            <p className="mt-4 leading-8 text-slate-600">
              Pored slane sobe, u okviru Balu Baby Spa prostora dostupne su i hidroterapija za bebe i masaža beba, kao deo pažljivo osmišljenog ambijenta za najmlađe i njihove roditelje.
            </p>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {serviceHighlightBlocks.map((item) => (
              <article key={item.eyebrow} className="rounded-[1.75rem] border border-slate-100 bg-slate-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-500">{item.eyebrow}</p>
                <h3 className="mt-3 text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 leading-8 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10">
        <div className="rounded-[2rem] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-7 text-white shadow-2xl sm:p-9">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose-200 sm:tracking-[0.25em]">Utisci roditelja</p>
            <h2 className="mt-4 text-3xl font-bold">Toplina prostora, nežan pristup i poverenje</h2>
            <p className="mt-4 leading-8 text-white/75">
              Ova sekcija prenosi utisak o prostoru, pristupu i iskustvu roditelja koji traže mirno i sigurno mesto za svoju porodicu.
            </p>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {testimonials.map((item) => (
              <blockquote key={item.author} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                <p className="leading-8 text-white/90">“{item.quote}”</p>
                <footer className="mt-4 break-words text-sm font-semibold uppercase tracking-[0.08em] text-rose-100 sm:tracking-[0.15em]">{item.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="o-nama" className="bg-white/70 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-10">
          <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-100">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-500">O nama</p>
            <h2 className="mt-4 text-3xl font-bold">Prvi meseci života ključni su za pravilan razvoj</h2>
            <p className="mt-5 leading-8 text-slate-600">
              U Balu Baby Spa centru verujemo da su prvi meseci života deteta posebno važni. Naš pristup se zasniva na nežnosti,
              stručnosti i individualnom radu sa svakom bebom.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              Kombinujemo hidroterapiju, masažu i stimulativne aktivnosti kako bismo podržali prirodan razvoj i stvorili osećaj sigurnosti,
              topline i luksuza od samog početka.
            </p>
            <div className="mt-8 space-y-4">
              {benefits.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                  <span className="mt-0.5 text-xl">✨</span>
                  <p className="text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-xl shadow-slate-200">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-200">Kako izgleda dolazak</p>
            <h2 className="mt-4 text-3xl font-bold">Jednostavno, nežno i opušteno iskustvo</h2>
            <p className="mt-5 leading-8 text-slate-200">
              Svaki dolazak osmišljen je tako da bebi pruži pažnju kakvu zaslužuje, a roditeljima osećaj mira, jasnoće i poverenja.
            </p>
            <div className="mt-8 space-y-4">
              {steps.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-slate-900">
                    {index + 1}
                  </div>
                  <p className="pt-2 text-slate-200">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
        <div className="rounded-[2rem] bg-gradient-to-r from-rose-400 via-pink-400 to-sky-400 p-6 text-white shadow-2xl sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/80">Kontakt</p>
              <h2 className="mt-4 text-2xl font-bold sm:text-4xl">Zakažite svoj prvi dolazak</h2>
              <p className="mt-4 max-w-2xl text-lg text-white/90">
                Pišite nam za više informacija o terminima, uslugama i pripremi za dolazak u Balu Baby Spa.
              </p>
              <p className="mt-4 text-base font-medium text-white">WhatsApp i Viber: +381 60 3277 105</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="#kontakt"
                className="w-full rounded-full bg-white px-6 py-3 text-center font-semibold text-slate-900 transition hover:-translate-y-0.5 sm:w-auto"
              >
                Pošaljite upit
              </a>
              <a
                href="https://wa.me/381603277105"
                target="_blank"
                rel="noreferrer"
                className="w-full rounded-full border border-white/40 bg-white/10 px-6 py-3 text-center font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/20 sm:w-auto"
              >
                WhatsApp
              </a>
              <a
                href="viber://chat?number=%2B381603277105"
                className="w-full rounded-full border border-white/40 bg-white/10 px-6 py-3 text-center font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/20 sm:w-auto"
              >
                Viber
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="kontakt" className="border-t border-slate-100 bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div className="text-center lg:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-rose-400 sm:tracking-[0.25em]">Balu Family · Balu Baby Spa</p>
            <h2 className="mt-4 text-3xl font-bold">Posetite nas u Pirotu</h2>
            <p className="mt-4 leading-8 text-slate-600">
              Naš prostor je pažljivo osmišljen da pruži osećaj sigurnosti, topline i poverenja, jer vaše dete zaslužuje najbolje od samog početka.
            </p>

            <div className="mt-8 space-y-4 text-left">
              <div className="grid gap-4 sm:grid-cols-2">
                {visitDetails.map((item) => (
                  <div key={item.label} className="rounded-2xl bg-slate-50 p-5">
                    <p className="text-sm text-slate-500">{item.label}</p>
                    <p className="mt-1 font-medium">{item.value}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl bg-rose-50 p-5">
                <p className="text-sm text-slate-500">Zakazivanje</p>
                <p className="mt-1 font-medium">WhatsApp i Viber: +381 60 3277 105</p>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href="https://wa.me/381603277105"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full rounded-full bg-slate-900 px-4 py-2 text-center text-sm font-semibold text-white transition hover:-translate-y-0.5 sm:w-auto"
                  >
                    Pišite na WhatsApp
                  </a>
                  <a
                    href="viber://chat?number=%2B381603277105"
                    className="w-full rounded-full border border-slate-300 bg-white px-4 py-2 text-center text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 sm:w-auto"
                  >
                    Otvorite Viber
                  </a>
                  <a
                    href="https://www.google.com/maps?q=Danila+Ki%C5%A1a+2,+Pirot"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full rounded-full border border-slate-300 bg-white px-4 py-2 text-center text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 sm:w-auto"
                  >
                    Otvorite mapu
                  </a>
                </div>
              </div>
              <div className="overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-sm">
                <iframe
                  title="Mapa lokacije Balu Baby Spa u Pirotu"
                  src="https://www.google.com/maps?q=Danila+Ki%C5%A1a+2,+Pirot&z=15&output=embed"
                  width="100%"
                  height="320"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full border-0"
                />
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-100 bg-slate-50 p-5 shadow-inner sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="mb-2 block text-sm font-medium text-slate-700">Ime roditelja</label>
                <input
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none ring-0 transition focus:border-rose-300"
                  placeholder="Vaše ime"
                  value={contactForm.name}
                  onChange={handleInputChange('name')}
                />
              </div>
              <div className="sm:col-span-1">
                <label className="mb-2 block text-sm font-medium text-slate-700">Telefon</label>
                <input
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none ring-0 transition focus:border-rose-300"
                  placeholder="Broj telefona"
                  value={contactForm.phone}
                  onChange={handleInputChange('phone')}
                />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-medium text-slate-700">Poruka</label>
                <textarea
                  className="min-h-[150px] w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-rose-300"
                  placeholder="Napišite koje usluge vas zanimaju i uzrast bebe"
                  value={contactForm.message}
                  onChange={handleInputChange('message')}
                />
              </div>
            </div>
            <button
              className="mt-6 w-full rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition hover:scale-[1.02] sm:w-auto"
              type="button"
              onClick={handleInquirySubmit}
            >
              Pošalji upit
            </button>
          </div>
        </div>
      </section>
      {activeMedia && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 px-4 py-10"
          onClick={closeLightbox}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="relative w-full max-w-4xl rounded-3xl bg-white p-4 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Zatvori prikaz slike"
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/80 text-white transition hover:bg-slate-900"
              onClick={closeLightbox}
            >
              X
            </button>
            <div className="mt-6 flex max-h-[75vh] items-center justify-center overflow-hidden rounded-2xl bg-slate-50 p-4">
              <img src={activeMedia.src} alt={activeMedia.alt} className="max-h-full w-full object-contain" />
            </div>
            <p className="mt-4 text-center text-sm text-slate-500">{activeMedia.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
}
