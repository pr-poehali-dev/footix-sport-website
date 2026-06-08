import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/90793789-5f83-4454-86f6-6057ca380904/files/e63eaf89-23a7-49ee-b70f-65afc16b414e.jpg";
const PLAYER_IMG = "https://cdn.poehali.dev/projects/90793789-5f83-4454-86f6-6057ca380904/files/3a8368ee-5edb-451e-b272-7760cce82c8c.jpg";
const AERIAL_IMG = "https://cdn.poehali.dev/projects/90793789-5f83-4454-86f6-6057ca380904/files/83c4fb71-e439-4cdd-a97c-8d416c855d06.jpg";

const NAV_ITEMS = [
  { id: "home", label: "Главная" },
  { id: "news", label: "Новости" },
  { id: "articles", label: "Статьи" },
  { id: "matches", label: "Матчи" },
  { id: "tournaments", label: "Турниры" },
  { id: "teams", label: "Команды" },
  { id: "contacts", label: "Контакты" },
];

const NEWS = [
  {
    id: 1,
    category: "АПЛ · Итог сезона",
    title: "Арсенал — чемпион Англии впервые за 22 года! Финальный счёт 2:1 с Кристал Пэлас",
    time: "Вчера",
    img: HERO_IMG,
    hot: true,
  },
  {
    id: 2,
    category: "Трансферы",
    title: "Гвардиола официально покинул Манчестер Сити по окончании сезона",
    time: "Вчера",
    img: PLAYER_IMG,
    hot: true,
  },
  {
    id: 3,
    category: "АПЛ",
    title: "Вест Хэм вылетел из Премьер-лиги — поражение от Лидса 0:3 в последнем туре",
    time: "Вчера",
    img: AERIAL_IMG,
    hot: false,
  },
  {
    id: 4,
    category: "Бомбардиры",
    title: "Игор Тьяго из Брентфорда — лучший бомбардир АПЛ 2025/26 с 22 голами",
    time: "2 дня назад",
    img: PLAYER_IMG,
    hot: false,
  },
  {
    id: 5,
    category: "Трансферы",
    title: "Мохамед Салах завершил карьеру в Ливерпуле — официальное прощание с Энфилдом",
    time: "3 дня назад",
    img: HERO_IMG,
    hot: false,
  },
  {
    id: 6,
    category: "Лига Чемпионов",
    title: "Реал Мадрид выиграл Лигу Чемпионов 2025/26 — финал прошёл в Мюнхене",
    time: "5 дней назад",
    img: AERIAL_IMG,
    hot: false,
  },
];

const ARTICLES = [
  {
    id: 1,
    tag: "Разбор сезона",
    tagColor: "#6DBE45",
    title: "Как Арсенал взял титул АПЛ 2025/26: тактика, герои и путь к чемпионству",
    excerpt: "Разбираем выдающийся сезон «канониров» — от стартового провала в сентябре до исторического чемпионства. Роль Сака, прессинг Артеты и почему Сити всё-таки сломался.",
    author: "Алексей Волков",
    readTime: "10 мин",
    date: "8 июня 2026",
    img: HERO_IMG,
    featured: true,
  },
  {
    id: 2,
    tag: "Уход эпохи",
    tagColor: "#FFD700",
    title: "Гвардиола покидает Сити: конец великой династии или пауза?",
    excerpt: "9 лет, 7 титулов АПЛ, Тройная корона — итоги невероятной эпохи каталонского тренера в Манчестере.",
    author: "Мария Соколова",
    readTime: "8 мин",
    date: "7 июня 2026",
    img: AERIAL_IMG,
    featured: false,
  },
  {
    id: 3,
    tag: "Открытие сезона",
    tagColor: "#FF6B6B",
    title: "Игор Тьяго — лучший бомбардир АПЛ: бразилец, о котором никто не знал",
    excerpt: "22 гола за сезон, ноль громких трансферов и скромный Брентфорд. История нападающего, влюбившего в себя всю Англию.",
    author: "Дмитрий Орлов",
    readTime: "6 мин",
    date: "6 июня 2026",
    img: PLAYER_IMG,
    featured: false,
  },
  {
    id: 4,
    tag: "Трансферы",
    tagColor: "#A78BFA",
    title: "Летнее окно 2026: Гвардиола ищет новый клуб, Салах завершает карьеру",
    excerpt: "Главные трансферные темы лета — куда уйдёт Пеп, кто заменит Салаха в Ливерпуле и каких игроков ждать в АПЛ осенью.",
    author: "Игорь Петров",
    readTime: "9 мин",
    date: "5 июня 2026",
    img: AERIAL_IMG,
    featured: false,
  },
];

