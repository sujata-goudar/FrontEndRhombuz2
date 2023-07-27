import { actualOneD, actualTwoD } from '.';
import { informationChart } from '../mockdata';

export const brandDashboard = [
  {
    title: 'Volume Analysis',
    subTitle: '',

    component: 'volume_analysis',
    graphType: 'information_chart',

    data: informationChart,
  },
  {
    title: 'Sentiment Analysis',
    subTitle: '',

    component: 'sentiment_analysis',
    graphType: 'information_chart',

    data: informationChart,
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
    title: 'Media Type',
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
