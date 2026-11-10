import { CallToAction } from '@/components/call-to-action';
import { Header } from '@/components/header';

import { HeroSection } from '@/components/hero-section/hero';
import { Stacks } from '@/components/stacks/stacks';

export default function Home() {
  return (
    <main className='flex flex-col'>
      <Header />
      <HeroSection />
      <Stacks />
      <CallToAction />

      <div className='pt-5 pb-5 flex flex-col items-center gap-1 text-center sm:flex-row sm:justify-between sm:text-left'>
        <span className='text-texto-secundario text-xs md:text-sm'>© 2026 Thiago Lourenço</span>
        <span className='text-texto-secundario text-xs md:text-sm'>Contagem, MG</span>
      </div>
    </main>
  );
}
