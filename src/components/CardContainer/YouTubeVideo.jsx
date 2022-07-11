import React from 'react';
import CardMedia from '@mui/material/CardMedia';

function YouTubeVideo(props) {
  const { title = 'Embedded youtube', height = 300, link, controls = 0, autoPlay = 0, mute = 0, ...otherProps } = props;

  const [, embedId] = link.split('v=');
  const isMute = autoPlay ? 1 : mute;

  return (
    <CardMedia
      component='iframe'
      height={height}
      src={`https://www.youtube.com/embed/${embedId}?playlist=${embedId}&loop=1&autoplay=${autoPlay}&mute=${isMute}&controls=${controls}`}
      allowFullScreen
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      title={title}
      {...otherProps}
    />
  );
}

export default YouTubeVideo;
