import React from 'react';
import PlaylistItem from '../PlaylistItem';
import StyledPlaylistItems from "../styles/StyledPlaylistItems";
import withLink from "../hoc/withLink";

const PlayListItemWithLink = withLink(PlaylistItem);

const PlayListItems = ({ videos, activeVideo }) => (
	<StyledPlaylistItems>
		{videos.map((video) => (
			<PlayListItemWithLink
				key={video.id}
				video={video}
				activeVideo={activeVideo.id === video.id}
				played={video.played}
			/>
		))}
	</StyledPlaylistItems>
);

export default PlayListItems;
