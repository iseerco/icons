import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrMoonStars = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,24A12,12,0,1,1,16.058.71a2.931,2.931,0,0,1,.815,5.068c-5.106,3.917-5.089,8.54,0,12.444a2.931,2.931,0,0,1-.816,5.068A12.229,12.229,0,0,1,12,24ZM12,3a9,9,0,1,0,2.925,17.508c-6.511-5.065-6.49-11.968,0-17.016A9.322,9.322,0,0,0,12,3Zm4.863,9.145,1.55.442.442,1.55a1.191,1.191,0,0,0,2.29,0l.442-1.55,1.55-.442a1.191,1.191,0,0,0,0-2.29l-1.55-.442-.442-1.55a1.191,1.191,0,0,0-2.29,0l-.442,1.55-1.55.442A1.191,1.191,0,0,0,16.863,12.145ZM21,18.5a1.5,1.5,0,0,0,3,0A1.5,1.5,0,0,0,21,18.5Z"/></svg>

);
