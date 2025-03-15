export const musicNavLinks=[
    {name:'home', href:'/'},
    {name:'dashboard', href:'/dashboard'},
    {name:'marketplace', href:'/market_place'},
    {name:'for artists', href:'/for_artist'},
    {name:'for buyers', href:'/for_buyers'}
]

export const footerLinks = [
    {
      title: 'about',
      links: [
        { name: 'how it works', href: '/how_works' },
        { name: 'our story', href: '/our_story' },
        { name: 'market place', href: '/market_place' },
        { name: 'content guidelines', href: '/content_guidelines' }
      ]
    },
    {
      title: 'pricing',
      links: [
        { name: 'Pricing', href: '/pricing' },
        { name: 'faq', href: '/faq' },
        { name: 'liscensing terms', href: '/liscense_terms' },
        { name: '(030)-444-6128', href: '#' }
      ]
    },
    {
      title: 'socials',
      links: [
        { name: 'discord', href: '#' },
        { name: 'instagram', href: '#' },
        { name: 'twitter', href: '#' },
        { name: 'Facebook', href: '#' }
      ]
    }
  ];


  export const recommendationData = [
    {
      name: "David Chen",
      occupation: "Film Maker",
      opinion:
        "BeatBack has saved me so much time and money. I can find the perfect music for my projects without breaking the bank. It's a game-changer for independent filmmakers like myself.",
      rating: 4.5,
      image: "/images/rc1.svg",
    },
    {
      name: "Aisha Williams",
      occupation: "Content Creator",
      opinion:
        "I create videos daily, and BeatBack helps me find the best background music effortlessly. The variety is incredible!",
      rating: 5,
      image: "/images/rc2.svg",
    },
    {
      name: "Carlos Rodriguez",
      occupation: "Podcaster",
      opinion:
        "The right music sets the tone for my podcasts, and BeatBack never disappoints. It's affordable and high-quality.",
      rating: 4.8,
      image: "/images/rc3.svg",
    },
    {
      name: "Emily Johnson",
      occupation: "Marketing Specialist",
      opinion:
        "Finding royalty-free music that sounds professional was always a challenge until I found BeatBack. Highly recommended!",
      rating: 4.7,
      image: "/images/rc2.svg",
    },
    {
      name: "Jamal Oden",
      occupation: "Music Producer",
      opinion:
        "As a producer, I appreciate the selection of high-quality beats. It's perfect for creating demos and collaborations.",
      rating: 4.9,
      image: "/images/rc1.svg",
    },
    {
      name: "Sophia Martinez",
      occupation: "YouTuber",
      opinion:
        "BeatBack offers an amazing collection of music that fits every mood and theme. My audience loves the soundtracks I use!",
      rating: 4.6,
      image: "/images/rc3.svg",
    },
    {
      name: "Daniel Green",
      occupation: "App Developer",
      opinion:
        "Background music is crucial for my mobile games, and BeatBack provides a fantastic selection of tracks.",
      rating: 4.4,
      image: "/images/rc2.svg",
    },
    {
      name: "Olivia Carter",
      occupation: "Event Planner",
      opinion:
        "I use BeatBack to create immersive audio experiences at events. The variety and ease of use are unbeatable.",
      rating: 5,
      image: "/images/rc3.svg",
    },
    {
      name: "Michael Brown",
      occupation: "Freelance Editor",
      opinion:
        "Editing videos requires the perfect soundtrack, and BeatBack delivers just that. It's my go-to platform!",
      rating: 4.7,
      image: "/images/rc1.svg",
    },
  ];
  

  export const genres=[
    {name:'pop',href:'pop'},
    {name:'Hip pop',href:'pop'},
    {name:'Afro',href:'pop'},
    {name:'Rock',href:'pop'},
    {name:'country',href:'pop'}
  ]
  
  export const musicOptions = [
    { value: "hiphop", label: "HipHop" },
    { value: "afro", label: "Afro" },
    { value: "highlife", label: "High Life" },
  ];
  
  export const cryptoOptions = [
    { value: "eth", label: "ETH" },
  ];

  export const resultsMusic = [
    {
      mainImage: '/images/album1.svg',
      subImage: '/images/male.png',
      title: 'Midnight Groove',
      artist: 'DJ Pulse',
      price: '2ETH',
      state: 'New Release',
      duration: '3:45',
      isNegotiable: false,
      available: false,
    },
    {
      mainImage: '/images/album2.svg',
      subImage: '/images/male.png',
      title: 'Electric Dreams',
      artist: 'Synthwave Queen',
      price: '8ETH',
      state: 'On Sale',
      duration: '4:12',
      isNegotiable: true,
      available: true,
    },
    {
      mainImage: '/images/album3.svg',
      subImage: '/images/male.png',
      title: 'Sunset Vibes',
      artist: 'Chill Beats Collective',
      price: '2ETH',
      state: 'Popular',
      duration: '5:02',
      isNegotiable: false,
      available: false,
    },
    {
      mainImage: '/images/album4.svg',
      subImage: '/images/male.png',
      title: 'Neon Nights',
      artist: 'Retro Wave',
      price: '4ETH',
      state: 'New Release',
      duration: '3:58',
      isNegotiable: true,
      available: false,
    },
    {
      mainImage: '/images/album5.svg',
      subImage: '/images/male.png',
      title: 'Ocean Breeze',
      artist: 'Ambient Sounds',
      price: '1ETH',
      state: 'On Sale',
      duration: '6:15',
      isNegotiable: false,
    },
    {
      mainImage: '/images/album1.svg',
      subImage: '/images/male.png',
      title: 'Urban Beats',
      artist: 'Hip-Hop Nation',
      price: '6ETH',
      state: 'Popular',
      duration: '4:30',
      isNegotiable: true,
    },
  ];
  

