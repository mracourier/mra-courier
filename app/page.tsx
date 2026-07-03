"use client";

import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  Box,
  Clock3,
  Globe,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Package,
  Phone,
  Plane,
  Send,
  ShieldCheck,
  Truck,
  X,
} from "lucide-react";

function MRAIcon({ dark = false, small = false }: { dark?: boolean; small?: boolean }) {
  const size = small ? "h-10 w-10" : "h-16 w-16";
  const iconSize = small ? 18 : 24;
  const sendSize = small ? 12 : 15;

  return (
    <div
      className={`relative flex ${size} items-center justify-center overflow-hidden rounded-full ${
        dark ? "border border-white/15 bg-white/10" : "bg-gradient-to-br from-sky-500 to-blue-900"
      } shadow-xl`}
    >
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.25),transparent_38%)]" />
      <Box className="text-white" size={iconSize} strokeWidth={2.2} />
      <div className="absolute right-[18%] top-[18%] text-white">
        <Send size={sendSize} strokeWidth={2.7} />
      </div>
    </div>
  );
}

function MRALogo({ dark = false, compact = false }: { dark?: boolean; compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <MRAIcon dark={dark} small={compact} />
      <div>
        <div className={`flex items-center gap-2 ${dark ? "text-white" : "text-blue-950"}`}>
          <span className={`${compact ? "text-2xl" : "text-4xl"} font-black leading-none tracking-tight`}>
            MRA
          </span>
          <span
            className={`rounded-full px-3 py-1 ${compact ? "text-xs" : "text-sm"} font-bold tracking-[0.18em] ${
              dark ? "bg-white/15 text-white" : "bg-blue-100 text-blue-900"
            }`}
          >
            COURIER
          </span>
        </div>

        <p className={`${compact ? "text-[11px]" : "text-sm"} mt-2 ${dark ? "text-blue-100" : "text-slate-600"}`}>
          Domestic & International Courier Services
        </p>
      </div>
    </div>
  );
}

