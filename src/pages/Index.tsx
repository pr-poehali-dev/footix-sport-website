import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/90793789-5f83-4454-86f6-6057ca380904/files/e63eaf89-23a7-49ee-b70f-65afc16b414e.jpg";
const PLAYER_IMG = "https://cdn.poehali.dev/projects/90793789-5f83-4454-86f6-6057ca380904/files/3a8368ee-5edb-451e-b272-7760cce82c8c.jpg";
const AERIAL_IMG = "https://cdn.poehali.dev/projects/90793789-5f83-4454-86f6-6057ca380904/files/83c4fb71-e439-4cdd-a97c-8d416c855d06.jpg";

const NAV_ITEMS = [
  { id: "home", label: "Главная" },
  { id: "news", label: "Новости" },
  { id: "matches", label: "Матчи" },
  { id: "tournaments", label: "Турниры" },
  { id: "teams", label: "Команды" },
  { id: "contacts", label: "Контакты" },
];

const NEWS = [
  {
    id: 1,
    category: "Трансферы",
    title: "Манчестер Сити подписал нового полузащитника за 85 млн евро",
    time: "2 часа назад",
    img: PLAYER_IMG,
    hot: true,
  },
  {
    id: 2,
    category: "Лига Чемпионов",
    title: "Реал Мадрид вышел в финал после драматического камбэка в дополнительное время",
    time: "4 часа назад",
    img: HERO_IMG,
    hot: false,
  },
  {
    id: 3,
    category: "РПЛ",
    title: "Зенит возглавил таблицу Российской Премьер-Лиги после победы над Спартаком",
    time: "6 часов назад",
    img: AERIAL_IMG,
    hot: false,
  },
  {
    id: 4,
    category: "Сборные",
    title: "Сборная Испании объявила расширенный состав на чемпионат мира",
    time: "8 часов назад",
    img: PLAYER_IMG,
    hot: false,
  },
  {
    id: 5,
    category: "АПЛ",
    title: "Арсенал продлил контракт с главным тренером до 2028 года",
    time: "10 часов назад",
    img: HERO_IMG,
    hot: false,
  },
  {
    id: 6,
    category: "Лига Европы",
    title: "Рома и Аякс сыграли сумасшедший матч — 5:4 в основное время",
    time: "12 часов назад",
    img: AERIAL_IMG,
    hot: false,
  },
];

const MATCHES = [
  {
    id: 1, league: "АПЛ", leagueColor: "#6DBE45",
    homeTeam: "Арсенал", homeScore: 2,
    awayTeam: "Ливерпуль", awayScore: 1,
    status: "LIVE", minute: "67'",
  },
  {
    id: 2, league: "Ла Лига", leagueColor: "#FFD700",
    homeTeam: "Барселона", homeScore: 3,
    awayTeam: "Атлетико", awayScore: 2,
    status: "LIVE", minute: "78'",
  },
  {
    id: 3, league: "РПЛ", leagueColor: "#FF6B6B",
    homeTeam: "Зенит", homeScore: null,
    awayTeam: "Спартак", awayScore: null,
    status: "TODAY", minute: "19:00",
  },
  {
    id: 4, league: "Бундеслига", leagueColor: "#E50914",
    homeTeam: "Бавария", homeScore: null,
    awayTeam: "Дортмунд", awayScore: null,
    status: "TODAY", minute: "21:30",
  },
  {
    id: 5, league: "ЛЧ", leagueColor: "#1E40AF",
    homeTeam: "Реал Мадрид", homeScore: 1,
    awayTeam: "ПСЖ", awayScore: 0,
    status: "ЗАВЕРШЁН", minute: "FT",
  },
  {
    id: 6, league: "ЛЧ", leagueColor: "#1E40AF",
    homeTeam: "Ман Сити", homeScore: 2,
    awayTeam: "Интер", awayScore: 2,
    status: "ЗАВЕРШЁН", minute: "FT",
  },
];

