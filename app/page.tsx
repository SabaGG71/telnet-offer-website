import React, { useState } from "react";
import {
  Layout,
  Rocket,
  Palette,
  Search,
  Settings,
  CheckCircle,
  Clock,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight">
            WEB<span className="text-blue-600">NOTES</span>
          </div>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors">
            დაიწყე პროექტი
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            პროფესიონალური საინფორმაციო{" "}
            <span className="text-blue-600">ვებსაიტი</span> თქვენი ბიზნესისთვის
          </h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">
            შექმენით მყარი ციფრული წარსადგენი 4 კვირაში. სრული პაკეტი:
            ინდივიდუალური დიზაინიდან ტექნიკურ SEO-მდე.
          </p>
          <div className="inline-block bg-white p-2 rounded-2xl shadow-xl border border-slate-100 mb-8">
            <div className="px-8 py-4 bg-slate-900 rounded-xl">
              <span className="text-slate-400 block text-sm uppercase tracking-widest">
                ფიქსირებული ფასი
              </span>
              <span className="text-3xl font-bold text-white">1,500 ₾</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            რას მოიცავს შეთავაზება?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<Palette className="w-6 h-6 text-blue-600" />}
              title="UX/UI დიზაინი"
              desc="ინდივიდუალური დიზაინი Figma-ში, თქვენს ბრენდზე მორგებული ვიზუალით."
            />
            <ServiceCard
              icon={<Layout className="w-6 h-6 text-blue-600" />}
              title="WordPress მართვა"
              desc="მოქნილი ადმინ პანელი, საიდანაც მარტივად მართავთ მთელ ინფორმაციას."
            />
            <ServiceCard
              icon={<Search className="w-6 h-6 text-blue-600" />}
              title="ტექნიკური SEO"
              desc="სწრაფი ინდექსაცია და მაღალი სიჩქარე საძიებო სისტემებისთვის."
            />
            <ServiceCard
              icon={<Settings className="w-6 h-6 text-blue-600" />}
              title="სრული მხარდაჭერა"
              desc="საიტის სრული გამართვა და ადაპტაცია ყველა ტიპის მოწყობილობაზე."
            />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200">
            <div className="flex items-center gap-3 mb-8">
              <Clock className="text-blue-600" />
              <h2 className="text-2xl font-bold">დასრულების ვადა: 4 კვირა</h2>
            </div>
            <div className="space-y-6">
              <Step
                number="01"
                title="UX/UI დიზაინი"
                desc="სტრუქტურის და ვიზუალის შეთანხმება Figma-ში."
              />
              <Step
                number="02"
                title="Development"
                desc="ვებსაიტის აწყობა WordPress პლატფორმაზე."
              />
              <Step
                number="03"
                title="SEO & Launch"
                desc="ტექნიკური გამართვა და საიტის გაშვება."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Info Note */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto bg-blue-50 border border-blue-100 rounded-2xl p-6 flex gap-4">
          <div className="bg-blue-600 p-2 rounded-lg h-fit">
            <CheckCircle className="w-5 h-5 text-white" />
          </div>
          <div>
            <h4 className="font-bold text-blue-900">
              მნიშვნელოვანი დეტალი კონტენტზე
            </h4>
            <p className="text-blue-800/80 text-sm mt-1">
              პროექტის ფარგლებში ჩვენ განვათავსებთ თქვენს არსებულ ტექსტებს ან
              ძველი საიტიდან გადმოტანილ ინფორმაციას. შეთავაზება არ მოიცავს ახალი
              ტექსტების ნულიდან შექმნას (Copywriting).
            </p>
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <footer className="py-20 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">მზად ხართ განახლებისთვის?</h2>
          <p className="text-slate-400 mb-10">
            დავიწყოთ მუშაობა თქვენს ახალ ვებსაიტზე დღესვე.
          </p>
          <button className="bg-white text-slate-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-transform active:scale-95">
            დამიკავშირდით
          </button>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:shadow-md transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function Step({
  number,
  title,
  desc,
}: {
  number: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-6">
      <span className="text-blue-600 font-mono font-bold">{number}</span>
      <div>
        <h4 className="font-bold text-lg">{title}</h4>
        <p className="text-slate-600">{desc}</p>
      </div>
    </div>
  );
}
