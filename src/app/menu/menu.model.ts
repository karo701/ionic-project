export interface Menu {
  id: string;
  info: Info[];
  title: string;
  imageUrl: string;
  description: string[];
}
export interface Info {
  name: string;
  detail: string;
}
