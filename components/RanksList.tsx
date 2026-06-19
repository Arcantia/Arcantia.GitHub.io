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
    name: 'PHOENIX',
    image: '/images/rank-phoenix.webp',
    price: '250 Shards',
    discountedPrice: '200 Shards',
    features: [
      'All Features on Citizen Rank',
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
    name: 'SAGE',
    image: '/images/rank-sage.webp',
    price: '500 Shards',
    discountedPrice: '400 Shards',
    features: [
      'All Features on Phoenix Rank',
      'Instantly Get 700K Essences',
      'Able to Claim 15000 Blocks for Lands',
      'Automatically obtains Premium Tiarca Pass (/tiarcapass)',
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
    name: 'CELESTIAL',
    image: '/images/rank-celestial.webp',
    price: '1,000 Shards',
    discountedPrice: '700 Shards',
    features: [
      'All Features on Sage Rank',
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
    name: 'ONEX',
    image: '/images/rank-onex.webp',
    price: '1,500 Shards',
    discountedPrice: '1,000 Shards',
    features: [
      'All Features on Celestial Rank',
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
    name: 'ARCANUM',
    image: '/images/rank-arcanum.webp',
    price: '2,000 Shards',
    discountedPrice: '1,500 Shards',
    features: [
      'All Features on Onex Rank',
      'Instantly Get 1.2M Essences',
      'Able to Claim 30000 Blocks for Lands',
      'Access to Arcanum Kit',
      'Unlock all Slimefun Research',
      'Ability to use /fly on Overworld and Nether',
      'Ability to use /vanish',
      'Ability to use /silentjoin',
      'Ability to use /endersee',
      'Able to Set up to 17 Pwarps (/pwarp set)',
      'Able to Set up to 25 Homes (/sethome)',
      'Request Free up to 2 Item inside Server',
    ],
  },
  {
    id: 'custom',
    name: 'CUSTOM',
    image: '/images/rank-custom.webp',
    price: '3,000 Shards',
    discountedPrice: '2,000 Shards',
    features: [
      'Custom In-Game Prefix and Colors',
      'All Features on Arcanum Rank',
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
      <div className="ranks-list">
        {ranks.map((rank, index) => (
          <div key={rank.id}>
            <div className="rank-item">
              <div className="rank-image">
                <img src={rank.image} alt={`${rank.name} rank`} />
              </div>
              <div className="rank-content">
                <h3 className="rank-name">{rank.name}</h3>
                <div className="rank-price">
                  {rank.discountedPrice ? (
                    <>
                      <span className="original-price" style={{ color: '#EBE6E3', textDecoration: 'line-through' }}>
                        {rank.price}
                      </span>
                      <span className="discount-price" style={{ color: '#35A597', fontWeight: 'bold', marginLeft: '10px' }}>
                        {rank.discountedPrice}
                      </span>
                    </>
                  ) : (
                    <span className="rank-price-text">{rank.price}</span>
                  )}
                </div>
                <ul className="rank-features">
                  {rank.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <i className="mdi mdi-check"></i> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {index < ranks.length - 1 && <div className="rank-separator" />}
          </div>
        ))}
      </div>
    </div>
  );
}
