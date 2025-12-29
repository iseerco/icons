import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Plus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  

<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
<g>
	<path d="M490.667,234.667H277.333V21.333C277.333,9.551,267.782,0,256,0c-11.782,0-21.333,9.551-21.333,21.333v213.333H21.333   C9.551,234.667,0,244.218,0,256c0,11.782,9.551,21.333,21.333,21.333h213.333v213.333c0,11.782,9.551,21.333,21.333,21.333   c11.782,0,21.333-9.551,21.333-21.333V277.333h213.333c11.782,0,21.333-9.551,21.333-21.333   C512,244.218,502.449,234.667,490.667,234.667z"/>
</g>















</svg>

);
