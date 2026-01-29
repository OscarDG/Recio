export type Works = {
  description: string;
};

export type Service = {
  id: number;
  name: string;
  description: string;
  image_url: string;
  works: Works[];
};