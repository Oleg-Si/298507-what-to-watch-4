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
    starring: data.starring,
    reviews: [
      {
        author: `Edward Norton`,
        rating: `3.5`,
        date: 1500713355882,
        comment: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`
      },
      {
        author: `Willem Dafoe`,
        rating: `6.7`,
        date: 1302290042303,
        comment: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`
      },
      {
        author: `Ralph Fiennes`,
        rating: `8.9`,
        date: 1445604462862,
        comment: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`
      }
    ]
  });
};

export {createFilm};
