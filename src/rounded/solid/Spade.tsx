import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Spade = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23,13.5C23,8.358,16.021,2.375,13.881.664a3,3,0,0,0-3.762,0C7.979,2.375,1,8.357,1,13.5A6.272,6.272,0,0,0,7,20a5.82,5.82,0,0,0,3.93-1.658C10.75,20.808,10.115,22,8,22H6a1,1,0,0,0,0,2H18a1,1,0,0,0,0-2H16c-2.115,0-2.75-1.194-2.93-3.658A5.82,5.82,0,0,0,17,20,6.272,6.272,0,0,0,23,13.5Z"/></svg>

);