const MATCHES = [
  {
    id: 1, league: "АПЛ · 38 тур", leagueColor: "#6DBE45",
    homeTeam: "Кристал Пэлас", homeScore: 1,
    awayTeam: "Арсенал", awayScore: 2,
    status: "ЗАВЕРШЁН", minute: "FT",
  },
  {
    id: 2, league: "АПЛ · 38 тур", leagueColor: "#6DBE45",
    homeTeam: "Ман Юнайтед", homeScore: 3,
    awayTeam: "Ноттингем Форест", awayScore: 2,
    status: "ЗАВЕРШЁН", minute: "FT",
  },
  {
    id: 3, league: "АПЛ · 38 тур", leagueColor: "#6DBE45",
    homeTeam: "Ньюкасл", homeScore: 2,
    awayTeam: "Фулхэм", awayScore: 0,
    status: "ЗАВЕРШЁН", minute: "FT",
  },
  {
    id: 4, league: "АПЛ · 38 тур", leagueColor: "#6DBE45",
    homeTeam: "Ман Сити", homeScore: 1,
    awayTeam: "Астон Вилла", awayScore: 2,
    status: "ЗАВЕРШЁН", minute: "FT",
  },
  {
    id: 5, league: "АПЛ · 38 тур", leagueColor: "#6DBE45",
    homeTeam: "Сандерленд", homeScore: 2,
    awayTeam: "Челси", awayScore: 1,
    status: "ЗАВЕРШЁН", minute: "FT",
  },
  {
    id: 6, league: "АПЛ · 38 тур", leagueColor: "#6DBE45",
    homeTeam: "Вест Хэм", homeScore: 0,
    awayTeam: "Лидс", awayScore: 3,
    status: "ЗАВЕРШЁН", minute: "FT",
  },
];

const STANDINGS = [
  { pos: 1, team: "Арсенал 🏆", g: 38, w: 27, d: 4, l: 7, pts: 85, form: ["W","W","W","W","W"] },
  { pos: 2, team: "Манчестер Сити", g: 38, w: 25, d: 3, l: 10, pts: 78, form: ["W","L","W","D","W"] },
  { pos: 3, team: "Манчестер Юнайтед", g: 38, w: 22, d: 5, l: 11, pts: 71, form: ["W","W","W","D","L"] },
  { pos: 4, team: "Астон Вилла", g: 38, w: 19, d: 8, l: 11, pts: 65, form: ["W","D","W","D","W"] },
  { pos: 5, team: "Брентфорд", g: 38, w: 15, d: 8, l: 15, pts: 53, form: ["D","W","L","W","D"] },
  { pos: 6, team: "Челси", g: 38, w: 14, d: 10, l: 14, pts: 52, form: ["L","D","W","W","L"] },
  { pos: 7, team: "Фулхэм", g: 38, w: 14, d: 10, l: 14, pts: 52, form: ["D","W","D","L","L"] },
  { pos: 8, team: "Ньюкасл", g: 38, w: 13, d: 10, l: 15, pts: 49, form: ["W","D","L","W","W"] },
];

const PLAYER_RATINGS = [
  { pos: 1, name: "Игор Тьяго", team: "Брентфорд", goals: 22, assists: 5, rating: 9.1 },
  { pos: 2, name: "Эрлинг Холанд", team: "Манчестер Сити", goals: 27, assists: 4, rating: 9.0 },
  { pos: 3, name: "Антуан Семеньо", team: "Брентфорд", goals: 17, assists: 3, rating: 8.7 },
  { pos: 4, name: "Бухайо Сака", team: "Арсенал", goals: 14, assists: 16, rating: 8.8 },
  { pos: 5, name: "Бруну Фернандеш", team: "Ман Юнайтед", goals: 8, assists: 19, rating: 8.6 },
];

