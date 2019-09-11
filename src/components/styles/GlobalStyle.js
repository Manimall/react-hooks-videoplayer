import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	*,
	*::after,
	*::before {
		box-sizing: border-box;
	}	
	
	body {
		// margin: 0;
		font: 14px/24px 'Hind', 'Arial', sans-serif;
	}
`;

export default GlobalStyle;
