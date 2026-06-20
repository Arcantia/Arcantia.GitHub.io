'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeaderCanvas } from '@/components/HeaderCanvas';

export default function StorePage() {
  return (
    <>
      <Navigation />
      <HeaderCanvas />
      <div className="page-body">
        <div className="container">
          <main className="arcantia-homepage">
            <h2 className="section-title"><span>Payment</span></h2>
              <iframe src="https://qris.zone.id/arcantia" width="100%" height="850px"></iframe>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
