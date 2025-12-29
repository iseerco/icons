import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TrainStation = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m2,18h5v2h-1v4H0V0h13v4H5v-2h-3v16ZM20.5,6h-8c-1.93,0-3.5,1.57-3.5,3.5v3.5h6.5v-5h2v5h6.5v-3.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,9h3v5h-2.5v2h2.5v2h-15v-2h2v-2h-2v-5h3v2h2v-2h5v2h2v-2Zm-1.5,5h-6.5v2h6.5v-2Z"/>
</svg>

);
