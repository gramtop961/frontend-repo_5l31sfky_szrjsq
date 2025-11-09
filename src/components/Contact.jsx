import React from 'react';

export default function Contact() {
  const [status, setStatus] = React.useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const payload = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
      source: 'website'
    };

    try {
      setStatus('loading');
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
    }
  }

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

          <form onSubmit={handleSubmit} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="grid gap-4">
              <div>
                <label className="text-sm text-zinc-700" htmlFor="name">Name</label>
                <input name="name" id="name" type="text" required className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm text-zinc-700" htmlFor="email">Email</label>
                <input name="email" id="email" type="email" required className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="you@example.com" />
              </div>
              <div>
                <label className="text-sm text-zinc-700" htmlFor="message">Message</label>
                <textarea name="message" id="message" rows="4" required className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Write your message..." />
              </div>
              <button type="submit" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-teal-500 to-blue-600 px-5 py-3 text-white font-medium shadow">
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'success' && <p className="text-sm text-green-600">Thanks! We received your message.</p>}
              {status === 'error' && <p className="text-sm text-red-600">Something went wrong. Please try again.</p>}
            </div>
            <p className="mt-4 text-xs text-zinc-500">© 2025 VitalEdge. All Rights Reserved.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
