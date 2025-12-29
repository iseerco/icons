import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowDownFromArc = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m17.796,16.29l1.408,1.42-5.721,5.677c-.408.408-.945.612-1.482.612s-1.077-.205-1.487-.615l-5.718-5.674,1.408-1.42,4.796,4.759V7h2v14.049l4.796-4.759ZM12,0C5.383,0,0,5.383,0,12h2C2,6.486,6.486,2,12,2s10,4.486,10,10h2C24,5.383,18.617,0,12,0Z"/>
</svg>

);
