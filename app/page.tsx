'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeaderCanvas } from '@/components/HeaderCanvas';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Navigation />
      <HeaderCanvas />
      <div className="page-body">
        <div className="container">
          <main className="arcantia-homepage">
            <section className="panel welcome-section flex items-center">
              <div className="text">
                <h1 className="text-[22px]">Welcome to our Website</h1>
                <p className="mt-5 mb-3 leading-7">
                  Arcantia Network is a Minecraft Java Server that specialized in Economy and SlimeFun. Any Java player, be it "Premium" or "Cracked", can play together, without any discrimination, because we believe, not all players able to afford Minecraft.
                </p>
                <p>Join us at <strong>play.arcantianet.work</strong></p>
              </div>
              <div className="links flex items-center">
                <Link href="/vote" className="link link-about">
                  <img src="/images/vote-mascot.webp" alt="" />
                  <strong>Vote Us</strong>
                  <small>Spread the word!</small>
                </Link>
                <Link href="/store" className="link link-store">
                  <img src="/images/store-mascot.webp" alt="" />
                  <strong>Server Store</strong>
                  <small>Support us!</small>
                </Link>
              </div>
            </section>

            <h2 className="section-title"><span>How to Join</span></h2>
            <div className="panel arcantia-page">
              <div className="panel-inner page-content post">
                <section className="posts-full-content">
                  <div className="post-content">
                    <figure className="image">
                      <img src="/images/step-1.webp" alt="Step-1" />
                    </figure>
                    <center><h2 className="link-title text-[20px]">Open your Minecraft Launcher, Navigate to "Multiplayer"</h2></center>
                    <div className="link-tags"></div>
                    <figure className="image">
                      <img src="/images/step-2.webp" alt="Step-2" />
                    </figure>
                    <center><h2 className="link-title text-[20px]">Click the "Add a New Server" button</h2></center>
                    <div className="link-tags"></div>
                    <figure className="image">
                      <img src="/images/step-3.webp" alt="Step-3" />
                    </figure>
                    <center><h2 className="link-title text-[20px]">Enter the server identity:</h2></center>
                    <center><h2 className="link-title text-[20px]">Server Name: Arcantia Network<br />Server Address: play.arcantianet.work</h2></center>
                    <div className="link-tags"></div>
                    <figure className="image">
                      <img src="/images/step-4.webp" alt="Step-4" />
                    </figure>
                    <center><h2 className="link-title text-[20px]">Done and you're all set! If the MOTD isn't showing (or saying "Can't connect to server"), No problem! It's a bug. You can still join regardless.</h2></center>
                    <div className="link-tags"></div>
                  </div>
                </section>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}

function PoweredByCard({ image, name }: { image: string; name: string }) {
  return (
    <div className="powered-by-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '30px', background: 'rgb(58 58 68/var(--tw-bg-opacity))', borderRadius: '8px' }}>
      <img src={image} alt={name} style={{ maxWidth: '200px', maxHeight: '150px', objectFit: 'contain', marginBottom: '15px' }} />
      <h4 style={{ textAlign: 'center', margin: 0, fontWeight: 500, color: '#ebe6e3' }}>{name}</h4>
    </div>
  );
}
