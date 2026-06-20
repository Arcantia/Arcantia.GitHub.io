'use client';

import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeaderCanvas } from '@/components/HeaderCanvas';
import { RanksList } from '@/components/RanksList';

export default function StorePage() {
  return (
    <>
      <Navigation />
      <HeaderCanvas />
      <div className="page-body">
        <div className="container">
          <main className="arcantia-homepage">
            <h2 className="section-title"><span>Server Store</span></h2>
            <RanksList />
            <div className="purchase-section flex items-center justify-center flex-col py-20">
              <h3 style={{ color: '#fff', textAlign: 'center', padding: '1rem' }}>Rate for the Shards is <u>1 Shard per IDR 100</u>. You can purchase Shards through our Discord server.</h3>
              <Link href="https://dsc.gg/arcantia" className="btn is-purple" target="_blank" rel="noreferrer">
                Join Our Discord
              </Link>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
