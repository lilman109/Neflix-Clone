import React from 'react';
import { Container, Title, List, Item, Photo, Name } from './styles/profiles';

export const Profiles = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

Profiles.Title = function ProfileTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Profiles.List = function ProfileList({ children, ...restProps }) {
	return <List {...restProps}>{children}</List>;
};

Profiles.User = function ProfileUser({ children, ...restProps }) {
	return <Item {...restProps}>{children}</Item>;
};

Profiles.Photo = function ProfilePhoto({ src, ...restProps }) {
	return (
		<Photo
			{...restProps}
			src={src ? `/images/users/${src}.png` : '/images/misc/loading.gif'}
		/>
	);
};

Profiles.Name = function ProfileName({ children, ...restProps }) {
	return <Name {...restProps}>{children}</Name>;
};
