import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsNoIron = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M15.051,20l3,3H0v-2.5c0-3.047,1.366-7.731,5.912-9.638l2.374,2.374c-4.448,1.019-5.166,5.096-5.27,6.764H15.051ZM24,7.5v14.301l-2.16,2.16L.039,2.16,2.16,.039,12.121,10h8.879v-2.5c0-1.93-1.57-3.5-3.5-3.5H8V1h9.5c3.584,0,6.5,2.916,6.5,6.5Zm-3,5.5h-5.879l5.879,5.879v-5.879Z"/>
</svg>

);
