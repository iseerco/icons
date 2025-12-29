import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsAd = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.5,2H2.5C1.122,2,0,3.122,0,4.5V22H24V4.5c0-1.378-1.122-2.5-2.5-2.5Zm1.5,19H1V4.5c0-.827,.673-1.5,1.5-1.5H21.5c.827,0,1.5,.673,1.5,1.5V21Zm-4-8.947c-.636-.65-1.522-1.053-2.5-1.053-1.93,0-3.5,1.57-3.5,3.5s1.57,3.5,3.5,3.5c.978,0,1.864-.404,2.5-1.053v1.053h1V6h-1v6.053Zm-2.5,4.947c-1.378,0-2.5-1.122-2.5-2.5s1.122-2.5,2.5-2.5,2.5,1.122,2.5,2.5-1.122,2.5-2.5,2.5Zm-13,1h1.062l1.083-3h4.753l1.102,3h1.062L8,5.5,3.5,18Zm2.505-4l1.995-5.526,2.03,5.526H6.005Z"/></svg>

);
