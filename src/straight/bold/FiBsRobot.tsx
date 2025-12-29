import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsRobot = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,10h-2v-2.5c0-1.93-1.57-3.5-3.5-3.5h-5V1h-3v3h-5c-1.93,0-3.5,1.57-3.5,3.5v2.5H0v6h2v6h20v-6h2v-6Zm-5,9H5V7.5c0-.275.224-.5.5-.5h13c.275,0,.5.225.5.5v11.5Zm-9-8.5c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Zm7,0c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Zm-10,3.5h2v3h-2v-3Zm4,0h2v3h-2v-3Zm4,0h2v3h-2v-3Z"/>
</svg>

);
