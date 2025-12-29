import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TruckSide = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15,18H4a4,4,0,0,1-4-4V6A5,5,0,0,1,5,1h5a5,5,0,0,1,5,5Zm9-7V10a5,5,0,0,0-5-5H17v6Zm-7,2v5h3a4,4,0,0,0,4-4V13ZM4.058,20A2.424,2.424,0,0,0,4,20.5a2.5,2.5,0,0,0,5,0,2.424,2.424,0,0,0-.058-.5Zm11,0a2.424,2.424,0,0,0-.058.5,2.5,2.5,0,0,0,5,0,2.424,2.424,0,0,0-.058-.5Z"/></svg>

);
