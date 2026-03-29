"use client";

import React, { useMemo, useState } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  Globe,
  MapPin,
  MessageCircle,
  Package,
  ShieldCheck,
  Clock3,
  Plane,
  Truck,
  Box,
  ArrowRight,
  Send,
} from "lucide-react";

function MRAIcon({ dark = false, small = false }: { dark?: boolean; small?: boolean }) {
  const size = small ? "h-10 w-10" : "h-16 w-16";

  return (
    <div
      className={`relative ${size} overflow-hidden rounded-[22px] ${
        dark
          ? "bg-white/10 border border-white/15"
          : "bg-gradient-to-br from-sky-500 via-blue-700 to-blue-950"
      } shadow-xl`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_22%,rgba(255,255,255,0.28),transparent_34%)]" />
      <div className="absolute inset-[22%] rounded-xl border-2 border-white/90" />
      <div className="absolute left-[28%] top-[58%] h-[2px] w-[34%] rotate-[-22deg] rounded-full bg-white/90" />
      <div className="absolute left-[24%] top-[63%] h-2 w-2 rounded-full bg-white" />
      <div className="absolute left-[56%] top-[45%] h-2 w-2 rounded-full bg-white" />
      <div className="absolute right-[20%] top-[26%] rotate-12 text-white">
        <Send size={small ? 13 : 16} strokeWidth={2.4} />
      </div>
      <div className="absolute bottom-[12%] left-1/2 -translate-x-1/2 text-[10px] font-black tracking-[0.22em] text-white">
        MRA
      </div>
    </div>
  );
}

function MRALogo({ dark = false, compact = false }: { dark?: boolean; compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <MRAIcon dark={dark} small={compact} />
      <div>
        <div className={`flex items-end gap-2 ${dark ? "text-white" : "text-blue-950"}`}>
          <span className={`${compact ? "text-2xl" : "text-4xl"} font-black leading-none tracking-tight`}>
            MRA
          </span>
          <span
            className={`${compact ? "text-base" : "text-xl"} font-semibold leading-none tracking-[0.08em] ${
              dark ? "text-blue-100" : "text-slate-700"
            }`}
          >
            COURIER
          </span>
        </div>

        <p
          className={`${compact ? "text-[11px]" : "text-sm"} mt-1 ${
            dark ? "text-blue-100" : "text-slate-600"
          }`}
        >
          Domestic & International Courier Services
        </p>
      </div>
    </div>
  );
}

