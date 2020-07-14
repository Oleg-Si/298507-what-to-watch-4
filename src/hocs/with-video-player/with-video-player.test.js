import React from 'react';
import renderer from 'react-test-renderer';
import withVideoPlayer from './with-video-player.jsx';
import {mockFilmForTests} from '../../mock/films.js';
import PropTypes from 'prop-types';

const Component = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node.isRequired
};

const WrappedComponent = withVideoPlayer(Component);

it(`Проверяет снепшот хока withVideoPlayer`, () => {
  const tree = renderer.create(
      <WrappedComponent
        film={mockFilmForTests}
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
