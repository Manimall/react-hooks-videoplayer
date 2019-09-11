import styled from 'styled-components';

const StyledPlayer = styled.section`
	background: ${props => props.theme.bgcolor};
	border: ${props => props.theme.border};
	max-width: 1800px;
	max-height: 865px;
	display: flex;
	margin: 0 auto;
	
	transition: all 0.5s ease-in-out;
	
	
	@media(max-width: 1400px) {
		display: block;
		max-height: unset;
	}
`;

export default StyledPlayer;
