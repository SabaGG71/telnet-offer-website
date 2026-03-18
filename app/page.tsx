import React from "react";
import {
  Rocket,
  Palette,
  Search,
  CheckCircle,
  Clock,
  RefreshCw,
  ShieldCheck,
  Cpu,
  Mail,
  Tag,
} from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100/70 shadow-sm shadow-slate-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-100">
              <span className="text-white font-bold text-xl">W</span>
            </div>
            <span className="text-xl font-black tracking-tighter uppercase text-slate-950">
              Webnotes
            </span>
          </div>
          <div className="hidden md:flex items-center gap-9 text-sm font-semibold text-slate-600">
            <a
              href="#services"
              className="hover:text-blue-600 transition-colors"
            >
              სერვისები
            </a>
            <a
              href="#process"
              className="hover:text-blue-600 transition-colors"
            >
              პროცესი
            </a>
            <a
              href="#pricing"
              className="hover:text-blue-600 transition-colors"
            >
              ფასი
            </a>
          </div>
          <button className="bg-slate-950 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-blue-600 transition-all shadow-xl shadow-slate-100 active:scale-95">
            <Link
              href="mailto:sgachechiladze881@gmail.com/?subject=ვებსაიტის შეკვეთა"
              target="_blank"
            >
              პროექტის დაწყება
            </Link>
          </button>
        </div>
      </nav>

      {/* Hero Section - ფასის გარეშე */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-gradient-to-b from-blue-50/20 to-white/0">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-8 shadow-inner shadow-blue-100/50">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              შეთავაზება
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter leading-[1.05] text-slate-950">
              პროფესიონალური <span className="text-blue-600">ინფორმაციული</span>{" "}
              ვებსაიტი
            </h1>
            <p className="text-xl md:text-2xl text-slate-600/90 mb-12 leading-relaxed max-w-2xl font-medium">
              გთავაზობთ თანამედროვე სტილის ვებსაიტს 4 კვირაში. სრული პაკეტი:
              ინდივიდუალური UX/UI დიზაინიდან ფუნდამენტურ ტექნიკურ SEO-მდე.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[700px] h-[700px] bg-gradient-to-br from-blue-100 to-white rounded-full blur-[110px] opacity-60 -z-10"></div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-28 bg-slate-50/60 border-y border-slate-100"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-extrabold mb-8 tracking-tighter text-slate-950">
                რას მოიცავს შეთავაზება?
              </h2>
              <p className="text-slate-600/90 mb-10 text-lg leading-relaxed">
                ჩვენი მიზანია არა მხოლოდ ლამაზი ვიზუალი, არამედ გამართული
                ტექნიკური ფუნდამენტი.
              </p>
              <div className="p-7 bg-blue-600 rounded-3xl text-white shadow-3xl shadow-blue-100 relative overflow-hidden group">
                <RefreshCw className="w-9 h-9 mb-5 animate-spin-slow text-blue-100" />
                <h4 className="font-bold text-xl mb-3">3-დღიანი რეპორტინგი</h4>
                <p className="text-blue-50 text-sm leading-relaxed relative z-10 opacity-90">
                  ყოველ მესამე დღეს მიიღებთ დეტალურ უკუკავშირს შესრულებული
                  სამუშაოს შესახებ.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-7">
              <ServiceBox
                icon={<Palette className="w-6 h-6" />}
                title="UX/UI დიზაინი (Figma)"
                features={[
                  "უნიკალური ვიზუალური კონცეფცია",
                  "ბრენდზე მორგებული სტილი",
                  "ინტერაქტიული პროტოტიპი",
                  "სრული მობილური ადაპტაცია",
                ]}
              />
              <ServiceBox
                icon={<Cpu className="w-6 h-6" />}
                title="WordPress დეველოპმენტი"
                features={[
                  "WordPress სამართავი პანელი",
                  "Elementor Pro",
                  "მრავალენოვანი მხარდაჭერა",
                  "სუფთა და ოპტიმიზებული კოდი",
                ]}
              />
              <ServiceBox
                icon={<Search className="w-6 h-6" />}
                title="ტექნიკური SEO"
                features={[
                  "Semantic HTML სტრუქტურა",
                  "Meta თეგების კონფიგურაცია",
                  "Sitemap & Robots.txt",
                  "Schema Markup ინტეგრაცია",
                ]}
              />
              <ServiceBox
                icon={<Rocket className="w-6 h-6" />}
                title="Performance & Security"
                features={[
                  "PageSpeed ოპტიმიზაცია",
                  "Image Optimization & WebP",
                  "SSL სერტიფიკატის გამართვა",
                  "ძირითადი დაცვის ფილტრები",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - ჩამოტანილი ქვემოთ */}
      <section id="pricing" className="py-24 px-6 scroll-mt-20">
        <div className="max-w-5xl mx-auto bg-blue-50/50 border border-blue-100 rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center justify-between">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
              <div className="bg-blue-600 p-5 rounded-3xl shadow-xl shadow-blue-200">
                <Tag className="w-9 h-9 text-white" />
              </div>
              <div>
                <p className="text-blue-600 text-xs uppercase font-bold tracking-widest mb-2">
                  მომსახურების ღირებულება
                </p>
                <h3 className="text-4xl md:text-5xl font-black text-slate-950 mb-3">
                  1,500 ₾
                </h3>
                <div className="flex items-center justify-center md:justify-start gap-2.5 text-slate-500 font-semibold">
                  <Clock className="w-5 h-5 text-blue-600" />
                  დასრულება 28 დღეში
                </div>
              </div>
            </div>
            <button className="bg-slate-950 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-600 transition-all shadow-xl shadow-slate-200 active:scale-95">
              <Link href="mailto:sgachechiladze881@gmail.com/?subject=ვებსაიტის შეკვეთა">
                შეკვეთა
              </Link>
            </button>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section id="process" className="py-28 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black mb-20 tracking-tighter text-slate-950">
            სამუშაო პროცესი
          </h2>
          <div className="space-y-16 relative before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-1 before:bg-slate-100 md:before:left-1/2 md:before:-ml-0.5">
            <Step
              number="01"
              title="დიზაინის ეტაპი"
              desc="ვქმნით საიტის ვიზუალს Figma-ში და ვათანხმებთ ყველა დეტალს თქვენთან."
            />
            <Step
              number="02"
              title="აწყობა და გამართვა"
              desc="გადაგვაქვს დიზაინი WordPress-ში და ვარგებთ თქვენს საჭიროებებზე."
            />
            <Step
              number="03"
              title="SEO და ტესტირება"
              desc="ვასრულებთ ტექნიკურ ოპტიმიზაციას და ვტესტავთ საიტს ყველა მოწყობილობაზე."
            />
            <Step
              number="04"
              title="ტრენინგი და ჩაბარება"
              desc="გასწავლით ადმინ პანელით სარგებლობას და ვუშვებთ საიტს ლაივში."
            />
          </div>
        </div>
      </section>

      {/* Content Policy Disclaimer */}
      <section className="py-16 px-6 bg-slate-50/50 border-t border-slate-100">
        <div className="max-w-5xl mx-auto bg-slate-950 rounded-[2.5rem] p-10 md:p-14 text-white relative overflow-hidden shadow-4xl shadow-slate-300">
          <div className="relative z-10 flex flex-col md:flex-row gap-10 items-start">
            <div className="bg-blue-600 p-5 rounded-3xl shadow-xl shadow-blue-900/40">
              <ShieldCheck className="w-9 h-9 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-extrabold mb-5 tracking-tighter">
                ინფორმაცია კონტენტის შესახებ
              </h3>
              <p className="text-slate-300 leading-relaxed italic opacity-90">
                "ჩვენ განვათავსებთ თქვენს მიერ მოწოდებულ ტექსტებს ვებსაიტზე.
                ძველი ვებსაიტიდან მოვახდენთ ინფორმაციის მიგრაციას ან განვაახლებთ
                მას თქვენი მითითებების შესაბამისად. გაითვალისწინეთ, რომ
                შეთავაზება არ მოიცავს ქოფირაითინგს."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-28 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter">
            დავიწყოთ თქვენი პროექტი?
          </h2>
          <button className="relative z-10 bg-blue-600 text-white px-12 py-4.5 rounded-full font-bold text-lg shadow-xl shadow-blue-200/80 hover:bg-blue-700 transition-all flex items-center justify-center gap-3.5 mx-auto">
            <Mail className="w-5 h-5" />
            <Link
              href="mailto:sgachechiladze881@gmail.com/?subject=ვებსაიტის შეკვეთა"
              className="no-underline"
            >
              მოგვწერეთ ელ-ფოსტაზე
            </Link>
          </button>
          <p className="mt-20 text-slate-400 text-sm font-semibold uppercase tracking-widest border-t border-slate-100 pt-10">
            © 2026 WEBNOTES
          </p>
        </div>
      </footer>
    </div>
  );
}

