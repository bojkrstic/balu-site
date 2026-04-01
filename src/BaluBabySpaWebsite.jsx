import { useState } from 'react'

export default function BaluBabySpaWebsite() {
  const [activeMedia, setActiveMedia] = useState(null);
  const services = [
    {
      title: 'Hidroterapija za bebe',
      text: 'Nežna terapija u toploj vodi koja pomaže bebi da se opusti, prirodno pokreće, jača mišiće i razvija koordinaciju.',
      icon: '💧',
    },
    {
      title: 'Masaža i vežbe za bebe',
      text: 'Pažljivo vođene masaže i vežbice prilagođene uzrastu bebe, sa fokusom na pravilan razvoj i osećaj sigurnosti.',
      icon: '🫶',
    },
    {
      title: 'Slana soba',
      text: 'Prijatan i umirujući prostor za dodatnu relaksaciju i negu, osmišljen za bebe i roditelje.',
      icon: '🌿',
    },
  ];

  const benefits = [
    'Pomaže opuštanju i umirenju bebe',
    'Podstiče razvoj koordinacije i motorike',
    'Može doprineti boljem snu i manjem osećaju grčeva',
    'Stvara prijatno iskustvo povezivanja bebe i roditelja',
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
    {
      type: 'video',
      title: 'Video sa Facebook stranice',
      embedUrl:
        'https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D1517859092623265&show_text=false&width=560&t=0',
      description: 'Zvanični video objavljen na profilu Balu Baby Spa (Facebook Watch).',
    },
  ];

  const pricing = [
    {
      title: 'Paket „Prvi mehurići”',
      description: 'Hidroterapija u kadici + mini masaža (45 min)',
      price: '3.500 RSD',
    },
    {
      title: 'Mesečni balans',
      description: '4 individualna dolaska + konsultacije sa terapeutom',
      price: '12.900 RSD',
    },
    {
      title: 'Slana soba i vežbice',
      description: 'Relaks zona + vođene vežbice (45 min)',
      price: '2.400 RSD',
    },
  ];

  const closeLightbox = () => setActiveMedia(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-sky-50 text-slate-800">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(186,230,253,0.45),transparent_28%),radial-gradient(circle_at_top_left,rgba(251,207,232,0.45),transparent_32%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-10">
          <header className="flex flex-col items-center justify-between gap-3 rounded-full border border-white/70 bg-white/80 px-5 py-4 text-center shadow-sm backdrop-blur sm:flex-row sm:text-left">
            <div className="w-full sm:w-auto">
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
                Mesto gde beba uživa, a roditelji dobijaju mir i poverenje.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Balu Baby Spa u Pirotu pruža nežne i pažljivo osmišljene tretmane za bebe — hidroterapiju,
                masažu, vežbice i relaksaciju u toplom, sigurnom i umirujućem ambijentu.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
                <a
                  href="#usluge"
                  className="rounded-full bg-rose-400 px-6 py-3 font-medium text-white shadow-lg shadow-rose-200 transition hover:-translate-y-0.5"
                >
                  Pogledajte usluge
                </a>
                <a
                  href="#o-nama"
                  className="rounded-full border border-slate-200 bg-white px-6 py-3 font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  Saznajte više
                </a>
              </div>
              <div className="mt-10 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  ['0–18 meseci', 'uzrast'],
                  ['Topao ambijent', 'udobnost'],
                  ['Nežan pristup', 'sigurnost'],
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
                  <div className="mx-auto flex h-[420px] max-w-sm flex-col justify-between rounded-[2rem] border border-white/70 bg-white/70 p-8 text-center shadow-inner backdrop-blur">
                    <div>
                      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white text-4xl shadow-md">
                        🛁
                      </div>
                      <h2 className="mt-6 text-2xl font-semibold text-slate-900">Balu Baby Spa</h2>
                      <p className="mt-3 text-slate-600">
                        Nežna hidroterapija, opuštajuća masaža i pažljivo vođene vežbice za bebe.
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

      <section id="galerija" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">Galerija</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Uđite u Balu Baby Spa</h2>
          <p className="mt-4 text-lg text-slate-600">
            Fotografije i video preuzeti su sa javno dostupnih listinga i društvenih mreža Balu Baby Spa salona u Pirotu.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryMedia.map((item, index) =>
            item.type === 'video' ? (
              <div
                key={`video-${index}`}
                className="relative overflow-hidden rounded-3xl border border-white/80 bg-slate-900 shadow-lg shadow-slate-200"
              >
                <div className="block aspect-video w-full">
                  <iframe
                    title={item.title}
                    src={item.embedUrl}
                    width="100%"
                    height="100%"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                  />
                </div>
                <div className="px-5 py-4 text-sm text-white/80">
                  <p className="font-semibold text-white">{item.title}</p>
                  <p>{item.description}</p>
                </div>
              </div>
            ) : (
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
                  loading="lazy"
                  className="h-64 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                />
                <figcaption className="px-5 py-4 text-sm text-slate-600">{item.alt}</figcaption>
              </figure>
            ),
          )}
        </div>
      </section>

      <section id="usluge" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-400">Usluge</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Sve što je potrebno za nežan početak</h2>
          <p className="mt-4 text-lg text-slate-600">
            Programi su osmišljeni tako da pruže podršku ranom razvoju bebe kroz relaksaciju, pokret i prijatno iskustvo.
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
      </section>

      <section id="cene" className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-400">Cenovnik</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Fiktivne cene za osnovne pakete</h2>
          <p className="mt-4 text-lg text-slate-600">Cene su informativne i lako ih možete zameniti stvarnim tarifama.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pricing.map((item) => (
            <div key={item.title} className="flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-6 text-center shadow-lg shadow-slate-100">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-rose-300">Ponuda</p>
              <h3 className="mt-3 text-2xl font-bold">{item.title}</h3>
              <p className="mt-3 flex-1 text-base text-slate-600">{item.description}</p>
              <p className="mt-6 text-3xl font-semibold text-slate-900">{item.price}</p>
              <p className="mt-1 text-sm text-slate-500">Zakazivanje putem forme ili telefonom</p>
            </div>
          ))}
        </div>
      </section>

      <section id="o-nama" className="bg-white/70 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-10">
          <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-100">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-500">Zašto roditelji biraju nas</p>
            <h2 className="mt-4 text-3xl font-bold">Nežan, topao i pažljivo vođen pristup</h2>
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
            <h2 className="mt-4 text-3xl font-bold">Jednostavno i opušteno iskustvo</h2>
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
        <div className="rounded-[2rem] bg-gradient-to-r from-rose-400 via-pink-400 to-sky-400 p-10 text-white shadow-2xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/80">Kontakt</p>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Zakažite svoj prvi dolazak</h2>
              <p className="mt-4 max-w-2xl text-lg text-white/90">
                Pišite nam za više informacija o terminima, uslugama i pripremi za dolazak u Balu Baby Spa.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="#kontakt"
                className="rounded-full bg-white px-6 py-3 text-center font-semibold text-slate-900 transition hover:-translate-y-0.5"
              >
                Pošaljite upit
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="kontakt" className="border-t border-slate-100 bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div className="text-center lg:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-400">Balu Baby Spa</p>
            <h2 className="mt-4 text-3xl font-bold">Posetite nas u Pirotu</h2>
            <p className="mt-4 leading-8 text-slate-600">
              Prvi koncept sajta urađen je kao moderna prezentacija usluga i prostora. Možete ga dalje dopuniti galerijom,
              cenovnikom, Instagram/Facebook linkovima i online zakazivanjem.
            </p>

            <div className="mt-8 space-y-4 text-left">
              <div className="rounded-2xl bg-slate-50 p-5">
                <p className="text-sm text-slate-500">Adresa</p>
                <p className="mt-1 font-medium">Danila Kiša br. 2, Pirot</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5">
                <p className="text-sm text-slate-500">Grad</p>
                <p className="mt-1 font-medium">Pirot, Srbija</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5">
                <p className="text-sm text-slate-500">Društvene mreže</p>
                <p className="mt-1 font-medium">Facebook stranica dostupna preko javnog listinga</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-100 bg-slate-50 p-6 shadow-inner sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="mb-2 block text-sm font-medium text-slate-700">Ime roditelja</label>
                <input className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none ring-0 transition focus:border-rose-300" placeholder="Vaše ime" />
              </div>
              <div className="sm:col-span-1">
                <label className="mb-2 block text-sm font-medium text-slate-700">Telefon</label>
                <input className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none ring-0 transition focus:border-rose-300" placeholder="Broj telefona" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-medium text-slate-700">Poruka</label>
                <textarea className="min-h-[150px] w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-rose-300" placeholder="Napišite koje usluge vas zanimaju i uzrast bebe" />
              </div>
            </div>
            <button className="mt-6 w-full rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition hover:scale-[1.02] sm:w-auto">
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
              {activeMedia.type === 'image' ? (
                <img src={activeMedia.src} alt={activeMedia.alt} className="max-h-full w-full object-contain" />
              ) : (
                <iframe
                  title={activeMedia.title}
                  src={activeMedia.embedUrl}
                  width="100%"
                  height="100%"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                  allowFullScreen
                  className="h-[60vh] w-full rounded-2xl"
                />
              )}
            </div>
            <p className="mt-4 text-center text-sm text-slate-500">{activeMedia.alt || activeMedia.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
