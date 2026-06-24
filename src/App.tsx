import React, { useState, useEffect } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  X,
  Menu,
  Mail,
  Phone,
  MapPin,
  Heart,
  Share2,
  Play,
  Sparkles,
  // Twitter,
  // Linkedin,
  // Facebook,
} from "lucide-react";

// ==========================================
// TIPE DATA & ANTARMUKA (TYPES & INTERFACES)
// ==========================================

interface ServiceDetail {
  title: string;
  badge: string;
  desc: string;
  stats: string;
  iconType: "seo" | "ppc" | "social" | "email";
}

interface CaseStudyDetail {
  title: string;
  badge: string;
  desc: string;
  stats: {
    achievement: string;
    metric: string;
  };
}

type ModalType = "quote" | "consultation" | "service" | "case" | null;

// ==========================================
// ANIMASI & GAYA KUSTOM (STYLING)
// ==========================================

const customStyles = `
  @keyframes marquee {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-50%); }
  }
  .animate-marquee {
    display: flex;
    width: max-content;
    animation: marquee 30s linear infinite;
  }
  .animate-marquee:hover {
    animation-play-state: paused;
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-10px) rotate(2deg); }
  }
  .float-element {
    animation: float 6s ease-in-out infinite;
  }
  
  @keyframes pulse-slow {
    0%, 100% { transform: scale(1); opacity: 0.9; }
    50% { transform: scale(1.05); opacity: 1; }
  }
  .pulse-slow {
    animation: pulse-slow 4s ease-in-out infinite;
  }
`;

// ==========================================
// KOMPONEN PEMBANTU (SUB-COMPONENTS)
// ==========================================

// 1. HEADER / NAVIGASI
interface HeaderProps {
  onOpenQuote: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenQuote }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-zinc-100 transition-all duration-300'>
      <div className='max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between'>
        {/* Logo */}
        <a href='#' className='flex items-center gap-2.5 group'>
          <div className='w-8 h-8 bg-[#191a23] rounded-lg flex items-center justify-center transition-transform group-hover:rotate-12 duration-300'>
            <svg
              className='w-5 h-5 text-[#b1ff40]'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path d='M12 2L2 22h20L12 2zm0 4.8L18.4 19H5.6L12 6.8z' />
            </svg>
          </div>
          <span className='text-2xl font-extrabold tracking-tight text-[#191a23]'>
            WizardZ
          </span>
        </a>

        {/* Menu Desktop */}
        <nav className='hidden lg:flex items-center gap-8 font-medium text-[#191a23]/80'>
          <a
            href='#about'
            className='hover:text-[#191a23] hover:underline underline-offset-4 transition-all'
          >
            About us
          </a>
          <a
            href='#services'
            className='hover:text-[#191a23] hover:underline underline-offset-4 transition-all'
          >
            Services
          </a>
          <a
            href='#cases'
            className='hover:text-[#191a23] hover:underline underline-offset-4 transition-all'
          >
            Use Cases
          </a>
          <a
            href='#pricing'
            className='hover:text-[#191a23] hover:underline underline-offset-4 transition-all'
          >
            Pricing
          </a>
          <a
            href='#blog'
            className='hover:text-[#191a23] hover:underline underline-offset-4 transition-all'
          >
            Blog
          </a>
        </nav>

        {/* CTA Desktop */}
        <div className='hidden lg:block'>
          <button
            onClick={onOpenQuote}
            className='px-6 py-3 border-2 border-[#191a23] rounded-xl font-semibold hover:bg-[#191a23] hover:text-white transition-all duration-300 hover:shadow-[4px_4px_0px_0px_#191a23] active:translate-y-0.5'
          >
            Request a quote
          </button>
        </div>

        {/* Tombol Menu Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='lg:hidden text-[#191a23] focus:outline-none p-1'
          aria-label='Toggle Menu'
        >
          {isOpen ? <X className='w-8 h-8' /> : <Menu className='w-8 h-8' />}
        </button>
      </div>

      {/* Panel Menu Mobile */}
      {isOpen && (
        <div className='lg:hidden border-b border-zinc-200 bg-white absolute top-full left-0 w-full shadow-lg transition-all duration-300'>
          <div className='px-6 py-8 flex flex-col gap-6 font-semibold text-lg text-[#191a23]'>
            <a
              href='#about'
              onClick={() => setIsOpen(false)}
              className='hover:text-[#b1ff40] hover:bg-[#191a23] p-3 rounded-xl transition-all'
            >
              About us
            </a>
            <a
              href='#services'
              onClick={() => setIsOpen(false)}
              className='hover:text-[#b1ff40] hover:bg-[#191a23] p-3 rounded-xl transition-all'
            >
              Services
            </a>
            <a
              href='#cases'
              onClick={() => setIsOpen(false)}
              className='hover:text-[#b1ff40] hover:bg-[#191a23] p-3 rounded-xl transition-all'
            >
              Use Cases
            </a>
            <a
              href='#pricing'
              onClick={() => setIsOpen(false)}
              className='hover:text-[#b1ff40] hover:bg-[#191a23] p-3 rounded-xl transition-all'
            >
              Pricing
            </a>
            <a
              href='#blog'
              onClick={() => setIsOpen(false)}
              className='hover:text-[#b1ff40] hover:bg-[#191a23] p-3 rounded-xl transition-all'
            >
              Blog
            </a>
            <hr className='border-zinc-200' />
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenQuote();
              }}
              className='w-full py-4 bg-[#191a23] text-white rounded-xl text-center hover:bg-[#191a23]/90 transition-all'
            >
              Request a quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

