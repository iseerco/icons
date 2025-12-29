import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Subfolder = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M24,23H7V12c0-1.654,1.346-3,3-3h3.236l4,2h3.764c1.654,0,3,1.346,3,3v9ZM5,12c0-2.757,2.243-5,5-5h3.708l4,2h3.292c1.13,0,2.162,.391,3,1.026V6c0-1.654-1.346-3-3-3H12.236L8.236,1H3C1.346,1,0,2.346,0,4V23H5V12Z"/>
</svg>

);
