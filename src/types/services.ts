export type Works = {
  description: string;
};

export type Service = {
  id: number;
  name: string;
  description: string;
  image_svg: string;
  works: Works[];
};