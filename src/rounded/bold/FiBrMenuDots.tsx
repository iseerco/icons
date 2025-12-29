import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrMenuDots = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  

<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
<g>
	<circle cx="458.667" cy="256" r="53.333"/>
	<circle cx="256" cy="256" r="53.333"/>
	<circle cx="53.333" cy="256" r="53.333"/>
</g>















</svg>

);
