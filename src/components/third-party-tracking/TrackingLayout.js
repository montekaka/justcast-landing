import React from "react";
import FacebookPixel from './FacebookPixel'

const TrackingLayout = (props) => {
	const {facebook_pixel_base_code} = props;

	return (
		<>
			<FacebookPixel code={facebook_pixel_base_code}/>
			{props.children}
		</>
	)
}

export default TrackingLayout;