const STANDINGS = [
  { pos: 1, team: "Манчестер Сити", g: 32, w: 24, d: 5, l: 3, pts: 77, form: ["W","W","W","D","W"] },
  { pos: 2, team: "Арсенал", g: 32, w: 22, d: 6, l: 4, pts: 72, form: ["W","W","D","W","W"] },
  { pos: 3, team: "Ливерпуль", g: 32, w: 21, d: 7, l: 4, pts: 70, form: ["D","W","W","L","W"] },
  { pos: 4, team: "Тоттенхэм", g: 32, w: 18, d: 4, l: 10, pts: 58, form: ["W","L","W","W","D"] },
  { pos: 5, team: "Челси", g: 32, w: 16, d: 7, l: 9, pts: 55, form: ["D","W","L","W","D"] },
  { pos: 6, team: "Ньюкасл", g: 32, w: 15, d: 8, l: 9, pts: 53, form: ["W","D","W","L","W"] },
  { pos: 7, team: "Манчестер Юнайтед", g: 32, w: 14, d: 6, l: 12, pts: 48, form: ["L","W","D","L","W"] },
  { pos: 8, team: "Вест Хэм", g: 32, w: 13, d: 5, l: 14, pts: 44, form: ["D","L","W","D","L"] },
];

const PLAYER_RATINGS = [
  { pos: 1, name: "Эрлинг Холанд", team: "Манчестер Сити", goals: 28, assists: 6, rating: 9.2 },
  { pos: 2, name: "Килиан Мбаппе", team: "Реал Мадрид", goals: 24, assists: 11, rating: 9.0 },
  { pos: 3, name: "Виниcius Jr.", team: "Реал Мадрид", goals: 18, assists: 14, rating: 8.9 },
  { pos: 4, name: "Бухайо Сака", team: "Арсенал", goals: 16, assists: 12, rating: 8.7 },
  { pos: 5, name: "Мохамед Салах", team: "Ливерпуль", goals: 20, assists: 9, rating: 8.6 },
];

