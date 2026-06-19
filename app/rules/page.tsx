'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeaderCanvas } from '@/components/HeaderCanvas';

export default function RulesPage() {
  return (
    <>
      <Navigation />
      <HeaderCanvas />
      <div className="page-body">
        <div className="container">
          <main className="arcantia-homepage">
            <h1 className="section-title"><span>Server Rules</span></h1>
            <div className="panel arcantia-page">
              <div className="panel-inner page-content post no-image">
                <section className="post-full-content">
                  <div className="post-content">
                    <p>
                      <strong>Arcantia Network</strong> is intended to be a fun, safe, and friendly environment for all players to enjoy. As such, we have a list of rules we expect all players to follow with no exceptions. By choosing to play on the <strong>Arcantia Network</strong>, you agree to follow all rules listed within the rulebook and policies.
                    </p>
                  </div>
                </section>
              </div>
            </div>
            
            <h2 className="section-title"><span>WARNING</span></h2>
            <div className="panel arcantia-page">
              <div className="panel-inner page-content post no-image">
                <section className="post-full-content">
                  <div className="post-content">
                    <h4>Violating the following rules will result in a warning. Repeated violations will lead to heavier punishments. Warnings expire after 7 days.</h4>
                    <ul>
                      <li>Disrespecting the Owner and Staff.</li>
                      <li>Typing in all caps.</li>
                      <li>Gameboosting.</li>
                      <li>Using inappropriate nicknames or usernames.</li>
                      <li>Deceiving Staff to obtain Donor Badge.</li>
                      <li>Showing negative behavior towards other players or the community.</li>
                      <li>Sending Unverified Links.</li>
                      <li>Sexual Content.</li>
                      <li>TP Spam.</li>
                    </ul>
                  </div>
                  </section>
              </div>
            </div>

            <h2 className="section-title"><span>MUTE</span></h2>
            <div className="panel arcantia-page">
              <div className="panel-inner page-content post no-image">
                <section className="post-full-content">
                  <div className="post-content">
                    <h4>Violating the following rules will result in a temporary mute. Repeated violations will lead to heavier punishments.</h4>
                    <ul>
                      <li>Advertising other servers or realms.</li>
                      <li>Sending Spam or Repeated chat messages.</li>
                      <li>Begging items or money from staffs.</li>
                      <li>Disrespecting other players.</li>
                      <li>Racism/Religious offense/Bigotry.</li>
                    </ul>
                  </div>
                </section>
              </div>
            </div>

            <h2 className="section-title"><span>BAN</span></h2>
            <div className="panel arcantia-page">
              <div className="panel-inner page-content post no-image">
                <section className="post-full-content">
                  <div className="post-content">
                    <h4>Violating the following rules will result in a Ban or IP-Ban, temporary or permanent. Players who evade their ban will be given a "special" Badge.</h4>
                    <ul>
                      <li>Any promotion without staff permission.</li>
                      <li>Evading active punishments.</li>
                      <li>DDoS or Hacking.</li>
                      <li>Using modded or hacked clients to gain unfair advantages.</li>
                      <li>Impersonating staff and/or other players.</li>
                      <li>Ignoring the existing rules.</li>
                      <li>Obtaining illegal items. This includes but not limited towards exploiting bugs, duplicating, or glitches.</li>
                      <li>Having an inappropriate skins.</li>
                      <li>Intentionally fake reporting players.</li>
                      <li>Insulting the Arcantia Server. If you don't like it, just leave. Is that simple.</li>
                      <li>X-Ray Mining.</li>
                      <li>Sharing NSFW content.</li>
                      <li>Commiting Fraud or Scamming.</li>
                      <li>Griefing and Harrasment towards other players.</li>
                      <li>Doxxing or revealing personal information about other players.</li>
                    </ul>
                  </div>
                  </section>
              </div>
            </div>

            <h2 className="section-title"><span>Final Notes</span></h2>
            <div className="panel arcantia-page">
              <div className="panel-inner page-content post no-image">
                <section className="post-full-content">
                  <div className="post-content">
                    <center><h4>By joining our server, you agree to abide by these rules. Ignorance of the rules is NOT an excuse to break them. You are expected to read beforehand.</h4></center>
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
