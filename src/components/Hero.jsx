import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pt-36 pb-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="text-white">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-teal-400"></span>
                Mumbai, India • HealthTech
              </span>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
                Redefining Portable Health Monitoring
              </h1>
              <p className="mt-4 text-white/80 text-lg max-w-xl">
                Empowering healthcare through intelligent, compact, and connected technology.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#product" className="inline-flex items-center rounded-lg bg-gradient-to-r from-teal-500 to-blue-600 px-5 py-3 text-white font-medium shadow">
                  Explore Product
                </a>
                <a href="#contact" className="inline-flex items-center rounded-lg border border-white/30 px-5 py-3 text-white font-medium hover:bg-white/10">
                  Contact Us
                </a>
              </div>
            </div>

            <div className="hidden lg:block" />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
    </section>
  );
}
