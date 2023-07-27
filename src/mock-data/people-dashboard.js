import { actualOneD, bubbleData, mediaType } from './index.js';
import { butterFly2D, informationChart } from '../mockdata.js';

export const peopleDashboard = [
  {
    title: 'Volume Analysis',
    subTitle: '',

    component: 'volume_analysis',
    graphType: 'information_chart',

    dataType: ['2d'],
    data: informationChart,
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

    component: 'top_author', // ask
    graphType: 'bar',

    dataType: ['2d'],
    data: butterFly2D,
  },
  {
    title: 'Top Source by Sentiment',
    subTitle: 'Total Articles',

    component: 'top_source',
    graphType: 'top_source_by_sentiment', // ?
    dataType: ['2d'],
    data: mediaType,
  },
  {
    title: 'Popular Topics',
    subTitle: '',

    component: 'top_themes',
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