export default function MRACourierHomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const businessPhone = "+91 741 678 0445";
  const whatsappNumber = "917416780445";
  const businessEmail = "mracourier@gmail.com";
  const website = "mracourier.com";
  const address = "Al Shukoor Colony, Shamshabad, Hyderabad, Telangana 501218";
  const mapsUrl = "https://maps.google.com/?q=Al+Shukoor+Colony+Shamshabad+Hyderabad+501218";

  const whatsappMessage = useMemo(() => {
    return encodeURIComponent(`Hello MRA Courier,

Name: ${form.name || "-"}
Phone: ${form.phone || "-"}
Service: ${form.service || "-"}
Message: ${form.message || "-"}

I would like to book a shipment.`);
  }, [form]);

  const whatsappUrl = useMemo(() => {
    return `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  }, [whatsappNumber, whatsappMessage]);

  const services = [
    [Truck, "Domestic Courier", "Quick and secure delivery across India."],
    [Plane, "International Courier", "Ship documents and parcels overseas with ease."],
    [Clock3, "Free Pickup", "Convenient pickup service for your shipments."],
    [Box, "Packing Support", "Proper packaging assistance for safer transit."],
  ] as const;

  const faqs = [
    ["Do you provide international courier?", "Yes, we support international parcel and document shipping assistance."],
    ["Do you offer pickup?", "Yes, free pickup is available depending on shipment location and service requirements."],
    ["Can I book through WhatsApp?", "Yes, you can contact MRA Courier directly on WhatsApp for booking and inquiry."],
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <MRALogo compact />

          <nav className="hidden gap-6 text-sm font-medium md:flex">
            <a href="#home" className="hover:text-blue-700">Home</a>
            <a href="#about" className="hover:text-blue-700">About</a>
            <a href="#services" className="hover:text-blue-700">Services</a>
            <a href="#why-us" className="hover:text-blue-700">Why Us</a>
            <a href="#faq" className="hover:text-blue-700">FAQ</a>
            <a href="#contact" className="hover:text-blue-700">Contact</a>
          </nav>

          <div className="hidden md:block">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-blue-900 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-800"
            >
              WhatsApp Us
            </a>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t bg-white px-6 py-4 md:hidden">
            <div className="flex flex-col gap-4 text-sm font-medium">
              <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#why-us" onClick={() => setMobileMenuOpen(false)}>Why Us</a>
              <a href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-blue-900 px-5 py-3 text-center text-white"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        )}
      </header>

      <section id="home" className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <div className="mb-5"><MRALogo dark /></div>

            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-100">
              International Express Style
            </div>

            <p className="mb-3 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm">
              Trusted Courier Partner in Hyderabad
            </p>

            <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
              Fast, Reliable Domestic & International Courier Solutions
            </h1>

            <p className="mt-5 max-w-xl text-lg text-blue-100">
              From important documents to parcels, MRA Courier helps you ship confidently with easy support,
              pickup options, and customer-friendly service.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-3 font-semibold text-blue-900 shadow-lg hover:bg-blue-50"
              >
                Book Shipment Now <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-white/25 px-8 py-3 font-semibold text-white hover:bg-white/10"
              >
                Get Free Quote
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur">
            <h3 className="text-2xl font-bold">Book Your Shipment</h3>
            <p className="mt-2 text-blue-100">Share your details and continue on WhatsApp instantly.</p>

            <div className="mt-6 grid gap-4">
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your Name"
                className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-blue-100 outline-none"
              />
              <input
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="Phone Number"
                className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-blue-100 outline-none"
              />
              <input
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                placeholder="Service Needed"
                className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-blue-100 outline-none"
              />
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Message"
                rows={4}
                className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-blue-100 outline-none"
              />
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-blue-900 hover:bg-blue-50"
              >
                <MessageCircle size={18} /> Send via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b bg-white py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border bg-slate-50 p-6">
              <h4 className="text-lg font-bold text-blue-900">Company Profile</h4>
              <p className="mt-3 text-slate-600">A dependable courier brand focused on local convenience and international reach.</p>
            </div>
            <div className="rounded-3xl border bg-slate-50 p-6">
              <h4 className="text-lg font-bold text-blue-900">Business Support</h4>
              <p className="mt-3 text-slate-600">Helping individuals, families, and businesses send parcels with confidence.</p>
            </div>
            <div className="rounded-3xl border bg-slate-50 p-6">
              <h4 className="text-lg font-bold text-blue-900">Reliable Process</h4>
              <p className="mt-3 text-slate-600">Easy inquiry, quick pickup coordination, and practical shipment guidance.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-extrabold text-blue-950">About MRA Courier</h2>
            <p className="mt-4 text-lg text-slate-600">
              MRA Courier is built to provide dependable domestic and international courier support with a simple, customer-first approach.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold text-blue-950">Our Services</h2>
            <p className="mt-3 text-slate-600">Practical shipping support for personal and business needs.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map(([Icon, title, desc]) => (
              <div key={title} className="rounded-3xl border bg-slate-50 p-6 shadow-sm">
                <div className="mb-4 inline-flex rounded-2xl bg-blue-100 p-3 text-blue-900">
                  <Icon size={22} />
                </div>
                <h3 className="text-xl font-bold text-blue-950">{title}</h3>
                <p className="mt-3 text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why-us" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold text-blue-950">Why Choose MRA Courier</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              [Package, "Safe Handling", "Careful support for documents and parcels."],
              [ShieldCheck, "Reliable Support", "Helpful communication and booking assistance."],
              [Clock3, "Quick Coordination", "Simple booking and practical shipment guidance."],
            ].map(([Icon, title, desc]) => (
              <div key={title} className="rounded-3xl border bg-white p-6">
                <div className="mb-4 inline-flex rounded-2xl bg-blue-100 p-3 text-blue-900">
                  {React.createElement(Icon as React.ElementType, { size: 22 })}
                </div>
                <h3 className="text-xl font-bold text-blue-950">{title}</h3>
                <p className="mt-3 text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold text-blue-950">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map(([q, a]) => (
              <div key={q} className="rounded-3xl border p-6">
                <h3 className="text-lg font-bold text-blue-950">{q}</h3>
                <p className="mt-2 text-slate-600">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border bg-white p-8">
              <h2 className="text-3xl font-extrabold text-blue-950">Contact Us</h2>
              <div className="mt-6 space-y-4 text-slate-700">
                <div className="flex items-start gap-3"><Phone className="mt-1 text-blue-900" size={18} /><span>{businessPhone}</span></div>
                <div className="flex items-start gap-3"><Mail className="mt-1 text-blue-900" size={18} /><span>{businessEmail}</span></div>
                <div className="flex items-start gap-3"><Globe className="mt-1 text-blue-900" size={18} /><span>{website}</span></div>
                <div className="flex items-start gap-3"><MapPin className="mt-1 text-blue-900" size={18} /><span>{address}</span></div>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="rounded-2xl bg-blue-900 px-6 py-3 font-semibold text-white">
                  Book a Shipment
                </a>
                <a href={mapsUrl} target="_blank" rel="noreferrer" className="rounded-2xl border px-6 py-3 font-semibold text-slate-800">
                  Open Google Maps
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border bg-white p-3">
              <iframe
                title="MRA Courier Location"
                src="https://www.google.com/maps?q=Al+Shukoor+Colony+Shamshabad+Hyderabad+501218&output=embed"
                className="h-[420px] w-full rounded-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t bg-white py-10">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3">
          <div>
            <MRALogo compact />
            <p className="mt-3 text-slate-500 italic">From Origin. To Overseas.</p>
          </div>
          <div>
            <h4 className="font-bold text-blue-950">Quick Links</h4>
            <div className="mt-3 flex flex-col gap-2 text-slate-600">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#faq">FAQ</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-blue-950">Contact</h4>
            <div className="mt-3 space-y-2 text-slate-600">
              <p>{businessPhone}</p>
              <p>{businessEmail}</p>
              <p>{address}</p>
            </div>
          </div>
        </div>
      </footer>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 inline-flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 font-semibold text-white shadow-xl hover:scale-105"
      >
        <MessageCircle size={18} /> WhatsApp
      </a>
    </div>
  );
}