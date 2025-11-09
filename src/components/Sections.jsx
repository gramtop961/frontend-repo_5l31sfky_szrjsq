import React from 'react';
import { CheckCircle2, Bluetooth, Cpu, Activity, Award, Trophy, Rocket } from 'lucide-react';

export function Intro() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-zinc-900">What we do</h2>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              VitalEdge is building a compact all-in-one medical device that measures ECG, SpO2, temperature, heart rate, and respiratory activity, all powered by AI through the Mediesta platform.
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {["ECG", "SpO2", "Temperature", "Heart Rate", "Respiratory"].map((f) => (
                <div key={f} className="flex items-center gap-2 text-zinc-700"><CheckCircle2 className="text-teal-600" size={18}/> {f} monitoring</div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-6 bg-gradient-to-br from-teal-50 to-blue-50">
            <div className="grid grid-cols-2 gap-4">
              <FeatureCard icon={<Activity className="text-teal-600"/>} title="Real-time" desc="Instant insights on the go" />
              <FeatureCard icon={<Bluetooth className="text-blue-600"/>} title="Bluetooth" desc="Seamless connectivity" />
              <FeatureCard icon={<Cpu className="text-teal-600"/>} title="AI Analytics" desc="Mediesta-powered" />
              <FeatureCard icon={<Rocket className="text-blue-600"/>} title="Compact" desc="Pocket-sized design" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="rounded-xl bg-white border border-zinc-200 p-4 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-lg bg-white flex items-center justify-center">{icon}</div>
        <div>
          <p className="font-medium text-zinc-900">{title}</p>
          <p className="text-sm text-zinc-600">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export function Product() {
  return (
    <section id="product" className="py-20 bg-gradient-to-b from-white to-teal-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-zinc-900">VitalEdge Device</h2>
          <p className="mt-4 text-zinc-600">
            A pocket-sized, multifunctional tool integrating ECG, SpO2, digital stethoscope, temperature sensor, and microphone powered by an ESP32 microcontroller.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <SpecCard title="Companion App: Mediesta AI" desc="Data is processed to generate comprehensive, intelligent health reports you can share with clinicians." />
          <SpecCard title="Highlights" desc="Real-time monitoring • Bluetooth connectivity • AI analytics • Rechargeable compact design" />
        </div>

        <div className="mt-10 rounded-2xl border border-dashed border-teal-300/60 p-8 text-center bg-white">
          <p className="text-lg font-medium text-zinc-900">Coming soon – Be part of the health-tech revolution.</p>
        </div>
      </div>
    </section>
  );
}

function SpecCard({ title, desc }) {
  return (
    <div className="rounded-xl border border-zinc-200 p-6 bg-white shadow-sm">
      <p className="font-semibold text-zinc-900">{title}</p>
      <p className="mt-2 text-zinc-600 leading-relaxed">{desc}</p>
    </div>
  );
}

export function Achievements() {
  const items = [
    "Winner of Futurepreneur Challenge 2024 and multiple national business plan competitions",
    "IIT Guwahati and IIT Delhi TechFest Finalist",
    "₹50 lakh funding term sheet at ₹8 crore valuation",
    "Shortlisted for Disrupt’25",
    "In final stage for incubation talks with SINE-IITB and E cell IITM.",
    "Currently being incubated by Gece Global Foundation",
  ];

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-zinc-900">Achievements & Media</h2>
          <p className="mt-4 text-zinc-600">Milestones, awards, funding, and recognitions.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {items.map((it, idx) => (
            <div key={idx} className="rounded-xl border border-zinc-200 p-5 bg-gradient-to-br from-white to-teal-50/40">
              <div className="flex items-start gap-3">
                <Award className="text-teal-600 mt-0.5" size={20} />
                <p className="text-zinc-700">{it}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section className="py-20 bg-white" id="about-us">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-zinc-900">About Us</h2>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              VitalEdge began as a student innovation from Mumbai with a single goal: simplify health monitoring for everyone. Our mission is to make healthcare accessible, intelligent, and portable using advanced IoT and AI technology.
            </p>
            <p className="mt-3 text-zinc-600">We are a youth-driven team that values innovation, accessibility, accuracy, and trust.</p>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-6 bg-gradient-to-br from-blue-50 to-teal-50">
            <ul className="space-y-3 text-zinc-700">
              <li><span className="font-medium">Vision:</span> Revolutionize personal healthcare through intelligent, connected devices.</li>
              <li><span className="font-medium">Innovation:</span> Pushing the boundaries of portable diagnostics.</li>
              <li><span className="font-medium">Accessibility:</span> Designed for clinicians and consumers alike.</li>
              <li><span className="font-medium">Accuracy:</span> Reliable data with AI-enhanced insights.</li>
              <li><span className="font-medium">Trust:</span> Security and transparency at the core.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
