import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ZoomIn = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  

<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
<g id="_01_align_center">
	<path d="M512,481.894L378.671,348.565c74.553-91.18,61.074-225.533-30.106-300.086S123.032-12.595,48.479,78.586   s-61.074,225.533,30.106,300.086c78.538,64.216,191.442,64.216,269.979,0L481.894,512L512,481.894z M213.916,384.25   c-94.073,0-170.334-76.261-170.334-170.334S119.843,43.582,213.916,43.582S384.25,119.843,384.25,213.916   C384.144,307.945,307.945,384.144,213.916,384.25z"/>
	<polygon points="235.208,128.749 192.624,128.749 192.624,192.624 128.749,192.624 128.749,235.208 192.624,235.208    192.624,299.083 235.208,299.083 235.208,235.208 299.083,235.208 299.083,192.624 235.208,192.624  "/>
</g>
</svg>

);
