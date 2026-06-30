export default function Header() {
  return (
    <header className='sticky top-0 z-40 bg-transparent backdrop-blur-xl w-full transition-all duration-300 '>
      <div className='container lg:px-12 px-5 mx-auto py-3 flex items-center justify-between'>
        <a href='#' className='flex items-center gap-2.5 '>
          <span className='text-lg tracking-tight'>bla bla bla</span>
        </a>
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
        {/* <div className='hidden lg:block'>
          <button className='px-6 py-3 border-2 border-brandDark rounded-xl font-semibold hover:bg-brandDark hover:text-white transition-all duration-300 hover:shadow-neo active:translate-y-0.5'>
            Request a quote
          </button>
        </div> */}

        <div>A</div>

        {/* <!-- Mobile Menu Button --> */}
        {/* <button
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
        </button> */}
      </div>
    </header>
  );
}
