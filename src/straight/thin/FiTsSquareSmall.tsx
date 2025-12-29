import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSquareSmall = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,19H5V7.5c0-1.38,1.12-2.5,2.5-2.5h9c1.38,0,2.5,1.12,2.5,2.5v11.5Zm-13-1h12V7.5c0-.83-.67-1.5-1.5-1.5H7.5c-.83,0-1.5,.67-1.5,1.5v10.5Z"/></svg>

);
