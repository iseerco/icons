import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrChartScatterBubble = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16,3c0-1.65,1.35-3,3-3s3,1.35,3,3-1.35,3-3,3-3-1.35-3-3Zm2,13c1.65,0,3-1.35,3-3s-1.35-3-3-3-3,1.35-3,3,1.35,3,3,3Zm-8.5-7c1.38,0,2.5-1.12,2.5-2.5s-1.12-2.5-2.5-2.5-2.5,1.12-2.5,2.5,1.12,2.5,2.5,2.5Zm-1,9c1.38,0,2.5-1.12,2.5-2.5s-1.12-2.5-2.5-2.5-2.5,1.12-2.5,2.5,1.12,2.5,2.5,2.5Zm14,3H5.5c-1.38,0-2.5-1.12-2.5-2.5V1.5c0-.83-.67-1.5-1.5-1.5S0,.67,0,1.5V18.5c0,3.03,2.47,5.5,5.5,5.5H22.5c.83,0,1.5-.67,1.5-1.5s-.67-1.5-1.5-1.5Z"/></svg>

);
