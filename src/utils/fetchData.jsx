// 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85'

export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': 'ef1ef59b89msh124413d88c3f1adp135786jsn43ed77b904da',
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': 'ef1ef59b89msh124413d88c3f1adp135786jsn43ed77b904da',
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
