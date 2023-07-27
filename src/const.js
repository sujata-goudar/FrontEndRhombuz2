// import {
//   actualOneD,
//   actualOneD1,
//   actualOneD1N,
//   actualOneDG,
//   actualOneDT2,
//   bubbleData,
//   mediaType,
//   pieData,
//   pieTwoDData,
//   radarData,
//   wordCloudData,
//   wordCloudDataFull,
// } from './mock-data/index.js';

import {
  actualOneD,
  bubbleData,
  mediaType,
  // butterFly2D,
  // informationChart,
  actualTwoD,
  wordCloudData,
  coverageByTopPublicationData,
  horizontalChartCoverage,
  uberStatsData,
  uberStatsSentimentData,
} from './mock-data/index.js';
import { butterFly2D } from './mockdata.js';
import { formatNumber } from './utils.js';
// import { brandDashboard } from './mock-data/brand-dashboard.js';
// import { butterFly2D, informationChart } from './mockdata.js';

const article = {
  title:
    'Few Parents intend to have very Young Children Vaccinated Against Covid',
  content:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti magnam aspernatur perspiciatis, minus ex est quis. Consequatur dolor earum unde ex sit labore iste, praesentium mollitia. Ullam non possimus totam? Eum sapiente vel nisi minima itaque! Consequatur laborum odio fugiat nisi, quas at non impedit. Deleniti, fugiat ea, ex, sint omnis culpa alias esse quidem natus ducimus maiores. Ducimus, enim? Doloribus adipisci soluta earum labore ut quis aliquid quas eos esse. Minus quod quidem obcaecati, cum, tempora ad ex expedita quis in voluptatibus sit sequi deleniti? Consectetur qui veniam aperiam Omnis, culpa. Eum aperiam modi consequuntur? Quae nulla rerum sit commodi. Ad commodi doloremque suscipit praesentium, soluta ullam, consequatur tempore, ut animi natus officia dolore hic voluptate sit odio reiciendis',
  link: 'https://indianexpress.com/article/lifestyle/fashion/gucci-alia-bhatt-global-ambassador-8609049/',
  icon: 'https://yt3.ggpht.com/ytc/AGIKgqM0ymt1FyptuNbIiKEa2h446IAI-GaddiF4qqgMVg=s88-c-k-c0x00ffffff-no-rj',
  image:
    'https://images.indianexpress.com/2023/05/umar-khalid-and-lahiri-1200.jpg?resize=150,83',
  matches: ['GUCCI', 'abc'],
  reach: formatNumber(16225588),
  syndication: formatNumber(16225588),
  ave: '~$1.5 M',
  sentiment: 'positive',
};

export const articles = Array.from({ length: 578 }, (_, index) => {
  let type;
  if (index < 96) type = 'online';
  else if (index < 212) type = 'print';
  else if (index < 387) type = 'broadcast';
  else if (index < 578) type = 'blogs';
  return {
    id: index,
    ...article,
    type: type,
  };
});

// export const themes = [
//   {
//     key: 1,
//     label: 'Theme 1',
//     positive: '40%',
//     negative: '60%',
//   },
//   {
//     key: 2,
//     label: 'Theme 2',
//     positive: '20%',
//     negative: '80%',
//   },
//   {
//     key: 3,
//     label: 'Theme 3',
//     positive: '80%',
//     negative: '20%',
//   },
//   {
//     key: 4,
//     label: 'Theme 4',
//     positive: '75%',
//     negative: '25%',
//   },
//   {
//     key: 5,
//     label: 'Theme 5',
//     positive: '32%',
//     negative: '68%',
//   },
// ];

