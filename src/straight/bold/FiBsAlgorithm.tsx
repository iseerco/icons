import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsAlgorithm = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,8.5c1.657,0,3,1.343,3,3s-1.343,3-3,3-3-1.343-3-3,1.343-3,3-3Zm7,6.5v3H5.235c-.074-.083-.153-.161-.235-.235V5.235c.083-.074.161-.153.235-.235h13.529c.549.614,1.347,1,2.235,1,1.657,0,3-1.343,3-3s-1.343-3-3-3c-1.306,0-2.417.835-2.829,2H5.829c-.412-1.165-1.523-2-2.829-2C1.343,0,0,1.343,0,3c0,1.306.835,2.417,2,2.829v11.343c-1.165.412-2,1.523-2,2.829,0,1.657,1.343,3,3,3,1.306,0,2.417-.835,2.829-2h13.171v3l4.207-3.793c.39-.39.39-1.024,0-1.414l-4.207-3.793Z"/>
</svg>

);
