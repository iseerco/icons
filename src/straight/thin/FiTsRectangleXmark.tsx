import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsRectangleXmark = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.5,2H2.5C1.121,2,0,3.121,0,4.5V22H24V4.5c0-1.379-1.121-2.5-2.5-2.5Zm1.5,19H1V4.5c0-.827,.673-1.5,1.5-1.5H21.5c.827,0,1.5,.673,1.5,1.5V21Zm-6.396-12.896l-3.896,3.896,3.896,3.896-.707,.707-3.896-3.896-3.896,3.896-.707-.707,3.896-3.896-3.896-3.896,.707-.707,3.896,3.896,3.896-3.896,.707,.707Z"/></svg>

);
