import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TachometerAverage = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14,13a2,2,0,1,1-3-1.732V6a1,1,0,0,1,2,0v5.268A2,2,0,0,1,14,13Zm6-8.948A12,12,0,0,0,3.555,21.516a3.016,3.016,0,0,0,4.073.129l1.026-.888a1,1,0,0,0-1.308-1.514l-1.027.889a1,1,0,0,1-1.357-.038,10,10,0,1,1,14.114-.037,1.018,1.018,0,0,1-1.395.074l-1.027-.888a1,1,0,0,0-1.308,1.514l1.027.887a3.034,3.034,0,0,0,4.118-.174A12.057,12.057,0,0,0,20,4.052Z"/></svg>

);
