import images from './images'

const opponents = [
  {
    name: 'North Texas',
    mascot: 'Mean Green',
    logo: 'https://cdn.vox-cdn.com/thumbor/ItM3VSwi-59VxXr4bSxdtkJtAlE=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23046831/1355900957.jpg',
    date: 'Sept. 2',
    location: 'Away',
    stadium: 'Apogee Stadium - Denton, TX'
  },
  {
    name: 'Auburn',
    mascot: 'Tigers',
    logo: 'https://cdn.vox-cdn.com/thumbor/5GhLgZxRV5C9nviUKpwRZH93ki0=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/24040271/usa_today_19066776.jpg',
    date: 'Sept. 9',
    location: 'Home',
    stadium: 'Memorial Stadium - Berkeley, CA'
  },
  {
    name: 'Idaho',
    mascot: 'Vandals',
    logo: 'https://cdn.vox-cdn.com/thumbor/ufRa7tIvfYusRyVmCbkW-tBtz-M=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23889022/usa_today_16735223.jpg',
    date: 'Sept. 16',
    location: 'Home',
    stadium: 'Memorial Stadium - Berkeley, CA'
  },
  {
    name: 'Washington',
    mascot: 'Huskies',
    logo: 'https://cdn.vox-cdn.com/thumbor/0m4a-lYN2igsluUd2Cge2Gl2WYA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/24287705/1442885064.jpg',
    date: 'Sept. 23',
    location: 'Away',
    stadium: 'Husky Stadium - Seattle, WA'
  },
  {
    name: 'Arizona State',
    mascot: 'Sun Devils',
    logo: 'https://cdn.vox-cdn.com/thumbor/nUn7EaMylZljQ4HJLXMnV104WcM=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/24212283/IMGL0532.jpg',
    date: 'Sept. 30',
    location: 'Home',
    stadium: 'Memorial Stadium - Berkeley, CA'
  },
  {
    name: 'Oregon State',
    mascot: 'Beavers',
    logo: 'https://cdn.vox-cdn.com/thumbor/dv1KyMp1yQ_TSRJ_nsfOpX5oam4=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23608985/1236898305.jpg',
    date: 'Oct. 7',
    location: 'Home',
    stadium: 'Memorial Stadium - Berkeley, CA'
  },
  {
    name: 'Utah',
    mascot: 'Utes',
    logo: 'https://ca-times.brightspotcdn.com/dims4/default/0181697/2147483647/strip/true/crop/3217x3081+0+0/resize/1486x1423!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fd7%2F65%2F805e02894561b1b5078e822d022a%2F1222877-sp-pac-12-championship-76-gmfc.jpg',
    date: 'Oct. 14',
    location: 'Away',
    stadium: 'Rice-Eccles Stadium - Salt Lake City, UT'
  },
  {
    name: 'USC',
    mascot: 'Trojans',
    logo: 'https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cq_auto:good%2Cw_1200/MTk0MTc2NjAxMDI4NTY4NzUz/screen-shot-2022-12-03-at-12950-am.png',
    date: 'Sept. 9',
    location: 'Home',
    stadium: 'Memorial Stadium - Berkeley, CA'
  },
  {
    name: 'Oregon',
    mascot: 'Ducks',
    logo: 'https://cdn.vox-cdn.com/thumbor/ZPHMVHy3QpeFoYXcdRFYJlkMlmw=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/24219611/usa_today_19368224.jpg',
    date: 'Nov. 4',
    location: 'Away',
    stadium: 'Autzen Stadium - Eugene, OR'
  },
  {
    name: 'Washington State',
    mascot: 'Cougars',
    logo: 'https://thumb.spokesman.com/pAFuszKZGo0sEf42WvqjfOG5W0c=/2500x2500/smart/media.spokesman.com/photos/2022/04/23/6264c448e8aa9.hires.jpg',
    date: 'Nov. 11',
    location: 'Home',
    stadium: 'Memorial Stadium - Berkeley, CA'
  },
  {
    name: 'Stanford',
    mascot: 'Cardinal',
    logo: 'https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTg5ODk1ODI1NjQ2NjkyMDk0/usatsi_17271380.jpg',
    date: 'Nov. 18',
    location: 'Away',
    stadium: 'The Farm - Stanford, CA'
  },
  {
    name: 'UCLA',
    mascot: 'Bruins',
    logo: 'https://cdn.vox-cdn.com/thumbor/7cRZsT2mNHr3PwQ1DjuvoCqgocc=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22064849/usa_today_15214380.jpg',
    date: 'Nov. 25',
    location: 'Away',
    stadium: 'The Rose Bowl - Pasadena, CA'
  },
  
];

const awards = [
    {
      imgUrl: images.award02,
      title: 'Offensive POTY',
      subtitle: 'Jaydn Ott, RB',
      image: images.JaydnPoty
    },
    {
      imgUrl: images.award01,
      title: 'Defensive POTY',
      subtitle: 'Daniel Scott, S',
      image: images.danielPoty
    },
    {
      imgUrl: images.award05,
      title: 'Freshman OTY',
      subtitle: 'Jeremiah Earby, CB',
      image: images.jerbo
    },
    {
      imgUrl: images.award03,
      title: 'Team MVP',
      subtitle: 'Jaydn Ott, RB',
      image: images.jaydnMvp
    },
  ];

  export default { awards, opponents };