// 2. HERO SECTION
interface HeroProps {
  onOpenConsultation: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const [likeCount, setLikeCount] = useState(128);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikeCount((prev) => prev - 1);
    } else {
      setLikeCount((prev) => prev + 1);
    }
    setLiked(!liked);
  };

  return (
    <section
      id='about'
      className='relative max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden'
    >
      <div className='grid lg:grid-cols-12 gap-12 lg:gap-8 items-center'>
        {/* Kolom Kiri - Informasi */}
        <div className='lg:col-span-6 space-y-6 md:space-y-8 z-10'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-black text-[#191a23] leading-[1.1] tracking-tight'>
            Navigating the digital landscape for success
          </h1>

          {/* Ilustrasi Mobile (Hanya muncul di layar kecil) */}
          <div className='lg:hidden w-full max-w-sm mx-auto my-8 relative float-element'>
            <HeroIllustration
              likeCount={likeCount}
              liked={liked}
              onLike={handleLike}
            />
          </div>

          <p className='text-lg md:text-xl text-zinc-700 leading-relaxed max-w-xl'>
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <div className='flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2'>
            <button
              onClick={onOpenConsultation}
              className='px-8 py-5 bg-[#191a23] text-white font-semibold rounded-2xl hover:bg-[#191a23]/90 transition-all hover:shadow-[4px_4px_0px_0px_#191a23] duration-300 text-center active:translate-y-0.5'
            >
              Book a consultation
            </button>
            <a
              href='#services'
              className='px-8 py-5 text-center font-bold border-2 border-transparent hover:border-[#191a23] rounded-2xl transition-all hover:shadow-[4px_4px_0px_0px_#191a23] flex items-center justify-center gap-2'
            >
              Explore our work <ArrowRight className='w-5 h-5 text-[#b1ff40]' />
            </a>
          </div>
        </div>

        {/* Kolom Kanan - Ilustrasi (Desktop) */}
        <div className='hidden lg:block lg:col-span-6 relative float-element'>
          <HeroIllustration
            likeCount={likeCount}
            liked={liked}
            onLike={handleLike}
          />
        </div>
      </div>
    </section>
  );
};

// 3. MASCOT & MEGAPHONE ILLUSTRATION
interface HeroIllustrationProps {
  likeCount: number;
  liked: boolean;
  onLike: () => void;
}

const HeroIllustration: React.FC<HeroIllustrationProps> = ({
  likeCount,
  liked,
  onLike,
}) => {
  return (
    <svg
      viewBox='0 0 550 500'
      className='w-full h-auto drop-shadow-2xl'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      {/* Cincin Orbit */}
      <ellipse
        cx='260'
        cy='260'
        rx='190'
        ry='80'
        stroke='#191a23'
        strokeWidth='3'
        transform='rotate(-15 260 260)'
        strokeDasharray='6 6'
      />
      <ellipse
        cx='260'
        cy='260'
        rx='240'
        ry='110'
        stroke='#191a23'
        strokeWidth='2'
        transform='rotate(-15 260 260)'
      />

      {/* Gelembung Hati / Like */}
      <g
        transform='translate(460, 70)'
        className='cursor-pointer group'
        onClick={onLike}
      >
        <circle cx='25' cy='25' r='24' fill='#191a23' />
        <Heart
          className={`w-6 h-6 absolute transition-all duration-300 ${liked ? "fill-red-500 stroke-red-500" : "text-white"}`}
          style={{ transform: "translate(13px, 13px)" }}
        />
        <text
          x='25'
          y='45'
          fill='white'
          fontSize='10'
          fontWeight='bold'
          textAnchor='middle'
          className='pointer-events-none select-none'
        >
          {likeCount}
        </text>
      </g>

      {/* Gelembung Share */}
      <g
        transform='translate(500, 150)'
        className='cursor-pointer hover:scale-110 transition-transform duration-300'
      >
        <circle
          cx='20'
          cy='20'
          r='18'
          fill='#b1ff40'
          stroke='#191a23'
          strokeWidth='2'
        />
        <Share2
          className='w-5 h-5 text-[#191a23] absolute'
          style={{ transform: "translate(10px, 10px)" }}
        />
      </g>

      {/* Gelembung Play */}
      <g
        transform='translate(490, 230)'
        className='cursor-pointer hover:scale-110 transition-transform duration-300'
      >
        <circle cx='20' cy='20' r='18' fill='#191a23' />
        <Play
          className='w-5 h-5 text-white absolute fill-white'
          style={{ transform: "translate(11px, 10px)" }}
        />
      </g>

      {/* Gelembung Location */}
      <g
        transform='translate(460, 310)'
        className='cursor-pointer hover:scale-110 transition-transform duration-300'
      >
        <circle
          cx='22'
          cy='22'
          r='20'
          fill='#b1ff40'
          stroke='#191a23'
          strokeWidth='2'
        />
        <MapPin
          className='w-5 h-5 text-[#191a23] absolute'
          style={{ transform: "translate(12px, 12px)" }}
        />
      </g>

      {/* Elemen Latar Bulat */}
      <circle cx='290' cy='180' r='14' fill='#191a23' />
      <circle cx='315' cy='210' r='9' fill='#b1ff40' />
      <circle cx='430' cy='380' r='7' fill='#b1ff40' />

      {/* Bintang Neo-Brutalis */}
      <path
        d='M270 400 l 12-25 l 25-12 l-25-12 l-12-25 l-12 25 l-25 12 l 25 12 z'
        fill='#191a23'
      />
      <path
        d='M350 440 l 8-16 l 16-8 l-16-8 l-8-16 l-8 16 l-16 8 l 16 8 z'
        fill='#191a23'
      />

      {/* Grup Ilustrasi Megaphone */}
      <g className='cursor-pointer hover:rotate-3 transition-transform duration-500 origin-[250px_280px]'>
        {/* Gagang */}
        <rect
          x='290'
          y='270'
          width='30'
          height='90'
          rx='10'
          transform='rotate(-30 290 270)'
          fill='#191a23'
          stroke='#191a23'
          strokeWidth='3'
        />
        {/* Ring Koneksi */}
        <ellipse
          cx='295'
          cy='285'
          rx='15'
          ry='30'
          transform='rotate(30 295 285)'
          fill='#b1ff40'
          stroke='#191a23'
          strokeWidth='4'
        />
        {/* Badan Corong */}
        <path
          d='M295 255 L180 180 L230 110 L315 225 Z'
          fill='#ffffff'
          stroke='#191a23'
          strokeWidth='4'
          strokeLinejoin='round'
        />
        {/* Strip Aksen Hijau */}
        <path
          d='M255 230 L210 200 L235 155 L275 180 Z'
          fill='#b1ff40'
          stroke='#191a23'
          strokeWidth='4'
        />
        {/* Bagian Depan Corong */}
        <ellipse
          cx='320'
          cy='210'
          rx='35'
          ry='75'
          transform='rotate(30 320 210)'
          fill='#b1ff40'
          stroke='#191a23'
          strokeWidth='5'
        />
        <ellipse
          cx='318'
          cy='210'
          rx='20'
          ry='55'
          transform='rotate(30 318 210)'
          fill='#191a23'
        />
        <circle cx='310' cy='210' r='12' fill='#b1ff40' />
      </g>
    </svg>
  );
};

