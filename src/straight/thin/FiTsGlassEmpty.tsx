import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsGlassEmpty = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m1.208,0l1.785,21.705c.105,1.287,1.2,2.295,2.492,2.295h12.9c1.306,0,2.377-.98,2.491-2.281L22.784,0H1.208Zm18.672,21.631c-.068.78-.711,1.369-1.495,1.369H5.485c-.775,0-1.432-.605-1.495-1.377L2.294,1h19.398l-1.812,20.631Z"/>
</svg>

);
