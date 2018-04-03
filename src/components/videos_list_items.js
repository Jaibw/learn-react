import React from 'react';

const VideosListItem = (props) => {
  const video = props.video;
  const onVideoSelect = props.onVideoSelect;
  return (
    <li onClick={() => onVideoSelect(video) }>
    {video.snippet.title} 
    <img src={video.snippet.thumbnails.default.url} />
    </li>
  );
};

export default VideosListItem;