// Components remain similar but with consistent styling
function ServiceBox({
  icon,
  title,
  features,
}: {
  icon: React.ReactNode;
  title: string;
  features: string[];
}) {
  return (
    <div className="bg-white p-9 rounded-[2rem] border border-slate-100/80 hover:border-blue-200 hover:shadow-2xl transition-all group shadow-sm">
      <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-7 group-hover:bg-blue-600 group-hover:text-white transition-all">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-5 tracking-tight text-slate-950">
        {title}
      </h3>
      <ul className="space-y-3.5">
        {features.map((item, idx) => (
          <li
            key={idx}
            className="flex items-start gap-3.5 text-sm font-medium text-slate-600"
          >
            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
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
  const isOdd = parseInt(number) % 2 !== 0;
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-10 relative z-10">
      <div className="md:w-1/2 md:text-right hidden md:block">
        {isOdd && (
          <div className="pr-10">
            <h4 className="font-extrabold text-2xl mb-2">{title}</h4>
            <p className="text-slate-600 text-base leading-relaxed max-w-sm ml-auto">
              {desc}
            </p>
          </div>
        )}
      </div>
      <div className="w-10 h-10 bg-slate-950 rounded-full flex items-center justify-center text-white text-sm font-extrabold border-[5px] border-white shadow-xl md:mx-auto relative z-20">
        {number}
      </div>
      <div className="md:w-1/2 text-left">
        {!isOdd && (
          <div className="pl-10 md:pl-0">
            <h4 className="font-extrabold text-2xl mb-2">{title}</h4>
            <p className="text-slate-600 text-base leading-relaxed max-w-sm">
              {desc}
            </p>
          </div>
        )}
        {isOdd && (
          <div className="md:hidden pl-10">
            <h4 className="font-extrabold text-2xl mb-2">{title}</h4>
            <p className="text-slate-600 text-base leading-relaxed max-w-sm">
              {desc}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
