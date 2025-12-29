import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MenuDotsVertical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  

<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
<g>
	<circle cx="256" cy="42.667" r="42.667"/>
	<circle cx="256" cy="256" r="42.667"/>
	<circle cx="256" cy="469.333" r="42.667"/>
</g>















</svg>

);
