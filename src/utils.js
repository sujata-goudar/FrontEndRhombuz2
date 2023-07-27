const ranges = [
  { divider: 1e18, suffix: 'E', fullSuffix: 'Quintillion' },
  { divider: 1e15, suffix: 'P', fullSuffix: 'Quadrillion' },
  { divider: 1e12, suffix: 'T', fullSuffix: 'Trillion' },
  { divider: 1e9, suffix: 'G', fullSuffix: 'Billion' },
  { divider: 1e6, suffix: 'M', fullSuffix: 'Million' },
  { divider: 1e3, suffix: 'k', fullSuffix: 'Thousand' },
];

export const formatNumber = (n, fullSuffix = false, object = false) => {
  let suffix = '';
  let FSuffix = '';
  let value = 0;

  for (let i = 0; i < ranges.length; i++) {
    if (n < 0) {
      return '-' + formatNumber(-n);
    }
    if (n >= ranges[i].divider) {
      suffix = ranges[i].suffix;
      FSuffix = ranges[i].fullSuffix;
      value = (n / ranges[i].divider).toFixed(1);
      if (object) {
        return { text: n.toString(), value, suffix, fullSuffix: FSuffix };
      } else {
        return value + (fullSuffix ? FSuffix : suffix);
      }
    }
  }
  return n.toString();
};

export const colorChange = (obj) => {
  const tempObj = JSON.parse(JSON.stringify(obj));
  tempObj.data = tempObj.data.map((ele) => {
    const temp = ele;
    temp.color =
      ele.value >= 20 ? '#00CE75' : ele.value < 0 ? '#ED3F47' : '#FF8C00';
    return temp;
  });
  return tempObj;
};

export const getPagedResult = (data, limit, page) => {
  let tempArr = JSON.parse(JSON.stringify(data));
  return tempArr.splice(parseInt(page), parseInt(limit));
};

export const articleFilter = (data, tab) => {
  return data.filter((article) => article.type === tab);
};

export const profilesFilter = (data, id) => {
  return data.filter((item) => item.id === parseInt(id));
};
