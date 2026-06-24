export default function Hero() {
  return (
    <section
      id='about'
      className='relative max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden'
    >
      <div className='grid lg:grid-cols-12 gap-12 lg:gap-8 items-center'>
        {/* <!-- Left Info Column --> */}
        <div className='lg:col-span-6 space-y-6 md:space-y-8 z-10'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-black text-brandDark leading-[1.1] tracking-tight'>
            Navigating the digital landscape for success
          </h1>

          {/* <!-- Graphic for Mobile (Displays above description only on small screens) --> */}
          <div className='lg:hidden w-full max-w-sm mx-auto my-8 relative float-element'>
            {/* <!-- Dynamic Hero Illustration embedded for absolute visual fidelity --> */}
            <svg
              viewBox='0 0 500 500'
              className='w-full h-auto drop-shadow-xl'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              {/* <!-- Orbit rings --> */}
              <ellipse
                cx='230'
                cy='270'
                rx='160'
                ry='70'
                stroke='#191a23'
                stroke-width='2.5'
                transform='rotate(-15 230 270)'
                stroke-dasharray='6 6'
              />
              <ellipse
                cx='230'
                cy='270'
                rx='200'
                ry='90'
                stroke='#191a23'
                stroke-width='2'
                transform='rotate(-15 230 270)'
              />

              {/* <!-- Side bubbles & icons --> */}
              {/* <!-- Heart bubble --> */}
              <g transform='translate(390, 90)' className='pulse-slow'>
                <circle cx='25' cy='25' r='22' fill='#191a23' />
                <path
                  d='M25 33.5l-1.45-1.32C18.4 27.52 15 24.43 15 20.7 15 17.63 17.41 15.2 20.45 15.2c1.72 0 3.37.8 4.55 2.09 1.18-1.29 2.83-2.09 4.55-2.09C32.59 15.2 35 17.63 35 20.7c0 3.73-3.4 6.82-8.55 11.49L25 33.5z'
                  fill='white'
                />
              </g>
              {/* <!-- Share bubble --> */}
              <g transform='translate(420, 160)'>
                <circle
                  cx='20'
                  cy='20'
                  r='18'
                  fill='#b1ff40'
                  stroke='#191a23'
                  stroke-width='2'
                />
                <path
                  d='M18 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm4.5 5.5c-.8 0-1.5.5-1.8 1.2l-3.4-1.7c.1-.3.2-.7.2-1s-.1-.7-.2-1l3.4-1.7c.3.7 1 1.2 1.8 1.2 1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2c0 .3.1.7.2 1l-3.4 1.7C14.5 14.5 13.8 14 13 14c-1.1 0-2 .9-2 2s.9 2 2 2c.8 0 1.5-.5 1.8-1.2l3.4 1.7c-.1.3-.2.7-.2 1 0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2z'
                  fill='#191a23'
                  transform='scale(0.8) translate(5, 5)'
                />
              </g>
              {/* <!-- Play bubble --> */}
              <g transform='translate(415, 230)'>
                <circle cx='20' cy='20' r='18' fill='#191a23' />
                <path d='M16 12v16l12-8-12-8z' fill='white' />
              </g>
              {/* <!-- Location Bubble --> */}
              <g transform='translate(390, 300)'>
                <circle
                  cx='22'
                  cy='22'
                  r='20'
                  fill='#b1ff40'
                  stroke='#191a23'
                  stroke-width='2'
                />
                <path
                  d='M22 12c-4.42 0-8 3.58-8 8 0 5.25 8 13 8 13s8-7.75 8-13c0-4.42-3.58-8-8-8zm0 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z'
                  fill='#191a23'
                  transform='scale(0.85) translate(4, 4)'
                />
              </g>

              {/* <!-- Solid background objects --> */}
              <circle cx='270' cy='190' r='14' fill='#191a23' />
              <circle cx='295' cy='220' r='9' fill='#b1ff40' />
              <circle cx='390' cy='390' r='7' fill='#b1ff40' />

              {/* <!-- Sparkles/Stars (Brutalist style) --> */}
              <path
                d='M250 410 l 12-25 l 25-12 l-25-12 l-12-25 l-12 25 l-25 12 l 25 12 z'
                fill='#191a23'
              />
              <path
                d='M330 450 l 8-16 l 16-8 l-16-8 l-8-16 l-8 16 l-16 8 l 16 8 z'
                fill='#191a23'
              />

              {/* <!-- Megaphone Illustration --> */}
              <g id='megaphone-group'>
                {/* <!-- Handle --> */}
                <rect
                  x='290'
                  y='270'
                  width='30'
                  height='90'
                  rx='10'
                  transform='rotate(-30 290 270)'
                  fill='#191a23'
                  stroke='#191a23'
                  stroke-width='3'
                />
                {/* <!-- Connection ring --> */}
                <ellipse
                  cx='295'
                  cy='285'
                  rx='15'
                  ry='30'
                  transform='rotate(30 295 285)'
                  fill='#b1ff40'
                  stroke='#191a23'
                  stroke-width='4'
                />
                {/* <!-- Main cone body --> */}
                <path
                  d='M295 255 L180 180 L230 110 L315 225 Z'
                  fill='#ffffff'
                  stroke='#191a23'
                  stroke-width='4'
                  stroke-linejoin='round'
                />
                {/* <!-- Accent stripe on megaphone --> */}
                <path
                  d='M255 230 L210 200 L235 155 L275 180 Z'
                  fill='#b1ff40'
                  stroke='#191a23'
                  stroke-width='4'
                />
                {/* <!-- Megaphone Front Opening --> */}
                <ellipse
                  cx='320'
                  cy='210'
                  rx='35'
                  ry='75'
                  transform='rotate(30 320 210)'
                  fill='#b1ff40'
                  stroke='#191a23'
                  stroke-width='5'
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
          </div>

          <p className='text-lg md:text-xl text-zinc-700 leading-relaxed max-w-xl'>
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <div className='flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2'>
            <button
              //   onClick="openConsultationModal()"
              className='px-8 py-5 bg-brandDark text-white font-semibold rounded-2xl hover:bg-brandDark/90 transition-all hover:shadow-neo duration-300 text-center active:translate-y-0.5'
            >
              Book a consultation
            </button>
            <a
              href='#services'
              className='px-8 py-5 text-center font-bold border-2 border-transparent hover:border-brandDark rounded-2xl transition-all hover:shadow-neo'
            >
              Explore our work
              <i className='fa-solid fa-arrow-right ml-2 text-brandLime'></i>
            </a>
          </div>
        </div>

        {/* <!-- Right Graphic Column (Desktop) --> */}
        <div className='hidden lg:block lg:col-span-6 relative float-element'>
          {/* <!-- Dynamic Hero Illustration embedded for absolute visual fidelity --> */}
          <svg
            viewBox='0 0 550 500'
            className='w-full h-auto drop-shadow-2xl'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            {/* <!-- Orbit rings --> */}
            <ellipse
              cx='260'
              cy='260'
              rx='190'
              ry='80'
              stroke='#191a23'
              stroke-width='3'
              transform='rotate(-15 260 260)'
              stroke-dasharray='6 6'
            />
            <ellipse
              cx='260'
              cy='260'
              rx='240'
              ry='110'
              stroke='#191a23'
              stroke-width='2'
              transform='rotate(-15 260 260)'
            />

            {/* <!-- Side bubbles & icons --> */}
            {/* <!-- Heart bubble --> */}
            <g
              transform='translate(460, 70)'
              className='cursor-pointer group hover:scale-110 transition-transform duration-300'
            >
              <circle cx='25' cy='25' r='24' fill='#191a23' />
              <path
                d='M25 33.5l-1.45-1.32C18.4 27.52 15 24.43 15 20.7 15 17.63 17.41 15.2 20.45 15.2c1.72 0 3.37.8 4.55 2.09 1.18-1.29 2.83-2.09 4.55-2.09C32.59 15.2 35 17.63 35 20.7c0 3.73-3.4 6.82-8.55 11.49L25 33.5z'
                fill='white'
                className='group-hover:fill-red-500 transition-colors'
              />
            </g>
            {/* <!-- Share bubble --> */}
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
                stroke-width='2'
              />
              <path
                d='M18 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm4.5 5.5c-.8 0-1.5.5-1.8 1.2l-3.4-1.7c.1-.3.2-.7.2-1s-.1-.7-.2-1l3.4-1.7c.3.7 1 1.2 1.8 1.2 1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2c0 .3.1.7.2 1l-3.4 1.7C14.5 14.5 13.8 14 13 14c-1.1 0-2 .9-2 2s.9 2 2 2c.8 0 1.5-.5 1.8-1.2l3.4 1.7c-.1.3-.2.7-.2 1 0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2z'
                fill='#191a23'
                transform='scale(0.8) translate(5, 5)'
              />
            </g>
            {/* <!-- Play bubble --> */}
            <g
              transform='translate(490, 230)'
              className='cursor-pointer hover:scale-110 transition-transform duration-300'
            >
              <circle cx='20' cy='20' r='18' fill='#191a23' />
              <path d='M16 12v16l12-8-12-8z' fill='white' />
            </g>
            {/* <!-- Location Bubble --> */}
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
                stroke-width='2'
              />
              <path
                d='M22 12c-4.42 0-8 3.58-8 8 0 5.25 8 13 8 13s8-7.75 8-13c0-4.42-3.58-8-8-8zm0 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z'
                fill='#191a23'
                transform='scale(0.85) translate(4, 4)'
              />
            </g>

            {/* <!-- Solid background objects --> */}
            <circle cx='290' cy='180' r='14' fill='#191a23' />
            <circle cx='315' cy='210' r='9' fill='#b1ff40' />
            <circle cx='430' cy='380' r='7' fill='#b1ff40' />

            {/* <!-- Sparkles/Stars (Brutalist style) --> */}
            <path
              d='M270 400 l 12-25 l 25-12 l-25-12 l-12-25 l-12 25 l-25 12 l 25 12 z'
              fill='#191a23'
            />
            <path
              d='M350 440 l 8-16 l 16-8 l-16-8 l-8-16 l-8 16 l-16 8 l 16 8 z'
              fill='#191a23'
            />

            {/* <!-- Megaphone Illustration --> */}
            <g className='cursor-pointer hover:rotate-3 transition-transform duration-500 origin-[250px_280px]'>
              {/* <!-- Handle --> */}
              <rect
                x='290'
                y='270'
                width='30'
                height='90'
                rx='10'
                transform='rotate(-30 290 270)'
                fill='#191a23'
                stroke='#191a23'
                stroke-width='3'
              />
              {/* <!-- Connection ring --> */}
              <ellipse
                cx='295'
                cy='285'
                rx='15'
                ry='30'
                transform='rotate(30 295 285)'
                fill='#b1ff40'
                stroke='#191a23'
                stroke-width='4'
              />
              {/* <!-- Main cone body --> */}
              <path
                d='M295 255 L180 180 L230 110 L315 225 Z'
                fill='#ffffff'
                stroke='#191a23'
                stroke-width='4'
                stroke-linejoin='round'
              />
              {/* <!-- Accent stripe on megaphone --> */}
              <path
                d='M255 230 L210 200 L235 155 L275 180 Z'
                fill='#b1ff40'
                stroke='#191a23'
                stroke-width='4'
              />
              {/* <!-- Megaphone Front Opening --> */}
              <ellipse
                cx='320'
                cy='210'
                rx='35'
                ry='75'
                transform='rotate(30 320 210)'
                fill='#b1ff40'
                stroke='#191a23'
                stroke-width='5'
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
        </div>
      </div>
    </section>
  );
}
