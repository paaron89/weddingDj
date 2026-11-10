import { business, images } from "../data/site";
import type { Content } from "./types";

// Hungarian is the site's default language. The couple is addressed
// informally in the plural (tegeződés), as is usual for wedding services.
const hu: Content = {
  meta: {
    title: "Evergreen Sound – Esküvői DJ",
    description:
      "Az Evergreen Sound esküvői DJ és ceremóniamester: zene a szertartásra és a koktélórára, telt táncparkett a lakodalomban és hangulatvilágítás.",
  },

  nav: {
    label: "Fő navigáció",
    links: [
      { href: "#about", label: "Rólam" },
      { href: "#services", label: "Szolgáltatások" },
      { href: "#packages", label: "Csomagok" },
      { href: "#gallery", label: "Galéria" },
      { href: "#testimonials", label: "Vélemények" },
      { href: "#faq", label: "GYIK" },
    ],
    cta: "Ajánlatkérés",
    openMenu: "Menü megnyitása",
    closeMenu: "Menü bezárása",
    languageLabel: "Nyelv",
  },

  hero: {
    kicker: "Esküvői DJ & ceremóniamester · Portland",
    script: "Táncoljunk!",
    title: "Az első tánctól az utolsó dalig, ahogy kell",
    lead: "A bevonulástól az utolsó táncig figyelem a hangulatot, és gondoskodom róla, hogy a vendégeitek egész este a táncparketten maradjanak.",
    primary: "Ajánlatot kérek",
    secondary: "Csomagok",
    scrollLabel: "Tovább a Rólam részhez",
    imageAlt: "Pajta rendezvényterem tündérfényekkel és áttetsző függönyökkel",
  },

  about: {
    eyebrow: "rólam",
    title: `Szia, ${business.djName} vagyok`,
    paragraphs: [
      "Az elmúlt 12 évben több mint 300 esküvőn zenéltem, a 40 fős pajtaesküvőktől a 300 fős báltermi lakodalmakig. A stílusom egyszerű: kiismerem, mit szerettek ti, és mire táncol a családotok, aztán egész éjjel összefésülöm a kettőt.",
      "A nagy nap előtt közösen megtervezzük a menetrendet, összeállítjuk a kötelező és a tiltott dalok listáját, én pedig egyeztetek a helyszínnel és a szervezővel, hogy nektek ne kelljen.",
    ],
    imageAlt: `${business.djName} zenét kever a DJ-pult mögött`,
    stats: [
      { value: "300+", label: "esküvő" },
      { value: "12", label: "év" },
      { value: "5,0", label: "átlagos értékelés" },
    ],
  },

  services: {
    eyebrow: "szolgáltatások",
    title: "Minden, amitől a nagy napotok jól szól",
    items: [
      {
        icon: "rings",
        title: "Zene a szertartásra",
        text: "Vezeték nélküli mikrofon az anyakönyvvezetőnek és az eskühöz, valamint pontosan időzített zene a bevonuláshoz, az aláíráshoz és a kivonuláshoz.",
      },
      {
        icon: "glasses",
        title: "Koktélóra",
        text: "Laza háttérzene, amíg a fotózáson vagytok: jazz, akusztikus feldolgozások vagy bármi, ami illik az esküvőtök stílusához.",
      },
      {
        icon: "music",
        title: "Lakodalom és táncparkett",
        text: "Élőben keverve, mindig a vendégekhez igazítva: zene minden generációnak és egy táncparkett, ami az utolsó dalig tele marad.",
      },
      {
        icon: "mic",
        title: "Ceremóniamester",
        text: "Barátságos, jó ritmusú felvezetések a bevonuláshoz, a köszöntőkhöz, a tortavágáshoz és a búcsúhoz, erőltetett poénok nélkül.",
      },
      {
        icon: "sparkle",
        title: "Világítás",
        text: "Hangulatvilágítás a ti színeitekben, táncparkett-effektek és monogramvetítés, amelyek teljesen átformálják a termet.",
      },
      {
        icon: "calendar",
        title: "Tervezés",
        text: "Online tervezőfelület, közös menetrend-egyeztetés és egy hívás a helyszínnel, hogy a nap a terv szerint haladjon.",
      },
    ],
  },

  packages: {
    eyebrow: "csomagok",
    title: "Egyszerű, mindent tartalmazó árak",
    lead: "Minden csomag tartalmazza a profi hangtechnikát, a tartalék eszközöket, az utazást 80 km-en belül és a teljes körű tervezést.",
    badge: "Legnépszerűbb",
    cta: "Érdeklődöm",
    items: [
      {
        name: "Lakodalom",
        price: "1 400 $",
        features: ["5 óra DJ és ceremóniamester", "Hangosítás a lakodalomhoz", "Táncparkett-világítás", "Online tervezőfelület"],
      },
      {
        name: "Klasszikus",
        price: "2 100 $",
        featured: true,
        features: [
          "7 óra DJ és ceremóniamester",
          "Hangosítás a szertartáshoz és a koktélórához",
          "Vezeték nélküli mikrofonok az eskühöz és a köszöntőkhöz",
          "Táncparkett-világítás",
          "12 hangulatlámpa a ti színeitekben",
        ],
      },
      {
        name: "Prémium",
        price: "2 900 $",
        features: [
          "Egész nap, legfeljebb 9 óra",
          "A Klasszikus csomag minden eleme",
          "Monogramvetítés",
          "Tánc a felhők között (földköd-effekt)",
          "Kedvezmény élő szaxofonos kísérethez",
        ],
      },
    ],
  },

  gallery: {
    eyebrow: "galéria",
    title: "Pillanatok korábbi esküvőkről",
    openLabel: "Fotó megnyitása",
    previewLabel: "Galéria előnézet",
    closeLabel: "Bezárás",
    items: [
      { image: images.firstDanceConfetti, alt: "Ifjú pár első tánca hulló konfettiesőben", caption: "Első tánc · Nagyterem", layout: "tall" },
      { image: images.firstDanceSmoke, alt: "Menyasszony és vőlegény tánca alacsony földködben", caption: "Tánc a felhők között", layout: "" },
      { image: images.brideDancing, alt: "Menyasszony táncol a vendégekkel égősorok alatt", caption: "Lakodalom · Fűzfa Pajta", layout: "tall" },
      { image: images.ceremonyNightAisle, alt: "Tündérfényekkel megvilágított esti szertartás", caption: "Esti szertartás · Dombtető Kert", layout: "" },
      { image: images.danceFloor, alt: "Világító pálcákkal táncoló vendégek a telt táncparketten", caption: "Telt táncparkett · Tóparti Kúria", layout: "", video: true },
      { image: images.beachRecessional, alt: "Ifjú pár kivonul a tengerparti szertartásról, a vendégek ünneplik őket", caption: "Friss házasok · Tengerparti szertartás", layout: "wide", video: true },
    ],
  },

  testimonials: {
    eyebrow: "kedves szavak",
    title: "Ezt mondják a párok",
    items: [
      {
        quote: "Alex egy táncparkettre hozta a nagyszüleinket és az egyetemi barátainkat. Azóta is erről beszél mindenki.",
        couple: "Anna & Bence",
        date: "2025. június",
      },
      {
        quote: "A kusza dallistánkból gördülékeny estét varázsolt. A szertartás időzítése tökéletes volt, a ceremóniamesteri munkája pedig szívélyes, mégsem giccses.",
        couple: "Réka & Tamás",
        date: "2025. szeptember",
      },
      {
        quote: "Nyugodt, szervezett és nagyon jó fej. Mindent elintézett a helyszínnel, így nekünk semmi miatt nem kellett aggódnunk.",
        couple: "Dóra & Máté",
        date: "2026. május",
      },
    ],
  },

  faq: {
    eyebrow: "jó tudni",
    title: "Amit a párok kérdezni szoktak",
    items: [
      {
        question: "Mennyivel előre érdemes foglalni?",
        answer: "A legtöbb pár 9–14 hónappal az esküvő előtt foglal. A nyári szombatok fogynak el először, ezért minél előbb nézzük meg a dátumotokat.",
      },
      {
        question: "Hogyan működik a foglaló?",
        answer: "A dátumot 30% foglaló biztosítja. A fennmaradó összeg 30 nappal az esküvő előtt esedékes. Fizethettek bankkártyával vagy átutalással.",
      },
      {
        question: "Kérhetnek a vendégek dalokat?",
        answer: "Igen. A vendégek a helyszínen vagy előre, egy általatok megosztott linken is kérhetnek dalokat. Akkor játszom le őket, amikor illenek a pillanathoz, és a tiltólistátokat mindig betartom.",
      },
      {
        question: "Adhatunk tiltólistát?",
        answer: "Természetesen. A tervezőfelületen külön listát készíthettek a kötelező, a lehetőleg lejátszandó és a tiltott dalokból. Ami a tiltólistán van, az nem szól, akkor sem, ha egy vendég kéri.",
      },
      {
        question: "Milyen technikát hozol?",
        answer: "A helyszín méretéhez igazított profi hangfalakat, vezeték nélküli mikrofonokat, igényes DJ-pultot, világítást, és minden eseményre egy teljes tartalék rendszert.",
      },
      {
        question: "Van biztosításod?",
        answer: "Igen, van felelősségbiztosításom, és minden eszközöm rendszeresen be van vizsgálva. A tanúsítványokat kérésre elküldöm a helyszínnek.",
      },
    ],
  },

  contact: {
    eyebrow: "írjatok",
    title: "Szabad még a dátumotok?",
    lead: "Meséljetek egy kicsit az esküvőtökről, és 24 órán belül válaszolok, hogy ráérek-e, egy személyre szabott ajánlattal együtt.",
    location: "Portland, OR · országosan vállalok esküvőt",
    imageAlt: "Jegygyűrűk halvány rózsaszín csokron",
    details: { email: "E-mail", phone: "Telefon", location: "Székhely" },
    form: {
      names: "A nevetek",
      namesPlaceholder: "pl. Anna & Bence",
      email: "E-mail",
      emailPlaceholder: "nev@pelda.hu",
      date: "Az esküvő dátuma",
      guests: "Vendégek száma",
      venue: "Helyszín",
      venuePlaceholder: "A helyszín neve vagy települése",
      package: "Csomag",
      packageUnsure: "Még nem tudjuk",
      message: "Üzenet",
      messagePlaceholder: "Meséljetek a zenei ízlésetekről és a nagy napra vonatkozó terveitekről…",
      submit: "Ajánlatkérés küldése",
    },
    messages: {
      namesRequired: "Kérlek, adjátok meg a neveteket.",
      emailInvalid: "Kérlek, adjatok meg egy érvényes e-mail-címet.",
      dateRequired: "Kérlek, válasszátok ki az esküvő dátumát.",
      datePast: "Ez a dátum már elmúlt.",
      success: "Köszönöm, {names}! Megnézem a naptáramat ({date}), és 24 órán belül jelentkezem.",
    },
  },

  footer: {
    tagline: "Esküvői DJ & ceremóniamester · Portland, OR · országosan",
    sample: "Mintaoldal",
    photosFrom: "Fotók:",
    backToTop: "Vissza a tetejére",
  },
};

export default hu;
