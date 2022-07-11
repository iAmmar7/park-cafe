import React from 'react';
import CardMedia from '@mui/material/CardMedia';

function YouTubeVideo(props) {
  const { title = 'Embedded youtube', height = 300, link, controls = 0, autoPlay = 1, ...otherProps } = props;

  const [, embedId] = link.split('v=');

  return (
    <CardMedia
      component='iframe'
      height={height}
      src={`https://www.youtube.com/embed/${embedId}?rel=0&amp;autoplay=${autoPlay}&mute=${autoPlay}&controls=${controls}`}
      allowFullScreen
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      title={title}
      {...otherProps}
    />
  );
}

export default YouTubeVideo;
