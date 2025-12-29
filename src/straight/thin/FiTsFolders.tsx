import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsFolders = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.5,3h-6.382L11.118,1H5.5c-1.378,0-2.5,1.121-2.5,2.5V20H24V5.5c0-1.379-1.121-2.5-2.5-2.5ZM5.5,2h5.382l4,2h6.618c.827,0,1.5,.673,1.5,1.5v1.5H4V3.5c0-.827,.673-1.5,1.5-1.5Zm-1.5,17V8H23v11H4Zm-3,3H20v1H0V8c0-.885,.387-1.676,1-2.222V22Z"/></svg>

);
