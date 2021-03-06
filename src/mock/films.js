import {getRandomInt, getRandomArrayItems} from './../utils';
import {FILM_COUNT} from '../constants';

const getFilms = (count) => {
  const allFilms = new Array(count).fill(``);

  allFilms.forEach((film, index, array) => {
    const element = getMockFilm();
    element.id = index;
    array[index] = element;
  });

  return allFilms;
};

const getMockFilm = () => ({
  id: 0,
  title: [
    `Fantastic Beasts: The Crimes of Grindelwald`,
    `Bohemian Rhapsody`,
    `Macbeth`,
    `Aviator`,
    `We need to talk about Kevin`,
    `What We Do in the Shadows`,
    `Revenant`,
    `Johnny English`,
    `Shutter Island`,
    `Pulp Fiction`,
    `No Country for Old Men`,
    `Snatch`
  ][Math.floor(Math.random() * 12)],
  img: [
    `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    `img/bohemian-rhapsody.jpg`,
    `img/macbeth.jpg`,
    `img/aviator.jpg`,
    `img/we-need-to-talk-about-kevin.jpg`,
    `img/what-we-do-in-the-shadows.jpg`,
    `img/revenant.jpg`,
    `img/johnny-english.jpg`,
    `img/shutter-island.jpg`,
    `img/pulp-fiction.jpg`,
    `img/no-country-for-old-men.jpg`,
    `img/snatch.jpg`
  ][Math.floor(Math.random() * 12)],
  poster: ``,
  genre: [
    `Dramas`,
    `Horror`,
    `Comedies`,
    `Romance`,
    `Crime`,
    `Sci-Fi`,
    `Documentary`,
    `Thrillers`,
    `Kids & Family`
  ][getRandomInt(0, 6)],
  src: getRandomArrayItems([`https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4`, `https://interactive-examples.mdn.mozilla.net/media/examples/flower.mp4`, `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`, `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`, `https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4`], 1),
  rating: `${getRandomInt(0, 9)}.${getRandomInt(0, 9)}`,
  releaseDate: getRandomInt(1262293200000, 1552915226386),
  runTime: getRandomInt(4000, 7800),
  ratingCount: getRandomInt(5, 250),
  description: getRandomArrayItems([`In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&aposs friend and protege.`, `Gustave prides himself on providing first-class service to the hotel&apos;s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&aposs lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`, `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra.`, `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`, `Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`], getRandomInt(2, 5)),
  director: getRandomArrayItems([
    `Bill Murray`,
    `Edward Norton`,
    `Jude Law`,
    `Willem Dafoe`,
    `Saoirse Ronan`,
    `Tony Revoloru`,
    `Tilda Swinton`,
    `Tom Wilkinson`,
    `Owen Wilkinson`,
    `Adrien Brody`,
    `Ralph Fiennes`,
    `Jeff Goldblum`
  ], 1),
  starring: getRandomArrayItems([
    `Bill Murray`,
    `Edward Norton`,
    `Jude Law`,
    `Willem Dafoe`,
    `Saoirse Ronan`,
    `Tony Revoloru`,
    `Tilda Swinton`,
    `Tom Wilkinson`,
    `Owen Wilkinson`,
    `Adrien Brody`,
    `Ralph Fiennes`,
    `Jeff Goldblum`
  ], getRandomInt(3, 12)),
  reviews: getMockReviews(getRandomInt(3, 7))
});

const getMockReviews = (count) => new Array(count).fill(``).map(() => getReviews());

const getReviews = () => ({
  author: getRandomArrayItems([
    `Bill Murray`,
    `Edward Norton`,
    `Jude Law`,
    `Willem Dafoe`,
    `Saoirse Ronan`,
    `Tony Revoloru`,
    `Tilda Swinton`,
    `Tom Wilkinson`,
    `Owen Wilkinson`,
    `Adrien Brody`,
    `Ralph Fiennes`,
    `Jeff Goldblum`
  ], 1),
  rating: `${getRandomInt(0, 9)}.${getRandomInt(0, 9)}`,
  date: getRandomInt(1262293200000, 1552915226386),
  comment: getRandomArrayItems([
    `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
    `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
    `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
    `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
    `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`
  ], 1)
});

const promoFilmMock = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  date: `2014`
};

