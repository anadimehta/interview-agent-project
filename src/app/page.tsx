"use client";

import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Preview from "../components/Preview";
import Footer from "../components/Footer";
import AuthOverlay from "../components/AuthOverlay";
import SetupModal from "../components/SetupModal";
import { type CSSProperties, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type DepthDotStyle = CSSProperties & {
  "--drift-x": string;
  "--drift-y": string;
  "--dot-opacity": string;
  "--dot-start-scale": string;
  "--dot-end-scale": string;
  "--dot-start-blur": string;
  "--dot-end-blur": string;
};

export default function Page() {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const depthDots = useMemo(() => {
    const randomFromSeed = (seed: number) => {
      const x = Math.sin(seed * 9999.91) * 10000;
      return x - Math.floor(x);
    };

    return Array.from({ length: 130 }, (_, index) => {
      const seed = index + 1;
      const depth = randomFromSeed(seed * 9.17);
      const left = randomFromSeed(seed * 1.13) * 100;
      const top = randomFromSeed(seed * 2.17) * 100;
      const size = 0.8 + depth * 2.8;
      const duration = 7 + randomFromSeed(seed * 4.11) * 10;
      const delay = randomFromSeed(seed * 5.31) * -20;
      const driftX = -90 + randomFromSeed(seed * 6.53) * 180;
      const driftY = -180 - randomFromSeed(seed * 7.61) * 360;
      const opacity = 0.22 + depth * 0.65;
      const startScale = 0.12 + depth * 0.25;
      const endScale = 1.4 + depth * 1.6;
      const startBlur = 1.4 - depth * 1.1;
      const endBlur = 0.2 + (1 - depth) * 1.1;

      return {
        id: `dot-${index}`,
        left,
        top,
        size,
        duration,
        delay,
        driftX,
        driftY,
        opacity,
        startScale,
        endScale,
        startBlur,
        endBlur,
      };
    });
  }, []);

  useEffect(() => {
    function onOpen() {
      setModalOpen(true);
    }
    window.addEventListener("openSetupModal", onOpen as EventListener);
    return () => window.removeEventListener("openSetupModal", onOpen as EventListener);
  }, []);

  function handleStart(opts: { company: string; topic: string; duration: number }) {
    // navigate to dashboard with params so the dashboard can start the session
    const q = new URLSearchParams();
    q.set("company", opts.company);
    q.set("topic", opts.topic);
    q.set("duration", String(opts.duration));
    router.push(`/dashboard?${q.toString()}`);
  }

  return (
    <>
      <Nav />
      <main id="landing-page" className="relative pt-32">
        <div className="depth-dot-field pointer-events-none" aria-hidden="true">
          {depthDots.map((dot) => {
            const style: DepthDotStyle = {
              left: `${dot.left}%`,
              top: `${dot.top}%`,
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              animationDuration: `${dot.duration}s`,
              animationDelay: `${dot.delay}s`,
              "--drift-x": `${dot.driftX}px`,
              "--drift-y": `${dot.driftY}px`,
              "--dot-opacity": `${dot.opacity}`,
              "--dot-start-scale": `${dot.startScale}`,
              "--dot-end-scale": `${dot.endScale}`,
              "--dot-start-blur": `${dot.startBlur}px`,
              "--dot-end-blur": `${dot.endBlur}px`,
            };

            return <span key={dot.id} className="depth-dot" style={style} />;
          })}
        </div>
        <div className="hero-gradient absolute inset-0 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <section className="mb-24">
            <Hero />
          </section>

          <section>
            <Features />
          </section>

          <section>
            <Preview />
          </section>

          <section>
            <Footer />
          </section>
        </div>
      </main>
      <AuthOverlay />
      <SetupModal open={modalOpen} onClose={() => setModalOpen(false)} onStart={handleStart} />
    </>
  );
}
