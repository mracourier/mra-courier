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
    {
      Icon: Package,
      title: "Parcel Delivery",
      desc: "Send parcels of any size domestically and internationally. From small packages to large shipments, we handle it all with care and efficiency.",
      image:
        "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=900&q=80",
      featured: true,
    },
    {
      Icon: Truck,
      title: "Domestic Courier",
      desc: "Quick and secure delivery across India.",
    },
    {
      Icon: Plane,
      title: "International Courier",
      desc: "Ship documents and parcels overseas with ease.",
    },
    {
      Icon: Clock3,
      title: "Free Pickup",
      desc: "Convenient pickup service for your shipments.",
    },
    {
      Icon: Box,
      title: "Packing Support",
      desc: "Proper packaging assistance for safer transit.",
    },
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
            <a href="#home" className="hover:text-blue-700">
              Home
            </a>
            <a href="#about" className="hover:text-blue-700">
              About
            </a>
            <a href="#services" className="hover:text-blue-700">
              Services
            </a>
            <a href="#why-us" className="hover:text-blue-700">
              Why Us
            </a>
            <a href="#faq" className="hover:text-blue-700">
              FAQ
            </a>
            <a href="#contact" className="hover:text-blue-700">
              Contact
            </a>
          </nav>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-2xl bg-blue-900 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-800 md:block"
          >
            WhatsApp Us
          </a>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t bg-white px-6 py-4 md:hidden">
            <div className="flex flex-col gap-4 text-sm font-medium">
              {["Home", "About", "Services", "Why Us", "FAQ", "Contact"].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} onClick={() => setMobileMenuOpen(false)}>
                  {item}
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
            <p className="mb-3 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm">
              Trusted Courier Partner in Hyderabad
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
              Fast, Reliable Domestic & International Courier Solutions
            </h1>
            <p className="mt-5 max-w-xl text-lg text-blue-100">
              From important documents to parcels, MRA Courier helps you ship confidently with easy support, pickup
              options, and customer-friendly service.
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

          <div className="rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur">
            <h3 className="text-2xl font-bold">Book Your Shipment</h3>
            <p className="mt-2 text-blue-100">Share your details and continue on WhatsApp instantly.</p>
            <div className="mt-6 grid gap-4">
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your Name"
                className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-blue-100"
              />
              <input
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="Phone Number"
                className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-blue-100"
              />
              <input
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                placeholder="Service Needed"
                className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-blue-100"
              />
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Message"
                rows={4}
                className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-blue-100"
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
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3">
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
            {services.map(({ Icon, title, desc, image, featured }) => (
              <div
                key={title}
                className={`overflow-hidden rounded-3xl border bg-slate-50 shadow-sm ${
                  featured ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                {image && (
                  <img src={image} alt="Courier worker handling parcel delivery packages" className="h-56 w-full object-cover" />
                )}
                <div className="p-6">
                  <div className="mb-4 inline-flex rounded-2xl bg-blue-100 p-3 text-blue-900">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-blue-950">{title}</h3>
                  <p className="mt-3 text-slate-600">{desc}</p>
                </div>
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
              <div key={title as string} className="rounded-3xl border bg-white p-6">
                <div className="mb-4 inline-flex rounded-2xl bg-blue-100 p-3 text-blue-900">
                  {React.createElement(Icon as React.ElementType, { size: 22 })}
                </div>
                <h3 className="text-xl font-bold text-blue-950">{title as string}</h3>
                <p className="mt-3 text-slate-600">{desc as string}</p>
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
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">
          <div className="rounded-3xl border bg-white p-8">
            <h2 className="text-3xl font-extrabold text-blue-950">Contact Us</h2>
            <div className="mt-6 space-y-4 text-slate-700">
              {[
                [Phone, businessPhone],
                [Mail, businessEmail],
                [Globe, website],
                [MapPin, address],
              ].map(([Icon, text]) => (
                <div key={text as string} className="flex items-start gap-3">
                  {React.createElement(Icon as React.ElementType, { className: "mt-1 text-blue-900", size: 18 })}
                  <span>{text as string}</span>
                </div>
              ))}
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
            </div>
            <iframe
              src="https://www.google.com/maps?q=Al%20Shukoor%20Colony%2C%20Shamshabad%2C%20Hyderabad%2C%20Telangana%20501218&output=embed"
              className="h-[360px] w-full rounded-2xl border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MRA Courier location"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
