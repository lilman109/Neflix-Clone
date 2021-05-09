import React from 'react';
import { Spinner, LockBody, Photo, ReleaseBody } from './styles/loading';

export const Loading = ({ src, ...restProps }) => {
	return (
		<Spinner>
			<LockBody />
			<Photo src={`/images/users/${src}.png`} />
		</Spinner>
	);
};

Loading.ReleaseBody = function LoadingReleaseBody({ children, ...restProps }) {
	return <ReleaseBody {...restProps}>{children}</ReleaseBody>;
};
