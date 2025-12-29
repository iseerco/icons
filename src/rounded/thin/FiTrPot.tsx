import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrPot = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.5,4H12.5V1h3c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5h-7c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h3v3H.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h1.5v14.5c0,2.481,2.019,4.5,4.5,4.5h11c2.481,0,4.5-2.019,4.5-4.5V5h1.5c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5Zm-2.5,15.5c0,1.93-1.57,3.5-3.5,3.5H6.5c-1.93,0-3.5-1.57-3.5-3.5V5H21v14.5Z"/></svg>

);
