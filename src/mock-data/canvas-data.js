import { overViewDetails } from '../const.js';

export const canvasData = [
  {
    tabLable: 'My Workspace',
    tabVale: 'my_workspace',
    data: [
      {
        title: 'Recent Searches',
        subTitle: '',
        component: 'recent_searches',
        id: Math.random(),
        data: [
          {
            label: 'Gucci',
            timeStamp: new Date(),
            result: 12233345,
          },
          {
            label: 'Microsoft',
            timeStamp: new Date(),
            result: 12233345,
          },
          {
            label: 'Lululemon',
            timeStamp: new Date(),
            result: 12233345,
          },
          {
            label: 'Tyota',
            timeStamp: new Date(),
            result: 12233345,
          },
          {
            label: 'BMW',
            timeStamp: new Date(),
            result: 12233345,
          },
          {
            label: 'Maruthi',
            timeStamp: new Date(),
            result: 12233345,
          },
        ],
      },
      {
        title: 'Media Type',
        subTitle: 'Total Articles',
        component: 'media_type',
        graphType: 'donut',
        dashboardType: 'overview',
        id: Math.random(),
        data: {
          title: '',
          subtitle: '',
          summary: { label: '1.9M', subLabel: 'Total' },
          data: [
            { label: 'Broadcast', value: 35, color: '#8F82FF' },
            { label: 'Print', value: 15, color: '#FF6888' },
            { label: 'Online', value: 50, color: '#FFBE6A' },
          ],
          labels: [
            {
              label: 'label',
              value: 'value',
            },
          ],
          info: [],
        },
      },
      {
        title: 'Top 5 Articles',
        subTitle: '',
        component: 'top_articles',
        id: Math.random(),
        data: [
          {
            description:
              'Red Bull plays down hype over Mercedes F1 upgrade step',
            publisher: 'REUTERS',
            author: 'Jonathan Noble',
            date: '05/29/2019',
            place: 'Barcelona',
            matchingKeywords: '12 matching keywords',
            newstype: 'Online News',
            imgURL:
              'https://cdn-3.motorsport.com/images/amp/0mb5wqg2/s1000/formula-1-spanish-gp-2023-lewi-3.jpg',
          },
          {
            description:
              'Behind Chanel’s—Chic, Discrete, and Very Chanel—Move Into Menswear',
            publisher: 'GQ',
            author: 'Rachel Tashjian',
            date: '05/29/2019',
            place: 'Barcelona',
            matchingKeywords: '12 matching keywords',
            newstype: 'Online News',
            imgURL:
              'https://media.gq.com/photos/5c9a500de92bfc0c0bee9ee4/16:9/w_1280,c_limit/pharrell-chanel-gq-3.jpg',
          },
          {
            description:
              "Chanel's Cruise Show in Monaco Was All About Living the Fantasy",
            publisher: 'WWD',
            author: 'Dominique Maitre',
            date: '05/29/2019',
            place: 'Barcelona',
            matchingKeywords: '12 matching keywords',
            newstype: 'Online News',
            imgURL:
              'https://wwd.com/wp-content/uploads/2022/05/chanel-cruise-23-dm-69.jpg?crop=0px%2C192px%2C1365px%2C763px&resize=681%2C383',
          },
          {
            description:
              'Red Bull Reveals They "Looked At" Mercedes Zeropod Concept',
            publisher: 'F1News',
            author: 'Alex Harrington',
            date: '05/29/2019',
            place: 'Barcelona',
            matchingKeywords: '12 matching keywords',
            newstype: 'Online News',
            imgURL:
              'https://www.si.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk4NTkxOTAxNzY1NDc3ODI3/m298864.jpg',
          },
          {
            description:
              'Rockstar Energy Drink and Angus Cloud Drop Into PUBG MOBILE',
            publisher: 'BevNet',
            author: 'Alex Harrington',
            date: '05/29/2019',
            place: 'Barcelona',
            matchingKeywords: '12 matching keywords',
            newstype: 'Online News',
            imgURL:
              'https://mma.prnewswire.com/media/2062159/Angus_Cloud_Rockstar_PepsiCo.jpg?p=twitter',
          },
          {
            description:
              'How Sephora Is Partnering With Creators for Brand Impact',
            publisher: 'ADWEEK',
            author: 'Alexandra Bower',
            date: '05/29/2019',
            place: 'New York',
            matchingKeywords: '12 matching keywords',
            newstype: 'Online News',
            imgURL:
              'https://media1.popsugar-assets.com/files/thumbor/xT2jroJqwN6-TwEVGS9K_W0bKYs/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2022/11/29/943/n/1922153/88ac221863867be71b1070.90673839_/i/Best-Sephora-Gifts.jpg',
          },
          {
            description:
              "'GTA 6' Leak: 50 Cent's Cryptic Instagram Post Hints at More to Come",
            publisher: 'INVERSE',
            author: 'JESS REYS',
            date: '05/29/2019',
            place: 'Seattle',
            matchingKeywords: '12 matching keywords',
            newstype: 'Online News',
            imgURL:
              'https://imgix.bustle.com/uploads/image/2023/3/2/21386d69-c61c-4c64-af00-b0b87d9fb021-gta-6-flower-banner.jpg?w=1200&h=630&fit=crop&crop=focalpoint&fm=jpg&fp-x=0.5187&fp-y=0.4242',
          },
          {
            description:
              'Travis Scott And John McEnroe Join Forces To Reintroduce The Nike Mac Attack',
            publisher: 'HyperBeast',
            author: 'Sam Cole',
            date: '05/29/2019',
            place: 'Portland',
            matchingKeywords: '12 matching keywords',
            newstype: 'Online News',
            imgURL:
              'https://sneakernews.com/wp-content/uploads/2023/06/travis-scott-jon-mcenroe-nike-mac-attack.jpg',
          },
          {
            description: 'Kering sales edge up 1%, lagging rivals',
            publisher: 'REUTERS',
            author: 'Silvia Aloisi',
            date: '05/29/2019',
            place: 'PARIS',
            matchingKeywords: '12 matching keywords',
            newstype: 'Online News',
            imgURL:
              'https://i-invdn-com.investing.com/trkd-images/LYNXMPEJ3O0ON_L.jpg',
          },
          {
            description:
              "Gucci revisits past to pave new way, sober looks at Tod's",
            publisher: 'REUTERS',
            author: 'Silvia Aloisi',
            date: '05/29/2019',
            place: 'PARIS',
            matchingKeywords: '12 matching keywords',
            newstype: 'Online News',
            imgURL:
              'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/7536QMJJ4NNNJJCEYGZGTUYY7I.jpg',
          },
        ],
      },
      // {
      //   title: 'Media Type',
      //   subTitle: 'Total Articles',
      //   component: 'media_type',
      //   graphType: 'donut',
      //   id: Math.random(),
      //   data: {
      //     title: '',
      //     subtitle: '',
      //     summary: { label: '1.9M', subLabel: 'Total' },
      //     data: [
      //       { label: 'Broadcast', value: 35, color: '#8F82FF' },
      //       { label: 'Print', value: 15, color: '#FF6888' },
      //       { label: 'Online', value: 50, color: '#FFBE6A' },
      //     ],
      //     labels: [
      //       {
      //         label: 'label',
      //         value: 'value',
      //       },
      //     ],
      //     info: [],
      //   },
      // },
      {
        title: 'Top 5 Articles',
        subTitle: '',
        component: 'top_articles',
        id: Math.random(),
        data: [
          {
            description:
              'Red Bull plays down hype over Mercedes F1 upgrade step',
            publisher: 'REUTERS',
            author: 'Jonathan Noble',
            date: '05/29/2019',
            place: 'Barcelona',
            matchingKeywords: '12 matching keywords',
            newstype: 'Online News',
            imgURL:
              'https://cdn-3.motorsport.com/images/amp/0mb5wqg2/s1000/formula-1-spanish-gp-2023-lewi-3.jpg',
          },
          {
            description:
              'Behind Chanel’s—Chic, Discrete, and Very Chanel—Move Into Menswear',
            publisher: 'GQ',
            author: 'Rachel Tashjian',
            date: '05/29/2019',
            place: 'Barcelona',
            matchingKeywords: '12 matching keywords',
            newstype: 'Online News',
            imgURL:
              'https://media.gq.com/photos/5c9a500de92bfc0c0bee9ee4/16:9/w_1280,c_limit/pharrell-chanel-gq-3.jpg',
          },
          {
            description:
              "Chanel's Cruise Show in Monaco Was All About Living the Fantasy",
            publisher: 'WWD',
            author: 'Dominique Maitre',
            date: '05/29/2019',
            place: 'Barcelona',
            matchingKeywords: '12 matching keywords',
            newstype: 'Online News',
            imgURL:
              'https://wwd.com/wp-content/uploads/2022/05/chanel-cruise-23-dm-69.jpg?crop=0px%2C192px%2C1365px%2C763px&resize=681%2C383',
          },
          {
            description:
              'Red Bull Reveals They "Looked At" Mercedes Zeropod Concept',
            publisher: 'F1News',
            author: 'Alex Harrington',
            date: '05/29/2019',
            place: 'Barcelona',
            matchingKeywords: '12 matching keywords',
            newstype: 'Online News',
            imgURL:
              'https://www.si.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk4NTkxOTAxNzY1NDc3ODI3/m298864.jpg',
          },
          {
            description:
              'Rockstar Energy Drink and Angus Cloud Drop Into PUBG MOBILE',
            publisher: 'BevNet',
            author: 'Alex Harrington',
            date: '05/29/2019',
            place: 'Barcelona',
            matchingKeywords: '12 matching keywords',
            newstype: 'Online News',
            imgURL:
              'https://mma.prnewswire.com/media/2062159/Angus_Cloud_Rockstar_PepsiCo.jpg?p=twitter',
          },
          {
            description:
              'How Sephora Is Partnering With Creators for Brand Impact',
            publisher: 'ADWEEK',
            author: 'Alexandra Bower',
            date: '05/29/2019',
            place: 'New York',
            matchingKeywords: '12 matching keywords',
            newstype: 'Online News',
            imgURL:
              'https://media1.popsugar-assets.com/files/thumbor/xT2jroJqwN6-TwEVGS9K_W0bKYs/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2022/11/29/943/n/1922153/88ac221863867be71b1070.90673839_/i/Best-Sephora-Gifts.jpg',
          },
          {
            description:
              "'GTA 6' Leak: 50 Cent's Cryptic Instagram Post Hints at More to Come",
            publisher: 'INVERSE',
            author: 'JESS REYS',
            date: '05/29/2019',
            place: 'Seattle',
            matchingKeywords: '12 matching keywords',
            newstype: 'Online News',
            imgURL:
              'https://imgix.bustle.com/uploads/image/2023/3/2/21386d69-c61c-4c64-af00-b0b87d9fb021-gta-6-flower-banner.jpg?w=1200&h=630&fit=crop&crop=focalpoint&fm=jpg&fp-x=0.5187&fp-y=0.4242',
          },
          {
            description:
              'Travis Scott And John McEnroe Join Forces To Reintroduce The Nike Mac Attack',
            publisher: 'HyperBeast',
            author: 'Sam Cole',
            date: '05/29/2019',
            place: 'Portland',
            matchingKeywords: '12 matching keywords',
            newstype: 'Online News',
            imgURL:
              'https://sneakernews.com/wp-content/uploads/2023/06/travis-scott-jon-mcenroe-nike-mac-attack.jpg',
          },
          {
            description: 'Kering sales edge up 1%, lagging rivals',
            publisher: 'REUTERS',
            author: 'Silvia Aloisi',
            date: '05/29/2019',
            place: 'PARIS',
            matchingKeywords: '12 matching keywords',
            newstype: 'Online News',
            imgURL:
              'https://i-invdn-com.investing.com/trkd-images/LYNXMPEJ3O0ON_L.jpg',
          },
          {
            description:
              "Gucci revisits past to pave new way, sober looks at Tod's",
            publisher: 'REUTERS',
            author: 'Silvia Aloisi',
            date: '05/29/2019',
            place: 'PARIS',
            matchingKeywords: '12 matching keywords',
            newstype: 'Online News',
            imgURL:
              'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/7536QMJJ4NNNJJCEYGZGTUYY7I.jpg',
          },
        ],
      },
      {
        title: 'Recent Searches',
        subTitle: '',
        component: 'recent_searches',
        id: Math.random(),
        data: [
          {
            label: 'Gucci',
            timeStamp: new Date(),
            result: 12233345,
          },
          {
            label: 'Microsoft',
            timeStamp: new Date(),
            result: 12233345,
          },
          {
            label: 'Lululemon',
            timeStamp: new Date(),
            result: 12233345,
          },
          {
            label: 'Tyota',
            timeStamp: new Date(),
            result: 12233345,
          },
          {
            label: 'BMW',
            timeStamp: new Date(),
            result: 12233345,
          },
          {
            label: 'Maruthi',
            timeStamp: new Date(),
            result: 12233345,
          },
        ],
      },
      // {
      //   title: 'Media Type',
      //   subTitle: 'Total Articles',
      //   component: 'media_type',
      //   graphType: 'donut',
      //   id: Math.random(),
      //   data: {
      //     title: '',
      //     subtitle: '',
      //     summary: { label: '1.9M', subLabel: 'Total' },
      //     data: [
      //       { label: 'Broadcast', value: 35, color: '#8F82FF' },
      //       { label: 'Print', value: 15, color: '#FF6888' },
      //       { label: 'Online', value: 50, color: '#FFBE6A' },
      //     ],
      //     labels: [
      //       {
      //         label: 'label',
      //         value: 'value',
      //       },
      //     ],
      //     info: [],
      //   },
      // },
      {
        title: 'Top 5 Articles',
        subTitle: '',
        component: 'top_articles',
        id: Math.random(),
        data: [
          {
            description:
              'Red Bull plays down hype over Mercedes F1 upgrade step',
            publisher: 'REUTERS',
            author: 'Jonathan Noble',
            date: '05/29/2019',
            place: 'Barcelona',
            matchingKeywords: '12 matching keywords',
            newstype: 'Online News',
            imgURL:
              'https://cdn-3.motorsport.com/images/amp/0mb5wqg2/s1000/formula-1-spanish-gp-2023-lewi-3.jpg',
          },
          {
            description:
              'Behind Chanel’s—Chic, Discrete, and Very Chanel—Move Into Menswear',
            publisher: 'GQ',
            author: 'Rachel Tashjian',
            date: '05/29/2019',
            place: 'Barcelona',
            matchingKeywords: '12 matching keywords',
            newstype: 'Online News',
            imgURL:
              'https://media.gq.com/photos/5c9a500de92bfc0c0bee9ee4/16:9/w_1280,c_limit/pharrell-chanel-gq-3.jpg',
          },
          {
            description:
              "Chanel's Cruise Show in Monaco Was All About Living the Fantasy",
            publisher: 'WWD',
            author: 'Dominique Maitre',
            date: '05/29/2019',
            place: 'Barcelona',
            matchingKeywords: '12 matching keywords',
            newstype: 'Online News',
            imgURL:
              'https://wwd.com/wp-content/uploads/2022/05/chanel-cruise-23-dm-69.jpg?crop=0px%2C192px%2C1365px%2C763px&resize=681%2C383',
          },
          {
            description:
              'Red Bull Reveals They "Looked At" Mercedes Zeropod Concept',
            publisher: 'F1News',
            author: 'Alex Harrington',
            date: '05/29/2019',
            place: 'Barcelona',
            matchingKeywords: '12 matching keywords',
            newstype: 'Online News',
            imgURL:
              'https://www.si.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk4NTkxOTAxNzY1NDc3ODI3/m298864.jpg',
          },
          {
            description:
              'Rockstar Energy Drink and Angus Cloud Drop Into PUBG MOBILE',
            publisher: 'BevNet',
            author: 'Alex Harrington',
            date: '05/29/2019',
            place: 'Barcelona',
            matchingKeywords: '12 matching keywords',
            newstype: 'Online News',
            imgURL:
              'https://mma.prnewswire.com/media/2062159/Angus_Cloud_Rockstar_PepsiCo.jpg?p=twitter',
          },
          {
            description:
              'How Sephora Is Partnering With Creators for Brand Impact',
            publisher: 'ADWEEK',
            author: 'Alexandra Bower',
            date: '05/29/2019',
            place: 'New York',
            matchingKeywords: '12 matching keywords',
            newstype: 'Online News',
            imgURL:
              'https://media1.popsugar-assets.com/files/thumbor/xT2jroJqwN6-TwEVGS9K_W0bKYs/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2022/11/29/943/n/1922153/88ac221863867be71b1070.90673839_/i/Best-Sephora-Gifts.jpg',
          },
          {
            description:
              "'GTA 6' Leak: 50 Cent's Cryptic Instagram Post Hints at More to Come",
            publisher: 'INVERSE',
            author: 'JESS REYS',
            date: '05/29/2019',
            place: 'Seattle',
            matchingKeywords: '12 matching keywords',
            newstype: 'Online News',
            imgURL:
              'https://imgix.bustle.com/uploads/image/2023/3/2/21386d69-c61c-4c64-af00-b0b87d9fb021-gta-6-flower-banner.jpg?w=1200&h=630&fit=crop&crop=focalpoint&fm=jpg&fp-x=0.5187&fp-y=0.4242',
          },
          {
            description:
              'Travis Scott And John McEnroe Join Forces To Reintroduce The Nike Mac Attack',
            publisher: 'HyperBeast',
            author: 'Sam Cole',
            date: '05/29/2019',
            place: 'Portland',
            matchingKeywords: '12 matching keywords',
            newstype: 'Online News',
            imgURL:
              'https://sneakernews.com/wp-content/uploads/2023/06/travis-scott-jon-mcenroe-nike-mac-attack.jpg',
          },
          {
            description: 'Kering sales edge up 1%, lagging rivals',
            publisher: 'REUTERS',
            author: 'Silvia Aloisi',
            date: '05/29/2019',
            place: 'PARIS',
            matchingKeywords: '12 matching keywords',
            newstype: 'Online News',
            imgURL:
              'https://i-invdn-com.investing.com/trkd-images/LYNXMPEJ3O0ON_L.jpg',
          },
          {
            description:
              "Gucci revisits past to pave new way, sober looks at Tod's",
            publisher: 'REUTERS',
            author: 'Silvia Aloisi',
            date: '05/29/2019',
            place: 'PARIS',
            matchingKeywords: '12 matching keywords',
            newstype: 'Online News',
            imgURL:
              'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/7536QMJJ4NNNJJCEYGZGTUYY7I.jpg',
          },
        ],
      },
    ],
  },
  {
    tabLable: 'Spotlight',
    tabVale: 'spotlight',
    data: [
      {
        description: 'Red Bull plays down hype over Mercedes F1 upgrade step',
        id: Math.random(),
        publisher: 'REUTERS',
        author: 'Jonathan Noble',
        date: '05/29/2019',
        place: 'Barcelona',
        matchingKeywords: '12 matching keywords',
        newstype: 'Online News',
        imgURL:
          'https://cdn-3.motorsport.com/images/amp/0mb5wqg2/s1000/formula-1-spanish-gp-2023-lewi-3.jpg',
      },
      {
        description:
          'Behind Chanel’s—Chic, Discrete, and Very Chanel—Move Into Menswear',
        id: Math.random(),
        publisher: 'GQ',
        author: 'Rachel Tashjian',
        date: '05/29/2019',
        place: 'Barcelona',
        matchingKeywords: '12 matching keywords',
        newstype: 'Online News',
        imgURL:
          'https://media.gq.com/photos/5c9a500de92bfc0c0bee9ee4/16:9/w_1280,c_limit/pharrell-chanel-gq-3.jpg',
      },
      {
        description:
          "Chanel's Cruise Show in Monaco Was All About Living the Fantasy",
        id: Math.random(),
        publisher: 'WWD',
        author: 'Dominique Maitre',
        date: '05/29/2019',
        place: 'Barcelona',
        matchingKeywords: '12 matching keywords',
        newstype: 'Online News',
        imgURL:
          'https://wwd.com/wp-content/uploads/2022/05/chanel-cruise-23-dm-69.jpg?crop=0px%2C192px%2C1365px%2C763px&resize=681%2C383',
      },
      {
        description:
          'Red Bull Reveals They "Looked At" Mercedes Zeropod Concept',
        id: Math.random(),
        publisher: 'F1News',
        author: 'Alex Harrington',
        date: '05/29/2019',
        place: 'Barcelona',
        matchingKeywords: '12 matching keywords',
        newstype: 'Online News',
        imgURL:
          'https://www.si.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk4NTkxOTAxNzY1NDc3ODI3/m298864.jpg',
      },
      {
        description:
          'Rockstar Energy Drink and Angus Cloud Drop Into PUBG MOBILE',
        id: Math.random(),
        publisher: 'BevNet',
        author: 'Alex Harrington',
        date: '05/29/2019',
        place: 'Barcelona',
        matchingKeywords: '12 matching keywords',
        newstype: 'Online News',
        imgURL:
          'https://mma.prnewswire.com/media/2062159/Angus_Cloud_Rockstar_PepsiCo.jpg?p=twitter',
      },
      {
        description: 'How Sephora Is Partnering With Creators for Brand Impact',
        id: Math.random(),
        publisher: 'ADWEEK',
        author: 'Alexandra Bower',
        date: '05/29/2019',
        place: 'New York',
        matchingKeywords: '12 matching keywords',
        newstype: 'Online News',
        imgURL:
          'https://media1.popsugar-assets.com/files/thumbor/xT2jroJqwN6-TwEVGS9K_W0bKYs/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2022/11/29/943/n/1922153/88ac221863867be71b1070.90673839_/i/Best-Sephora-Gifts.jpg',
      },
      {
        description:
          "'GTA 6' Leak: 50 Cent's Cryptic Instagram Post Hints at More to Come",
        id: Math.random(),
        publisher: 'INVERSE',
        author: 'JESS REYS',
        date: '05/29/2019',
        place: 'Seattle',
        matchingKeywords: '12 matching keywords',
        newstype: 'Online News',
        imgURL:
          'https://imgix.bustle.com/uploads/image/2023/3/2/21386d69-c61c-4c64-af00-b0b87d9fb021-gta-6-flower-banner.jpg?w=1200&h=630&fit=crop&crop=focalpoint&fm=jpg&fp-x=0.5187&fp-y=0.4242',
      },
      {
        description:
          'Travis Scott And John McEnroe Join Forces To Reintroduce The Nike Mac Attack',
        id: Math.random(),
        publisher: 'HyperBeast',
        author: 'Sam Cole',
        date: '05/29/2019',
        place: 'Portland',
        matchingKeywords: '12 matching keywords',
        newstype: 'Online News',
        imgURL:
          'https://sneakernews.com/wp-content/uploads/2023/06/travis-scott-jon-mcenroe-nike-mac-attack.jpg',
      },
      {
        description: 'Kering sales edge up 1%, lagging rivals',
        id: Math.random(),
        publisher: 'REUTERS',
        author: 'Silvia Aloisi',
        date: '05/29/2019',
        place: 'PARIS',
        matchingKeywords: '12 matching keywords',
        newstype: 'Online News',
        imgURL:
          'https://i-invdn-com.investing.com/trkd-images/LYNXMPEJ3O0ON_L.jpg',
      },
      {
        description:
          "Gucci revisits past to pave new way, sober looks at Tod's",
        id: Math.random(),
        publisher: 'REUTERS',
        author: 'Silvia Aloisi',
        date: '05/29/2019',
        place: 'PARIS',
        matchingKeywords: '12 matching keywords',
        newstype: 'Online News',
        imgURL:
          'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/7536QMJJ4NNNJJCEYGZGTUYY7I.jpg',
      },
    ],
  },

  {
    tabLable: 'Chanel',
    tabVale: 'chanel',
    data: overViewDetails.map((obj) => ({ ...obj, id: Math.random() })),
  },
  {
    tabLable: 'Rockstar',
    tabVale: 'rockstar',
    data: overViewDetails.map((obj) => ({ ...obj, id: Math.random() })),
  },
  {
    tabLable: 'Red Bull',
    tabVale: 'red_bull',
    data: overViewDetails.map((obj) => ({ ...obj, id: Math.random() })),
  },
  {
    tabLable: 'Sephora',
    tabVale: 'sephora',
    data: overViewDetails.map((obj) => ({ ...obj, id: Math.random() })),
  },
];
