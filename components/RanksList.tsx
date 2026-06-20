'use client';

interface RanksSpec {
  id: string;
  name: string;
  image: string;
  price: string;
  discountedPrice?: string;
  features: string[];
}

const ranks: RanksSpec[] = [
  {
    id: 'phoenix',
    name: 'PHOENIX BADGE',
    image: '/images/rank/tags/rank-phoenix.webp',
    price: '250 Shards',
    discountedPrice: '200 Shards',
    features: [
      'All Features on Explorer Badge',
      'Instantly Get 500K Essences',
      'Able to Claim 10000 Blocks for Lands',
      'Access to Phoenix Kit',
      'Ability to use /feed',
      'Ability to use /hat',
      'Ability to use /enderchest',
      'Able to Set up to 4 Pwarps (/pwarp set)',
      'Able to Set up to 7 Homes (/sethome)',
    ],
  },
  {
    id: 'sage',
    name: 'SAGE BADGE',
    image: '/images/rank/tags/rank-sage.webp',
    price: '500 Shards',
    discountedPrice: '400 Shards',
    features: [
      'All Features on Phoenix Badge',
      'Instantly Get 700K Essences',
      'Able to Claim 15000 Blocks for Lands',
      'Premium Tiarca Pass (/tiarcapass)',
      'Access to Sage Kit',
      'Ability to use /clearinventory',
      'Ability to use /suicide',
      'Ability to use /workbench',
      'Able to Set up to 8 Pwarps (/pwarp set)',
      'Able to Set up to 13 Homes (/sethome)',
    ],
  },
  {
    id: 'celestial',
    name: 'CELESTIAL BADGE',
    image: '/images/rank/tags/rank-celestial.webp',
    price: '1,000 Shards',
    discountedPrice: '700 Shards',
    features: [
      'All Features on Sage Badge',
      'Instantly Get 900K Essences',
      'Able to Claim 20000 Blocks for Lands',
      'Access to Celestial Kit',
      'Ability to use /heal',
      'Ability to use /anvil',
      'Ability to use /broadcast',
      'Able to Set up to 12 Pwarps (/pwarp set)',
      'Able to Set up to 17 Homes (/sethome)',
    ],
  },
  {
    id: 'onex',
    name: 'ONEX BADGE',
    image: '/images/rank/tags/rank-onex.webp',
    price: '1,500 Shards',
    discountedPrice: '1,000 Shards',
    features: [
      'All Features on Celestial Badge',
      'Instantly Get 1M Essences',
      'Able to Claim 25000 Blocks for Lands',
      'Access to Onex Kit',
      'Ability to use /invsee',
      'Ability to use /repair',
      'Ability to use /loom',
      'Ability to use /smithingtable',
      'Ability to use /stonecutter',
      'Ability to use /speed fly',
      'Able to Set up to 15 Pwarps (/pwarp set)',
      'Able to Set up to 20 Homes (/sethome)',
      'Request Free up to 1 Item inside Server',
    ],
  },
  {
    id: 'arcanum',
    name: 'ARCANUM BADGE',
    image: '/images/rank/tags/rank-arcanum.webp',
    price: '2,000 Shards',
    discountedPrice: '1,500 Shards',
    features: [
      'All Features on Onex Badge',
      'Instantly Get 1.2M Essences',
      'Able to Claim 30000 Blocks for Lands',
      'Access to Arcanum Kit',
      'Unlock all Slimefun Research',
      'Ability to /fly on Overworld and Nether',
      'Ability to /vanish',
      'Ability to use /silentjoin',
      'Ability to use /endersee',
      'Able to Set up to 17 Pwarps (/pwarp set)',
      'Able to Set up to 25 Homes (/sethome)',
      'Request Free up to 2 Item inside Server',
    ],
  },
  {
    id: 'custom',
    name: 'CUSTOM BADGE',
    image: '/images/rank/tags/rank-custom.webp',
    price: '3,000 Shards',
    discountedPrice: '2,000 Shards',
    features: [
      'Custom In-Game Prefix and Colors',
      'All Features on Arcanum Badge',
      'Instantly Get 1.5M Essences',
      'Able to Claim 35000 Blocks for Lands',
      'Access to All Kits',
      'Unlock all Slimefun Research',
      'Ability to use /god',
      'Ability to use /tp',
      'Able to Set up to 20 Pwarps (/pwarp set)',
      'Able to Set up to 30 Homes (/sethome)',
      'Request Free up to 3 Item inside Server',
    ],
  },
];

export function RanksList() {
  return (
    <div className="system-ranks-container">
      <div className="ranks-grid">
        {ranks.map((rank) => (
          <article key={rank.id} className="rank-card">
            <h3 className="rank-name">{rank.name}</h3>
            <div className="rank-image">
              <img src={rank.image} alt={`${rank.name} badge`} />
            </div>
            <div className="rank-divider" />
            <ul className="rank-features">
              {rank.features.map((feature, featureIndex) => (
                <li key={featureIndex}>
                  <i className="mdi mdi-checkbox-marked-circle-outline feature-icon"></i>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="rank-divider" />
            <div className="rank-price">
              {rank.discountedPrice ? (
                <>
                  <span className="original-price">{rank.price}</span>
                  <span className="discount-price">{rank.discountedPrice}</span>
                </>
              ) : (
                <span className="discount-price">{rank.price}</span>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
