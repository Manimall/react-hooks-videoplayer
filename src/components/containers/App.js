import React from 'react';
import Player from './Player';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import GlobalStyle from '../styles/GlobalStyle';

const App = () => (
	<BrowserRouter basename={'/react_videoPlayer/'} >
		<>
			<Switch>
				<Route path={'/'} exact component={Player} />
				<Route path={'/:activeVideo'} exact component={Player} /> { /* the same view but different video */ }
				<Redirect to={'/'} />
			</Switch>
			<GlobalStyle />
		</>
	</BrowserRouter>
);

export default App;