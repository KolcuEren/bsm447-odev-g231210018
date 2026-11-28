// K28 Teknoloji Haberleri · Varyant c (Python)
export const API_URL =
  'https://hn.algolia.com/api/v1/search?tags=story&query=python';

// Haberin url alanı boşsa Hacker News tartışma sayfasına yönlendirilir
export const getFallbackUrl = (objectID) =>
  `https://news.ycombinator.com/item?id=${objectID}`;
