import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import {
	Background,
	Container,
	Logo,
	ButtonLink,
	Feature,
	Text,
	Link,
	Group,
	FeatureCallOut,
	Photo,
	Profile,
	Dropdown,
} from './styles/header';

export const Header = ({ bg = true, children, ...restProps }) => {
	return bg ? <Background {...restProps}>{children}</Background> : children;
};

Header.Feature = function HeaderFeature({ children, ...restProps }) {
	return <Feature {...restProps}>{children}</Feature>;
};

Header.FeatureCallOut = function HeaderFeatureCallOut({
	children,
	...restProps
}) {
	return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};

Header.Text = function HeaderText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
	return <Link {...restProps}>{children}</Link>;
};

Header.Frame = function HeaderFrame({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
	return <Group {...restProps}>{children}</Group>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
	return (
		<ReactRouterLink to={to}>
			<Logo {...restProps} />
		</ReactRouterLink>
	);
};

Header.ButtonLink = function HeaderButtonLink({ to, children, ...restProps }) {
	return (
		<ButtonLink to={to} {...restProps}>
			{children}
		</ButtonLink>
	);
};

Header.Photo = function HeaderPhoto({ src, ...restProps }) {
	return <Photo {...restProps} src={`/images/users/${src}.png`} />;
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
	return <Profile {...restProps}>{children}</Profile>;
};

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
	return <Dropdown {...restProps}>{children}</Dropdown>;
};
