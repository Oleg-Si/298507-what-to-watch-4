export const DEFAULT_GENRE = `All genres`;
export const DEFAULT_TAB = `Overview`;
export const FILM_COUNT = 40;
export const RENDERED_FILMS_COUNT = 8;
export const COUNT_MORE_FILMS = 8;
export const COUNT_MORE_LIKE_THIS_FILMS = 4;

export const Tabs = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
};

export const RatingKeys = {
  BAD: `Bad`,
  NORMAL: `Normal`,
  GOOD: `Good`,
  VERY_GOOD: `Very good`,
  AWESOME: `Awesome`
};

export const APIErrorsCode = {
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400
};

export enum AuthorizationStatus {
  AUTH = `AUTH`,
  NO_AUTH = `NO_AUTH`
};

export const AppRoute = {
  ROOT: `/`,
  LOGIN: `/login`,
  MY_LIST: `/mylist`,
  FILM: `/films`,
  ADD_REVIEW: `/review`,
  PLAYER: `/player`
};

export const preloaderMainStyle = {
  top: `45vh`,
  left: `50vw`,
  position: `absolute`
};

export const preloaderCardStyle = {
  top: `50%`,
  left: `50%`,
  marginLeft: `-32px`,
  marginTop: `-32px`,
  zIndex: `2`,
  position: `absolute`
};
