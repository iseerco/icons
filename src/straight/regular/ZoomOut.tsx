import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ZoomOut = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  

<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
<g id="_01_align_center">
	<path d="M511.89,481.79l-133.3-133.3c74.537-91.16,61.06-225.485-30.1-300.021s-225.485-61.06-300.021,30.1   s-61.06,225.485,30.1,300.021c78.521,64.202,191.401,64.202,269.921,0l133.3,133.3L511.89,481.79z M213.87,384.167   c-94.053,0-170.297-76.245-170.297-170.297S119.817,43.573,213.87,43.573s170.297,76.245,170.297,170.297   C384.062,307.879,307.879,384.062,213.87,384.167z"/>
	<rect x="128.721" y="192.583" width="170.297" height="42.574"/>
</g>
</svg>

);
