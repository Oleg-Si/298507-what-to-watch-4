export interface FilmInterface {
  bgColor: string,
  bgImg: string,
  description: string,
  director: string,
  genre: string,
  id: number,
  img: string,
  isFavorite: boolean,
  poster: string,
  previewVideoLink: string,
  rating: number,
  ratingCount: number,
  releaseDate: number,
  runTime: number,
  src: string,
  starring: string[],
  title: string
}

export interface FilmReviewInterface {
  comment: string,
  date: string,
  id: number,
  rating: number,
  user: {
    id: number,
    name: string,
  }
}
