import * as React from "react";

export const GithubIcon = ({
	size = 24,
	width,
	height,
	...props
}) => {
	return (
		<svg
			height={size || height}
			viewBox="0 0 24 24"
			width={size || width}
			{...props}
		>
			<path
				clipRule="evenodd"
				d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
				fill="currentColor"
				fillRule="evenodd"
			/>
		</svg>
	);
};

export const LinkedinIcon = ({
	size = 24,
	width,
	height,
	...props
}) => {
	return (
		<svg
			height={size || height}
			viewBox="0 0 24 24"
			width={size || width}
			{...props}
		>
			<path
				clipRule="evenodd"
				d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
				fill="currentColor"
				fillRule="evenodd"
			/>
		</svg>
	);
};

export const DribbbleIcon = ({
	size = 24,
	width,
	height,
	...props
}) => {
	return (
		<svg
			height={size || height}
			viewBox="0 0 24 24"
			width={size || width}
			{...props}
		>
			<path
				clipRule="evenodd"
				d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.44 8.834l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48-1.432-1.719-2.296-3.927-2.296-6.334zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027.928 2.42 1.609 4.91 2.043 7.46-3.349 1.291-6.953.666-9.641-1.433zm11.586.43c-.438-2.353-1.08-4.653-1.92-6.897 1.876-.265 3.94-.196 6.199.196-.437 2.786-2.028 5.192-4.279 6.701z"
				fill="currentColor"
				fillRule="evenodd"
			/>
		</svg>
	);
};

export const MoonFilledIcon = ({
	size = 24,
	width,
	height,
	...props
}) => (
	<svg
		aria-hidden="true"
		focusable="false"
		height={size || height}
		role="presentation"
		viewBox="0 0 24 24"
		width={size || width}
		{...props}
	>
		<path
			d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
			fill="currentColor"
		/>
	</svg>
);

export const SunFilledIcon = ({
	size = 24,
	width,
	height,
	...props
}) => (
	<svg
		aria-hidden="true"
		focusable="false"
		height={size || height}
		role="presentation"
		viewBox="0 0 24 24"
		width={size || width}
		{...props}
	>
		<g fill="currentColor">
			<path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
			<path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
		</g>
	</svg>
);

export const HeartFilledIcon = ({
	size = 24,
	width,
	height,
	...props
}) => (
	<svg
		aria-hidden="true"
		focusable="false"
		height={size || height}
		role="presentation"
		viewBox="0 0 24 24"
		width={size || width}
		{...props}
	>
		<path
			d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
			fill="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.5}
		/>
	</svg>
);

export const SearchIcon = ({
	size = 24,
	width,
	height,
	...props
}) => (
	<svg
		aria-hidden="true"
		fill="none"
		focusable="false"
		height="1em"
		role="presentation"
		viewBox="0 0 24 24"
		width="1em"
		{...props}
	>
		<path
			d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
		<path
			d="M22 22L20 20"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
);

export const GreenfootLogo = (props) => {
	const { width, height = 24 } = props;

	return (
		<svg
			fill="none"
			height={height}
			viewBox="0 0 147 147"
			width={width}
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path fill="currentColor" opacity="1.000000" stroke="none"
				d="
				M95.144127,140.012238 
					C86.901237,139.026184 81.437431,134.177795 78.982712,127.422218 
					C76.406258,120.331642 78.862152,113.529327 84.412888,107.885628 
					C87.411766,104.836510 89.708191,101.050568 92.075989,97.436188 
					C97.203323,89.609474 89.317848,73.762291 77.131294,73.890739 
					C69.443047,73.971771 61.703468,73.017746 54.055233,72.009705 
					C45.940189,70.940132 42.751198,64.684334 41.096542,57.694435 
					C38.437138,46.460098 43.383682,40.305981 52.828537,37.629288 
					C59.032307,35.871136 65.407036,34.710365 71.595200,32.905006 
					C75.953056,31.633631 80.439529,30.259060 84.304047,27.975298 
					C89.397186,24.965477 94.558266,23.699638 99.692963,26.405832 
					C104.372925,28.872364 105.489761,33.742653 104.988174,38.848095 
					C103.229332,56.750423 108.519569,72.899193 118.438362,87.357689 
					C123.376892,94.556511 126.794151,101.986122 129.292023,110.254860 
					C132.951218,122.367996 123.178711,137.715424 110.643860,139.836639 
					C105.750908,140.664673 100.604584,139.995468 95.144127,140.012238 
				z"/>
			<path fill="currentColor" opacity="1.000000" stroke="none"
				d="
				M42.695076,38.819290 
					C34.197884,44.866692 28.692759,41.751400 24.586025,37.973801 
					C20.033531,33.786167 19.713255,24.154051 23.952911,19.005880 
					C26.668737,15.708083 30.114161,13.190586 34.534843,14.039253 
					C40.224487,15.131531 45.030842,18.062449 46.884880,23.947632 
					C48.627377,29.478748 47.559891,34.568741 42.695076,38.819290 
				z"/>
			<path fill="currentColor" opacity="1.000000" stroke="none"
				d="
				M65.299500,23.288225 
					C60.173641,26.921432 55.561558,26.791317 52.694832,23.224566 
					C49.901566,19.749222 50.444668,13.776673 53.768208,10.732621 
					C57.035156,7.740397 60.493748,8.590182 63.817356,10.366289 
					C67.202164,12.175102 68.377518,15.113390 67.119110,18.846455 
					C66.646904,20.247242 66.088379,21.618933 65.299500,23.288225 
				z"/>
			<path fill="currentColor" opacity="1.000000" stroke="none"
				d="
				M79.045990,9.016621 
					C83.543938,8.458243 85.963814,11.239145 85.614296,14.307810 
					C85.377190,16.389471 82.172401,19.032906 79.786530,19.762199 
					C76.073021,20.897314 74.655174,17.468191 74.092812,14.482484 
					C73.470367,11.177779 74.876999,8.977846 79.045990,9.016621 
				z"/>
			<path fill="currentColor" opacity="1.000000" stroke="none"
				d="
				M95.316231,21.945765 
					C91.793259,20.865400 91.195717,18.133743 91.534271,15.505958 
					C91.660210,14.528467 94.187195,12.907263 95.151749,13.187692 
					C97.210266,13.786170 98.963341,15.435262 100.841560,16.653902 
					C99.125206,18.423946 97.408859,20.193993 95.316231,21.945765 
				z"/>
		</svg>
	);
};

export const LinkedinConnect = (props) => {
	const { width, height = 16 } = props;

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 16 16"
			fill="currentColor"
			width={width}
			height={height}
		>
			<path d="M9 4a3 3 0 11-3-3 3 3 0 013 3zM6.75 8h-1.5A2.25 2.25 0 003 10.25V15h6v-4.75A2.25 2.25 0 006.75 8zM13 8V6h-1v2h-2v1h2v2h1V9h2V8z"></path>
		</svg>
	);
}
