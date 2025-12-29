import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowUpToArc = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m13.501,7.616l5.71,5.667-1.408,1.42-4.789-4.752v14.049h-2v-14.049l-4.802,4.765-1.409-1.42,5.728-5.684c.787-.789,2.176-.793,2.971.003Zm-1.501-7.616C5.383,0,0,5.383,0,12h2C2,6.486,6.486,2,12,2s10,4.486,10,10h2C24,5.383,18.617,0,12,0Z"/>
</svg>

);
