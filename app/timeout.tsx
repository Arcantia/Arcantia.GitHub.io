'use client';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export default function Timeout() {
  return (
    <>
      <Navigation />
      <div className="page-body">
        <div className="container">
          <main className="arcantia-homepage flex items-center justify-center flex-col py-20">
            <h1 className="text-[72px] font-bold mb-4">504</h1>
            <h2 className="text-[32px] mb-4">Gateway Timeout</h2>
            <p className="mb-8 text-center">Sorry, the server received an invalid response from an upstream server.</p>
            <button type="button" className="btn is-purple" onClick={() => window.location.reload()}>
              Try Again
            </button>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
