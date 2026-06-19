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
            <h4 className="App">We only sell Shards, where players can purchase ranks and other in-game items, using that very shard.</h4>
            <h4 className="App">Rate for the Shards is 1 Shard per IDR 100. You can purchase Shards through our Discord server.</h4>
            <div className="rank-separator"></div>
                <RanksList />
            <div className="rank-separator"></div>
            <div className="purchase-section flex items-center justify-center flex-col py-20">
              <h3 style={{ color: '#fff', textAlign: 'center', padding: '1rem' }}>Join our Discord to purchase the shards</h3>
              <Link href="https://dsc.gg/arcantia" className="btn is-purple" target="_blank" rel="noreferrer">
                Our Discord
              </Link>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
