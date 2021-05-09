import styled, { createGlobalStyle } from 'styled-components/macro';

export const Spinner = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	background-color: black;
	z-index: 999;
`;

export const LockBody = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

export const ReleaseBody = createGlobalStyle`
  body {
    overflow: visible;
  }
`;

export const Photo = styled.img``;
