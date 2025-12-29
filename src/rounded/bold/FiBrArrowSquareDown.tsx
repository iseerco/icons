import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrArrowSquareDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g><path d="M18.5,0H5.5A5.506,5.506,0,0,0,0,5.5v13A5.506,5.506,0,0,0,5.5,24h13A5.506,5.506,0,0,0,24,18.5V5.5A5.506,5.506,0,0,0,18.5,0ZM21,18.5A2.5,2.5,0,0,1,18.5,21H5.5A2.5,2.5,0,0,1,3,18.5V5.5A2.5,2.5,0,0,1,5.5,3h13A2.5,2.5,0,0,1,21,5.5Z"/><path d="M15.449,12.815,13.5,14.731V6.5a1.5,1.5,0,0,0-3,0v8.231L8.551,12.815a1.5,1.5,0,1,0-2.1,2.14L9.55,18a3.524,3.524,0,0,0,4.9,0l3.1-3.048a1.5,1.5,0,1,0-2.1-2.14Z"/></g></svg>

);
