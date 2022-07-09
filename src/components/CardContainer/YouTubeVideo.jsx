import React from 'react';
import CardMedia from '@mui/material/CardMedia';

function YouTubeVideo(props) {
  const { title = 'Embedded youtube', height = 300, link, ...otherProps } = props;

  const [, embedId] = link.split('v=');

  return (
    <CardMedia
      component='iframe'
      height={height}
      src={`https://www.youtube.com/embed/${embedId}`}
      allowFullScreen
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      title={title}
      {...otherProps}
    />
  );
}

export default YouTubeVideo;
