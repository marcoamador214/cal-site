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

const offense = [
  {
      "id": 1,
      "name": "Sam Jackson V",
      "number": "16",
      "position": "QB",
      "Hometown": "Chicago, IL",
      "Class": "RS Sophomore",
      image: 'https://d195hqvwre713v.cloudfront.net/images/2023/1/10/tcu_jackson_sam.jpg?width=300'
  },
  {
      "id": 2,
      "name": "Fernando Mendoza",
      "number": "15",
      "position": "QB",
      "Hometown": "Miami, FL",
      "Class": "RS Freshman",
      image: 'https://d195hqvwre713v.cloudfront.net/images/2022/7/21/480x600_Fernando_Mendoza_15__Cal_FBC_20220623_144735_Al_Sermeno_444.jpg?width=300'
  },
  {
      "id": 5,
      "name": "Jaydn Ott",
      "number": "6",
      "position": "RB",
      "Hometown": "Norco, CA",
      "Class": "Sophomore",
      image: 'https://d195hqvwre713v.cloudfront.net/images/2022/7/21/480x600_Jaydn_Ott_6__Cal_FBC_20220623_144116_Al_Sermeno_429.jpg?width=300'
  },
  {
      "id": 6,
      "name": "Byron Cardwell",
      "number": "21",
      "position": "RB",
      "Hometown": "San Diego, CA",
      "Class": "RS Sophomore",
      image: 'https://d195hqvwre713v.cloudfront.net/images/2022/12/21/2023_Cal_Football_Head_Shot_Byron_Cardwell_480x600.jpg?width=300'
  },
  {
      "id": 7,
      "name": "Justin Williams-Thomas",
      "number": "24",
      "position": "RB",
      "Hometown": "Dallas, GA",
      "Class": "RS Freshman",
      image: 'https://d195hqvwre713v.cloudfront.net/images/2022/12/30/tennessee_williams-thomas_justin.jpg?width=300'
  },
  {
      "id": 8,
      "name": "Jaivian Thomas",
      "number": "28",
      "position": "RB",
      "Hometown": "Oakland, CA",
      "Class": "Freshman",
      image: 'https://d195hqvwre713v.cloudfront.net/images/2022/12/19/2023_Cal_Football_Head_Shot_Jaivian_Thomas_480x600.jpg?width=300'
  },
  {
      "id": 9,
      "name": "Ashton Stredick",
      "number": "31",
      "position": "RB",
      "Hometown": "Needville, TX",
      "Class": "RS Sophomore",
      image: 'https://d195hqvwre713v.cloudfront.net/images/2022/7/21/480x600_Ashton_Stredick_31__Cal_FBC_20220623_130050_Al_Sermeno_294.jpg?width=300'
  },
  {
      "id": 10,
      "name": "Brian Hightower",
      "number": "7",
      "position": "WR",
      "Hometown": "Los Angeles, CA",
      "Class": "RS Senior",
      image: 'https://d195hqvwre713v.cloudfront.net/images/2023/1/10/illinois_hightower_brian_2921.jpg?width=300'
  },
  {
      "id": 11,
      "name": "Nyziah Hunter",
      "number": "88",
      "position": "WR",
      "Hometown": "Salinas, CA",
      "Class": "Freshman",
      image: 'https://d195hqvwre713v.cloudfront.net/images/2022/12/19/2023_Cal_Football_Head_Shot_Nyziah_Hunter_480x600.jpg?width=300'
  },
  {
      "id": 12,
      "name": "Mavin Anderson",
      "number": "11",
      "position": "WR",
      "Hometown": "Mission Viejo, CA",
      "Class": "RS Sophomore",
      image: 'https://d195hqvwre713v.cloudfront.net/images/2022/7/21/480x600_Mavin_Anderson_11__Cal_FBC_20220622_125424_Al_Sermeno_043.jpg?width=300'
  },
  {
      "id": 13,
      "name": "Monroe Young",
      "number": "14",
      "position": "WR",
      "Hometown": "Las Cruces, NM",
      "Class": "RS Senior",
      image: 'https://d195hqvwre713v.cloudfront.net/images/2022/7/21/480x600_Monroe_Young_14__Cal_FBC_20220623_130543_Al_Sermeno_304.jpg?width=300'
  },
  {
      "id": 14,
      "name": "Mason Starling",
      "number": "18",
      "position": "WR",
      "Hometown": "Tacoma, WA",
      "Class": "Senior",
      image: 'https://d195hqvwre713v.cloudfront.net/images/2022/7/21/480x600_Mason_Starling_18__Cal_FBC_20220622_143950_Al_Sermeno_117.jpg?width=300'
  },
  {
      "id": 15,
      "name": "Jeremiah Hunter",
      "number": "3",
      "position": "WR",
      "Hometown": "Fresno, CA",
      "Class": "Senior",
      image: 'https://d195hqvwre713v.cloudfront.net/images/2022/7/21/480x600_Jeremiah_Hunter_3__Cal_FBC_20220622_154937_Al_Sermeno_165.jpg?width=300'
  },
  {
      "id": 16,
      "name": "Justin Richard Baker",
      "number": "22",
      "position": "WR",
      "Hometown": "Bellevue, WA",
      "Class": "Senior",
      image: 'https://d195hqvwre713v.cloudfront.net/images/2022/7/21/480x600_Justin_Richard_Baker_22__Cal_FBC_20220623_130428_Al_Sermeno_300.jpg?width=300'
  },
  {
      "id": 17,
      "name": "Aidan Lee",
      "number": "29",
      "position": "WR",
      "Hometown": "Mesa, AZ",
      "Class": "Senior",
      image: 'https://d195hqvwre713v.cloudfront.net/images/2022/7/21/480x600_Aidan_Lee_29__Cal_FBC_20220622_121059_Al_Sermeno_013.jpg?width=300'
  },
  {
      "id": 18,
      "name": "JT Byrne",
      "number": "87",
      "position": "TE",
      "Hometown": "Carmel, CA",
      "Class": "RS Sophomore",
      image: 'https://d195hqvwre713v.cloudfront.net/images/2023/1/5/21_FB_ByrneJT_HS.jpg?width=300'
  },
  {
      "id": 19,
      "name": "Asher Alberding",
      "number": "89",
      "position": "TE",
      "Hometown": "Houston, TX",
      "Class": "RS Junior",
      image: 'https://d195hqvwre713v.cloudfront.net/images/2023/1/7/unt_alberding_asher.png?width=300'
  },
  {
      "id": 20,
      "name": "Ben Marshall",
      "number": "86",
      "position": "TE",
      "Hometown": "Murfreesboro, TN",
      "Class": "Freshman",
      image: 'https://d195hqvwre713v.cloudfront.net/images/2022/12/19/2023_Cal_Football_Head_Shot_Ben_Marshall_480x600.jpg?width=300'
  },
  {
      "id": 21,
      "name": "Brian Driscoll",
      "number": "60",
      "position": "OL",
      "Hometown": "San Diego, CA",
      "Class": "RS Senior",
      image: 'https://d195hqvwre713v.cloudfront.net/images/2022/7/21/480x600_Brian_Driscoll_60__Cal_FBC_20220623_131841_Al_Sermeno_327.jpg?width=300'
  },
  {
      "id": 22,
      "name": "Brayden Rohme",
      "number": "63",
      "position": "OL",
      "Hometown": "Chandler, AZ",
      "Class": "RS Senior",
      image: 'https://d195hqvwre713v.cloudfront.net/images/2022/7/21/480x600_Brayden_Rohme_63__Cal_FBC_20220622_130527_Al_Sermeno_052.jpg?width=300'
  },
  {
      "id": 23,
      "name": "Sioape Vatikani",
      "number": "71",
      "position": "OL",
      "Hometown": "Reno, NV",
      "Class": "Sophomore",
      image: 'https://d195hqvwre713v.cloudfront.net/images/2022/7/21/480x600_Sioape_Vatikani_71__Cal_FBC_20220623_124509_Al_Sermeno_273.jpg?width=300'
  },
  {
      "id": 24,
      "name": "TJ Session",
      "number": "72",
      "position": "OL",
      "Hometown": "Menifee, CA",
      "Class": "RS Senior",
      image: 'https://d195hqvwre713v.cloudfront.net/images/2022/7/21/480x600_T_J_Session_72__Cal_FBC_20220622_155749_Al_Sermeno_172.jpg?width=300'
  },
  {
      "id": 25,
      "name": "Matthew Cindric",
      "number": "73",
      "position": "OL",
      "Hometown": "Sammamish, WA",
      "Class": "RS Senior",
      image: 'https://d195hqvwre713v.cloudfront.net/images/2022/7/21/480x600_Matthew_Cindric_73__Cal_FBC_20220622_125523_Al_Sermeno_046.jpg?width=300'
  },
  {
      "id": 21,
      "name": "Bastian Swinney",
      "number": "76",
      "position": "OL",
      "Hometown": "Minneapolis, MN",
      "Class": "RS Senior",
      image: 'https://d195hqvwre713v.cloudfront.net/images/2022/7/21/480x600_Bastian_Swinney_76__Cal_FBC_20220623_142103_Al_Sermeno_410.jpg?width=300'
  },
  {
      "id": 22,
      "name": "Everett Johnson",
      "number": "77",
      "position": "OL",
      "Hometown": "Turlock, CA",
      "Class": "Senior",
      image: 'https://d195hqvwre713v.cloudfront.net/images/2022/7/21/480x600_Everett_Johnson_77__Cal_FBC_20220622_151202_Al_Sermeno_149.jpg?width=300'
  }
];