const TEAMS = [
  { name: "Арсенал", country: "Англия · Чемпион АПЛ 2025/26", trophies: 14, rating: 97, emoji: "🏆" },
  { name: "Манчестер Сити", country: "Англия · 2-е место АПЛ", trophies: 9, rating: 94, emoji: "🔵" },
  { name: "Реал Мадрид", country: "Испания · Победитель ЛЧ", trophies: 15, rating: 96, emoji: "👑" },
  { name: "Барселона", country: "Испания · Чемпион Ла Лиги", trophies: 5, rating: 93, emoji: "🔴" },
  { name: "Манчестер Юнайтед", country: "Англия · 3-е место АПЛ", trophies: 6, rating: 89, emoji: "🔴" },
  { name: "Зенит", country: "Россия · Чемпион РПЛ", trophies: 9, rating: 85, emoji: "💙" },
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
              <span className="font-golos text-sm tracking-widest uppercase" style={{ color: "#6DBE45" }}>🏆 Арсенал — чемпион АПЛ 2025/26 · Сезон завершён</span>
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

      {/* ARTICLES */}
      <section id="articles" className="py-20" style={{ background: "var(--dark-card)" }}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-1 h-6 rounded" style={{ background: "linear-gradient(135deg, #4A8A2A, #6DBE45)" }} />
                <span className="font-oswald text-xs tracking-widest uppercase" style={{ color: "#6DBE45" }}>Глубокий разбор</span>
              </div>
              <h2 className="font-oswald text-4xl font-bold text-white">СТАТЬИ</h2>
            </div>
            <button className="font-oswald text-sm tracking-wide flex items-center gap-1 hover:gap-2 transition-all" style={{ color: "#6DBE45" }}>
              Все статьи <Icon name="ArrowRight" size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Featured article — large */}
            {ARTICLES.filter(a => a.featured).map((a) => (
              <div key={a.id} className="news-card rounded-2xl overflow-hidden cursor-pointer lg:row-span-2 flex flex-col slide-up">
                <div className="relative h-56 overflow-hidden">
                  <img src={a.img} alt={a.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,14,20,0.95) 0%, transparent 55%)" }} />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full font-oswald text-xs font-bold tracking-wide"
                    style={{ background: a.tagColor, color: "#000" }}>{a.tag}</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-oswald font-bold text-white text-xl leading-snug mb-3 hover:text-green-light transition-colors" style={{ color: "#fff" }}>
                    {a.title}
                  </h3>
                  <p className="font-golos text-sm text-gray-400 leading-relaxed mb-5 flex-1">{a.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                        style={{ background: "linear-gradient(135deg, #4A8A2A, #6DBE45)" }}>
                        {a.author[0]}
                      </div>
                      <div>
                        <p className="font-golos text-xs text-white font-medium">{a.author}</p>
                        <p className="font-golos text-xs text-gray-500">{a.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500">
                      <Icon name="Clock" size={13} />
                      <span className="font-golos text-xs">{a.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Regular articles */}
            <div className="flex flex-col gap-4">
              {ARTICLES.filter(a => !a.featured).map((a, i) => (
                <div key={a.id} className="news-card rounded-2xl overflow-hidden cursor-pointer flex gap-4 p-4 slide-up"
                  style={{ animationDelay: `${i * 0.08}s` }}>
                  <div className="relative w-28 h-24 flex-shrink-0 rounded-xl overflow-hidden">
                    <img src={a.img} alt={a.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                  </div>
                  <div className="flex flex-col flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded-full font-oswald text-xs font-bold"
                        style={{ background: `${a.tagColor}22`, color: a.tagColor }}>{a.tag}</span>
                    </div>
                    <h3 className="font-oswald font-bold text-white text-sm leading-snug mb-2 line-clamp-2">{a.title}</h3>
                    <div className="flex items-center gap-3 mt-auto">
                      <span className="font-golos text-xs text-gray-500">{a.author}</span>
                      <span className="text-gray-700">·</span>
                      <div className="flex items-center gap-1 text-gray-500">
                        <Icon name="Clock" size={11} />
                        <span className="font-golos text-xs">{a.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MATCHES */}
      <section id="matches" className="py-20" style={{ background: "var(--dark-bg)" }}>
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