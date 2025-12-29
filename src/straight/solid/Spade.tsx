import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Spade = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23,13.5C23,8.355,16.021,2.372,13.881.661a3,3,0,0,0-3.762,0C7.979,2.372,1,8.354,1,13.5A6.272,6.272,0,0,0,7,20a5.82,5.82,0,0,0,3.93-1.659C10.75,20.805,10.115,22,8,22H5v2H19V22H16c-2.115,0-2.75-1.2-2.93-3.659A5.82,5.82,0,0,0,17,20,6.272,6.272,0,0,0,23,13.5Z"/></svg>

);
