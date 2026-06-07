'use client';

import { useState, useEffect } from 'react';
import { User } from '@supabase/supabase-js';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeaderCanvas } from '@/components/HeaderCanvas';
import { supabase } from '@/lib/supabase';
import NotFound from '../not-found';

export default function GuidePage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      try {
        setLoading(true);
        const { data: { user } } = await supabase.auth.getUser();
        setUser(user);
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkUser();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!user) return <NotFound />;

  return (
    <>
      <Navigation />
      <HeaderCanvas />
      <div className="page-body">
        <div className="container">
          <main className="arcantia-homepage">
            <h1 className="section-title"><span>Server Guide</span></h1>
              <iframe src="https://drive.google.com/file/d/1L1kv7ArqKfLoH2VRMQQMtfulQt876Qy_/preview" title="Server Guide" style={{ width: '100%', height: '100vh', border: 'none', minHeight: '600px' }} />
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
