export interface CryptoAsset {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change: number;
  imageUrl: string;
}

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  source: string;
  date: string;
  imageUrl: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  imageUrl?: string;
  likes: number;
  comments: number;
  timestamp: string;
}