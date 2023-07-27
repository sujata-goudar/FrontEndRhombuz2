import { mediaType } from '.';
import {
  horizontalChart,
  horizontalChartCoverage,
  informationChart,
} from '../mockdata';
import { wordCloudData } from './mockdata';

export const industryDashboard = [
  {
    title: 'Volume Analysis',
    subTitle: '',

    component: 'volume_analysis',
    graphType: 'information_chart', // created

    data: informationChart,
  },

  {
    title: 'Sentiment Analysis',
    subTitle: '',

    component: 'sentiment_analysis',
    graphType: 'information_chart', // created

    data: informationChart,
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
    graphType: 'stacked_column_chart', // ?
    dataType: ['1d'],

    data: horizontalChartCoverage,
  },

  {
    title: 'Companies Mentioned',
    subTitle: '',

    component: 'word_cloud',
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

    data: horizontalChart,
  },
];