function ParcelDeliveryPhoto() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-slate-950 shadow-2xl">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,23,42,0.05),rgba(15,23,42,0.72)),radial-gradient(circle_at_76%_20%,rgba(14,165,233,0.24),transparent_32%)]" />
      <div className="relative aspect-[4/3] min-h-[430px]">
        <div className="absolute inset-x-0 bottom-0 h-[32%] bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent" />
        <div className="absolute left-[8%] top-[12%] h-[58%] w-[43%] rounded-[1.5rem] border border-white/15 bg-white/10 shadow-2xl backdrop-blur-sm">
          <div className="absolute inset-x-7 top-7 h-4 rounded-full bg-white/20" />
          <div className="absolute left-7 top-16 h-28 w-28 rounded-2xl bg-amber-300 shadow-lg">
            <div className="mx-auto h-full w-5 bg-amber-200/75" />
          </div>
          <div className="absolute bottom-8 left-7 right-7 space-y-3">
            <div className="h-3 rounded-full bg-white/70" />
            <div className="h-3 w-3/4 rounded-full bg-white/35" />
            <div className="grid grid-cols-3 gap-2 pt-3">
              <div className="h-10 rounded-xl bg-white/15" />
              <div className="h-10 rounded-xl bg-white/15" />
              <div className="h-10 rounded-xl bg-sky-300/80" />
            </div>
          </div>
        </div>

        <div className="absolute right-[8%] top-[10%] h-[62%] w-[36%] rounded-t-[6rem] bg-slate-200 shadow-2xl">
          <div className="absolute left-1/2 top-8 h-20 w-20 -translate-x-1/2 rounded-full bg-stone-700" />
          <div className="absolute left-1/2 top-[5.5rem] h-28 w-24 -translate-x-1/2 rounded-[2.5rem] bg-slate-800" />
          <div className="absolute left-1/2 top-36 h-44 w-40 -translate-x-1/2 rounded-t-[2.75rem] bg-blue-900" />
          <div className="absolute left-[8%] top-[48%] h-16 w-24 -rotate-12 rounded-2xl bg-amber-300 shadow-xl">
            <div className="mx-auto h-full w-4 bg-amber-200/80" />
          </div>
          <div className="absolute right-[5%] top-[45%] h-16 w-24 rotate-6 rounded-2xl bg-amber-400 shadow-xl">
            <div className="mx-auto h-full w-4 bg-amber-200/80" />
          </div>
        </div>

        <div className="absolute bottom-[15%] left-[16%] right-[10%] rounded-[1.75rem] border border-white/20 bg-white p-5 text-slate-950 shadow-2xl">
          <div className="flex items-center justify-between gap-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-700">Ready for pickup</p>
              <p className="mt-1 text-2xl font-black">Professional parcel delivery</p>
            </div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-950 text-white">
              <Truck size={26} />
            </div>
          </div>
        </div>
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

  const whyUs: [React.ElementType, string, string][] = [
    [Package, "Safe Handling", "Careful support for documents and parcels."],
    [ShieldCheck, "Reliable Support", "Helpful communication and booking assistance."],
    [Clock3, "Quick Coordination", "Simple booking and practical shipment guidance."],
  ];

  const faqs: [string, string][] = [
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

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t bg-white px-6 py-4 md:hidden">
            <div className="flex flex-col gap-4 text-sm font-medium">
              {["home", "about", "services", "why-us", "faq", "contact"].map((item) => (
                <a key={item} href={`#${item}`} onClick={() => setMobileMenuOpen(false)} className="capitalize">
                  {item.replace("-", " ")}
                </a>
              ))}
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="rounded-2xl bg-blue-900 px-5 py-3 text-center text-white">
                WhatsApp Us
              </a>
            </div>
          </div>
        )}
      </header>

      <section id="home" className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <div className="mb-5">
              <MRALogo dark />
            </div>

            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-100">
              Modern Courier Minimal
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
              <a href="#contact" className="rounded-2xl border border-white/25 px-8 py-3 font-semibold text-white hover:bg-white/10">
                Get Free Quote
              </a>
            </div>
          </div>

          <ParcelDeliveryPhoto />
        </div>
      </section>

      <section className="border-b bg-white py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["Company Profile", "A dependable courier brand focused on local convenience and international reach."],
              ["Business Support", "Helping individuals, families, and businesses send parcels with confidence."],
              ["Reliable Process", "Easy inquiry, quick pickup coordination, and practical shipment guidance."],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-3xl border bg-slate-50 p-6">
                <h4 className="text-lg font-bold text-blue-900">{title}</h4>
                <p className="mt-3 text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-extrabold text-blue-950">About MRA Courier</h2>
            <p className="mt-4 text-lg text-slate-600">
              MRA Courier is built to provide dependable domestic and international courier support with a simple,
              customer-first approach.
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
            {whyUs.map(([Icon, title, desc]) => (
              <div key={title} className="rounded-3xl border bg-white p-6">
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
                <div className="flex items-start gap-3">
                  <Phone className="mt-1 text-blue-900" size={18} />
                  <span>{businessPhone}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 text-blue-900" size={18} />
                  <span>{businessEmail}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="mt-1 text-blue-900" size={18} />
                  <span>{website}</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 text-blue-900" size={18} />
                  <span>{address}</span>
                </div>
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

            <div className="overflow-hidden rounded-3xl border bg-white p-3 shadow-sm">
              <div className="mb-3 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
                If the map does not show in preview, use <span className="font-semibold">Open Google Maps</span>.
                It works normally after deployment.
              </div>

              <iframe
                title="MRA Courier Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.640982179408!2d78.4019!3d17.2404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sShamshabad%2C%20Hyderabad%2C%20Telangana%20501218!5e0!3m2!1sen!2sin!4v1760000000000!5m2!1sen!2sin"
                className="h-[420px] w-full rounded-2xl border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
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
