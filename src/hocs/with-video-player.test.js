import React from 'react';
import renderer from 'react-test-renderer';
import withVideoPlayer from './with-video-player.jsx';

const film = {
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  src: `src1`
};

const Component = (props) => {
  // eslint-disable-next-line
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

const WrappedComponent = withVideoPlayer(Component);

it(`Проверяет снепшот хока withVideoPlayer`, () => {
  const tree = renderer.create(
      <WrappedComponent
        film={film}
        controls={false}
        isMuted={true}
        isPlaying={false}
      />, {
        createNodeMock: () => {
          return {};
        }}
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