export const yearlyOption = Array.from({ length: 26 }, (_, i) => {
    const year = 2025 - i;
    return { value: year.toString(), label: year.toString() };
  });
  

  export const leaseStatusOptions = [
    { value: "available", label: "Available" },
    { value: "leased", label: "Leased" },
    { value: "exclusive", label: "Exclusive" },
    { value: "non_profit", label: "Non-Profit Use" },
  ];
  
  export const artistStatusOptions = [
    { value: "independent", label: "Independent" },
    { value: "signed", label: "Signed" },
    { value: "featured", label: "Featured Artist" },
    { value: "collaborator", label: "Collaborator" },
  ];
  
  export const genreOptions = [
    { value: "hiphop", label: "HipHop" },
    { value: "afro", label: "Afro" },
    { value: "highlife", label: "HighLife" },
    { value: "edm", label: "EDM" },
  ];
  
  export const languageOptions = [
    { value: "english", label: "English" },
    { value: "spanish", label: "Spanish" },
    { value: "french", label: "French" },
    { value: "german", label: "German" },
  ];
  

  export const durationOptions = [
    { value: "30s", label: "30 Seconds" },
    { value: "1m", label: "1 Minute" },
    { value: "3m", label: "3 Minutes" },
    { value: "5m+", label: "5+ Minutes" },
  ];


  export const howItWorksItems=[
    {title:'create account',image:'/images/account.svg', description:'Sign up for a free artist account to start leasing your music and managing your profile.'},
    {title:'upload music',image:'/images/upload.svg', description:'Easily upload your tracks, add metadata, and showbase your music to buyers.'},
    {title:'set terms',image:'/images/set_terms.svg', description:'Define your lease options, pricing, and usage rights to control how your music is used.'},
    {title:'get discovered',image:'/images/get_discovered.svg', description:'Reach a global audience of creators and businesses searching for high-quality music.'},
    {title:'get paid',image:'/images/get_paid.svg', description:'Track your earnings and receive secure payments directly to your chosen payment method'}
  
  ]
  
  export const leasingRights = [
    {
      title: 'Exclusive lease',
      description:'Secure sole access to a master recording for a defined period or specific project. This option ensures your project features a truly unique and exclusive soundtrack perfect for you.',
      feature:'features',
      terms: [
        { name: 'Exclusive usage rights',  icon: '/images/rightarrow.svg'},
        { name: 'Defined lease Duration',   icon: '/images/rightarrow.svg'},
        { name: 'potential royalties splits', icon: '/images/rightarrow.svg'},
        { name: 'restictions apply(No ownership transfer)', icon: '/images/rightarrow.svg'}
      ]
    },
    
  
    {
      title: 'Non-Exclusive Lease',
      description:'Utilize a master recording for your project, while the artist retains the right to lease it to others. This flexible option offers access to original music without exclusive ownership.',
      feature:'features',
      terms: [
        { name: 'Usage Rights',  icon: '/images/rightarrow.svg'},
        { name: 'Defined lease Duration',   icon: '/images/rightarrow.svg'},
        { name: 'potential royalties splits', icon: '/images/rightarrow.svg'},
        { name: 'restictions apply(No ownership transfer)', icon: '/images/rightarrow.svg'}
      ]
    },
  
    {
      title: 'Project-Specific Lease',
      description:'Lease a master recording for a single, defined project, such as a film, game, or advertisement. This option provides targeted access to original music for specific creative endeavors.',
      feature:'features',
      terms: [
        { name: 'Exclusive usage rights',  icon: '/images/rightarrow.svg'},
        { name: 'Defined lease Duration',   icon: '/images/rightarrow.svg'},
        { name: 'potential royalties splits', icon: '/images/rightarrow.svg'},
        { name: 'restictions apply(No ownership transfer)', icon: '/images/rightarrow.svg'}
      ]
    },
  ];
  
  
  export const askQuestion=[
    {question:'QuesWhat is master rights leasing, and how does it benefit my project?tion:', 
      answers:'You lease the original recording for temporary use, giving your project a unique, professional sound without buying the rights outright.'
    },
    {question:'How are royalty splits handled when leasing master rights, and what should I expect?:', 
      answers:'Royalty splits are negotiated and outlined in the lease. Expect a clear breakdown of percentages based on usage and distribution.'
    },
    {question:'What are the key differences between exclusive, non-exclusive, and project-specific leases, and which is right for me?:', 
      answers:'Exclusive is sole use, non-exclusive is shared, and project-specific is for one project. Choose based on your needs, and desired exclusivity.'
    },
    {question:'What happens to the master recording and my project\'s usage rights after the lease term ends, and how can I ensure continuity?', 
      answers:'Rights revert to the artist. Plan for renewal if needed. Discuss options with the artist to ensure continued usage'
    }
  ]

  export const sideBarData=[
    {name:'home', href:'/dashboard/',images:'/images/home.svg'},
    {name:'music', href:'/dashboard/music',images:'/images/music.svg'},
    {name:'leases', href:'/dashboard/leases',images:'/images/leases.svg'},
    {name:'earnings', href:'/dashboard/earnings',images:'/images/wallet.svg'},
    {name:'profile', href:'/dashboard/profile',images:'/images/profile.svg'},
    {name:'support', href:'/dashboard/support',images:'/images/support.svg'},
  
  ]

  export const statisticsDB = [
    {
      name:'total earnings',
      amount:'12.08 M',
      info:'all time total earnings made',
      base:'USD'
    },
    
  
    {
      name:'total earnings',
      amount:'12.08 M',
      info:'all time total earnings made',
      base:'USD'
    },
    
  
    {
      name:'total leases',
      amount:'64',
      info:'overall songs leased so far',
      base:'50% of all'
    },
  
  
    {
      name:'current leases',
      amount:'16',
      info:'songs that have currently been leased',
      base:'25% of total leased songs'
    },
  
    {
      name:'current leases',
      amount:'16',
      info:'songs that have currently been leased',
      base:'25% of total leased songs'
    },
  
    {
      name:'current leases',
      amount:'16',
      info:'songs that have currently been leased',
      base:'25% of total leased songs'
    },  
  ];
  
  export const earningDB = [
    {
      name:'total earnings',
      amount:'12.08 M',
      info:'all time total earnings made',
      base:'USD'
    },
    
  
    {
      name:'total earnings',
      amount:'12.08 M',
      info:'all time total earnings made',
      base:'USD'
    },
    
  
    {
      name:'total leases',
      amount:'64',
      info:'overall songs leased so far',
      base:'50% of all'
    }  
  ];

  export const leasingData = [
    { month: "September", desktop: 14, mobile: 120 },
    { month: "October", desktop: 1, mobile: 190 },
    { month: "November", desktop: 1, mobile: 130 },
    { month: "December", desktop: 1, mobile: 140 },
  ];
  
  
  export const yearlyData = [
    { month: "January", desktop: 1 , mobile: 80 },
    { month: "February", desktop: 0.6 , mobile: 200 },
    { month: "March", desktop: 0.3, mobile: 120 },
    { month: "April", desktop: 0.1, mobile: 190 },
    { month: "May", desktop: 0.1, mobile: 130 },
    { month: "June", desktop: 0.1, mobile: 140 },
    { month: "July", desktop: 0.1, mobile: 80 },
    { month: "August", desktop: 0.1, mobile: 200 },
    { month: "September", desktop: 0.1, mobile: 120 },
    { month: "October", desktop: 0.1, mobile: 190 },
    { month: "November", desktop: 0.1, mobile: 130 },
    { month: "December", desktop: 0.1, mobile: 140 },
  ];
  

  export const columnLayout ="grid grid-cols-[50px_200px_120px_150px_120px_200px_150px_120px_100px_50px] items-center py-4 border-b border-gray-300";


  export const songHeaders = [
    { cover: '/images/av1.svg', songs: 'Insane', id: 1, genre: 'Pop', uploaded_date: '24.05.2024', status: 'Leased', leased_by: 'Passion Sounds', earnings: '20.1M', lease_period: '10y', listeners: '33.5K', edit: '_' },
    { cover: '/images/av2.svg', songs: 'Midnight Waves', id: 2, genre: 'R&B', uploaded_date: '15.06.2024', status: 'Available', leased_by: '-', earnings: '12.3M', lease_period: '-', listeners: '25.7K', edit: '_' },
    { cover: '/images/av3.svg', songs: 'Echoes of You', id: 3, genre: 'Rock', uploaded_date: '10.07.2024', status: 'Leased', leased_by: 'Dream Records', earnings: '18.6M', lease_period: '5y', listeners: '40.2K', edit: '_' },
    { cover: '/images/av4.svg', songs: 'Lost Frequencies', id: 4, genre: 'Electronic', uploaded_date: '02.08.2024', status: 'Available', leased_by: '-', earnings: '9.5M', lease_period: '-', listeners: '22.1K', edit: '_' },
    { cover: '/images/av5.svg', songs: 'Golden Hour', id: 5, genre: 'Jazz', uploaded_date: '18.09.2024', status: 'Leased', leased_by: 'Sunset Records', earnings: '15.2M', lease_period: '3y', listeners: '30.8K', edit: '_' },
    { cover: '/images/av6.svg', songs: 'Neon Lights', id: 6, genre: 'Hip-Hop', uploaded_date: '29.09.2024', status: 'Leased', leased_by: 'Urban Beats', earnings: '22.7M', lease_period: '7y', listeners: '45.3K', edit: '_' },
    { cover: '/images/av7.svg', songs: 'Silent Dreams', id: 7, genre: 'Classical', uploaded_date: '05.10.2024', status: 'Available', leased_by: '-', earnings: '7.8M', lease_period: '-', listeners: '15.9K', edit: '_' },
    { cover: '/images/av8.svg', songs: 'Fading Memories', id: 8, genre: 'Indie', uploaded_date: '20.10.2024', status: 'Leased', leased_by: 'Moonlight Studios', earnings: '14.9M', lease_period: '6y', listeners: '28.4K', edit: '_' },
    { cover: '/images/av2.svg', songs: 'Ocean Breeze', id: 9, genre: 'Reggae', uploaded_date: '01.11.2024', status: 'Available', leased_by: '-', earnings: '11.4M', lease_period: '-', listeners: '19.6K', edit: '_' },
    { cover: '/images/av3.svg', songs: 'Velvet Night', id: 10, genre: 'Blues', uploaded_date: '12.11.2024', status: 'Leased', leased_by: 'Soul Music Co.', earnings: '17.3M', lease_period: '4y', listeners: '32.7K', edit: '_' }
  ];
  
  
  export const supportiveTags=[
    {image:'/images/rocket.svg', title:'getting started', text:'New to licensing or leasing? Learn the basics here!'},
    {image:'/images/licence.svg', title:'Licensing & Leases', text:'Understand the different lease types and usage rights.'},
    {image:'/images/verified 1.svg', title:'Account & Profile', text:'Manage your settings, payment methods, and profile information.'},
    {image:'/images/searcher.svg', title:'find music', text:'Tips and tricks for finding the perfect tracks for your projects.'},
    {image:'/images/copyright.svg', title:'legal & copyright', text:'Information on copyright, licensing agreements, and legal considerations.'},
    {image:'/images/troubleshooting.svg', title:'trouble shooting', text:'Solutions to common issues and technical problems.'},
    {image:'/images/planning.svg', title:'project management', text:'Organize your leased music and manage your projects effectively'},
    {image:'/images/payment-method 1.svg', title:'payments & billing ', text:'Questions about payments, invoices, and billing procedures?'},
  ]


  export const leasingOptions = [
    { value: "negotiable", label: "Negotiation" },
    { value: "non-negotiable", label: "NON-NEGOTIABLE" },
  ];