export const extraWidgets = [
  {
    title: 'Top Themes',
    subTitle: '',

    component: 'top_themes',
    graphType: 'radar',
    data: {
      title: 'Radar Data',
      subtitle: '2020-04-17',
      summary: {
        subtext: '',
        value: '',
        widgetName: '',
      },
      data: [
        {
          label: 'A',
          low: '49',
          medium: '26',
          high: '34',
          blocker: '10',
          easy: '30',
          color: 'red',
        },
        {
          label: 'B',
          low: '13',
          medium: '23',
          high: '32',
          blocker: '85',
          easy: '55',
          color: 'green',
        },
      ],
      labels: [
        {
          label: 'Blocker',
          value: 'blocker',
        },
        {
          label: 'High',
          value: 'high',
        },
        {
          label: 'Medium',
          value: 'medium',
        },
        {
          label: 'Low',
          value: 'low',
        },
        {
          label: 'Easy',
          value: 'easy',
        },
      ],
      info: [],
    },
  },
  {
    title: 'Reach',
    subTitle: '',

    component: 'reach',
    graphType: 'butterfly',
    data: [
      {
        key: 1,
        label: 'Theme 1',
        positive: '40%',
        negative: '60%',
      },
      {
        key: 2,
        label: 'Theme 2',
        positive: '20%',
        negative: '80%',
      },
      {
        key: 3,
        label: 'Theme 3',
        positive: '80%',
        negative: '20%',
      },
      {
        key: 4,
        label: 'Theme 4',
        positive: '75%',
        negative: '25%',
      },
      {
        key: 5,
        label: 'Theme 5',
        positive: '32%',
        negative: '68%',
      },
    ],
  },
  {
    title: 'AVE',
    subTitle: '',

    component: 'ave',
    graphType: 'concentric_donut',
    data: {
      title: 'Defect Distribution',
      subtitle: '2020-04-17',
      summary: {
        label: '55%',
        subLabel: '132/237',
      },
      data: [
        {
          label: 'SD1',
          value: 80,
        },
        {
          label: 'threshold1',
          value: '90',
          halfRadius: true,
          arcRadius: 0.5,
        },
        {
          label: 'SD',
          value: 80,
          halfRadius: true,
          arcRadius: 0.5,
        },
        {
          label: 'SD2',
          value: 50,
        },
        {
          label: 'SD3',
          value: 80,
        },
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
    title: 'SOV',
    subTitle: '',

    component: 'sov',
    graphType: 'pie',
    data: {
      title: 'Defect Distribution',
      subtitle: '2020-04-17',
      summary: {
        label: '55%',
        subLabel: '132/237',
      },
      data: [
        {
          label: 'SD',
          value: 20,
          thresholdValue: 80,
          color: '#58CF6B',
        },
        {
          label: 'D',
          value: 30,
          thresholdValue: 20,
          color: '#FFBA69',
        },
        {
          label: 'N',
          value: 40,
          thresholdValue: 60,
          color: '#FD708B',
        },
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
    title: 'Journalists',
    subTitle: '',

    component: 'journalists',
    graphType: 'word_cloud',
    data: {
      title: '',
      subtitle: '',
      summary: {
        label: '',
        subLabel: '',
      },
      data: [
        {
          label: 'Ru',
          value: '10',
        },
        {
          label: 'Su',
          value: '60',
        },
        {
          label: 'Cl',
          value: '71',
        },
        {
          label: 'Ki',
          value: '30',
        },
        {
          label: 'Sa',
          value: '20',
        },
        {
          label: 'Sn',
          value: '60',
        },
        {
          label: 'Cl1',
          value: '70',
        },
        {
          label: 'Ki1',
          value: '30',
        },
        {
          label: 'Sa1',
          value: '20',
        },
        {
          label: 'Sn1',
          value: '60',
        },
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
    title: 'RadialPie',
    subTitle: '',

    component: 'radial_pie',
    graphType: 'radial_pie',
    data: {
      title: 'Defect Distribution',
      subtitle: '2020-04-17',
      summary: {
        label: '55%',
        subLabel: '132/237',
      },
      data: [
        {
          label: 'SD',
          value: 20,
          thresholdValue: 80,
          color: '#58CF6B',
        },
        {
          label: 'D',
          value: 30,
          thresholdValue: 20,
          color: '#FFBA69',
        },
        {
          label: 'N',
          value: 40,
          thresholdValue: 60,
          color: '#FD708B',
        },
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
    title: 'Sources',
    subTitle: '',

    component: 'sources',
    graphType: 'word_cloud',
    data: {
      title: '',
      subtitle: '',
      summary: {
        label: '',
        subLabel: '',
      },
      data: [
        {
          label: 'Running',
          value: '10',
        },
        {
          label: 'Surfing',
          value: '60',
        },
        {
          label: 'Climbing',
          value: '70',
        },
        {
          label: 'Kiting',
          value: '30',
        },
        {
          label: 'Sailing',
          value: '20',
        },
        {
          label: 'Snowboarding',
          value: '60',
          color: 'red',
        },
        {
          label: 'Climbing1',
          value: '71',
        },
        {
          label: 'Kiting1',
          value: '30',
        },
        {
          label: 'Sailing1',
          value: '20',
        },
        {
          label: 'Snowboarding1',
          value: '60',
        },
        {
          label: 'Running111',
          value: '10',
        },
        {
          label: 'Surfing111',
          value: '60',
        },
        {
          label: 'Climbing111',
          value: '70',
        },
        {
          label: 'Kiting111',
          value: '30',
        },
        {
          label: 'Sailing111',
          value: '20',
        },
        {
          label: 'Snowboarding111',
          value: '60',
        },
        {
          label: 'Climbing12',
          value: '71',
        },
        {
          label: 'Kiting12',
          value: '30',
        },
        {
          label: 'Sailing12',
          value: '20',
        },
        {
          label: 'Snowboarding12',
          value: '60',
        },
        {
          label: 'Running3',
          value: '10',
        },
        {
          label: 'Surfing3',
          value: '60',
        },
        {
          label: 'Climbing3',
          value: '70',
        },
        {
          label: 'Kiting3',
          value: '30',
        },
        {
          label: 'Sailing3',
          value: '20',
        },
        {
          label: 'Snowboarding3',
          value: '60',
        },
        {
          label: 'Climbing13',
          value: '71',
        },
        {
          label: 'Kiting13',
          value: '30',
        },
        {
          label: 'Sailing13',
          value: '20',
        },
        {
          label: 'Snowboarding13',
          value: '60',
        },
        {
          label: 'Running1113',
          value: '10',
        },
        {
          label: 'Surfing1113',
          value: '60',
        },
        {
          label: 'Climbing1113',
          value: '70',
        },
        {
          label: 'Kiting1113',
          value: '30',
        },
        {
          label: 'Sailing1113',
          value: '20',
        },
        {
          label: 'Snowboarding1113',
          value: '60',
        },
        {
          label: 'Climbing123',
          value: '71',
        },
        {
          label: 'Kiting123',
          value: '30',
        },
        {
          label: 'Sailing123',
          value: '20',
        },
        {
          label: 'Snowboarding123',
          value: '60',
          color: 'red',
        },
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
    title: 'Mentions',
    subTitle: '',

    component: 'mentions',
    graphType: 'bar',
    data: {
      title: 'Defect Distribution',
      subtitle: '2020-04-17',
      summary: {
        label: '55%',
        subLabel: '132/237',
      },
      data: [
        {
          label: 'SD',
          value: 20,
          thresholdValue: 80,
          color: '#58CF6B',
        },
        {
          label: 'D',
          value: 30,
          thresholdValue: 20,
          color: '#FFBA69',
        },
        {
          label: 'N',
          value: 40,
          thresholdValue: 60,
          color: '#FD708B',
        },
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
    title: 'Geographical Breakdown',
    subTitle: '',

    component: 'world_map',
    graphType: 'world_map',
    data: {
      title: 'Defect Distribution',
      subtitle: '2020-04-17',
      summary: { label: '55%', subLabel: '132/237' },
      data: [
        { label: 'India', value: 'IND' },
        { label: 'United States', value: 'USA' },
        { label: 'Australia', value: 'AUS' },
        { label: 'Russia', value: 'RUS' },
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
    title: 'Geographical Breakdown',
    subTitle: '',

    component: 'us_breakdown',
    graphType: 'us_map',
    data: {
      title: 'Defect Distribution',
      subtitle: '2020-04-17',
      summary: { label: '55%', subLabel: '132/237' },
      data: [
        {
          label: '23',
          value: 30842.923,
        },
        {
          label: '25',
          value: 7800.058,
        },
        {
          label: '26',
          value: 56538.901,
        },
        {
          label: '30',
          value: 145545.801,
        },
        {
          label: '32',
          value: 109781.18,
        },
        {
          label: '34',
          value: 7354.22,
        },
        {
          label: '36',
          value: 47126.399,
        },
        {
          label: '37',
          value: 48617.905,
        },
        {
          label: '39',
          value: 40860.694,
        },
        {
          label: '42',
          value: 44742.703,
        },
        {
          label: '44',
          value: 1033.814,
        },
        {
          label: '47',
          value: 41234.896,
        },
        {
          label: '48',
          value: 261231.711,
        },
        {
          label: '49',
          value: 82169.62,
        },
        {
          label: '53',
          value: 66455.521,
        },
        {
          label: '55',
          value: 54157.805,
        },
        {
          label: '72',
          value: 3423.775,
        },
        {
          label: '24',
          value: 9707.241,
        },
        {
          label: '01',
          value: 50645.326,
        },
        {
          label: '02',
          value: 570640.95,
        },
        {
          label: '04',
          value: 113594.084,
        },
        {
          label: '05',
          value: 52035.477,
        },
        {
          label: '06',
          value: 155779.22,
        },
        {
          label: '08',
          value: 103641.888,
        },
        {
          label: '09',
          value: 4842.355,
        },
        {
          label: '10',
          value: 948.543,
        },
        {
          label: '04',
          value: 113594.084,
        },
        {
          label: '11',
          value: 61.048,
        },
        {
          label: '12',
          value: 53624.759,
        },
        {
          label: '13',
          value: 57513.485,
        },
        {
          label: '15',
          value: 6422.628,
        },
        {
          label: '16',
          value: 82643.117,
        },
        {
          label: '17',
          value: 55518.93,
        },
        {
          label: '18',
          value: 35826.109,
        },
        {
          label: '19',
          value: 55857.13,
        },
        {
          label: '20',
          value: 81758.717,
        },
        {
          label: '21',
          value: 39486.338,
        },
        {
          label: '22',
          value: 43203.905,
        },
        {
          label: '27',
          value: 79626.743,
        },
        {
          label: '28',
          value: 46923.274,
        },
        {
          label: '29',
          value: 68741.522,
        },
        {
          label: '31',
          value: 76824.171,
        },
        {
          label: '33',
          value: 8952.651,
        },
        {
          label: '35',
          value: 121298.148,
        },
        {
          label: '38',
          value: 69000.798,
        },
        {
          label: '40',
          value: 68594.921,
        },
        {
          label: '41',
          value: 95988.013,
        },
        {
          label: '45',
          value: 30060.696,
        },
        {
          label: '46',
          value: 75811.0,
        },
        {
          label: '50',
          value: 9216.657,
        },
        {
          label: '51',
          value: 39490.086,
        },
        {
          label: '54',
          value: 24038.21,
        },
        {
          label: '56',
          value: 97093.141,
        },
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
    title: 'Article Sentiment',
    subTitle: '',

    component: 'media_type',
    graphType: 'stacked_bar',
    data: {
      title: 'Article Sentiment',
      subtitle: 'Total Articles',
      summary: {
        subtext: '',
        value: '',
        widgetName: '',
      },
      data: [
        {
          label: 'Jan',
          broadcast: '10',
          print: '16',
          online: '14',
        },
        {
          label: 'Feb',
          broadcast: '15',
          print: '16',
          online: '23',
        },
        {
          label: 'Mar',
          broadcast: '19',
          print: '16',
          online: '24',
        },
        {
          label: 'Apr',
          broadcast: '14',
          print: '16',
          online: '18',
        },
        {
          label: 'May',
          broadcast: '12',
          print: '8',
          online: '14',
        },
        {
          label: 'Jun',
          broadcast: '15',
          print: '8',
          online: '18',
        },
      ],
      labels: [
        {
          label: 'Broadcast',
          value: 'broadcast',
          color: '#8F82FF',
        },
        {
          label: 'Print',
          value: 'print',
          color: '#FF6888',
        },
        {
          label: 'Online',
          value: 'online',
          color: '#FFBE6A',
        },
      ],
      info: [],
    },
  },
  {
    title: 'Top Journalist by Sentiment',
    subTitle: '',

    component: 'media_type',
    graphType: 'grouped_bar',
    data: {
      title: 'Media Type',
      subtitle: 'Total Articles',
      summary: {
        subtext: '',
        value: '',
        widgetName: '',
      },
      data: [
        {
          label: 'Jan',
          broadcast: '10',
          print: '16',
          online: '14',
        },
        {
          label: 'Feb',
          broadcast: '15',
          print: '16',
          online: '23',
        },
        {
          label: 'Mar',
          broadcast: '19',
          print: '16',
          online: '24',
        },
        {
          label: 'Apr',
          broadcast: '14',
          print: '16',
          online: '18',
        },
        {
          label: 'May',
          broadcast: '12',
          print: '8',
          online: '14',
        },
        {
          label: 'Jun',
          broadcast: '15',
          print: '8',
          online: '18',
        },
      ],
      labels: [
        {
          label: 'Broadcast',
          value: 'broadcast',
          color: '#8F82FF',
        },
        {
          label: 'Print',
          value: 'print',
          color: '#FF6888',
        },
        {
          label: 'Online',
          value: 'online',
          color: '#FFBE6A',
        },
      ],
      info: [],
    },
  },
];

export const overViewDetails = [
  {
    title: 'Result Over Time',
    subTitle: 'Total Articles',

    component: 'result_over_time',
    graphType: 'line',

    data: {
      title: 'Defect Distribution',
      subtitle: '2020-04-17',
      summary: {
        subtext: '',
        value: '182',
      },
      data: [
        {
          label: 'SD',
          value: 20,
        },
        {
          label: 'D',
          value: 30,
        },
        {
          label: 'N',
          value: 40,
        },
        {
          label: 'A',
          value: 30,
        },
        {
          label: 'SA',
          value: 20,
        },
        {
          label: 'a',
          value: 10,
          color: '#58D140',
        },
        {
          label: 'b',
          value: 15,
          color: '#58D140',
        },
        {
          label: 'c',
          value: 8,
          color: '#58D140',
        },
        {
          label: 'd',
          value: 17,
          color: '#58D140',
        },
        {
          label: 'e',
          value: 12,
          color: '#58D140',
        },
        {
          label: 'f',
          value: 20,
          color: '#58D140',
        },
        {
          label: 'g',
          value: 20,
          color: '#58D140',
        },
        {
          label: 'h',
          value: 20,
          color: '#58D140',
        },
        {
          label: 'i',
          value: 20,
          color: '#58D140',
        },
        {
          label: 'j',
          value: 20,
          color: '#58D140',
        },
        {
          label: 'k',
          value: 20,
          color: '#58D140',
        },
        {
          label: 'l',
          value: 20,
          color: '#58D140',
        },
        {
          label: 'aa',
          value: 10,
          color: '#58D140',
        },
        {
          label: 'ab',
          value: 15,
          color: '#58D140',
        },
        {
          label: 'ac',
          value: 8,
          color: '#58D140',
        },
        {
          label: 'ad',
          value: 17,
          color: '#58D140',
        },
        {
          label: 'ae',
          value: 12,
          color: '#58D140',
        },
        {
          label: 'af',
          value: 20,
          color: '#58D140',
        },
        {
          label: 'ag',
          value: 20,
          color: '#58D140',
        },
        {
          label: 'ah',
          value: 20,
          color: '#58D140',
        },
        {
          label: 'ai',
          value: 20,
          color: '#58D140',
        },
        {
          label: 'aj',
          value: 20,
          color: '#58D140',
        },
        {
          label: 'ak',
          value: 20,
          color: '#58D140',
        },
        {
          label: 'al',
          value: 20,
          color: '#58D140',
        },
        {
          label: 'ba',
          value: 10,
          color: '#58D140',
        },
        {
          label: 'bb',
          value: 15,
          color: '#58D140',
        },
        {
          label: 'bc',
          value: 8,
          color: '#58D140',
        },
        {
          label: 'bd',
          value: 17,
          color: '#58D140',
        },
        {
          label: 'be',
          value: 12,
          color: '#58D140',
        },
        {
          label: 'bf',
          value: 20,
          color: '#58D140',
        },
        {
          label: 'bg',
          value: 20,
          color: '#58D140',
        },
        {
          label: 'bh',
          value: 20,
          color: '#58D140',
        },
        {
          label: 'bi',
          value: 20,
          color: '#58D140',
        },
        {
          label: 'bj',
          value: 20,
          color: '#58D140',
        },
        {
          label: 'bk',
          value: 20,
          color: '#58D140',
        },
        {
          label: 'bl',
          value: 20,
          color: '#58D140',
        },
        {
          label: 'ca',
          value: 10,
          color: '#58D140',
        },
        {
          label: 'cb',
          value: 15,
          color: '#58D140',
        },
        {
          label: 'cc',
          value: 8,
          color: '#58D140',
        },
        {
          label: 'cd',
          value: 17,
          color: '#58D140',
        },
        {
          label: 'ce',
          value: 12,
          color: '#58D140',
        },
        {
          label: 'cf',
          value: 20,
          color: '#58D140',
        },
        {
          label: 'cg',
          value: 20,
          color: '#58D140',
        },
        {
          label: 'ch',
          value: 20,
          color: '#58D140',
        },
        {
          label: 'ci',
          value: 20,
          color: '#58D140',
        },
        {
          label: 'cj',
          value: 20,
          color: '#58D140',
        },
        {
          label: 'ck',
          value: 20,
          color: '#58D140',
        },
        {
          label: 'cl',
          value: 20,
          color: '#58D140',
        },
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
    title: 'Media Type',
    subTitle: 'Total Articles',

    component: 'media_type',
    graphType: 'pie',
    data: {
      title: '',
      subtitle: '',
      summary: {
        label: '1.9M',
        subLabel: 'Total',
      },
      data: [
        {
          label: 'Broadcast',
          value: 35,
          color: '#8F82FF',
        },
        {
          label: 'Print',
          value: 15,
          color: '#FF6888',
        },
        {
          label: 'Online',
          value: 50,
          color: '#FFBE6A',
        },
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
    title: 'Word Cloud',
    subTitle: '',

    component: 'word_cloud',
    graphType: 'word_cloud',
    data: {
      title: 'Defect Distribution',
      subtitle: '2020-04-17',
      summary: {
        label: '35%',
        value: 35,
        subLabel: '132/237',
      },
      data: [
        {
          label: 'SD',
          value: 20,
          thresholdValue: 80,
          color: '#58CF6B',
        },
        {
          label: 'D',
          value: 30,
          thresholdValue: 20,
          color: '#FFBA69',
        },
        {
          label: 'N',
          value: 40,
          thresholdValue: 60,
          color: '#FD708B',
        },
        {
          label: 'SDR',
          value: 120,
          thresholdValue: 180,
          color: '#58CF6B',
        },
        {
          label: 'DR',
          value: 30,
          thresholdValue: 20,
          color: '#FFBA69',
        },
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
    title: 'Top Sources',
    subTitle: '',

    component: 'top_source',
    graphType: 'bar',
    data: actualOneD,
  },

  {
    title: 'Top Themes',
    subTitle: '',

    component: 'top_themes',
    graphType: 'bubble',
    data: bubbleData,
  },

  {
    title: 'Outlet Breakdown',
    subTitle: '',

    component: 'outlet_breakdown',
    graphType: 'groupped_column',
    data: mediaType,
  },

  {
    title: 'Top Authors',
    subTitle: '',

    component: 'top_author',
    graphType: 'bar',
    data: {
      title: 'Defect Distribution',
      subtitle: '2020-04-17',
      summary: {
        label: '35%',
        value: 35,
        subLabel: '132/237',
      },
      data: [
        {
          label: 'SD',
          value: 20,
          thresholdValue: 80,
          color: '#58CF6B',
        },
        {
          label: 'D',
          value: 30,
          thresholdValue: 20,
          color: '#FFBA69',
        },
        {
          label: 'N',
          value: 40,
          thresholdValue: 60,
          color: '#FD708B',
        },
        {
          label: 'SDR',
          value: 120,
          thresholdValue: 180,
          color: '#58CF6B',
        },
        {
          label: 'DR',
          value: 30,
          thresholdValue: 20,
          color: '#FFBA69',
        },
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

  // {
  //   title: 'Geographical Breakdown',
  //   subTitle: '',
  //
  //   component: 'geographical_breakdown',
  //   graphType: 'us_map',
  //   data: {
  //     title: 'Defect Distribution',
  //     subtitle: '2020-04-17',
  //     summary: { label: '55%', subLabel: '132/237' },
  //     data: [
  //       {
  //         label: '23',
  //         value: 30842.923,
  //       },
  //       {
  //         label: '25',
  //         value: 7800.058,
  //       },
  //       {
  //         label: '26',
  //         value: 56538.901,
  //       },
  //       {
  //         label: '30',
  //         value: 145545.801,
  //       },
  //       {
  //         label: '32',
  //         value: 109781.18,
  //       },
  //       {
  //         label: '34',
  //         value: 7354.22,
  //       },
  //       {
  //         label: '36',
  //         value: 47126.399,
  //       },
  //       {
  //         label: '37',
  //         value: 48617.905,
  //       },
  //       {
  //         label: '39',
  //         value: 40860.694,
  //       },
  //       {
  //         label: '42',
  //         value: 44742.703,
  //       },
  //       {
  //         label: '44',
  //         value: 1033.814,
  //       },
  //       {
  //         label: '47',
  //         value: 41234.896,
  //       },
  //       {
  //         label: '48',
  //         value: 261231.711,
  //       },
  //       {
  //         label: '49',
  //         value: 82169.62,
  //       },
  //       {
  //         label: '53',
  //         value: 66455.521,
  //       },
  //       {
  //         label: '55',
  //         value: 54157.805,
  //       },
  //       {
  //         label: '72',
  //         value: 3423.775,
  //       },
  //       {
  //         label: '24',
  //         value: 9707.241,
  //       },
  //       {
  //         label: '01',
  //         value: 50645.326,
  //       },
  //       {
  //         label: '02',
  //         value: 570640.95,
  //       },
  //       {
  //         label: '04',
  //         value: 113594.084,
  //       },
  //       {
  //         label: '05',
  //         value: 52035.477,
  //       },
  //       {
  //         label: '06',
  //         value: 155779.22,
  //       },
  //       {
  //         label: '08',
  //         value: 103641.888,
  //       },
  //       {
  //         label: '09',
  //         value: 4842.355,
  //       },
  //       {
  //         label: '10',
  //         value: 948.543,
  //       },
  //       {
  //         label: '04',
  //         value: 113594.084,
  //       },
  //       {
  //         label: '11',
  //         value: 61.048,
  //       },
  //       {
  //         label: '12',
  //         value: 53624.759,
  //       },
  //       {
  //         label: '13',
  //         value: 57513.485,
  //       },
  //       {
  //         label: '15',
  //         value: 6422.628,
  //       },
  //       {
  //         label: '16',
  //         value: 82643.117,
  //       },
  //       {
  //         label: '17',
  //         value: 55518.93,
  //       },
  //       {
  //         label: '18',
  //         value: 35826.109,
  //       },
  //       {
  //         label: '19',
  //         value: 55857.13,
  //       },
  //       {
  //         label: '20',
  //         value: 81758.717,
  //       },
  //       {
  //         label: '21',
  //         value: 39486.338,
  //       },
  //       {
  //         label: '22',
  //         value: 43203.905,
  //       },
  //       {
  //         label: '27',
  //         value: 79626.743,
  //       },
  //       {
  //         label: '28',
  //         value: 46923.274,
  //       },
  //       {
  //         label: '29',
  //         value: 68741.522,
  //       },
  //       {
  //         label: '31',
  //         value: 76824.171,
  //       },
  //       {
  //         label: '33',
  //         value: 8952.651,
  //       },
  //       {
  //         label: '35',
  //         value: 121298.148,
  //       },
  //       {
  //         label: '38',
  //         value: 69000.798,
  //       },
  //       {
  //         label: '40',
  //         value: 68594.921,
  //       },
  //       {
  //         label: '41',
  //         value: 95988.013,
  //       },
  //       {
  //         label: '45',
  //         value: 30060.696,
  //       },
  //       {
  //         label: '46',
  //         value: 75811.0,
  //       },
  //       {
  //         label: '50',
  //         value: 9216.657,
  //       },
  //       {
  //         label: '51',
  //         value: 39490.086,
  //       },
  //       {
  //         label: '54',
  //         value: 24038.21,
  //       },
  //       {
  //         label: '56',
  //         value: 97093.141,
  //       },
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
];

export const brandDashboard = [
  {
    title: 'Volume Analysis',
    subTitle: '',

    component: 'volume_analysis',
    graphType: 'uber_stats_volume',

    data: uberStatsData,
  },
  {
    title: 'Sentiment Analysis',
    subTitle: '',

    component: 'sentiment_analysis',
    graphType: 'uber_stats_sentiment',

    data: uberStatsSentimentData,
  },
  {
    title: 'Sentiment over Time',
    subTitle: '',

    component: 'sentiment_over_time',
    graphType: 'line',
    dataType: ['1d'],

    data: actualOneD,
  },
  {
    title: 'Coverage over Time',
    subTitle: '',

    component: 'coverage_over_time',
    graphType: 'line',
    dataType: ['2d'],

    data: actualOneD,
  },
  {
    title: 'Media Type', // working
    subTitle: 'Total Articles',

    component: 'media_type',
    graphType: 'bar',
    dataType: ['1d'],

    data: actualOneD,
  },
  {
    title: 'Reach over Time',
    subTitle: 'Total Reach',

    component: 'reach_over_time',
    graphType: 'line',
    dataType: ['2d'],

    data: actualTwoD,
  },
];

export const industryDashboard = [
  {
    title: 'Volume Analysis',
    subTitle: '',

    component: 'volume_analysis',
    graphType: 'uber_stats_volume', // created

    data: uberStatsData,
  },

  {
    title: 'Sentiment Analysis',
    subTitle: '',

    component: 'sentiment_analysis',
    graphType: 'uber_stats_sentiment', // created

    data: uberStatsSentimentData,
  },
  {
    title: 'Coverage by Journalist',
    subTitle: '',

    component: 'coverage_by_journalist',
    graphType: 'bar',
    dataType: ['1d'],

    data: horizontalChartCoverage,
  },
  {
    title: 'Coverage by Sources',
    subTitle: '',

    component: 'coverage_by_source',
    graphType: 'column', // ?
    dataType: ['1d'],

    data: horizontalChartCoverage,
  },

  {
    title: 'Companies Mentioned', // working
    subTitle: '',

    component: 'companies_mentioned',
    graphType: 'word_cloud',
    dataType: ['1d'],

    data: wordCloudData,
  },
  {
    title: 'Coverage over Time',
    subTitle: '',

    component: 'coverage_over_time',
    graphType: 'line',
    dataType: ['2d'],

    data: mediaType,
  },
  {
    title: 'Coverage by Top Publication',
    subTitle: 'Total Reach',

    component: 'coverage_by_top_publications',
    graphType: 'bar',
    dataType: ['1d'],

    data: coverageByTopPublicationData,
  },
];

export const peopleDashboard = [
  {
    title: 'Volume Analysis',
    subTitle: '',

    component: 'volume_analysis',
    graphType: 'uber_stats_volume',

    dataType: ['2d'],
    data: uberStatsData,
  },
  {
    title: 'Coverage over Time',
    subTitle: '',

    component: 'coverage_over_time',
    graphType: 'line',
    dataType: ['1d'],
    data: actualOneD,
  },
  {
    title: 'Top Journalist by Sentiment',
    subTitle: "Author's Name",

    component: 'top_journalist_by_sentiment',
    graphType: 'butterfly',

    dataType: ['2d'],
    data: butterFly2D,
  },
  {
    title: 'Top Source by Sentiment',
    subTitle: 'Total Articles',

    component: 'top_source_by_sentiment',
    graphType: 'groupped_column', // ?
    dataType: ['2d'],
    data: mediaType,
  },
  {
    title: 'Popular Topics',
    subTitle: '',

    component: 'popular_topics',
    graphType: 'bubble',
    data: bubbleData,
  },
  {
    title: 'Media Type',
    subTitle: 'Total Articles',

    component: 'media_type',
    graphType: 'bar',
    dataType: ['1d'],

    data: actualOneD,
  },
];

export const allWidgets = {
  overViewDetails,
  brandDashboard,
  industryDashboard,
  peopleDashboard,
};

export const brandKeywords = [
  'Gucci',
  'Gucci',
  'Gucci',
  'Gucci',
  'Gucci',
  'Gucci',
  'Gucci',
  'Gucci',
  'Gucci',
  'Gucci',
  'Gucci',
  'Gucci',
  'Gucci',
  'Gucci',
];
export const competitionKeywords = ['CHANEL', 'Louis Vuitton'];
export const peopleKeywords = [
  'William William Dogulas',
  'William William Dogulas',
  'William William Dogulas',
  'William William Dogulas',
  'William William Dogulas',
  'William William Dogulas',
  'William William Dogulas',
  'William William Dogulas',
  'William William Dogulas',
];

export const keywords = {
  brand_competitive: {
    brandKeywords,
    competitionKeywords,
  },
  people: peopleKeywords,
};

export const dashboardData = {
  summary: [
    {
      title: 'Total Articles',
      data: 342353534432432,
      change: 32.1,
      isIncreased: true,
    },
    {
      title: 'Total Reach',
      data: 34823874,
      change: 16.2,
      isIncreased: false,
    },
    {
      title: 'Total Ad Value Equivalency',
      data: 34823874,
      change: 32.1,
      isIncreased: true,
    },
  ],
  dashboardDetails: overViewDetails,
};

export const addGraphItems = [
  {
    id: 0,
    label: 'Recent Searches',
    description: 'This is a placeholder text used for demonstration purposes.',
    checked: false,
  },
  {
    id: 1,
    label: 'Top Source',
    description: 'This is a placeholder text used for demonstration purposes.',
    checked: false,
  },
  {
    id: 2,
    label: 'Top 5 Articles',
    description: 'This is a placeholder text used for demonstration purposes.',
    checked: false,
  },
  {
    id: 3,
    label: 'Sentiments',
    description: 'This is a placeholder text used for demonstration purposes.',
    checked: false,
  },
  {
    id: 4,
    label: 'Campaign Monitor',
    description: 'This is a placeholder text used for demonstration purposes.',
    checked: false,
  },
  {
    id: 5,
    label: 'SOV',
    description: 'This is a placeholder text used for demonstration purposes.',
    checked: false,
  },
  {
    id: 6,
    label: 'Sentiments',
    description: 'This is a placeholder text used for demonstration purposes.',
    checked: false,
  },
  {
    id: 7,
    label: 'Coverage',
    description: 'This is a placeholder text used for demonstration purposes.',
    checked: false,
  },
  {
    id: 8,
    label: 'Reach',
    description: 'This is a placeholder text used for demonstration purposes.',
    checked: false,
  },
  {
    id: 9,
    label: 'Journalists',
    description: 'This is a placeholder text used for demonstration purposes.',
    checked: false,
  },
  {
    id: 10,
    label: 'Sources',
    description: 'This is a placeholder text used for demonstration purposes.',
    checked: false,
  },
  {
    id: 11,
    label: 'PR Impact',
    description: 'This is a placeholder text used for demonstration purposes.',
    checked: false,
  },
  {
    id: 12,
    label: 'Sentiments',
    description: 'This is a placeholder text used for demonstration purposes.',
    checked: false,
  },
  {
    id: 13,
    label: 'Media Database',
    description: 'This is a placeholder text used for demonstration purposes.',
    checked: false,
  },
  {
    id: 14,
    label: 'Sentiments',
    description: 'This is a placeholder text used for demonstration purposes.',
    checked: false,
  },
  {
    id: 15,
    label: 'Sentiments',
    description: 'This is a placeholder text used for demonstration purposes.',
    checked: false,
  },
];

export const searchFilterData = [
  {
    label: 'Media Types',
    value: 'mediaTypes',
    options: [
      {
        label: 'Online',
        value: 'online',
      },
      {
        label: 'Print',
        value: 'print',
      },
      {
        label: 'Broadcast',
        value: 'broadcast',
      },
    ],
  },
  {
    label: 'Languages',
    value: 'languages',
    options: [
      {
        label: 'English',
        value: 'english',
      },
    ],
  },
  {
    label: 'Locations',
    value: 'locations',
    options: [
      {
        label: 'Afghanistan',
        value: 'afghanistan',
      },
      {
        label: 'India',
        value: 'india',
      },
      {
        label: 'Brazil',
        value: 'brazil',
      },
      {
        label: 'Canada',
        value: 'canada',
      },
    ],
  },
  {
    label: 'Sources',
    value: 'sources',
    options: [
      {
        label: 'ABC News',
        value: 'abc_news',
      },
      {
        label: 'CNN',
        value: 'cnn',
      },
      {
        label: 'NBC',
        value: 'nbc',
      },
    ],
  },
  {
    label: 'Sentiment',
    value: 'sentiment',
    options: [
      { label: 'Positive', value: 'positive' },
      { label: 'Negative', value: 'negative' },
      { label: 'Neutral', value: 'neutral' },
    ],
  },
  {
    label: 'DateTime',
    value: 'dateTime',
    options: [
      {
        label: 'Today',
        value: 'today',
      },
      {
        label: 'Yesterday',
        value: 'yesterday',
      },
      {
        label: 'Last 1 week',
        value: 'last_1_week',
      },
    ],
  },
];

function getPreviousDay(date = new Date()) {
  const yesterday = new Date(date);
  yesterday.setDate(yesterday.getDate() - 1);
  yesterday.setHours(0, 0, 0, 0);
  return yesterday.getTime();
}

function getCurrentTimestamp() {
  return new Date().getTime();
}

export const notifications = [
  {
    type: 'icon',
    isIncreased: true,
    title: 'High search volume alert - Gucci',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    timeStamp: getCurrentTimestamp(),
  },
  {
    type: 'icon',
    isIncreased: true,
    title: 'Weekly usage summary',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    timeStamp: getPreviousDay(),
  },
  {
    type: 'icon',
    isIncreased: true,
    title: 'Newsletter - GUCCI',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    timeStamp: getCurrentTimestamp(),
  },
  {
    type: 'image',
    image:
      'https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/barchart_ver_2.jpg',
    title: 'Get Started with AlphametricX',
    content:
      'These tutorials can bring you up to speed. Explore what the tool has to offer.',
    timeStamp: getPreviousDay(),
  },
  {
    type: 'image',
    image:
      'https://developers.google.com/static/earth-engine/images/Charts_image_by_region_diagram.svg',
    title: 'Weekly Usage Summary',
    content:
      'These tutorials can bring you up to speed. Explore what the tool has to offer.',
    timeStamp: getPreviousDay(),
  },
];

export const notificationSettings = [
  {
    label: 'Notification Settings',
    subText:
      'Select the kinds of notifications you get about your activities and recommendations',
    options: [
      {
        optionLabel: 'News and Updates',
        optionValue: 'news_and_updates',
        optionText: 'News about the products and feature updates',
        selected: false,
      },
      {
        optionLabel: 'Tips and Tutorials',
        optionValue: 'tips_and_tutorials',
        optionText: 'Tips and tricks to make the most out of the tool',
        selected: false,
      },
      {
        optionLabel: 'Offers',
        optionValue: 'offers',
        optionText: 'Personal Offers',
        selected: true,
      },
      {
        optionLabel: 'Reminders',
        optionValue: 'reminders',
        optionText: 'Reminders on your subscription and usage',
        selected: false,
      },
      {
        optionLabel: 'Team Activities',
        optionValue: 'team_activities',
        optionText: 'Updates when team shares downloads',
        selected: true,
      },
    ],
  },
  {
    label: 'Desktop Notifications',
    subText:
      'Get push notifications in app to find out whats going on when you are online.',
    options: [
      {
        optionLabel: 'News and Updates',
        optionValue: 'news_and_updates',
        optionText: 'News about the products and feature updates',
        selected: false,
      },
      {
        optionLabel: 'Tips and Tutorials',
        optionValue: 'tips_and_tutorials',
        optionText: 'Tips and tricks to make the most out of the tool',
        selected: false,
      },
      {
        optionLabel: 'Offers',
        optionValue: 'offers',
        optionText: 'Personal Offers',
        selected: false,
      },
    ],
  },
];

export const ArticleThemeTags = [
  {
    id: Math.random(),
    title: 'Theme 1',
  },
  {
    id: Math.random(),
    title: 'Theme2dfafasdfa',
  },
  {
    id: Math.random(),
    title: 'Theme 3',
  },
  {
    id: Math.random(),
    title: 'Theme 4',
  },
  {
    id: Math.random(),
    title: 'Theme 5',
  },
  {
    id: Math.random(),
    title: 'Theme 6',
  },
  {
    id: Math.random(),
    title: 'Theme 7',
  },
];
