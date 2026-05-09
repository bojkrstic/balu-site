export default function AuthorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-rose-50 text-slate-800">
      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-xl shadow-slate-100 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-400">Izrada sajta</p>
          <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Autor i tehnička realizacija</h1>
          <p className="mt-4 text-lg font-semibold text-slate-900">Bojan Krstic</p>
          <p className="mt-5 leading-8 text-slate-600">Diplomirani inzenjer elektotehnike</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm text-slate-500">Sajt autora</p>
              <a
                href="http://83.229.82.132/"
                target="_blank"
                rel="noreferrer"
                className="mt-2 block break-all font-medium text-slate-900 underline decoration-rose-200 underline-offset-4"
              >
                http://83.229.82.132/
              </a>
            </div>
            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm text-slate-500">Telefon</p>
              <a href="tel:+381631048103" className="mt-2 block font-medium text-slate-900">
                063 104 8103
              </a>
            </div>
            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm text-slate-500">Email</p>
              <a href="mailto:bojkrstic@gmail.com" className="mt-2 block break-all font-medium text-slate-900">
                bojkrstic@gmail.com
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="http://83.229.82.132/"
              target="_blank"
              rel="noreferrer"
              className="w-full rounded-full bg-slate-900 px-5 py-3 text-center text-sm font-semibold text-white sm:w-auto"
            >
              Otvori sajt autora
            </a>
            <a
              href="tel:+381631048103"
              className="w-full rounded-full border border-slate-300 bg-white px-5 py-3 text-center text-sm font-semibold text-slate-800 sm:w-auto"
            >
              Pozovi autora
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}
