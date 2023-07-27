const content = Array.from({ length: 8 }, (_, index) => {
  return {
    key: index,
    content: 'NA',
  };
});

const SavedSearch = {
  checked: false,
  title: 'Gucci',
  des: 'This is a placeholder text used for demonstration purposes. Please replace this text with your own content when you are ready.',
  createBy: 'N Harish',
  createOn: '02 JUN 2022',
  updateOn: '02 JUN 2022',
  sharedwith: JSON.parse(JSON.stringify(content.slice(0, 5))),
  results: 128348893484,
};

export const contents = Array.from({ length: 48 }, (_, k) => {
  const i = (k ^ 2) - 4 * k + 3;
  return {
    ...JSON.parse(
      JSON.stringify({
        ...SavedSearch,
        title: SavedSearch.title + i,
        createBy: SavedSearch.createBy + ((i ^ 2) - 4 * i + 8),
        createOn: SavedSearch.createOn + ((i ^ 2) - 9 * i + 1),
        updateOn: SavedSearch.updateOn + ((i ^ 2) + 4 * i + 9),
        results: SavedSearch.results + ((i ^ 2) + 8 * i + -3),
      })
    ),
    id: new Date().getTime(),
  };
});

export const recent_searches = Array.from({ length: 12 }, () => {
  return {
    ...JSON.parse(JSON.stringify(SavedSearch)),
    id: new Date().getTime(),
  };
});
