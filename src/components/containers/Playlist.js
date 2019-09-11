import React from 'react';
import PlayListHeader from '../PlaylistHeader';
import PlayListItems from '../containers/PlaylistItems';
import NightMode from '../Nightmode';
import StyledPlaylist from "../styles/StyledPlaylist";

const PlayList = (props) => {
	const { videos, activeVideo, nightMode, nightModeCallback } = props;
	return (
		<StyledPlaylist>
			<NightMode nightModeCallback={nightModeCallback} nightMode={nightMode} />
			<PlayListHeader activeVideo={activeVideo} total={videos.length} />
			<PlayListItems videos={videos} activeVideo={activeVideo} />
		</StyledPlaylist>
	)
};

export default PlayList;