const TEAMS = [
  { name: "Реал Мадрид", country: "Испания", trophies: 14, rating: 97, emoji: "👑" },
  { name: "Манчестер Сити", country: "Англия", trophies: 8, rating: 95, emoji: "🔵" },
  { name: "Барселона", country: "Испания", trophies: 5, rating: 93, emoji: "🔴" },
  { name: "Бавария", country: "Германия", trophies: 6, rating: 92, emoji: "⚽" },
  { name: "Ливерпуль", country: "Англия", trophies: 6, rating: 91, emoji: "🔴" },
  { name: "Зенит", country: "Россия", trophies: 8, rating: 85, emoji: "💙" },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTournament, setActiveTournament] = useState("АПЛ");

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const formColor = (r: string) =>
    r === "W" ? "bg-green text-black" : r === "D" ? "bg-yellow text-black" : "bg-red-600 text-white";

  return (
    <div className="min-h-screen" style={{ background: "var(--dark-bg)", color: "#F0F0F0" }}>

      {/* NAVBAR */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3"
        style={{ background: "rgba(10,14,20,0.95)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(109,190,69,0.15)" }}
      >
        <button onClick={() => scrollTo("home")} className="flex items-center gap-2">
          <span className="text-2xl font-oswald font-bold tracking-widest gradient-text-green">⚽ FOOTIX</span>
        </button>

        <div className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`nav-link font-oswald text-sm tracking-wider uppercase transition-colors ${activeSection === item.id ? "text-green active" : "text-gray-400 hover:text-white"}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            className="px-4 py-2 rounded-lg text-sm font-oswald font-semibold tracking-wide text-white"
            style={{ background: "linear-gradient(135deg, #4A8A2A, #6DBE45)" }}
          >
            Войти
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
          <Icon name={mobileOpen ? "X" : "Menu"} size={24} />
        </button>
      </nav>

      {mobileOpen && (
        <div className="fixed top-14 left-0 right-0 z-40 flex flex-col gap-1 px-4 py-4 animate-fade-in"
          style={{ background: "rgba(10,14,20,0.98)", borderBottom: "1px solid rgba(109,190,69,0.2)" }}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-left py-3 px-3 font-oswald text-sm uppercase tracking-wider rounded-lg transition-colors"
              style={{
                color: activeSection === item.id ? "#6DBE45" : "#ccc",
                background: activeSection === item.id ? "rgba(109,190,69,0.1)" : "transparent"
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_IMG})`, filter: "brightness(0.22) saturate(1.2)" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(10,14,20,0.92) 0%, rgba(10,26,10,0.7) 50%, rgba(10,14,20,0.97) 100%)" }} />

        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(109,190,69,0.3) 60px, rgba(109,190,69,0.3) 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(109,190,69,0.3) 60px, rgba(109,190,69,0.3) 61px)" }}
        />

        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="max-w-3xl slide-up">
            <div className="flex items-center gap-2 mb-4">
              <span className="live-pulse inline-block w-2 h-2 rounded-full" style={{ background: "#6DBE45" }} />
              <span className="font-golos text-sm tracking-widest uppercase" style={{ color: "#6DBE45" }}>Прямо сейчас 3 матча в прямом эфире</span>
            </div>
            <h1 className="font-oswald font-bold leading-none mb-6" style={{ fontSize: "clamp(3rem, 8vw, 6rem)", lineHeight: 1 }}>
              <span className="block text-white">ВЕСЬ МИР</span>
              <span className="block gradient-text-green">ФУТБОЛА</span>
              <span className="block text-white">В ОДНОМ МЕСТЕ</span>
            </h1>
            <p className="text-gray-300 font-golos text-lg mb-10 max-w-xl leading-relaxed">
              Footix — твой главный источник: результаты матчей в реальном времени, горячие новости, таблицы чемпионатов и рейтинги лучших игроков мира.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("matches")}
                className="px-8 py-4 font-oswald font-bold text-lg tracking-wider rounded-xl transition-transform hover:scale-105 text-white"
                style={{ background: "linear-gradient(135deg, #4A8A2A, #6DBE45)", boxShadow: "0 4px 20px rgba(109,190,69,0.4)" }}
              >
                <Icon name="Play" size={18} className="inline mr-2" />
                Матчи онлайн
              </button>
              <button
                onClick={() => scrollTo("news")}
                className="px-8 py-4 font-oswald font-bold text-lg tracking-wider rounded-xl transition-all"
                style={{ border: "1px solid rgba(109,190,69,0.4)", color: "#6DBE45", background: "transparent" }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(109,190,69,0.1)")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
              >
                Читать новости
              </button>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "Activity", label: "Матчей сегодня", value: "24" },
              { icon: "Newspaper", label: "Новостей", value: "187" },
              { icon: "Trophy", label: "Турниров", value: "48" },
              { icon: "Users", label: "Команд", value: "320+" },
            ].map((stat, i) => (
              <div key={i} className="rounded-xl p-4 slide-up"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(109,190,69,0.15)", animationDelay: `${(i + 1) * 0.1}s` }}>
                <Icon name={stat.icon} size={20} style={{ color: "#6DBE45" }} className="mb-2" />
                <div className="font-oswald text-2xl font-bold text-white">{stat.value}</div>
                <div className="font-golos text-xs text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section id="news" className="py-20" style={{ background: "var(--dark-bg)" }}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-1 h-6 rounded" style={{ background: "linear-gradient(135deg, #4A8A2A, #6DBE45)" }} />
                <span className="font-oswald text-xs tracking-widest uppercase" style={{ color: "#6DBE45" }}>Горячее</span>
              </div>
              <h2 className="font-oswald text-4xl font-bold text-white">НОВОСТИ</h2>
            </div>
            <button className="font-oswald text-sm tracking-wide flex items-center gap-1 hover:gap-2 transition-all" style={{ color: "#6DBE45" }}>
              Все новости <Icon name="ArrowRight" size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {NEWS.map((n, i) => (
              <div
                key={n.id}
                className="news-card rounded-2xl overflow-hidden cursor-pointer slide-up"
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                <div className="relative h-44 overflow-hidden">
                  <img src={n.img} alt={n.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,14,20,0.9) 0%, transparent 60%)" }} />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-2 py-1 rounded-md text-xs font-oswald font-semibold tracking-wide"
                      style={{ background: "rgba(109,190,69,0.9)", color: "#000" }}>
                      {n.category}
                    </span>
                    {n.hot && (
                      <span className="px-2 py-1 rounded-md text-xs font-oswald font-semibold tracking-wide"
                        style={{ background: "rgba(255,80,80,0.9)", color: "#fff" }}>
                        🔥 Топ
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-oswald font-semibold text-white leading-snug mb-3 line-clamp-2" style={{ fontSize: "1rem" }}>
                    {n.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="font-golos text-xs text-gray-500">{n.time}</span>
                    <Icon name="ArrowUpRight" size={16} style={{ color: "#6DBE45" }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MATCHES */}
      <section id="matches" className="py-20" style={{ background: "var(--dark-card)" }}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-1 h-6 rounded" style={{ background: "linear-gradient(135deg, #4A8A2A, #6DBE45)" }} />
                <span className="font-oswald text-xs tracking-widest uppercase" style={{ color: "#6DBE45" }}>Live & Schedule</span>
              </div>
              <h2 className="font-oswald text-4xl font-bold text-white">МАТЧИ</h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="live-pulse inline-block w-2 h-2 rounded-full" style={{ background: "#6DBE45" }} />
              <span className="font-golos text-xs" style={{ color: "#6DBE45" }}>2 матча идут сейчас</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {MATCHES.map((m, i) => (
              <div key={m.id} className="match-card rounded-2xl p-5 cursor-pointer slide-up" style={{ animationDelay: `${i * 0.07}s` }}>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-oswald text-xs font-semibold px-2 py-1 rounded"
                    style={{ background: `${m.leagueColor}22`, color: m.leagueColor }}>
                    {m.league}
                  </span>
                  <span className="font-oswald text-xs font-bold px-3 py-1 rounded-full"
                    style={{
                      background: m.status === "LIVE" ? "#6DBE45" : m.status === "TODAY" ? "rgba(255,215,0,0.2)" : "rgba(255,255,255,0.08)",
                      color: m.status === "LIVE" ? "#000" : m.status === "TODAY" ? "#FFD700" : "#888",
                    }}>
                    {m.status === "LIVE" && <span className="mr-1">●</span>}
                    {m.status === "LIVE" ? m.minute : m.status === "TODAY" ? m.minute : "FT"}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1 text-right">
                    <p className="font-oswald font-bold text-white text-lg leading-tight">{m.homeTeam}</p>
                  </div>
                  <div className="flex items-center gap-2 px-4">
                    {m.homeScore !== null ? (
                      <span className="font-oswald font-bold text-3xl text-white">
                        {m.homeScore}<span className="mx-2" style={{ color: "#6DBE45" }}>:</span>{m.awayScore}
                      </span>
                    ) : (
                      <span className="font-oswald font-bold text-2xl text-gray-400">vs</span>
                    )}
                  </div>
                  <div className="flex-1 text-left">
                    <p className="font-oswald font-bold text-white text-lg leading-tight">{m.awayTeam}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOURNAMENTS */}
      <section id="tournaments" className="py-20" style={{ background: "var(--dark-bg)" }}>
        <div className="container mx-auto px-6">
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-1 h-6 rounded" style={{ background: "linear-gradient(135deg, #4A8A2A, #6DBE45)" }} />
              <span className="font-oswald text-xs tracking-widest uppercase" style={{ color: "#6DBE45" }}>Таблицы</span>
            </div>
            <h2 className="font-oswald text-4xl font-bold text-white mb-6">ТУРНИРЫ</h2>

            <div className="flex flex-wrap gap-2">
              {["АПЛ", "Ла Лига", "РПЛ", "Бундеслига", "Серия А"].map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveTournament(t)}
                  className="px-4 py-2 rounded-lg font-oswald text-sm tracking-wide transition-all"
                  style={{
                    background: activeTournament === t ? "linear-gradient(135deg, #4A8A2A, #6DBE45)" : "rgba(255,255,255,0.06)",
                    color: activeTournament === t ? "#fff" : "#aaa",
                    border: activeTournament === t ? "none" : "1px solid rgba(255,255,255,0.08)"
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(109,190,69,0.15)" }}>
            <div className="px-6 py-3 grid grid-cols-12 gap-2 font-oswald text-xs tracking-wider text-gray-500 uppercase"
              style={{ background: "rgba(109,190,69,0.06)" }}>
              <div className="col-span-1 text-center">#</div>
              <div className="col-span-4">Команда</div>
              <div className="col-span-1 text-center">И</div>
              <div className="col-span-1 text-center">В</div>
              <div className="col-span-1 text-center">Н</div>
              <div className="col-span-1 text-center">П</div>
              <div className="col-span-2 text-center">Форма</div>
              <div className="col-span-1 text-center font-bold" style={{ color: "#6DBE45" }}>О</div>
            </div>
            {STANDINGS.map((row) => (
              <div
                key={row.pos}
                className="table-row-hover px-6 py-3 grid grid-cols-12 gap-2 items-center cursor-pointer"
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.04)",
                  background: row.pos <= 4 ? "rgba(109,190,69,0.03)" : "transparent"
                }}
              >
                <div className="col-span-1 text-center">
                  <span className="font-oswald font-bold text-sm"
                    style={{ color: row.pos <= 4 ? "#6DBE45" : row.pos >= 7 ? "#ef4444" : "#9ca3af" }}>
                    {row.pos}
                  </span>
                </div>
                <div className="col-span-4 font-golos font-medium text-white text-sm truncate">{row.team}</div>
                <div className="col-span-1 text-center font-golos text-sm text-gray-400">{row.g}</div>
                <div className="col-span-1 text-center font-golos text-sm text-gray-400">{row.w}</div>
                <div className="col-span-1 text-center font-golos text-sm text-gray-400">{row.d}</div>
                <div className="col-span-1 text-center font-golos text-sm text-gray-400">{row.l}</div>
                <div className="col-span-2 flex gap-1 justify-center">
                  {row.form.map((f, j) => (
                    <span key={j} className={`w-5 h-5 rounded flex items-center justify-center text-xs font-bold ${formColor(f)}`}>{f}</span>
                  ))}
                </div>
                <div className="col-span-1 text-center font-oswald font-bold text-white text-sm">{row.pts}</div>
              </div>
            ))}
          </div>

          {/* Player Ratings */}
          <div className="mt-12">
            <h3 className="font-oswald text-2xl font-bold text-white mb-6">
              <span className="gradient-text-yellow">Рейтинг</span> игроков
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
              {PLAYER_RATINGS.map((p, i) => (
                <div key={i} className="news-card rounded-2xl p-4 text-center cursor-pointer">
                  <div className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center font-oswald font-bold text-xl"
                    style={{
                      background: i === 0 ? "linear-gradient(135deg, #FFD700, #FF8C00)" : "rgba(109,190,69,0.15)",
                      color: i === 0 ? "#000" : "#6DBE45"
                    }}>
                    {p.pos}
                  </div>
                  <p className="font-oswald font-bold text-white text-sm leading-tight mb-1">{p.name}</p>
                  <p className="font-golos text-xs text-gray-500 mb-3">{p.team}</p>
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-gray-400 font-golos">Голы</span>
                    <span className="font-bold font-oswald" style={{ color: "#6DBE45" }}>{p.goals}</span>
                  </div>
                  <div className="flex justify-between text-xs mb-3">
                    <span className="text-gray-400 font-golos">Передачи</span>
                    <span className="font-bold font-oswald" style={{ color: "#FFD700" }}>{p.assists}</span>
                  </div>
                  <div className="rounded-lg py-1 px-3 font-oswald font-bold text-sm text-white"
                    style={{ background: "linear-gradient(135deg, #4A8A2A, #6DBE45)" }}>
                    {p.rating}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAMS */}
      <section id="teams" className="py-20" style={{ background: "var(--dark-card)" }}>
        <div className="container mx-auto px-6">
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-1 h-6 rounded" style={{ background: "linear-gradient(135deg, #4A8A2A, #6DBE45)" }} />
              <span className="font-oswald text-xs tracking-widest uppercase" style={{ color: "#6DBE45" }}>Клубы мира</span>
            </div>
            <h2 className="font-oswald text-4xl font-bold text-white">КОМАНДЫ</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {TEAMS.map((team, i) => (
              <div
                key={i}
                className="match-card rounded-2xl p-6 cursor-pointer slide-up"
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{team.emoji}</div>
                  <div className="text-right">
                    <div className="font-oswald font-bold text-2xl gradient-text-green">{team.rating}</div>
                    <div className="font-golos text-xs text-gray-500">рейтинг</div>
                  </div>
                </div>
                <h3 className="font-oswald font-bold text-xl text-white mb-1">{team.name}</h3>
                <p className="font-golos text-sm text-gray-400 mb-4">{team.country}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Icon name="Trophy" size={14} style={{ color: "#FFD700" }} />
                    <span className="font-golos text-sm text-gray-300">{team.trophies} трофеев ЛЧ</span>
                  </div>
                  <button className="font-oswald text-xs tracking-wide transition-colors flex items-center gap-1" style={{ color: "#6DBE45" }}>
                    Подробнее <Icon name="ArrowRight" size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl overflow-hidden relative h-56 md:h-72 cursor-pointer group">
            <img src={AERIAL_IMG} alt="Football" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 flex flex-col justify-end p-8"
              style={{ background: "linear-gradient(to top, rgba(10,14,20,0.95) 0%, rgba(10,14,20,0.4) 60%, transparent 100%)" }}>
              <h3 className="font-oswald font-bold text-3xl text-white mb-2">320+ КОМАНД В БАЗЕ</h3>
              <p className="font-golos text-sm text-gray-300">Ведущие клубы со всего мира — статистика, составы, трансферы</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-20 relative overflow-hidden" style={{ background: "var(--dark-bg)" }}>
        <div className="absolute inset-0 opacity-30"
          style={{ background: "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(109,190,69,0.15) 0%, transparent 70%)" }}
        />
        <div className="relative container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-1">
              <div className="w-1 h-6 rounded" style={{ background: "linear-gradient(135deg, #4A8A2A, #6DBE45)" }} />
              <span className="font-oswald text-xs tracking-widest uppercase" style={{ color: "#6DBE45" }}>Связь</span>
              <div className="w-1 h-6 rounded" style={{ background: "linear-gradient(135deg, #4A8A2A, #6DBE45)" }} />
            </div>
            <h2 className="font-oswald text-4xl font-bold text-white mb-4">КОНТАКТЫ</h2>
            <p className="font-golos text-gray-400">Есть предложения, новость или хочешь с нами сотрудничать? Напиши нам — отвечаем быстро.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            {[
              { icon: "Mail", title: "Email", value: "hello@footix.ru", desc: "Для общих вопросов" },
              { icon: "MessageSquare", title: "Telegram", value: "@footixru", desc: "Оперативная связь" },
              { icon: "MapPin", title: "Редакция", value: "Москва, Россия", desc: "Мы здесь" },
            ].map((c, i) => (
              <div key={i} className="news-card rounded-2xl p-6 text-center cursor-pointer">
                <div className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center text-white"
                  style={{ background: "linear-gradient(135deg, #4A8A2A, #6DBE45)" }}>
                  <Icon name={c.icon} size={22} />
                </div>
                <p className="font-oswald font-semibold text-xs text-gray-500 uppercase tracking-wider mb-1">{c.title}</p>
                <p className="font-oswald font-bold text-white text-base mb-1">{c.value}</p>
                <p className="font-golos text-xs text-gray-500">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="max-w-xl mx-auto rounded-2xl p-8" style={{ background: "var(--dark-card2)", border: "1px solid rgba(109,190,69,0.15)" }}>
            <h3 className="font-oswald font-bold text-xl text-white mb-6 text-center">НАПИСАТЬ НАМ</h3>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="rounded-xl px-4 py-3 font-golos text-sm outline-none text-white placeholder-gray-600"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(109,190,69,0.2)" }}
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="rounded-xl px-4 py-3 font-golos text-sm outline-none text-white placeholder-gray-600"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(109,190,69,0.2)" }}
                />
              </div>
              <input
                type="text"
                placeholder="Тема"
                className="rounded-xl px-4 py-3 font-golos text-sm outline-none text-white placeholder-gray-600"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(109,190,69,0.2)" }}
              />
              <textarea
                rows={4}
                placeholder="Ваше сообщение..."
                className="rounded-xl px-4 py-3 font-golos text-sm outline-none resize-none text-white placeholder-gray-600"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(109,190,69,0.2)" }}
              />
              <button
                className="w-full py-4 rounded-xl font-oswald font-bold text-lg tracking-wider transition-transform hover:scale-105 text-white"
                style={{ background: "linear-gradient(135deg, #4A8A2A, #6DBE45)", boxShadow: "0 4px 20px rgba(109,190,69,0.3)" }}
              >
                Отправить сообщение
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10" style={{ borderTop: "1px solid rgba(109,190,69,0.12)", background: "rgba(10,14,20,0.98)" }}>
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-oswald font-bold text-xl gradient-text-green tracking-widest">⚽ FOOTIX</span>
          <p className="font-golos text-sm text-gray-500">© 2026 Footix. Все права защищены.</p>
          <div className="flex gap-6">
            {NAV_ITEMS.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)}
                className="font-oswald text-xs uppercase tracking-wider text-gray-500 hover:text-white transition-colors">
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}