import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrFolder = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  

<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
<g>
	<path d="M394.667,64H266.496c-1.723-0.008-3.419-0.425-4.949-1.216L198.72,29.867c-10.698-5.6-22.592-8.528-34.667-8.533h-46.72   C52.561,21.404,0.071,73.895,0,138.667v234.667c0.071,64.772,52.561,117.263,117.333,117.333h277.333   c64.772-0.071,117.263-52.561,117.333-117.333v-192C511.929,116.561,459.439,64.071,394.667,64z M448,373.333   c0,29.455-23.878,53.333-53.333,53.333H117.333C87.878,426.667,64,402.789,64,373.333V169.963h382.72   c0.839,3.732,1.268,7.545,1.28,11.371V373.333z"/>
</g>















</svg>

);
