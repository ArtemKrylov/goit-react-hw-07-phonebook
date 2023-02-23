import { createGlobalStyle } from 'styled-components';
import 'modern-normalize/modern-normalize.css';

export const GlobalStyle = createGlobalStyle`

  @font-face {
	font-family: 'Dancing Script', cursive;
	src: url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
 }

  body {
		margin: 0;
		max-width: 100vw;
		min-height: 100vh;
		font-family: 'Dancing Script', cursive;
		font-size: 14px;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
}

	.visually-hidden {
		position: absolute;
		width: 1px;
		height: 1px;
		margin: -1px;
		padding: 0;
		overflow: hidden;
		border: 0;
		clip: rect(0 0 0 0);
	}


	.app {
		width: 100vw;
		max-width: 100vw;
		min-height: 100vh;
		background-color: #21D4FD;
		background-image: linear-gradient(-19deg, #B721FF 0%, #21D4FD 80%);


	}

	code {
		font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
			monospace;
	}

	h1, h2, h3, h4, h5, h6, p {
		margin-top: 0;
		margin-bottom: 0;
	}

	ul, ol {
		margin-top: 0;
		margin-bottom: 0;
		padding-left: 0;
	}

	img {
		display: block;
		overflow: hidden;
	} 

	li {
		list-style: none;
	}

	a {
		text-decoration: none;
	}

	button {
		cursor: pointer;
	}

`;
