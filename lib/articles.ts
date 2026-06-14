export const CATEGORIES = [
  "All",
  "Economy & Real Estate",
  "Culture & Life",
  "Environment",
] as const;

export type Category = (typeof CATEGORIES)[number];

/** Categories an actual article can belong to (everything except the "All" filter). */
export type ArticleCategory = Exclude<Category, "All">;

export interface Article {
  slug: string;
  title: string;
  /** Standfirst / summary line shown under the headline. */
  dek: string;
  category: ArticleCategory;
  readMinutes: number;
  author: string;
  /** Human-readable publish date. */
  date: string;
  /** Two-letter location tag, e.g. "Girne". */
  location: string;
  /** Tailwind gradient classes for the CSS-only cover placeholder. */
  cover: string;
  body: string[];
}

export const ARTICLES: Article[] = [
  {
    slug: "sterling-paradox-girne-coastline",
    title:
      "The £ Sterling Paradox: How the Real Estate Boom is Reshaping Girne's Coastline",
    dek: "A weak pound was supposed to cool British appetite for Northern Cyprus property. Instead, it has rewritten the skyline of Girne — and the economics of an entire coastline.",
    category: "Economy & Real Estate",
    readMinutes: 5,
    author: "Selin Arıkan",
    date: "June 11, 2026",
    location: "Girne",
    cover: "from-[#d8c7a8] via-[#cbb791] to-[#b39e74]",
    body: [
      "From the terrace of a half-finished tower above Girne harbour, the arithmetic of the last decade is visible in concrete. Where fishing cooperatives once dried their nets, glass balconies now stack twenty storeys into the Mediterranean haze. The buyers, for the most part, are not local.",
      "The paradox is in the currency. As sterling softened against the euro and the dollar, conventional wisdom held that British demand for second homes abroad would retreat. In Northern Cyprus the opposite occurred. Developers, pricing in pounds to court a UK clientele, found that a cheaper pound made off-plan apartments look like a bargain against London — and against a domestic property market that residents increasingly cannot enter.",
      "“We are building for a buyer who flies in twice a year,” one Girne-based agent told me, asking not to be named. “The person who grew up here, who teaches at the school, they are priced out of their own town.” Rents quoted in foreign currency have decoupled local wages from local housing, a quiet fracture that planners are only beginning to name.",
      "There are gains, undeniably. Construction sustains thousands of jobs; the cafés along the front are busier than they have been in a generation. But economists warn that a coastline monetised this aggressively is a fragile asset. A boom anchored to one foreign currency and one foreign buyer is, by definition, exposed to a decision made somewhere else.",
      "What Girne does next — whether it protects a public shoreline, whether it builds homes its own residents can afford — will decide whether this decade reads as prosperity or as a warning written in sterling.",
    ],
  },
  {
    slug: "island-of-academics-gazimagusa",
    title:
      "Island of Academics: Navigating the Cultural Tapestry of Student Life in Gazimağusa",
    dek: "Tens of thousands of students from dozens of countries have turned a walled medieval city into one of the Mediterranean's most unexpected cultural crossroads.",
    category: "Culture & Life",
    readMinutes: 7,
    author: "Deniz Yıldırım",
    date: "June 9, 2026",
    location: "Gazimağusa",
    cover: "from-[#c9b9d6] via-[#bfa9c8] to-[#a892b8]",
    body: [
      "At eight in the evening, the streets around the old city of Gazimağusa speak a dozen languages at once. A group of medical students from Lagos debates over köfte; two friends from Tehran and Tashkent share a table with a Turkish Cypriot who has lived here all his life. The Venetian walls that once kept armies out now enclose something far more porous.",
      "Eastern Mediterranean University and its neighbours have made Famagusta — Gazimağusa — into a city defined by its students. They arrive from West Africa, Central Asia, the Middle East and beyond, and for four or five years they remake the rhythm of the town: its food, its music, its small economies of late-night printing shops and currency exchanges.",
      "That tapestry is not without its frictions. Housing is tight; misunderstandings between long-term residents and a transient population surface in the usual ways. But there is also a genuine, unforced cosmopolitanism here that larger cities spend fortunes trying to manufacture.",
      "“I came for the degree,” a third-year engineering student told me, “but I learned more from my flatmates than from any lecture.” It is a sentiment repeated often enough to feel like the real curriculum of the place.",
      "What happens to a city when its most visible population is, by design, always about to leave? Gazimağusa is quietly answering that question — and the answer, so far, is richer than anyone planned.",
      "The walled town remains, patient beneath it all, having absorbed Lusignans and Venetians and Ottomans. The students are simply its latest, and perhaps its gentlest, occupation.",
    ],
  },
  {
    slug: "silent-buffers-karpaz-eco-tourism",
    title:
      "Silent Buffers: The Untapped Potential of Eco-Tourism in the Karpaz Peninsula",
    dek: "The long, wild finger of land pointing toward the Levant is one of the Mediterranean's last quiet coastlines. The question is whether it can stay that way and still pay its way.",
    category: "Environment",
    readMinutes: 4,
    author: "Mehmet Korkut",
    date: "June 7, 2026",
    location: "Karpaz",
    cover: "from-[#a9c2a0] via-[#94b58a] to-[#7ba26f]",
    body: [
      "Drive far enough up the Karpaz Peninsula and the development simply stops. The towers of the western coast give way to wild donkeys, empty golden beaches, and a silence that feels almost startling after the construction noise further west.",
      "Conservationists call places like this “silent buffers” — landscapes that absorb ecological pressure precisely because they have been left alone. Karpaz hosts nesting loggerhead and green turtles, migratory birds, and an endemic flora that has survived because no one got around to paving it.",
      "The temptation, of course, is to monetise the quiet. Done carelessly, eco-tourism becomes a contradiction in terms: a marketing word stapled onto the same hotels that ruined everywhere else. Done carefully, it can fund the very protection it depends on.",
      "The peninsula's small guesthouses and turtle-watching cooperatives offer a glimpse of the careful version — low-volume, locally owned, seasonal. Whether that model can scale without breaking the thing it sells is the central, unresolved question of Karpaz's future.",
    ],
  },
  {
    slug: "lefkosa-green-line-cafes",
    title: "Across the Line: A New Generation Reclaims Lefkoşa's Divided Heart",
    dek: "In the last divided capital in Europe, a cohort of young entrepreneurs is turning the buffer zone's edges into something unexpectedly alive.",
    category: "Culture & Life",
    readMinutes: 6,
    author: "Ayça Demir",
    date: "June 4, 2026",
    location: "Lefkoşa",
    cover: "from-[#d4b9a3] via-[#c7a98f] to-[#b1957b]",
    body: [
      "The Green Line still runs through the middle of Nicosia — Lefkoşa — a seam of sandbags and empty buildings that has split the city for half a century. But along its northern edge, a quieter transformation is underway.",
      "Renovated stone houses that stood shuttered for decades now hold specialty coffee roasters, design studios, and small galleries. The people behind them are mostly young, mostly local, and mostly uninterested in the political theatre that has defined their city for their entire lives.",
      "“We are not trying to make a statement,” one café owner explained, steam rising behind her. “We are trying to make a good flat white in a building our grandparents lived in. If that becomes a statement, fine.”",
      "It is a modest kind of reclamation, building by building, espresso by espresso. But in a city that has been defined for fifty years by what divides it, choosing to invest in its oldest, most contested streets is its own quiet argument about the future.",
    ],
  },
];

export function getAllArticles(): Article[] {
  return ARTICLES;
}

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
