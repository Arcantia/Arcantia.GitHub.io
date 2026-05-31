'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeaderCanvas } from '@/components/HeaderCanvas';

interface StaffMember {
  name: string;
  img: string;
}

interface StaffGroup {
  group: string;
  members: StaffMember[];
}

const STAFF_GROUPS: StaffGroup[] = [
  {
    group: 'Operator',
    members: [
      {
        name: 'itsShiroharu',
        img: '/images/staff/itsshiroharu.webp',
      },
    ],
  },
  {
    group: 'Manager',
    members: [
      {
        name: 'Azoela',
        img: '/images/staff/azoela.webp',
      },
    ],
  },
  {
    group: 'Developer',
    members: [
      {
        name: 'RAMA_wae',
        img: '/images/staff/rama_wae.webp',
      },
    ],
  },
  {
    group: 'Builder',
    members: [
      {
        name: 'MioBeau',
        img: '/images/staff/miobeau.webp',
      },
    ],
  },
  {
    group: 'Admin',
    members: [
      {
        name: 'PhobosID',
        img: '/images/staff/phobosid.webp',
      },
      {
        name: 'Rchfiki',
        img: '/images/staff/rchfiki.webp',
      },
    ],
  },
];

export default function StaffPage() {
  return (
    <>
      <Navigation />
      <HeaderCanvas />
      <div className="page-body">
        <div className="container">
          <div className="arcantia-staff-page">
            <div className="panel groups">
              <h1 className="panel-title">Staff Members</h1>
              {STAFF_GROUPS.map((group, groupIdx) => (
                <div key={groupIdx} className="group mb-8 last:mb-0">
                  <h2>
                    <i className="mdi mdi-badge-account-outline"></i>
                    <span>{group.group}</span>
                  </h2>
                  <div className="list">
                    {group.members.map((member, memberIdx) => (
                      <div key={memberIdx} className="member">
                        <img src={member.img} alt={member.name} />
                        <p>{member.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
