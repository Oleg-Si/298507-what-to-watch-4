import {getRandomInt, getRandomArrayItems} from './../utils';

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
    `Drama`,
    `Horror`,
    `Comedy`,
    `Action`,
    `Adventure`,
    `Documentary`
  ][getRandomInt(0, 7)],
  rating: `${getRandomInt(0, 9)}.${getRandomInt(0, 9)}`,
  releaseDate: getRandomInt(1262293200000, 1552915226386),
  ratingCount: getRandomInt(5, 250),
  description: getRandomArrayItems([`In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&aposs friend and protege.`, `Gustave prides himself on providing first-class service to the hotel&apos;s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&aposs lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`, `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra.`, `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`, `Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`], getRandomInt(0, 6)),
  director: getRandomArrayItems([`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe and other`, `Wes Andreson`], 1),
  starring: getRandomArrayItems([`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe and other`, `Wes Andreson`], getRandomInt(3, 6))
});

export default getMockFilm;
