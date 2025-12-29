import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BoxBallot = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,8V4c0-2.206-1.794-4-4-4h-6c-2.206,0-4,1.794-4,4v4c-2.757,0-5,2.243-5,5v6c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5v-6c0-2.757-2.243-5-5-5ZM7,4c0-1.103,.897-2,2-2h6c1.103,0,2,.897,2,2V12H7V4Zm-2,6v3c0,.552,.448,1,1,1h12c.553,0,1-.448,1-1v-3c1.654,0,3,1.346,3,3v4H2v-4c0-1.654,1.346-3,3-3Zm14,12H5c-1.654,0-3-1.346-3-3H22c0,1.654-1.346,3-3,3Z"/></svg>

);