const defense = [
  {
      "id": 23,
      "name": "Tyson McWilliams",
      "number": "11",
      "position": "CB",
      "Hometown": "San Diego, CA",
      "Class": "RS Junior",
      image: 'https://d195hqvwre713v.cloudfront.net/images/2022/7/21/480x600_Tyson_McWilliams_11__Cal_FBC_20220623_145359_Al_Sermeno_459.jpg?width=300'
  },
  {
      "id": 24,
      "name": "Lu-Magia Hearns",
      "number": "15",
      "position": "CB",
      "Hometown": "Pittsburg, CA",
      "Class": "Junior",
      image: 'https://d195hqvwre713v.cloudfront.net/images/2022/7/21/480x600_Lu_Magia_Hearns_III_15__Cal_FBC_20220623_150520_Al_Sermeno_482.jpg?width=300'
  },
  {
      "id": 25,
      "name": "Cam Sidney",
      "number": "20",
      "position": "CB",
      "Hometown": "Riverside, CA",
      "Class": "Sophomore",
      image: 'https://d195hqvwre713v.cloudfront.net/images/2022/9/16/480x600_Cam_Sidney_20__Cal_FBC_20220623_131731_Al_Sermeno_325_1_.jpg?width=300'
  },
  {
      "id": 26,
      "name": "Collin Gamble",
      "number": "21",
      "position": "CB",
      "Hometown": "Flower Mound, TX",
      "Class": "Senior",
      image: 'https://d195hqvwre713v.cloudfront.net/images/2022/7/21/480x600_Collin_Gamble_21__Cal_FBC_20220623_130141_Al_Sermeno_296.jpg?width=300'
  },
  {
      "id": 27,
      "name": "Jeremiah Earby",
      "number": "29",
      "position": "CB",
      "Hometown": "East Palo Alto, CA",
      "Class": "Sophomore",
      image: 'https://d195hqvwre713v.cloudfront.net/images/2022/7/21/480x600_Jeremiah_Earby_37__Cal_FBC_20220622_122208_Al_Sermeno_018.jpg?width=300'
  },
  {
      "id": 28,
      "name": "Nohl Williams",
      "number": "3",
      "position": "CB",
      "Hometown": "Oxnard, CA",
      "Class": "Junior",
      image: 'https://d195hqvwre713v.cloudfront.net/images/2022/12/19/2023_Cal_Football_Head_Shot_Nohl_Williams_480x600.jpg?width=300'
  },
  {
      "id": 29,
      "name": "Kaylin Moore",
      "number": "0",
      "position": "CB",
      "Hometown": "Westlake Village, CA",
      "Class": "Junior",
      image: 'https://d195hqvwre713v.cloudfront.net/images/2022/12/19/2023_Cal_Football_Head_Shot_Kaylin_Moore_480x600.jpg?width=300'
  },
  {
      "id": 30,
      "name": "Sai Vadrawale",
      "number": "17",
      "position": "CB",
      "Hometown": "Concord, CA",
      "Class": "Freshman",
      image: 'https://d195hqvwre713v.cloudfront.net/images/2022/12/19/2023_Cal_Football_Head_Shot_Sailasa_Vadrawale_480x600.jpg?width=300'
  },
  {
      "id": 31,
      "name": "Matthew LittleJohn",
      "number": "15",
      "position": "S",
      "Hometown": "San Antonio, TX",
      "Class": "RS Junior",
      image: 'https://d195hqvwre713v.cloudfront.net/images/2022/12/19/2023_Cal_Football_Head_Shot_Matthew_Littlejohn_480x600.jpg?width=300'
  },
  {
      "id": 32,
      "name": "Craig Woodson",
      "number": "2",
      "position": "S",
      "Hometown": "Grand Prairie, TX",
      "Class": "RS Senior",
      image: 'https://d195hqvwre713v.cloudfront.net/images/2022/7/21/480x600_Craig_Woodson_2__Cal_FBC_20220623_150134_Al_Sermeno_477.jpg?width=300'
  },
  {
      "id": 33,
      "name": "Raymond Woodie III",
      "number": "5",
      "position": "S",
      "Hometown": "Palmetto, FL",
      "Class": "RS Senior",
      image: 'https://d195hqvwre713v.cloudfront.net/images/2022/7/21/480x600_Raymond_Woodie_III_5__Cal_FBC_20220623_144819_Al_Sermeno_448.jpg?width=300'
  },
  {
      "id": 34,
      "name": "Miles Williams",
      "number": "13",
      "position": "S",
      "Hometown": "Mansfield, TX",
      "Class": "RS Senior",
      image: 'https://d195hqvwre713v.cloudfront.net/images/2022/7/21/480x600_Miles_Williams_13__Cal_FBC_20220623_150052_Al_Sermeno_476.jpg?width=300'
  },
  {
      "id": 35,
      "name": "Tiumalu Afalava",
      "number": "90",
      "position": "DL",
      "Hometown": "Baldwin Park, CA",
      "Class": "Freshman",
      image: 'https://d195hqvwre713v.cloudfront.net/images/2022/12/19/2023_Cal_Football_Head_Shot_Tiumalu_Afalava_480x600.jpg?width=300'
  },
  {
      "id": 37,
      "name": "Zurich Ashford",
      "number": "91",
      "position": "DL",
      "Hometown": "Las Vegas, NV",
      "Class": "Freshman",
      image: 'https://d195hqvwre713v.cloudfront.net/images/2022/12/19/2023_Cal_Football_Head_Shot_Zurich_Ashford_480x600.jpg?width=300'
  },
  {
      "id": 38,
      "name": "Frederick Williams III",
      "number": "92",
      "position": "DL",
      "Hometown": "Los Angeles, CA",
      "Class": "Freshman",
      image: 'https://d195hqvwre713v.cloudfront.net/images/2022/12/19/2023_Cal_Football_Head_Shot_Frederick_Williams_III_480x600.jpg?width=300'
  },
  {
      "id": 39,
      "name": "Curlee Thomas IV",
      "number": "19",
      "position": "DL",
      "Hometown": "Keller, TX",
      "Class": "Sophomore",
      image: 'https://d195hqvwre713v.cloudfront.net/images/2022/7/21/480x600_Curlee_Thomas_IV_19__Cal_FBC_20220623_123243_Al_Sermeno_253.jpg?width=300' 
  },
  {
      "id": 40,
      "name": "Akili Calhoun",
      "number": "95",
      "position": "DL",
      "Hometown": "Brentwood, CA",
      "Class": "RS Sophomore",
      image: 'https://d195hqvwre713v.cloudfront.net/images/2022/7/21/480x600_Akili_Calhoun_95__Cal_FBC_20220622_145238_Al_Sermeno_135.jpg?width=300'
  },
  {
      "id": 41,
      "name": "Derek Wilkins",
      "number": "96",
      "position": "DL",
      "Hometown": "Irvine, CA",
      "Class": "RS Sophomore",
      image: 'https://d195hqvwre713v.cloudfront.net/images/2022/7/22/480x600Derek_Wilkins_96__Cal_FBC_20220622_143017_Al_Sermeno_112.JPG?width=300'
  },
  {
      "id": 43,
      "name": "Nate Burrell",
      "number": "98",
      "position": "DL",
      "Hometown": "Los Angeles, CA",
      "Class": "Sophomore",
      image: 'https://d195hqvwre713v.cloudfront.net/images/2022/9/16/480x600_Nate_Burrell_98__Cal_FBC_20220804_120947_Al_Sermeno_511.jpg?width=300'
  },
  {
      "id": 44,
      "name": "Ethan Saunders",
      "number": "99",
      "position": "DL",
      "Hometown": "Inglewood, CA",
      "Class": "Senior",
      image: 'https://d195hqvwre713v.cloudfront.net/images/2022/8/1/Ethan_Saunders_99__Cal_FBC_20220623_133606_Al_Sermeno_344.JPG?width=300'
  },
  {
      "id": 45,
      "name": "Brett Johnson",
      "number": "90",
      "position": "DL",
      "Hometown": "Phoenix, AZ",
      "Class": "RS Senior",
      image: 'https://d195hqvwre713v.cloudfront.net/images/2022/7/21/480x600_Brett_Johnson_90__Cal_FBC_20220623_134552_Al_Sermeno_360.jpg?width=300'
  },
  {
      "id": 47,
      "name": "Jackson Sirmon",
      "number": "8",
      "position": "ILB",
      "Hometown": "Brentwood, TN",
      "Class": "RS Senior",
      image: 'https://d195hqvwre713v.cloudfront.net/images/2022/7/21/480x600_Jackson_Sirmon_8__Cal_FBC_20220623_122918_Al_Sermeno_247.jpg?width=300'
  },
  {
      "id": 48,
      "name": "Nate Rutchena",
      "number": "42",
      "position": "ILB",
      "Hometown": "Danville, CA",
      "Class": "Junior",
      image: 'https://d195hqvwre713v.cloudfront.net/images/2022/7/21/480x600_Nate_Rutchena_42__Cal_FBC_20220623_131408_Al_Sermeno_321.jpg?width=300'
  },
  {
      "id": 49,
      "name": "Blake Antzoulatos",
      "number": "51",
      "position": "ILB",
      "Hometown": "Simi Valley, CA",
      "Class": "RS Senior",
      image: 'https://d195hqvwre713v.cloudfront.net/images/2022/7/21/480x600_Blake_Antzoulatos_51__Cal_FBC_20220622_140554_Al_Sermeno_085.jpg?width=300'
  },
  {
      "id": 50,
      "name": "Kaleb Elarms-Orr",
      "number": "53",
      "position": "ILB",
      "Hometown": "Hayward, CA",
      "Class": "RS Sophomore",
      image: 'https://d195hqvwre713v.cloudfront.net/images/2022/7/21/480x600_Kaleb_Elarms_Orr_53__Cal_FBC_20220622_171508_Al_Sermeno_200.jpg?width=300'
  },
  {
      "id": 51,
      "name": "Muelu Iosefa",
      "number": "55",
      "position": "ILB",
      "Hometown": "Waipahu, HI",
      "Class": "Senior",
      image: 'https://d195hqvwre713v.cloudfront.net/images/2022/7/21/480x600_Muelu_Iosefa_55__Cal_FBC_20220622_123948_Al_Sermeno_033.jpg?width=300'
  },
  {
      "id": 52,
      "name": "Ryan Puskas",
      "number": "59",
      "position": "ILB",
      "Hometown": "Peoria, AZ",
      "Class": "RS Senior",
      image: 'https://d195hqvwre713v.cloudfront.net/images/2022/7/21/480x600_Ryan_Puskas_59__Cal_FBC_20220622_140830_Al_Sermeno_090.jpg?width=300'
  },
  {
      "id": 53,
      "name": "Sergio Allen",
      "number": "60",
      "position": "ILB",
      "Hometown": "Fort Valley, GA",
      "Class": "RS Sophomore",
      image: 'https://d195hqvwre713v.cloudfront.net/images/2022/12/21/2023_Cal_Football_Head_Shot_Sergio_Allen_480x600.jpg?width=300'
  },
  {
      "id": 54,
      "name": "Cade Uluave",
      "number": "61",
      "position": "ILB",
      "Hometown": "South Jordan, UT",
      "Class": "Freshman",
      image: 'https://d195hqvwre713v.cloudfront.net/images/2022/12/19/2023_Cal_Football_Head_Shot_Cade_Uluave_480x600.jpg?width=300'
  }
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

  export default { awards, opponents, offense, defense };