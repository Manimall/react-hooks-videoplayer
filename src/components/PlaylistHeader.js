import React from 'react';
import StyledPlaylistHeader from "./styles/StyledPlaylistHeader";
import StyledJourney from "./styles/StyledJourney";

const PlayListHeader = ({ activeVideo, total }) => (
	<StyledPlaylistHeader>
		<p>{activeVideo.title}</p>

		<StyledJourney>
			{activeVideo.num} / {total}
		</StyledJourney>
	</StyledPlaylistHeader>
);

export default PlayListHeader;
