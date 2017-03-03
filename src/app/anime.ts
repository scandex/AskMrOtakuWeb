export class Anime {
  animeId: number;
  name: string;
  image: string;
  rating: number;
  episodes: number;
  genre: string;
  prediction: number;
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
