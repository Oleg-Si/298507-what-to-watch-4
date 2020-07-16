const createFilm = (data) => {
  return ({
    id: data.id,
    title: data.name,
    img: data.preview_image,
    poster: data.poster_image,
    genre: data.genre,
    rating: data.rating,
    previewVideoLink: data.preview_video_link,
    src: data.video_link,
    bgColor: data.background_color,
    bgImg: data.background_image,
    releaseDate: data.released,
    runTime: data.run_time,
    ratingCount: data.scores_count,
    description: data.description,
    director: data.director,
    isFavorite: data.is_favorite,
    starring: data.starring
  });
};

export {createFilm};
