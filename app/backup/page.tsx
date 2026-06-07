'use client';

import { useState, useEffect } from 'react';
import { User } from '@supabase/supabase-js';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeaderCanvas } from '@/components/HeaderCanvas';
import { supabase } from '@/lib/supabase';
import NotFound from '../not-found';

export default function BackupPage() {
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
            <h1 className="section-title"><span>Server Backup</span></h1>
             <div className="panel arcantia-page" style={{ backgroundColor: '#fefefe' }}>
              <div className="panel-inner page-content post no-image">
                <section className="post-full-content">
                  <div className="post-content">
                    <iframe src="https://drive.google.com/embeddedfolderview?id=1IRoOkXI8TsICJ60zUIRWu2MO5p73ANqQ#list" title="Server Backup" style={{ width: '100%', height: '100vh', border: 'none', minHeight: '600px' }} />
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
