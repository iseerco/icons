import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChartLineUpDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,4v5h-2v-3.586l-7,7-4-4-5.293,5.293-1.414-1.414,6.707-6.707,4,4,5.586-5.586h-3.586v-2h5c1.103,0,2,.897,2,2ZM2,21V0H0v21c0,1.654,1.346,3,3,3h21v-2H3c-.552,0-1-.448-1-1Zm20-5.414l-3.793-3.793-1.414,1.414,3.793,3.793h-3.586v2h5c1.103,0,2-.897,2-2v-5h-2v3.586Z"/>
</svg>

);
