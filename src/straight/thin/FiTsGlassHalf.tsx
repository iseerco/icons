import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsGlassHalf = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m1.209,0l1.785,21.705c.105,1.287,1.199,2.295,2.491,2.295h12.9c1.306,0,2.376-.98,2.49-2.281L22.785,0H1.209Zm20.484,1l-.879,10H3.117L2.295,1h19.398Zm-1.813,20.631c-.068.78-.711,1.369-1.494,1.369H5.485c-.775,0-1.432-.605-1.495-1.377l-.791-9.623h17.527l-.847,9.631Z"/>
</svg>

);
