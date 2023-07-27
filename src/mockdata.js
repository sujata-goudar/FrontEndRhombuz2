export const informationChart = {
  label: 'Defect Distribution',
  subtitle: '2020-04-17',
  summary: { label: '', subLabel: '' }, //ask
  data: [
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
  labels: [
    {
      label: 'Total',
      value: 'total',
    },
    {
      label: 'Change',
      value: 'change',
    },
    {
      label: 'Increased',
      value: 'isIncreased',
    },
  ],
  info: [],
};

export const butterFly2D = {
  title: 'Defect Distribution',
  subtitle: '',
  summary: [{ label: '', subLabel: '' }],
  data: [
    { label: 'Theme 1', positive: 110, negative: 50 },
    { label: 'Theme 2', positive: 80, negative: 110 },
    { label: 'Theme 3', positive: 115, negative: 30 },
    { label: 'Theme 4', positive: 60, negative: 40 },
  ],
  labels: [
    { label: 'Positive', value: 'positive', color: 'green' },
    { label: 'Negative', value: 'negative', color: 'red' },
  ],
  info: [],
};

export const horizontalChart = {
  title: 'Defect Distribution',
  subtitle: '2020-04-17',
  summary: {
    label: '35%',
    value: 35,
    subLabel: '132/237',
  },
  data: [
    {
      label: 'Author 1',
      value: 20,
      thresholdValue: 80,
      color: '#8F82FF',
    },
    {
      label: 'Author 2',
      value: 30,
      thresholdValue: 20,
      color: '#8F82FF',
    },
    {
      label: 'Author 3',
      value: 40,
      thresholdValue: 60,
      color: '#8F82FF',
    },
    {
      label: 'Author 4',
      value: 120,
      thresholdValue: 180,
      color: '#8F82FF',
    },
  ],
  labels: [
    {
      label: 'label',
      value: 'value',
    },
  ],
  info: [],
};
export const horizontalChartCoverage = {
  title: 'Defect Distribution',
  subtitle: '2020-04-17',
  summary: {
    label: '35%',
    value: 35,
    subLabel: '132/237',
  },
  data: [
    {
      label: 'Author 1',
      value: 20,
      thresholdValue: 80,
      color: '#FF9315',
    },
    {
      label: 'Author 2',
      value: 30,
      thresholdValue: 20,
      color: '#FF9315',
    },
    {
      label: 'Author 3',
      value: 40,
      thresholdValue: 60,
      color: '#FF9315',
    },
    {
      label: 'Author 4',
      value: 120,
      thresholdValue: 180,
      color: '#FF9315',
    },
  ],
  labels: [
    {
      label: 'label',
      value: 'value',
    },
  ],
  info: [],
};
