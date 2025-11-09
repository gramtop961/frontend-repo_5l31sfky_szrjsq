import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-zinc-900">Get in Touch with Us</h2>
            <p className="mt-4 text-zinc-600 max-w-xl">
              We’d love to connect with innovators, investors, and partners passionate about transforming healthcare.
            </p>
            <div className="mt-6 space-y-2 text-zinc-700">
              <p><span className="font-medium">Email:</span> <a className="text-teal-700 hover:underline" href="mailto:globalvitaledge@gmail.com">globalvitaledge@gmail.com</a></p>
              <p><span className="font-medium">Instagram:</span> <a className="text-teal-700 hover:underline" href="https://instagram.com/vitaledge_india" target="_blank" rel="noreferrer">@vitaledge_india</a></p>
            </div>
          </div>

          <form onSubmit={(e)=>e.preventDefault()} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="grid gap-4">
              <div>
                <label className="text-sm text-zinc-700">Name</label>
                <input type="text" required className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm text-zinc-700">Email</label>
                <input type="email" required className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="you@example.com" />
              </div>
              <div>
                <label className="text-sm text-zinc-700">Message</label>
                <textarea rows="4" required className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Write your message..." />
              </div>
              <button type="submit" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-teal-500 to-blue-600 px-5 py-3 text-white font-medium shadow">Send Message</button>
            </div>
            <p className="mt-4 text-xs text-zinc-500">© 2025 VitalEdge. All Rights Reserved.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
