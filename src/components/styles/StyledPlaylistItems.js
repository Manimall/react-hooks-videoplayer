import styled from 'styled-components';

const StyledPlaylistItems = styled.div`
	padding: 0 20px;
	height: 28vw;
	max-height: 500px;
	overflow-y: hidden;
	
	::-webkit-scrollbar {
		width: 5px;
	}
	
	::-webkit-scrollbar-track {
		background: #faebd7;
	}
	
	::-webkit-scrollbar-thumb {
		background: #adff2f;
		border-radius: 2px;
	}
	
	::-webkit-scrollbar-thumb:hover {
		background: rgba(40,61,79,0.74);
	}
`;

export default StyledPlaylistItems;
