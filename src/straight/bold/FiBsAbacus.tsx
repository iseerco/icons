import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsAbacus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M18.5,0H5.5c-1.93,0-3.5,1.57-3.5,3.5V24H22V3.5c0-1.93-1.57-3.5-3.5-3.5ZM5.5,3h13c.276,0,.5,.224,.5,.5v2.5h-5v-1h-3v1h-1v-1h-3v1h-2V3.5c0-.276,.224-.5,.5-.5Zm5.5,12v1h-1v-1h-3v1h-2v-3H15v1h3v-1h1v3h-5v-1h-3Zm7-4v-1h-3v1H5v-3h2v1h3v-1h1v1h3v-1h5v3h-1ZM5,21v-3h2v1h3v-1h1v1h3v-1h5v3H5Z"/>
</svg>

);
