import { useState, useEffect } from 'react';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0A0A0A]/95 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Asakaa" className="h-28 w-auto brightness-0 invert" />
            <span className="text-xs bg-gradient-to-r from-blue-500 to-blue-600 text-white px-2.5 py-1 rounded-full font-semibold shadow-sm">v1.1</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#problema" className="text-sm text-gray-400 hover:text-white font-medium transition-colors">El Problema</a>
            <a href="#solucion" className="text-sm text-gray-400 hover:text-white font-medium transition-colors">La Solución</a>
            <a href="https://app.asakaa.com" className="text-sm text-gray-400 hover:text-white font-medium transition-colors">Iniciar Sesión</a>
            <a href="https://app.asakaa.com/register" className="text-sm bg-gradient-to-r from-blue-500 to-blue-600 text-white px-5 py-2.5 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 transition-all">
              Probar Gratis
            </a>
          </nav>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-[#0A0A0A]/95 backdrop-blur-md border-t border-white/10 px-6 py-6 space-y-4">
            <a href="#problema" className="block py-3 text-gray-300 font-medium hover:text-white transition-colors">El Problema</a>
            <a href="#solucion" className="block py-3 text-gray-300 font-medium hover:text-white transition-colors">La Solución</a>
            <a href="https://app.asakaa.com" className="block py-3 text-gray-300 font-medium hover:text-white transition-colors">Iniciar Sesión</a>
            <a href="https://app.asakaa.com/register" className="block py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl text-center font-semibold">Probar Gratis</a>
          </div>
        )}
      </header>

      {/* Hero - Dark Mode */}
      <section className="pt-32 pb-24 px-6 overflow-hidden bg-gradient-to-b from-[#0A0A0A] via-[#111111] to-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-5 py-2.5 rounded-full text-sm font-semibold mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              Nuevo: Time Intelligence
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.05] mb-8 tracking-tight">
              Deja de perder dinero en
              <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">horas no facturadas</span>
            </h1>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              Presentamos <strong className="text-white font-semibold">Asakaa v1.1</strong>. El primer sistema de tiempo diseñado para ingenieros que odian reportar horas y gerentes que aman la rentabilidad.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20">
              <a href="https://app.asakaa.com/register" className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300">
                Probar v1.1 Ahora
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
              <a href="#solucion" className="group inline-flex items-center justify-center gap-2 text-gray-400 hover:text-white px-8 py-4 text-lg font-medium transition-colors">
                Ver los 3 modos
                <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </a>
            </div>

            {/* Hero Image - Sin marco de navegador */}
            <div className="relative max-w-5xl mx-auto">
              {/* Glow effect */}
              <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/30 via-purple-500/20 to-cyan-500/30 rounded-3xl blur-3xl"></div>

              <img
                src={`${import.meta.env.BASE_URL}hojatiempo.png`}
                alt="Hoja de Tiempo - Control de horas y productividad en tiempo real"
                className="relative w-full h-auto rounded-2xl shadow-2xl shadow-black/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section id="problema" className="py-28 px-6 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 px-5 py-2.5 rounded-full text-sm font-semibold mb-8">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              El Problema
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Las hojas de tiempo tradicionales<br />
              <span className="text-red-400">están completamente rotas</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z", title: "Ingenieros", desc: "Olvidan llenar las hojas de tiempo. Pierden horas reconstruyendo qué hicieron hace 2 semanas." },
              { icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", title: "Líderes Técnicos", desc: "No ven la carga real del equipo. Asignan tareas sin saber quién está sobrecargado." },
              { icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", title: "Finanzas", desc: "Se enteran de las pérdidas 30 días tarde. Cuando ya no hay nada que hacer." }
            ].map((item, i) => (
              <div key={i} className="group bg-gradient-to-b from-slate-800 to-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:border-red-500/30 hover:bg-slate-800 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} /></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-6 bg-gradient-to-r from-red-500/10 via-red-500/5 to-red-500/10 border border-red-500/20 rounded-2xl p-10">
            {[
              { num: "30%", text: "de las horas no se reportan" },
              { num: "2.5h", text: "perdidas por ingeniero/semana" },
              { num: "$12K", text: "promedio de pérdida mensual" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">{stat.num}</div>
                <div className="text-gray-300 mt-2">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section id="solucion" className="py-28 px-6 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-5 py-2.5 rounded-full text-sm font-semibold mb-8">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              La Solución
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Tu equipo no es monolítico.<br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Tu software tampoco.</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Tres perspectivas del tiempo: ejecución, planificación y finanzas. Conectadas en tiempo real.
            </p>
          </div>

          <div className="space-y-8">
            {/* Engineer */}
            <div className="group bg-slate-800/50 rounded-3xl border border-slate-700/50 overflow-hidden hover:border-blue-500/30 transition-all duration-500">
              <div className="grid lg:grid-cols-2">
                <div className="p-10 lg:p-14">
                  <span className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                    Para el Ingeniero
                  </span>
                  <h3 className="text-3xl font-bold text-white mb-4">Execution View</h3>
                  <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                    <strong className="text-white">Reporte en 1 clic. Sin fricción.</strong> El ingeniero ve sus tareas del día y registra tiempo con un solo clic.
                  </p>
                  <ul className="space-y-4">
                    {['Timer automático por tarea', 'Registro rápido desde mobile', 'Resumen semanal automático'].map(item => (
                      <li key={item} className="flex items-center gap-4 text-gray-300">
                        <div className="w-6 h-6 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 flex items-center justify-center">
                  <img
                    src={`${import.meta.env.BASE_URL}mitrabajo.png`}
                    alt="Mi Trabajo - Vista del ingeniero con tareas y registro de tiempo"
                    className="w-full h-auto rounded-xl shadow-2xl shadow-black/50"
                  />
                </div>
              </div>
            </div>

            {/* Tech Lead */}
            <div className="group bg-slate-800/50 rounded-3xl border border-slate-700/50 overflow-hidden hover:border-amber-500/30 transition-all duration-500">
              <div className="grid lg:grid-cols-2">
                <div className="p-6 flex items-center justify-center order-2 lg:order-1">
                  <img
                    src={`${import.meta.env.BASE_URL}ganttpng.png`}
                    alt="Gantt - Vista de planificación con carga de trabajo del equipo"
                    className="w-full h-auto rounded-xl shadow-2xl shadow-black/50"
                  />
                </div>
                <div className="p-10 lg:p-14 order-1 lg:order-2">
                  <span className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                    Para el Líder Técnico
                  </span>
                  <h3 className="text-3xl font-bold text-white mb-4">Planning View (Gantt)</h3>
                  <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                    <strong className="text-white">Evita el Burnout. Visualiza la carga real.</strong> Ve quién está sobrecargado antes de que sea tarde.
                  </p>
                  <ul className="space-y-4">
                    {['Tiempo de oferta vs planificado', 'Mapa de calor de capacidad', 'Alertas de sobreasignación'].map(item => (
                      <li key={item} className="flex items-center gap-4 text-gray-300">
                        <div className="w-6 h-6 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Manager */}
            <div className="group bg-slate-800/50 rounded-3xl border border-slate-700/50 overflow-hidden hover:border-emerald-500/30 transition-all duration-500">
              <div className="grid lg:grid-cols-2">
                <div className="p-10 lg:p-14">
                  <span className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    Para el Gerente
                  </span>
                  <h3 className="text-3xl font-bold text-white mb-4">Financial View</h3>
                  <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                    <strong className="text-white">Auditoría en tiempo real.</strong> Ve la rentabilidad de cada proyecto antes de que sea tarde.
                  </p>
                  <ul className="space-y-4">
                    {['Tiempo de oferta presupuestado', 'Margen por proyecto en vivo', 'Alertas de desviación de costos'].map(item => (
                      <li key={item} className="flex items-center gap-4 text-gray-300">
                        <div className="w-6 h-6 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 flex items-center justify-center">
                  <img
                    src={`${import.meta.env.BASE_URL}hojatiempo.png`}
                    alt="Hoja de Tiempo - Vista financiera con control de horas y costos"
                    className="w-full h-auto rounded-xl shadow-2xl shadow-black/50"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 3 Times */}
          <div className="mt-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-12 lg:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>

            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-14 relative">
              Los 3 tiempos que controla Time Intelligence
            </h3>
            <div className="grid md:grid-cols-3 gap-10 relative">
              {[
                { color: "emerald", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z", title: "Tiempo de Oferta", desc: "Las horas vendidas al cliente." },
                { color: "amber", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", title: "Tiempo Planificado", desc: "Las horas asignadas en el Gantt." },
                { color: "blue", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", title: "Tiempo Registrado", desc: "Las horas reales reportadas." }
              ].map((item, i) => (
                <div key={i} className="text-center group">
                  <div className={`w-16 h-16 mx-auto mb-5 bg-gradient-to-br ${item.color === 'emerald' ? 'from-emerald-500/20 to-emerald-600/20' : item.color === 'amber' ? 'from-amber-500/20 to-amber-600/20' : 'from-blue-500/20 to-blue-600/20'} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <svg className={`w-8 h-8 ${item.color === 'emerald' ? 'text-emerald-400' : item.color === 'amber' ? 'text-amber-400' : 'text-blue-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} /></svg>
                  </div>
                  <h4 className="font-bold text-white text-lg mb-2">{item.title}</h4>
                  <p className="text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDI5M2EiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0tNiA2aC0ydi00aDJ2NHptMC02aC0ydi00aDJ2NHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>

        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Inteligencia Operativa para<br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Constructoras e Ingenierías</span>
            </h2>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto">
              Software de gestión de obra con control de costos integrado. Productividad en ingeniería con diagrama de Gantt inteligente.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { t: 'Gestión de Obra', d: 'Control total de proyectos.', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
              { t: 'Control de Costos', d: 'Rentabilidad en tiempo real.', icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z' },
              { t: 'Gantt Inteligente', d: 'Planificación visual.', icon: 'M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2' },
              { t: 'Productividad', d: 'Maximiza el rendimiento.', icon: 'M13 10V3L4 14h7v7l9-11h-7z' }
            ].map(f => (
              <div key={f.t} className="group bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800 hover:border-slate-600 transition-all">
                <svg className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={f.icon} /></svg>
                <h3 className="font-bold text-white mb-1">{f.t}</h3>
                <p className="text-slate-400 text-sm">{f.d}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0tNiA2aC0ydi00aDJ2NHptMC02aC0ydi00aDJ2NHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>

            <div className="relative">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Empieza a recuperar horas perdidas hoy
              </h3>
              <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">
                Prueba Asakaa v1.1 gratis por 14 días. Sin tarjeta de crédito. Cancela cuando quieras.
              </p>
              <a href="https://app.asakaa.com/register" className="group inline-flex items-center gap-3 bg-white text-blue-600 px-10 py-5 rounded-full text-lg font-bold hover:bg-blue-50 hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-1 transition-all duration-300">
                Probar v1.1 Ahora
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-950 border-t border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Asakaa" className="h-36 w-auto brightness-0 invert" />
          </div>
          <nav className="flex gap-8 text-slate-400 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <a href="#" className="hover:text-white transition-colors">Contacto</a>
          </nav>
          <p className="text-slate-500 text-sm">© 2025 Asakaa. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
