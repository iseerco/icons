import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Grin = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0A12.013,12.013,0,0,0,0,12c.6,15.9,23.4,15.893,24,0A12.013,12.013,0,0,0,12,0Zm3.5,8a1.5,1.5,0,0,1,0,3A1.5,1.5,0,0,1,15.5,8Zm-7,0a1.5,1.5,0,0,1,0,3A1.5,1.5,0,0,1,8.5,8ZM12,19c-3.336,0-5.392-2.72-6.007-5a21.841,21.841,0,0,0,6,1A21.923,21.923,0,0,0,18,14C17.385,16.28,15.336,19,12,19Z"/></svg>

);