const mockFilmForTests = {
  id: 1,
  title: `Revenant`,
  img: `img/revenant.jpg`,
  genre: `Drama`,
  rating: 8.5,
  bgImg: `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/Revenant.jpg`,
  bgColor: `rgb(146, 145, 139)`,
  src: `https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4`,
  releaseDate: 2015,
  poster: `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Revenant.jpg`,
  runTime: 84,
  isFavorite: false,
  ratingCount: 148,
  previewVideoLink: `https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4`,
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&aposs friend and protege.`,
  director: `Bill Murray`,
  starring: [`Edward Norton`, `Jude Law`, `Willem Dafoe and other`, `Wes Andreson`],
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
};

const mockFilmsForTests = [
  {
    id: 0,
    title: `Aviator`,
    img: `img/aviator.jpg`,
    genre: `Comedies`,
    rating: 8.1,
    src: `https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4`,
    releaseDate: 2015,
    runTime: 114,
    isFavorite: false,
    ratingCount: 198,
    previewVideoLink: `https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&aposs friend and protege.`,
    director: `Bill Murray`,
    starring: [`Edward Norton`, `Jude Law`, `Willem Dafoe and other`, `Wes Andreson`],
    reviews: [
      {
        author: `Edward Norton`,
        rating: 3.5,
        date: 1500793355882,
        comment: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`
      },
      {
        author: `Willem Dafoe`,
        rating: 6.7,
        date: 1302290042303,
        comment: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`
      },
      {
        author: `Ralph Fiennes`,
        rating: 8.9,
        date: 1445604462862,
        comment: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`
      }
    ]
  },
  {
    id: 1,
    title: `Macbeth`,
    img: `img/macbeth.jpg`,
    genre: `Horror`,
    rating: 3.6,
    previewVideoLink: `https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4`,
    src: `https://interactive-examples.mdn.mozilla.net/media/examples/flower.mp4`,
    releaseDate: 2014,
    runTime: 88,
    isFavorite: false,
    ratingCount: 248,
    description: `Gustave prides himself on providing first-class service to the hotel&apos;s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&aposs lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
    director: `Edward Norton`,
    starring: [`Jude Law`, `Willem Dafoe and other`, `Wes Andreson`],
    reviews: [
      {
        author: `Edward Norton`,
        rating: 3.5,
        date: 1500793355882,
        comment: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`
      },
      {
        author: `Willem Dafoe`,
        rating: 6.7,
        date: 1302290042303,
        comment: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`
      },
      {
        author: `Ralph Fiennes`,
        rating: 8.9,
        date: 1445604462862,
        comment: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`
      }
    ]
  },
  {
    id: 2,
    title: `Snatch`,
    img: `img/snatch.jpg`,
    genre: `Documentary`,
    rating: 2.5,
    previewVideoLink: `https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4`,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    releaseDate: 2008,
    runTime: 69,
    isFavorite: true,
    ratingCount: 850,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&aposs friend and protege.`,
    director: `Jude Law`,
    starring: [`Edward Norton`, `Willem Dafoe and other`, `Wes Andreson`],
    reviews: [
      {
        author: `Edward Norton`,
        rating: 3.5,
        date: 1500793355882,
        comment: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`
      },
      {
        author: `Willem Dafoe`,
        rating: 6.7,
        date: 1302290042303,
        comment: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`
      },
      {
        author: `Ralph Fiennes`,
        rating: 8.9,
        date: 1445604462862,
        comment: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`
      }
    ]
  }
];

const mockReviews = [
  {
    user: {
      id: 1,
      name: `Edward Norton`
    },
    id: 0,
    rating: 3.5,
    date: 1500793355882,
    comment: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`
  },
  {
    user: {
      id: 2,
      name: `Willem Dafoe`
    },
    id: 1,
    rating: 6.7,
    date: 1302290042303,
    comment: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`
  },
  {
    user: {
      id: 3,
      name: `Ralph Fiennes`
    },
    id: 2,
    rating: 8.9,
    date: 1445604462862,
    comment: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`
  }
];

const films = getFilms(FILM_COUNT);

export default films;
export {promoFilmMock, mockFilmForTests, mockFilmsForTests, mockReviews};
