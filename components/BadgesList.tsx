'use client';

interface BadgeSpec {
  id: string;
  name: string;
  image: string;
  price: string;
  discountedPrice?: string;
  features: string[];
}

const badges: BadgeSpec[] = [
  {
    id: 'phoenix',
    name: 'PHOENIX',
    image: '/images/badge-phoenix.webp',
    price: 'Rp. 20,000',
    discountedPrice: '',
    features: [
      'All Features on Citizen Badge',
      'Instantly Get 500K Money',
      'Able to Claim 5000 Blocks for Lands',
      'Access to Phoenix Kit',
      'Able to create a Team',
      'Ability to use /enderchest',
      'Ability to use /feed',
      'Ability to use /hat',
      'Able to Set up to 2 Pwarps (/pwarp set)',
      'Able to Set up to 5 Homes (/sethome)',
    ],
  },
  {
    id: 'sage',
    name: 'SAGE',
    image: '/images/badge-sage.webp',
    price: 'Rp. 40,000',
    discountedPrice: '',
    features: [
      'All Features on Phoenix Badge',
      'Instantly Get 700K Money',
      'Able to Claim 7000 Blocks for Lands',
      'Access to Sage Kit',
      'Ability to use /nick',
      'Ability to use /suicide',
      'Ability to use /me',
      'Ability to use /workbench',
      'Able to Set up to 2 Pwarps (/pwarp set)',
      'Able to Set up to 7 Homes (/sethome)',
    ],
  },
  {
    id: 'celestial',
    name: 'CELESTIAL',
    image: '/images/badge-celestial.webp',
    price: 'Rp. 75,000',
    discountedPrice: '',
    features: [
      'All Features on Sage Badge',
      'Instantly Get 900K Money',
      'Able to Claim 10000 Blocks for Lands',
      'Access to Celestial Kit',
      'Ability to use /heal',
      'Ability to use /anvil',
      'Ability to use /broadcast',
      'Ability to use /clearinventory',
      'Able to Set up to 3 Pwarps (/pwarp set)',
      'Able to Set up to 10 Homes (/sethome)',
    ],
  },
  {
    id: 'onex',
    name: 'ONEX',
    image: '/images/badge-onex.webp',
    price: 'Rp. 120,000',
    discountedPrice: '',
    features: [
      'All Features on Celestial Badge',
      'Instantly Get 1M Money',
      'Able to Claim 13000 Blocks for Lands',
      'Access to Onex Kit',
      'Ability to use /fly on Overworld',
      'Ability to use /repair',
      'Ability to use /invsee',
      'Ability to use /loom',
      'Ability to use /pweather',
      'Ability to use /smithingtable',
      'Ability to use /stonecutter',
      'Able to Set up to 4 Pwarps (/pwarp set)',
      'Able to Set up to 15 Homes (/sethome)',
      'Request Free up to 1 Item inside Server',
    ],
  },
  {
    id: 'arcanum',
    name: 'ARCANUM',
    image: '/images/badge-arcanum.webp',
    price: 'Rp. 150,000',
    discountedPrice: '',
    features: [
      'All Features on Onex Badge',
      'Instantly Get 1.2M Money',
      'Able to Claim 15000 Blocks for Lands',
      'Access to Arcanum Kit',
      'Unlock all Slimefun Research',
      'Ability to use /fly on Nether',
      'Ability to use /vanish',
      'Ability to use /repair all',
      'Ability to use /endersee',
      'Able to Set up to 5 Pwarps (/pwarp set)',
      'Able to Set up to 20 Homes (/sethome)',
      'Request Free up to 2 Item inside Server',
    ],
  },
  {
    id: 'custom',
    name: 'CUSTOM',
    image: '/images/badge-custom.webp',
    price: 'Rp. 200,000',
    discountedPrice: 'Rp. 160,000',
    features: [
      'Custom In-Game Prefix and Colors',
      'All Features on Arcanum Badge',
      'Instantly Get 1.5M Money',
      'Able to Claim 17000 Blocks for Lands',
      'Access to All Kits',
      'Unlock all Slimefun Research',
      'Ability to use /fly on End',
      'Ability to use /tp',
      'Ability to use /godmode',
      'Able to Set up to 6 Pwarps (/pwarp set)',
      'Able to Set up to 25 Homes (/sethome)',
      'Request Free up to 3 Item inside Server',
    ],
  },
];

export function BadgesList() {
  return (
    <div className="system-badges-container">
      <div className="badges-list">
        {badges.map((badge, index) => (
          <div key={badge.id}>
            <div className="badge-item">
              <div className="badge-image">
                <img src={badge.image} alt={`${badge.name} badge`} />
              </div>
              <div className="badge-content">
                <h3 className="badge-name">{badge.name}</h3>
                <div className="badge-price">
                  {badge.discountedPrice ? (
                    <>
                      <span className="original-price" style={{ textDecoration: 'line-through' }}>
                        {badge.price}
                      </span>
                      <span className="discount-price" style={{ color: '#4CAF50', fontWeight: 'bold', marginLeft: '10px' }}>
                        {badge.discountedPrice}
                      </span>
                    </>
                  ) : (
                    <span className="badge-price-text">{badge.price}</span>
                  )}
                </div>
                <ul className="badge-features">
                  {badge.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <i className="mdi mdi-check"></i> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {index < badges.length - 1 && <div className="badge-separator" />}
          </div>
        ))}
      </div>
    </div>
  );
}
