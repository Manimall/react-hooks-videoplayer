import React from 'react';
import ReactPlayer from 'react-player';
import StyledVideo from "./styles/StyledVideo";
import StyledVideoWrapper from "./styles/StyledVideoWrapper";

const Video = props => {
	const { autoplay, activeVideo, endCallback, progressCallback } = props;
	// console.log(props);
	return (
		<StyledVideo>
			<StyledVideoWrapper>
				<ReactPlayer
					width={'100%'}
					height={'100%'}
					style={{ position: `absolute`, top: `0` }}
					playing={autoplay}
					controls={true}
					url={activeVideo.link}
					onEnded={endCallback}
					onProgress={progressCallback}
				/>
			</StyledVideoWrapper>
		</StyledVideo>
	)
};

export default Video;