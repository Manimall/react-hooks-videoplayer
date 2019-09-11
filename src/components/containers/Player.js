import React, { useState, useEffect } from 'react';
import Video from '../Video';
import Playlist	from '../containers/Playlist';
import { ThemeProvider } from 'styled-components';
import StyledPlayer from "../styles/StyledPlayer";

// Define our `fg` and `bg` on the theme
// const lightTheme = {
// 	fg: `rgba(219, 112, 147, 1)`, // "palevioletred",
// 	bg: `rgba(255, 255, 255, 1)`, // "white",
// 	bgItemActive: `rgba(64, 92, 99, 1)`, // "marengo"
// 	fgItemActive: `rgba(255, 228, 181, 1)` // "Moccasin"
// };
//
// // This theme swaps `fg` and `bg`
// const invertedTheme = ({ bg, fg, bgItemActive, fgItemActive }) => ({
// 	bg: fg,
// 	fg: bg,
// 	bgItemActive: (() => `${bgItemActive}; filter: invert(1);`)(),
// 	fgItemActive: (() => `${fgItemActive}; filter: invert(1);`)(),
// });
//
// console.log(invertedTheme(lightTheme));

const theme = {
	bgcolor: "#353535",
	bgcolorItem: "#414141",
	bgcolorItemActive: "#405c63",
	bgcolorPlayed: "#526d4e",
	border: "none",
	borderPlayed: "none",
	color : "#fff",
};

const themeLight = {
	bgcolor: "#fff",
	bgcolorItem: "#fff",
	bgcolorItemActive: "#80a7b1",
	bgcolorPlayed: "#7d9979",
	border: "1px solid #353535",
	borderPlayed: "none",
	color : "#353535",
};

const Player = (props) => {

	const videos = JSON.parse(document.querySelector(`input[name="videos"]`).value);
	const savedState = JSON.parse(localStorage.getItem(`${videos.playlistId}`));

	console.log(props);
	const { match: { params }, location, history } = props;

	// noinspection JSUnresolvedVariable
	const initialState = {
		videos: savedState.videos || videos.playlist,
		activeVideo: savedState.activeVideo || videos.playlist[0],
		nightMode: savedState.nightMode || false,
		playlistId: savedState.playlistId || videos.playlistId,
		autoplay: false,
	};

	console.log(initialState);

	const [state, setState] = useState(initialState);

	useEffect(() => {
		localStorage.setItem(`${state.playlistId}`, JSON.stringify({ ...state }));
	}, [state]);

	useEffect(() => {
		const activeVideoId = params.activeVideo;
		if (activeVideoId) {
			const newActiveVideoId = state.videos.findIndex(video => video.id === activeVideoId);
			setState(prevState => ({
				...prevState,
				activeVideo: prevState.videos[newActiveVideoId],
				autoplay: location.autoplay,
			}));
		} else {
			history.push({
				pathname: `/${state.activeVideo.id}`,
				autoplay: false,
			})
		}
	}, [history, location.autoplay, params.activeVideo, state.activeVideo.id, state.videos]);


	const nightModeCallback = () => {
		setState(prevState => ({
			...prevState,
			nightMode: !state.nightMode,
		}));
	};

	const endCallback = () => {
		const videoId = params.activeVideo;
		console.log(videoId);

		const currentVideoIndex = state.videos.findIndex(video => video.id === videoId);

		const nextVideo = currentVideoIndex === state.videos.length - 1 ?
			currentVideoIndex :
			currentVideoIndex + 1;

		history.push({
			pathname: `${state.videos[nextVideo].id}`,
			autoplay: false,
		});
	};

	const progressCallback = (e) => {
		if (e.playedSeconds > 10 && e.playedSeconds < 11) {
			// setState(prevState => ({
			// 	...prevState,
			// 	videos: state.videos.map(item => {
			// 		return item.id === state.activeVideo.id ?
			// 			{ ...item, played: true } :
			// 			item;
			// 	})
			// }));

			const videosCopy = [...state.videos];
			const playedVideo = videosCopy.find(element => element.id === state.activeVideo.id);
			playedVideo.played = true;
			setState(prevState => ({
				...prevState,
				videosCopy,
			}));
		}
	};

	return (
		<ThemeProvider theme={state.nightMode ? theme : themeLight} >
			{state.videos !== null ? (
				<StyledPlayer>
					<Video
						activeVideo={state.activeVideo}
						autoplay={state.autoplay}
						endCallback={endCallback}
						progressCallback={progressCallback}
					/>
					<Playlist
						videos={state.videos}
						activeVideo={state.activeVideo}
						nightMode={state.nightMode}
						nightModeCallback={nightModeCallback}
					/>
				</StyledPlayer>
			) : null}

		</ThemeProvider>
	)
};

export default Player;
