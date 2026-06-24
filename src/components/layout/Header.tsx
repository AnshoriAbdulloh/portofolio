export default function Header() {
  return (
    <header className='sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-zinc-100 transition-all duration-300'>
      <div className='max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between'>
        {/* <!-- Logo Section --> */}
        <a href='#' className='flex items-center gap-2.5 group'>
          <div className='w-8 h-8 bg-brandDark rounded-lg flex items-center justify-center transition-transform group-hover:rotate-12 duration-300'>
            <svg
              className='w-5 h-5 text-brandLime'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path d='M12 2L2 22h20L12 2zm0 4.8L18.4 19H5.6L12 6.8z' />
            </svg>
          </div>
          <span className='text-2xl font-extrabold tracking-tight text-brandDark'>
            WizardZ
          </span>
        </a>

        {/* <!-- Desktop Nav Menu --> */}
        <nav className='hidden lg:flex items-center gap-8 font-medium text-brandDark/80'>
          <a
            href='#about'
            className='hover:text-brandDark hover:underline underline-offset-4 transition-all'
          >
            About us
          </a>
          <a
            href='#services'
            className='hover:text-brandDark hover:underline underline-offset-4 transition-all'
          >
            Services
          </a>
          <a
            href='#cases'
            className='hover:text-brandDark hover:underline underline-offset-4 transition-all'
          >
            Use Cases
          </a>
          <a
            href='#pricing'
            className='hover:text-brandDark hover:underline underline-offset-4 transition-all'
          >
            Pricing
          </a>
          <a
            href='#blog'
            className='hover:text-brandDark hover:underline underline-offset-4 transition-all'
          >
            Blog
          </a>
        </nav>

        {/* <!-- Desktop CTA --> */}
        <div className='hidden lg:block'>
          <button className='px-6 py-3 border-2 border-brandDark rounded-xl font-semibold hover:bg-brandDark hover:text-white transition-all duration-300 hover:shadow-neo active:translate-y-0.5'>
            Request a quote
          </button>
        </div>

        {/* <!-- Mobile Menu Button --> */}
        <button
          id='mobile-menu-btn'
          className='lg:hidden text-brandDark focus:outline-none p-1'
          aria-label='Toggle Menu'
        >
          <svg
            className='w-8 h-8'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              id='menu-icon'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2.5'
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
      </div>

      {/* <!-- Mobile Nav Menu Panel --> */}
      <div
        id='mobile-menu'
        className='hidden lg:hidden border-b border-zinc-200 bg-white absolute top-full left-0 w-full shadow-lg transition-all duration-300'
      >
        <div className='px-6 py-8 flex flex-col gap-6 font-semibold text-lg text-brandDark'>
          <a
            href='#about'
            className='hover:text-brandLime hover:bg-brandDark p-3 rounded-xl transition-all'
          >
            About us
          </a>
          <a
            href='#services'
            className='hover:text-brandLime hover:bg-brandDark p-3 rounded-xl transition-all'
          >
            Services
          </a>
          <a
            href='#cases'
            className='hover:text-brandLime hover:bg-brandDark p-3 rounded-xl transition-all'
          >
            Use Cases
          </a>
          <a
            href='#pricing'
            className='hover:text-brandLime hover:bg-brandDark p-3 rounded-xl transition-all'
          >
            Pricing
          </a>
          <a
            href='#blog'
            className='hover:text-brandLime hover:bg-brandDark p-3 rounded-xl transition-all'
          >
            Blog
          </a>
          <hr className='border-zinc-200' />
          <button className='w-full py-4 bg-brandDark text-white rounded-xl text-center hover:bg-brandDark/90 transition-all'>
            Request a quote
          </button>
        </div>
      </div>
    </header>
  );
}
