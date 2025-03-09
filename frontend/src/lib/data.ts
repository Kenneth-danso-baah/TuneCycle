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
      image: "/images/rc8.svg",
    },
    {
      name: "Michael Brown",
      occupation: "Freelance Editor",
      opinion:
        "Editing videos requires the perfect soundtrack, and BeatBack delivers just that. It's my go-to platform!",
      rating: 4.7,
      image: "/images/rc9.svg",
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