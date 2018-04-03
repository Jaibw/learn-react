import React from 'react';
import VideosListItem from './videos_list_items';

const VideoList = (props) => {
  const VedioItems = props.videos.map( (video) => {
    return <VideosListItem
    onVideoSelect={props.onVideoSelect}
    key={video.etag}
    video={video} />
  } );
  return (
    <ul className="col-md-4 list-group">

    {VedioItems}
    </ul>
  );
}

export default VideoList;
