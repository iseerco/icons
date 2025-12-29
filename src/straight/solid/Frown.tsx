import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Frown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0ZM6,10a2,2,0,0,1,4,0v1H6Zm11,8H7c0-2,2.028-5,5.007-5A5.307,5.307,0,0,1,17,18Zm-3-7V10a2,2,0,0,1,4,0v1Z"/></svg>

);
