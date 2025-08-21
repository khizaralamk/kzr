export default function ContactSection() {
  return (
    // container 1
    <section className="w-full min-h-screen bg-black flex items-center justify-center">
      {/* container 2 */}
      <div className="px-6 sm:px-4 py-24 max-w-xs md:max-w-2xl lg:max-w-5xl xl:max-w-7xl w-full mx-auto">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-6xl font-light text-white leading-tight tracking-tight">
              Contact
            </h2>
          </div>
          <div className="lg:col-span-8">
            <div className="space-y-12">
              <div className="border-t border-gray-800 pt-8">
                <div className="text-xs uppercase tracking-widest text-gray-400 mb-3">Email</div>
                <a href="mailto:hello@yourdomain.com" className="text-2xl text-white  hover:text-gray-300">
                  khizaralam25@gmail.com
                </a>
              </div>
              <div className="border-t border-gray-800 pt-8">
                <div className="text-xs uppercase tracking-widest text-gray-400 mb-3">Elsewhere</div>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-lg text-white hover:text-gray-300 transition-colors">GitHub</a>
                  </li>
                  <li>
                    <a href="#" className="text-lg text-white hover:text-gray-300 transition-colors">LinkedIn</a>
                  </li>
                  <li>
                    <a href="#" className="text-lg text-white hover:text-gray-300 transition-colors">Twitter</a>
                  </li>
                </ul>
              </div>
              <div className="border-t border-gray-800 pt-8">
                <p className="text-gray-400 max-w-xl">
                  Let's create something meaningful together.
                </p>
              </div>
            </div>
            <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <p className="text-gray-500 text-sm">© 2025 Khizar Alam</p>
              <div className="flex space-x-6 mt-4 sm:mt-0">
                <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy</a>
                <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms</a>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}