import Link from "next/link"

function footer(){
    return(
        <footer className="w-full bg-purple-500 text-white">
          <div className="xl:px-40 pb-12 lg:px-20 md:px-10 sm:px-5 px-10">
            <div className="w-full pt-12 flex flex-col sm:flex-row space-y-2 justify-start">
              <div className="w-full sm:w-2/5 pr-6 flex flex-col space-y-4">
                {/* add svg here */}
                <h1 className="text-xl font-semibold">SpecsOn</h1>
                <p className="opacity-60">Johannesburg, South Africa.</p>
              </div>
              <ul className="w-full sm:w-1/5 flex flex-col space-y-4 capitalize py-6 sm:py-0">
                <li>
                  <Link href="#about">
                    <a className="opacity-60 hover:opacity-90 transition ease-in-out delay-100">About us</a>
                  </Link>
                </li>
                <li>
                  <Link href="#pricing">
                    <a className="opacity-60 hover:opacity-90 transition ease-in-out delay-100">Pricing</a>
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials">
                    <a className="opacity-60 hover:opacity-90 transition ease-in-out delay-100">Testimonials</a>
                  </Link>
                </li>
                <li>
                  <Link href="#contact">
                    <a className="opacity-60 hover:opacity-90 transition ease-in-out delay-100">Contact</a>
                  </Link>
                </li>
              </ul>
              <ul className="w-full sm:w-1/5 flex flex-col space-y-4 capitalize py-6 sm:py-0">
                <li>
                  <Link href="#help">
                    <a className="opacity-60 hover:opacity-90 transition ease-in-out delay-100">Help</a>
                  </Link>
                </li>
                <li>
                  <Link href="#terms">
                    <a className="opacity-60 hover:opacity-90 transition ease-in-out delay-100">Terms of service</a>
                  </Link>
                </li>
                <li>
                  <Link href="#policy">
                    <a className="opacity-60 hover:opacity-90 transition ease-in-out delay-100">Privacy Policy</a>
                  </Link>
                </li>
                <li>
                  <Link href="#status">
                    <a className="opacity-60 hover:opacity-90 transition ease-in-out delay-100">Status</a>
                  </Link>
                </li>
              </ul>
              <ul className="w-full sm:w-1/5 pt-6 flex items-end mb-1 py-6 sm:py-0">
                <div className="flex flex-row space-x-4">
                  <Link href="https://github.com/ThemeQuest/specs-on-website">
                    <a className="opacity-60 hover:opacity-90 transition ease-in-out delay-100" title="Project Repo">
                      <svg xmlns="http://www.w3.org/2000/svg" height={20} fill="currentColor" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
                    </a>
                  </Link>
                  <Link href="https://github.com/ThemeQuest/specs-on-api">
                    <a className="opacity-60 hover:opacity-90 transition ease-in-out delay-100" title="API Repo">
                      <svg xmlns="http://www.w3.org/2000/svg" height={20} fill="currentColor" viewBox="0 0 480 512"><path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"/></svg>
                    </a>
                  </Link>
                </div>
              </ul>
          </div>
          <div className="opacity-60 pt-2">
            <p>© 2021 SpecsOn.</p>
          </div>
        </div>
      </footer>
    )
}
export default footer 