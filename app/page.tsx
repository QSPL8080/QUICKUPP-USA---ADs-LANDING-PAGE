import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import VideoShowcase from "@/components/VideoShowcase";
import CreativeFormats from "@/components/CreativeFormats";
import HowItWorks from "@/components/HowItWorks";
import BuiltForDTC from "@/components/BuiltForDTC";
import WhyQuickupp from "@/components/WhyQuickupp";
import ComparisonTable from "@/components/ComparisonTable";
import FaqSection from "@/components/FaqSection";
import FinalCta from "@/components/FinalCta";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div id="top" className="min-h-screen w-full bg-white text-slate-900 overflow-x-clip">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main id="main-content" className="relative">
        {/* 01 — HERO */}
        <Hero />

        {/* 02 — SOCIAL PROOF / TRUST STRIP */}
        <SocialProof />

        {/* 03 — PROBLEM */}
        <Problem />

        {/* 04 — SOLUTION */}
        <Solution />

        {/* 05 — VIDEO SHOWCASE */}
        <VideoShowcase />

        {/* 06 — CREATIVE FORMATS */}
        <CreativeFormats />

        {/* 07 — HOW IT WORKS */}
        <HowItWorks />

        {/* 08 — BUILT FOR DTC */}
        <BuiltForDTC />

        {/* 09 — WHY QUICKUPP */}
        <WhyQuickupp />

        {/* 10 — CREATIVE COMPARISON */}
        <ComparisonTable />

        {/* 11 — FAQ */}
        <FaqSection />

        {/* 14 — FINAL CTA */}
        <FinalCta />

        {/* 15 — LEAD FORM */}
        <LeadForm />
      </main>

      {/* 16 — FOOTER */}
      <Footer />
    </div>
  );
}