// 4. PARTNER BRAND MARQUEE
const LogoMarquee: React.FC = () => {
  const brands = [
    { name: "amazon", icon: "fa-brands fa-amazon" },
    { name: "dribbble", icon: "fa-brands fa-dribbble" },
    { name: "HubSpot", icon: "fa-brands fa-hubspot" },
    { name: "Notion", icon: "fa-solid fa-cube" },
    { name: "NETFLIX", icon: "fa-brands fa-netflix text-red-600" },
    { name: "zoom", icon: "fa-solid fa-video" },
  ];

  return (
    <section className='border-y-2 border-zinc-100 py-12 bg-white overflow-hidden'>
      <div className='relative w-full flex items-center'>
        <div className='animate-marquee whitespace-nowrap flex items-center gap-16 md:gap-24'>
          {/* Putaran Pertama */}
          {brands.map((brand, i) => (
            <div
              key={`b1-${i}`}
              className='flex items-center gap-2.5 font-black text-2xl text-zinc-900 tracking-tighter opacity-70 hover:opacity-100 transition-opacity'
            >
              <i className={`${brand.icon} text-3xl`}></i>
              <span>{brand.name}</span>
            </div>
          ))}
          {/* Putaran Kedua (Loop Tanpa Sela) */}
          {brands.map((brand, i) => (
            <div
              key={`b2-${i}`}
              className='flex items-center gap-2.5 font-black text-2xl text-zinc-900 tracking-tighter opacity-70 hover:opacity-100 transition-opacity'
            >
              <i className={`${brand.icon} text-3xl`}></i>
              <span>{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 5. KARTU LAYANAN (SERVICE CARD)
interface ServiceCardProps {
  id: "seo" | "ppc" | "social" | "email";
  titleLine1: string;
  titleLine2: string;
  isDark: boolean;
  onLearnMore: (id: "seo" | "ppc" | "social" | "email") => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  titleLine1,
  titleLine2,
  isDark,
  onLearnMore,
}) => {
  // Gambar vektor bawaan untuk setiap layanan
  const renderIcon = () => {
    switch (id) {
      case "seo":
        return (
          <svg viewBox='0 0 100 100' className='w-full h-full' fill='none'>
            <rect
              x='20'
              y='20'
              width='55'
              height='55'
              rx='8'
              stroke='#191a23'
              strokeWidth='2.5'
            />
            <circle
              cx='48'
              cy='48'
              r='14'
              stroke='#191a23'
              strokeWidth='2.5'
              fill='#b1ff40'
              strokeDasharray='4 2'
            />
            <line
              x1='58'
              y1='58'
              x2='75'
              y2='75'
              stroke='#191a23'
              strokeWidth='3'
              strokeLinecap='round'
            />
            <path
              d='M78 20 l3-6 l6-3 l-6-3 l-3-6 l-3 6 l-6 3 l 6 3 z'
              fill='#191a23'
            />
            <circle cx='20' cy='80' r='5' fill='#191a23' />
          </svg>
        );
      case "ppc":
        return (
          <svg viewBox='0 0 100 100' className='w-full h-full' fill='none'>
            <rect
              x='15'
              y='25'
              width='65'
              height='45'
              rx='6'
              stroke={isDark ? "white" : "#191a23"}
              strokeWidth='2.5'
              fill={isDark ? "#191a23" : "#b1ff40"}
            />
            <line
              x1='15'
              y1='38'
              x2='80'
              y2='38'
              stroke={isDark ? "white" : "#191a23"}
              strokeWidth='2'
            />
            <circle
              cx='50'
              cy='50'
              r='8'
              fill='#b1ff40'
              className='pulse-slow'
            />
            <path
              d='M50 50 L65 65 L58 68 L64 78 L58 80 L52 70 L46 72 Z'
              fill='white'
              stroke='#191a23'
              strokeWidth='1.5'
            />
          </svg>
        );
      case "social":
        return (
          <svg viewBox='0 0 100 100' className='w-full h-full' fill='none'>
            <rect
              x='20'
              y='20'
              width='55'
              height='55'
              rx='10'
              stroke={isDark ? "white" : "#191a23"}
              strokeWidth='2.5'
              fill={isDark ? "#191a23" : "#white"}
            />
            <circle cx='48' cy='42' r='10' fill='#b1ff40' />
            <path
              d='M43 42 Q48 48 53 42'
              stroke='#191a23'
              strokeWidth='2'
              strokeLinecap='round'
            />
            <circle
              cx='28'
              cy='28'
              r='6'
              fill='white'
              stroke='#191a23'
              strokeWidth='1'
            />
            <circle
              cx='68'
              cy='58'
              r='6'
              fill='#b1ff40'
              stroke='#191a23'
              strokeWidth='1'
            />
          </svg>
        );
      case "email":
        return (
          <svg viewBox='0 0 100 100' className='w-full h-full' fill='none'>
            <rect
              x='15'
              y='25'
              width='65'
              height='48'
              rx='8'
              stroke='#191a23'
              strokeWidth='2.5'
              fill='white'
            />
            <path
              d='M15 28 L48 50 L80 28'
              stroke='#191a23'
              strokeWidth='2.5'
              fill='none'
            />
            <path
              d='M48 50 L65 65 L78 61 Z'
              fill='#b1ff40'
              stroke='#191a23'
              strokeWidth='2'
            />
            <line
              x1='15'
              y1='65'
              x2='35'
              y2='65'
              stroke='#191a23'
              strokeWidth='2'
              strokeLinecap='round'
            />
          </svg>
        );
    }
  };

  const containerClasses = isDark
    ? "bg-[#191a23] text-white border-4 border-[#191a23]"
    : "bg-white text-[#191a23] border-4 border-[#191a23]";

  const badgeClasses = isDark
    ? "bg-white text-[#191a23] border border-[#191a23]"
    : "bg-[#b1ff40] text-[#191a23] border border-[#191a23]";

  const arrowButtonClasses = isDark
    ? "bg-white text-[#191a23]"
    : "bg-[#191a23] text-[#b1ff40]";

  return (
    <div
      className={`${containerClasses} rounded-[40px] p-8 md:p-10 flex flex-col justify-between shadow-[4px_4px_0px_0px_#191a23] hover:shadow-[8px_8px_0px_0px_#191a23] transition-all duration-300 relative group overflow-hidden`}
    >
      <div className='flex justify-between items-start gap-4'>
        <div className='space-y-4'>
          <span
            className={`inline-block px-3 py-1 ${badgeClasses} text-xl md:text-2xl font-bold rounded-lg`}
          >
            {titleLine1}
          </span>
          {titleLine2 && (
            <span
              className={`inline-block px-3 py-1 ${badgeClasses} text-xl md:text-2xl font-bold rounded-lg block w-fit`}
            >
              {titleLine2}
            </span>
          )}
        </div>
        <div className='w-24 h-24 md:w-32 md:h-32 flex-shrink-0'>
          {renderIcon()}
        </div>
      </div>

      <div className='mt-8 flex items-center gap-4'>
        <button
          onClick={() => onLearnMore(id)}
          className={`w-12 h-12 ${arrowButtonClasses} rounded-full flex items-center justify-center transition-transform group-hover:rotate-45`}
        >
          <ArrowUpRight className='w-5 h-5' />
        </button>
        <button
          onClick={() => onLearnMore(id)}
          className='text-lg font-bold hover:underline'
        >
          Learn more
        </button>
      </div>
    </div>
  );
};

// 6. LAYANAN SECTION
interface ServicesProps {
  onLearnMore: (id: "seo" | "ppc" | "social" | "email") => void;
}

const Services: React.FC<ServicesProps> = ({ onLearnMore }) => {
  return (
    <section
      id='services'
      className='max-w-7xl mx-auto px-6 md:px-12 py-20 lg:py-32'
    >
      <div className='flex flex-col md:flex-row md:items-center gap-6 mb-16'>
        <span className='px-5 py-2 bg-[#b1ff40] text-[#191a23] text-2xl font-bold rounded-xl border-2 border-[#191a23] w-fit'>
          Services
        </span>
        <p className='text-zinc-600 max-w-lg text-lg'>
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>

      <div className='grid md:grid-cols-2 gap-10'>
        <ServiceCard
          id='seo'
          titleLine1='Search engine'
          titleLine2='optimization'
          isDark={false}
          onLearnMore={onLearnMore}
        />
        <ServiceCard
          id='ppc'
          titleLine1='Pay per click'
          titleLine2='advertising'
          isDark={true}
          onLearnMore={onLearnMore}
        />
        <ServiceCard
          id='social'
          titleLine1='Social media'
          titleLine2='marketing'
          isDark={true}
          onLearnMore={onLearnMore}
        />
        <ServiceCard
          id='email'
          titleLine1='E-mail'
          titleLine2='marketing'
          isDark={false}
          onLearnMore={onLearnMore}
        />
      </div>
    </section>
  );
};

// 7. BUDGET ESTIMATOR INTERAKTIF (INTERACTIVE CALCULATOR)
interface RoiEstimatorProps {
  onClaimPlan: () => void;
}

const RoiEstimator: React.FC<RoiEstimatorProps> = ({ onClaimPlan }) => {
  const [budget, setBudget] = useState(2500);
  const [cpc, setCpc] = useState(1.5);

  // Estimasi Pengunjung = Anggaran / CPC
  const estVisitors = Math.round(budget / cpc);
  // Estimasi konversi diasumsikan konstan di rata-rata industri 5%
  const estConversions = Math.round(estVisitors * 0.05);
  // Biaya Per Akuisisi Lead (Cost per Lead)
  const estCPL = estConversions > 0 ? budget / estConversions : 0;

  return (
    <section className='max-w-7xl mx-auto px-6 md:px-12 py-12'>
      <div className='bg-[#191a23] text-white border-4 border-[#191a23] rounded-[40px] p-8 md:p-12 shadow-[4px_4px_0px_0px_#191a23] relative overflow-hidden'>
        <div className='absolute -right-20 -top-20 w-80 h-80 bg-[#b1ff40]/10 rounded-full blur-2xl'></div>

        <div className='relative z-10 grid lg:grid-cols-12 gap-10 items-center'>
          <div className='lg:col-span-6 space-y-6'>
            <h3 className='text-3xl font-extrabold text-[#b1ff40]'>
              Instant ROI Estimator
            </h3>
            <p className='text-zinc-300'>
              Need help planning your monthly digital marketing budget? Toggle
              the sliders to see what kind of growth traffic and potential
              customer actions you can generate with WizardZ!
            </p>

            {/* Input Slider */}
            <div className='space-y-6'>
              <div>
                <div className='flex justify-between text-sm font-semibold mb-2 text-zinc-300'>
                  <span>Monthly Ad Budget</span>
                  <span className='text-[#b1ff40] font-mono'>
                    ${budget.toLocaleString()}
                  </span>
                </div>
                <input
                  type='range'
                  min='500'
                  max='25000'
                  step='500'
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className='w-full accent-[#b1ff40] bg-zinc-800 h-2 rounded-lg cursor-pointer'
                />
              </div>

              <div>
                <div className='flex justify-between text-sm font-semibold mb-2 text-zinc-300'>
                  <span>Industry Target CPC</span>
                  <span className='text-[#b1ff40] font-mono'>
                    ${cpc.toFixed(2)}
                  </span>
                </div>
                <input
                  type='range'
                  min='0.5'
                  max='10'
                  step='0.1'
                  value={cpc}
                  onChange={(e) => setCpc(Number(e.target.value))}
                  className='w-full accent-[#b1ff40] bg-zinc-800 h-2 rounded-lg cursor-pointer'
                />
              </div>
            </div>
          </div>

          {/* Kartu Hasil Proyeksi */}
          <div className='lg:col-span-6 bg-zinc-900/60 backdrop-blur-md border-2 border-zinc-700 rounded-3xl p-6 md:p-8 space-y-6'>
            <div className='grid grid-cols-2 gap-4'>
              <div className='bg-[#191a23]/80 p-4 rounded-2xl border border-zinc-800 text-center'>
                <span className='block text-zinc-400 text-xs font-semibold uppercase tracking-wider mb-1'>
                  Est. Visitors
                </span>
                <span className='text-2xl md:text-3xl font-extrabold text-white font-mono'>
                  {estVisitors.toLocaleString()}
                </span>
              </div>
              <div className='bg-[#191a23]/80 p-4 rounded-2xl border border-zinc-800 text-center'>
                <span className='block text-zinc-400 text-xs font-semibold uppercase tracking-wider mb-1'>
                  Est. Conversions
                </span>
                <span className='text-2xl md:text-3xl font-extrabold text-[#b1ff40] font-mono'>
                  {estConversions.toLocaleString()}
                </span>
              </div>
            </div>

            <div className='border-t border-zinc-800 pt-4 flex items-center justify-between'>
              <div>
                <span className='block text-xs text-zinc-400'>
                  Estimated Cost Per Lead
                </span>
                <span className='text-xl font-bold text-white font-mono'>
                  ${estCPL.toFixed(2)}
                </span>
              </div>
              <button
                onClick={onClaimPlan}
                className='px-6 py-3 bg-[#b1ff40] text-[#191a23] font-extrabold rounded-xl hover:bg-white hover:scale-105 transition-all'
              >
                Claim Free Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 8. BANNER PROMOSI (LET'S MAKE THINGS HAPPEN)
interface PromoBannerProps {
  onGetProposal: () => void;
}

const PromoBanner: React.FC<PromoBannerProps> = ({ onGetProposal }) => {
  return (
    <section className='max-w-7xl mx-auto px-6 md:px-12 py-12'>
      <div className='bg-zinc-100 border-2 border-[#191a23] rounded-[45px] p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-[4px_4px_0px_0px_#191a23] relative overflow-hidden'>
        {/* Konten Teks */}
        <div className='space-y-6 max-w-xl z-10'>
          <h3 className='text-3xl md:text-4xl font-extrabold text-[#191a23]'>
            Let's make things happen
          </h3>
          <p className='text-zinc-600 text-lg leading-relaxed'>
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <button
            onClick={onGetProposal}
            className='px-8 py-4 bg-[#191a23] text-white font-bold rounded-2xl hover:bg-[#191a23]/90 transition-all hover:shadow-[4px_4px_0px_0px_#191a23] duration-300'
          >
            Get your free proposal
          </button>
        </div>

        {/* Mascot Bulat yang Mengapung */}
        <div className='relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0 z-10 float-element'>
          <svg viewBox='0 0 200 200' className='w-full h-full'>
            <ellipse
              cx='100'
              cy='100'
              rx='60'
              ry='25'
              stroke='#191a23'
              strokeWidth='2'
              fill='none'
              strokeDasharray='4 2'
            />
            <ellipse
              cx='100'
              cy='100'
              rx='80'
              ry='32'
              stroke='#191a23'
              strokeWidth='1.5'
              fill='none'
            />
            <circle cx='100' cy='100' r='30' fill='#191a23' />
            <ellipse cx='90' cy='100' rx='3' ry='6' fill='white' />
            <ellipse cx='110' cy='100' rx='3' ry='6' fill='white' />

            <g transform='translate(60, 130)' className='pulse-slow'>
              <path
                d='M15 0 L20 10 L30 15 L20 20 L15 30 L10 20 L0 15 L10 10 Z'
                fill='#b1ff40'
                stroke='#191a23'
                strokeWidth='2'
              />
            </g>
            <g transform='translate(130, 120)'>
              <path
                d='M15 0 L19 11 L30 15 L19 19 L15 30 L11 19 L0 15 L11 11 Z'
                fill='#cccccc'
              />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
};

// 9. STUDI KASUS (CASE STUDIES)
interface CaseStudiesProps {
  onLearnMoreCase: (id: "restaurant" | "b2b" | "retail") => void;
}

const CaseStudies: React.FC<CaseStudiesProps> = ({ onLearnMoreCase }) => {
  return (
    <section
      id='cases'
      className='max-w-7xl mx-auto px-6 md:px-12 py-20 lg:py-32'
    >
      <div className='flex flex-col md:flex-row md:items-center gap-6 mb-16'>
        <span className='px-5 py-2 bg-[#b1ff40] text-[#191a23] text-2xl font-bold rounded-xl border-2 border-[#191a23] w-fit'>
          Case study
        </span>
        <p className='text-zinc-600 max-w-xl text-lg'>
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>

      <div className='bg-[#191a23] text-white rounded-[45px] p-8 md:p-14 border-4 border-[#191a23] shadow-[8px_8px_0px_0px_#191a23]'>
        <div className='grid lg:grid-cols-3 gap-8 lg:gap-12 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-zinc-700'>
          {/* Studi Kasus 1 */}
          <div className='space-y-6 pb-8 lg:pb-0 lg:pr-8 flex flex-col justify-between group'>
            <p className='text-zinc-300 text-lg leading-relaxed'>
              For a local restaurant, we implemented a targeted PPC campaign
              that resulted in a 50% increase in website traffic and a 25%
              increase in sales.
            </p>
            <button
              onClick={() => onLearnMoreCase("restaurant")}
              className='flex items-center gap-2 text-[#b1ff40] font-bold text-lg group-hover:underline w-fit'
            >
              Learn more{" "}
              <ArrowRight className='w-5 h-5 transition-transform group-hover:translate-x-2' />
            </button>
          </div>

          {/* Studi Kasus 2 */}
          <div className='space-y-6 py-8 lg:py-0 lg:px-10 flex flex-col justify-between group'>
            <p className='text-zinc-300 text-lg leading-relaxed'>
              For a B2B software company, we developed an SEO strategy that
              resulted in a first-page ranking for key keywords and a 200%
              increase in organic traffic.
            </p>
            <button
              onClick={() => onLearnMoreCase("b2b")}
              className='flex items-center gap-2 text-[#b1ff40] font-bold text-lg group-hover:underline w-fit'
            >
              Learn more{" "}
              <ArrowRight className='w-5 h-5 transition-transform group-hover:translate-x-2' />
            </button>
          </div>

          {/* Studi Kasus 3 */}
          <div className='space-y-6 pt-8 lg:pt-0 lg:pl-10 flex flex-col justify-between group'>
            <p className='text-zinc-300 text-lg leading-relaxed'>
              For a national retail chain, we created a social media campaign
              that resulted in increased followers by 25% and generated a 20%
              increase in online sales.
            </p>
            <button
              onClick={() => onLearnMoreCase("retail")}
              className='flex items-center gap-2 text-[#b1ff40] font-bold text-lg group-hover:underline w-fit'
            >
              Learn more{" "}
              <ArrowRight className='w-5 h-5 transition-transform group-hover:translate-x-2' />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// 10. FOOTER SECTION
interface FooterProps {
  onSubscribeSuccess: (msg: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onSubscribeSuccess }) => {
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubscribeSuccess("Terima kasih! Email Anda telah terdaftar.");
    e.currentTarget.reset();
  };

  return (
    <footer className='bg-[#191a23] text-white pt-20 pb-10 border-t-4 border-[#191a23]'>
      <div className='max-w-7xl mx-auto px-6 md:px-12 space-y-16'>
        {/* Atas - Logo, Link, Medsos */}
        <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8'>
          <a href='#' className='flex items-center gap-2.5'>
            <div className='w-8 h-8 bg-[#b1ff40] rounded-lg flex items-center justify-center'>
              <svg
                className='w-5 h-5 text-[#191a23]'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='M12 2L2 22h20L12 2zm0 4.8L18.4 19H5.6L12 6.8z' />
              </svg>
            </div>
            <span className='text-2xl font-extrabold tracking-tight'>
              WizardZ
            </span>
          </a>

          <nav className='flex flex-wrap gap-6 md:gap-10 text-zinc-400 font-medium'>
            <a href='#about' className='hover:text-[#b1ff40] transition-all'>
              About us
            </a>
            <a href='#services' className='hover:text-[#b1ff40] transition-all'>
              Services
            </a>
            <a href='#cases' className='hover:text-[#b1ff40] transition-all'>
              Use Cases
            </a>
            <a href='#pricing' className='hover:text-[#b1ff40] transition-all'>
              Pricing
            </a>
            <a href='#blog' className='hover:text-[#b1ff40] transition-all'>
              Blog
            </a>
          </nav>

          <div className='flex gap-4'>
            <a
              href='#'
              className='w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-[#b1ff40] hover:text-[#191a23] transition-all'
            >
              {/* <Twitter className='w-5 h-5' /> */}
            </a>
            <a
              href='#'
              className='w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-[#b1ff40] hover:text-[#191a23] transition-all'
            >
              {/* <Linkedin className='w-5 h-5' /> */}
            </a>
            <a
              href='#'
              className='w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-[#b1ff40] hover:text-[#191a23] transition-all'
            >
              {/* <Facebook className='w-5 h-5' /> */}
            </a>
          </div>
        </div>

        {/* Tengah - Info Kontak & Newsletter Form */}
        <div className='grid lg:grid-cols-12 gap-10 border-y border-zinc-800 py-12'>
          <div className='lg:col-span-5 space-y-4'>
            <h4 className='text-xl font-bold text-[#b1ff40]'>Contact us:</h4>
            <div className='space-y-3 text-zinc-400'>
              <p className='flex items-center gap-2'>
                <Mail className='w-4 h-4 text-[#b1ff40]' />{" "}
                info@wizardzmarketing.com
              </p>
              <p className='flex items-center gap-2'>
                <Phone className='w-4 h-4 text-[#b1ff40]' /> +1 (555) 019-2834
              </p>
              <p className='flex items-center gap-2'>
                <MapPin className='w-4 h-4 text-[#b1ff40]' /> 123 Digital
                Boulevard, Ste 500, Tech City
              </p>
            </div>
          </div>

          <div className='lg:col-span-7 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-4 items-center justify-between shadow-inner'>
            <div className='space-y-2 w-full md:w-auto'>
              <h5 className='font-bold text-lg'>Subscribe to newsletter</h5>
              <p className='text-zinc-400 text-sm'>
                No spam. Only high value marketing insights.
              </p>
            </div>
            <form
              onSubmit={handleSubscribe}
              className='flex flex-col sm:flex-row gap-3 w-full md:w-auto max-w-md flex-1'
            >
              <input
                type='email'
                required
                placeholder='Email Address'
                className='flex-1 px-5 py-3 rounded-xl bg-zinc-800 text-white placeholder-zinc-500 border border-zinc-700 focus:outline-none focus:border-[#b1ff40] text-sm'
              />
              <button
                type='submit'
                className='px-6 py-3 bg-[#b1ff40] text-[#191a23] font-extrabold rounded-xl hover:bg-white hover:scale-105 transition-all text-sm'
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bawah - Copyright */}
        <div className='flex flex-col sm:flex-row justify-between text-zinc-500 text-sm gap-4'>
          <p>&copy; 2026 WizardZ Inc. All rights reserved.</p>
          <div className='flex gap-6'>
            <a href='#' className='hover:underline'>
              Privacy Policy
            </a>
            <a href='#' className='hover:underline'>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// ==========================================
// DATA UTAMA LAYANAN & STUDI KASUS
// ==========================================

const SERVICES_DATABASE: Record<
  "seo" | "ppc" | "social" | "email",
  ServiceDetail
> = {
  seo: {
    title: "Search Engine Optimization",
    badge: "SEO Strategy",
    desc: "Amplify your reach by ranking for organic terms that matter. Our customized approach focuses on intensive site-technical health, semantic content construction, and authoritative link architecture.",
    stats: "Est. Traffic Increase: +120% | Time Frame: 3-6 Months",
    iconType: "seo",
  },
  ppc: {
    title: "Pay-Per-Click Marketing",
    badge: "PPC Management",
    desc: "Capture target traffic actively ready to convert. We construct laser-focused keyword matches across Google Ads, design landing pipelines, and rigorously adjust bid strategies to maximize ROI.",
    stats: "Avg. ROI: 4.5x spend | Setup Time: 7-10 Days",
    iconType: "ppc",
  },
  social: {
    title: "Social Media Expansion",
    badge: "SMM Growth",
    desc: "Build highly organic audience connections. We create tailored visual formats, construct community campaigns, and establish high-relevance viral trends across TikTok, Instagram, and LinkedIn.",
    stats: "Est. Engagement Boost: +85% | Setup Time: 14 Days",
    iconType: "social",
  },
  email: {
    title: "E-mail Marketing Optimization",
    badge: "Email Automation",
    desc: "Consistently nurture existing leads into active sales. We engineer high-retention transactional streams, build hyper-segmented campaign cohorts, and design copy to scale engagement.",
    stats: "Average CTR: 3.8% | Open Rate Increase: +45%",
    iconType: "email",
  },
};

const CASES_DATABASE: Record<"restaurant" | "b2b" | "retail", CaseStudyDetail> =
  {
    restaurant: {
      title: "PPC Optimization for Local Restaurant",
      badge: "Restaurant Growth",
      desc: "Kami membangun strategi kampanye geotargeting lokal berbasis Google Search Ads & Google Maps Pin Ads. Melalui visualisasi penawaran waktu makan malam serta re-engagement diskon, klik pemesanan meja meningkat tajam dalam tempo singkat.",
      stats: {
        achievement: "+50% Traffic Increase",
        metric: "+25% Sales Growth",
      },
    },
    b2b: {
      title: "SEO Ranking Domination for B2B Tech",
      badge: "B2B SaaS Growth",
      desc: "Melalui audit technical mendalam, optimasi struktur URL, dan produksi konten edukatif terarah untuk kata kunci ber-intent tinggi, brand SaaS klien kami naik dari halaman 4 Google langsung menduduki TOP 3 hasil pencarian organik.",
      stats: {
        achievement: "+200% Organic Growth",
        metric: "+110% Qualified Leads",
      },
    },
    retail: {
      title: "SMM Viral Spark for National Retailer",
      badge: "Retail E-Commerce",
      desc: "Kami meluncurkan kampanye berskala nasional dengan menggandeng ratusan mikro-influencer TikTok & Instagram Reels. Pola konten UGC (User Generated Content) kami menempatkan produk e-commerce klien di garda depan tren gaya hidup masa kini.",
      stats: {
        achievement: "+20% Online Sales",
        metric: "+25% New Followers",
      },
    },
  };

// ==========================================
// KOMPONEN UTAMA (DEFAULT EXPORT)
// ==========================================

export default function App() {
  // Pengaturan State Pop-Up / Modal
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [modalMeta, setModalMeta] = useState<{
    badge: string;
    title: string;
    desc: string;
  }>({
    badge: "",
    title: "",
    desc: "",
  });

  // State data spesifik pop-up detail
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(
    null,
  );
  const [selectedCase, setSelectedCase] = useState<CaseStudyDetail | null>(
    null,
  );

  // State Formulir Pengiriman Sukses
  const [formSubmitted, setFormSubmitted] = useState(false);

  // State Sistem Notifikasi (Toast)
  const [toastMsg, setToastMsg] = useState("");
  const [showToast, setShowToast] = useState(false);

  // Menjalankan Notifikasi Melayang
  const triggerToast = (msg: string) => {
    setToastMsg(msg);
    setShowToast(true);
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  // Aksi Klik Pop-Up Quote
  const handleOpenQuote = () => {
    setFormSubmitted(false);
    setModalMeta({
      badge: "Proposal",
      title: "Request a free quote",
      desc: "Fill out the details below and get a complete digital optimization outline with detailed pricing projections in less than 24 hours.",
    });
    setActiveModal("quote");
  };

  // Aksi Klik Pop-Up Konsultasi Audit
  const handleOpenConsultation = () => {
    setFormSubmitted(false);
    setModalMeta({
      badge: "Consultation",
      title: "Book a free audit call",
      desc: "Choose a perfect time slot to talk with our lead digital specialists. Get high-impact actionable advice on the spot.",
    });
    setActiveModal("consultation");
  };

  // Membuka Detail Layanan
  const handleOpenService = (id: "seo" | "ppc" | "social" | "email") => {
    setSelectedService(SERVICES_DATABASE[id]);
    setActiveModal("service");
  };

  // Membuka Detail Studi Kasus
  const handleOpenCase = (id: "restaurant" | "b2b" | "retail") => {
    setSelectedCase(CASES_DATABASE[id]);
    setActiveModal("case");
  };

  // Kirim Formulir Utama
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
    triggerToast("Permintaan proposal berhasil dikirim!");
  };

  return (
    <div className='bg-white text-zinc-900 font-sans antialiased selection:bg-[#b1ff40] selection:text-[#191a23] overflow-x-hidden min-h-screen'>
      {/* Memasukkan CSS kustom */}
      <style>{customStyles}</style>

      {/* Navigasi / Header */}
      <Header onOpenQuote={handleOpenQuote} />

      {/* Hero Utama */}
      <Hero onOpenConsultation={handleOpenConsultation} />

      {/* Baris Logo Mitra */}
      <LogoMarquee />

      {/* Layanan */}
      <Services onLearnMore={handleOpenService} />

      {/* Kalkulator ROI (Budget Slider) */}
      <RoiEstimator onClaimPlan={handleOpenQuote} />

      {/* Banner Promosi CTA */}
      <PromoBanner onGetProposal={handleOpenQuote} />

      {/* Studi Kasus Sukses */}
      <CaseStudies onLearnMoreCase={handleOpenCase} />

      {/* Footer Kontak */}
      <Footer onSubscribeSuccess={triggerToast} />

      {/* ==========================================
          SISTEM MODAL PORTAL INTERAKTIF
         ========================================== */}

      {activeModal && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-[#191a23]/80 backdrop-blur-sm p-4 animate-fade-in'>
          <div className='bg-white border-4 border-[#191a23] rounded-[32px] max-w-2xl w-full p-6 md:p-10 shadow-[8px_8px_0px_0px_#191a23] relative'>
            {/* Tombol Tutup */}
            <button
              onClick={() => setActiveModal(null)}
              className='absolute top-5 right-5 w-10 h-10 bg-zinc-100 hover:bg-[#b1ff40] rounded-full flex items-center justify-center border border-zinc-300 transition-all text-zinc-700 hover:text-[#191a23]'
            >
              <X className='w-5 h-5' />
            </button>

            {/* MODAL KARTU PROPOSAL ATAU KONSULTASI */}
            {(activeModal === "quote" || activeModal === "consultation") && (
              <div className='space-y-6'>
                {!formSubmitted ? (
                  <>
                    <div className='space-y-2'>
                      <span className='px-3 py-1 bg-[#b1ff40] text-[#191a23] font-bold rounded-lg border border-[#191a23] text-sm inline-block'>
                        {modalMeta.badge}
                      </span>
                      <h3 className='text-3xl font-extrabold text-[#191a23]'>
                        {modalMeta.title}
                      </h3>
                      <p className='text-zinc-600 text-sm'>{modalMeta.desc}</p>
                    </div>

                    <form onSubmit={handleFormSubmit} className='space-y-4'>
                      <div className='grid grid-cols-2 gap-4'>
                        <div className='space-y-1'>
                          <label className='text-xs font-bold text-zinc-700 uppercase'>
                            First Name
                          </label>
                          <input
                            type='text'
                            required
                            className='w-full px-4 py-3 border-2 border-[#191a23] rounded-xl focus:outline-none focus:bg-[#b1ff40]/10'
                            placeholder='Ahmad'
                          />
                        </div>
                        <div className='space-y-1'>
                          <label className='text-xs font-bold text-zinc-700 uppercase'>
                            Email Address
                          </label>
                          <input
                            type='email'
                            required
                            className='w-full px-4 py-3 border-2 border-[#191a23] rounded-xl focus:outline-none focus:bg-[#b1ff40]/10'
                            placeholder='ahmad@company.com'
                          />
                        </div>
                      </div>

                      <div className='space-y-1'>
                        <label className='text-xs font-bold text-zinc-700 uppercase'>
                          Choose Primary Goal
                        </label>
                        <select className='w-full px-4 py-3 border-2 border-[#191a23] rounded-xl bg-white focus:outline-none'>
                          <option>Search Engine Optimization (SEO)</option>
                          <option>Pay-Per-Click Marketing (PPC)</option>
                          <option>Social Media Marketing Growth</option>
                          <option>E-mail Campaign Strategy</option>
                        </select>
                      </div>

                      <div className='space-y-1'>
                        <label className='text-xs font-bold text-zinc-700 uppercase'>
                          Message / Requirements
                        </label>
                        <textarea
                          rows={3}
                          className='w-full px-4 py-3 border-2 border-[#191a23] rounded-xl focus:outline-none focus:bg-[#b1ff40]/10'
                          placeholder='Tell us about your brand and targets...'
                        ></textarea>
                      </div>

                      <button
                        type='submit'
                        className='w-full py-4 bg-[#191a23] text-white font-extrabold rounded-2xl hover:bg-[#191a23]/90 shadow-[4px_4px_0px_0px_#191a23] transition-all duration-300'
                      >
                        Submit & Request Call
                      </button>
                    </form>
                  </>
                ) : (
                  <div className='text-center py-8 space-y-4'>
                    <div className='w-16 h-16 bg-[#b1ff40] border-2 border-[#191a23] text-[#191a23] rounded-full flex items-center justify-center mx-auto'>
                      <CheckCircle2 className='w-10 h-10' />
                    </div>
                    <h4 className='text-2xl font-black text-[#191a23]'>
                      Permintaan Berhasil!
                    </h4>
                    <p className='text-zinc-600'>
                      Terima kasih atas minat Anda! Tim kami akan meninjau
                      rincian Anda dan segera menghubungi kembali dalam waktu
                      kurang dari 24 jam.
                    </p>
                    <button
                      onClick={() => setActiveModal(null)}
                      className='px-6 py-2 border-2 border-[#191a23] rounded-xl font-bold hover:bg-zinc-100 transition-all'
                    >
                      Tutup
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* MODAL DETAL LAYANAN */}
            {activeModal === "service" && selectedService && (
              <div className='space-y-6'>
                <div className='space-y-2'>
                  <span className='px-3 py-1 bg-[#b1ff40] text-[#191a23] font-bold rounded-lg border border-[#191a23] text-sm inline-block'>
                    {selectedService.badge}
                  </span>
                  <h3 className='text-3xl font-extrabold text-[#191a23]'>
                    {selectedService.title}
                  </h3>
                </div>

                <div className='space-y-4 text-zinc-600 leading-relaxed text-base'>
                  <p>{selectedService.desc}</p>
                  <div className='p-4 bg-zinc-100 border-l-4 border-[#b1ff40] rounded-r-xl font-bold text-[#191a23]'>
                    {selectedService.stats}
                  </div>
                </div>

                <div className='pt-6 flex flex-col sm:flex-row gap-4'>
                  <button
                    onClick={() => {
                      setActiveModal(null);
                      handleOpenQuote();
                    }}
                    className='flex-1 py-4 bg-[#191a23] text-white font-extrabold rounded-xl hover:bg-[#191a23]/95 transition-all text-center'
                  >
                    Request Proposal
                  </button>
                  <button
                    onClick={() => setActiveModal(null)}
                    className='px-6 py-4 border-2 border-[#191a23] font-bold rounded-xl hover:bg-zinc-100 transition-all'
                  >
                    Tutup
                  </button>
                </div>
              </div>
            )}

            {/* MODAL DETAIL STUDI KASUS */}
            {activeModal === "case" && selectedCase && (
              <div className='space-y-6'>
                <div className='space-y-2'>
                  <span className='px-3 py-1 bg-[#b1ff40] text-[#191a23] font-bold rounded-lg border border-[#191a23] text-sm inline-block'>
                    {selectedCase.badge}
                  </span>
                  <h3 className='text-3xl font-extrabold text-[#191a23]'>
                    {selectedCase.title}
                  </h3>
                </div>

                <div className='space-y-4 text-zinc-600 leading-relaxed text-base'>
                  <p className='font-semibold text-[#191a23]'>
                    Overview Pencapaian Klien:
                  </p>
                  <p>{selectedCase.desc}</p>

                  <div className='p-4 bg-[#191a23] text-white rounded-2xl border-2 border-[#191a23] flex justify-around text-center'>
                    <div>
                      <span className='block text-[#b1ff40] text-2xl font-black'>
                        {selectedCase.stats.achievement}
                      </span>
                      <span className='text-xs text-zinc-400'>Poin Utama</span>
                    </div>
                    <div className='border-l border-zinc-700'></div>
                    <div>
                      <span className='block text-[#b1ff40] text-2xl font-black'>
                        {selectedCase.stats.metric}
                      </span>
                      <span className='text-xs text-zinc-400'>
                        Skala Bisnis
                      </span>
                    </div>
                  </div>
                </div>

                <div className='pt-6 flex flex-col sm:flex-row gap-4'>
                  <button
                    onClick={() => {
                      setActiveModal(null);
                      handleOpenConsultation();
                    }}
                    className='flex-1 py-4 bg-[#b1ff40] text-[#191a23] font-extrabold rounded-xl hover:bg-[#191a23] hover:text-white transition-all text-center'
                  >
                    Book Similar Campaign
                  </button>
                  <button
                    onClick={() => setActiveModal(null)}
                    className='px-6 py-4 border-2 border-[#191a23] font-bold rounded-xl hover:bg-zinc-100 transition-all'
                  >
                    Tutup
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ==========================================
          TOAST FEEDBACK SYSTEM
         ========================================== */}
      {showToast && (
        <div className='fixed bottom-5 right-5 z-50 bg-[#191a23] text-white border-2 border-[#b1ff40] px-6 py-4 rounded-2xl shadow-xl flex items-center gap-3 transition-all duration-300 animate-bounce'>
          <Sparkles className='w-5 h-5 text-[#b1ff40]' />
          <span>{toastMsg}</span>
        </div>
      )}
    </div>
  );
}
