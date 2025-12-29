import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrChessRook = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,7.5v-4A3.5,3.5,0,0,0,20.5,0h-3a3.475,3.475,0,0,0-2,.629A3.475,3.475,0,0,0,13.5,0h-3a3.475,3.475,0,0,0-2,.629A3.475,3.475,0,0,0,6.5,0h-3A3.5,3.5,0,0,0,0,3.5v4a4.508,4.508,0,0,0,3,4.243V21H2.5a1.5,1.5,0,0,0,0,3h19a1.5,1.5,0,0,0,0-3H21V11.743A4.508,4.508,0,0,0,24,7.5ZM6,21V10.5A1.5,1.5,0,0,0,4.5,9,1.5,1.5,0,0,1,3,7.5v-4A.5.5,0,0,1,3.5,3h3a.5.5,0,0,1,.5.5v2a1.5,1.5,0,0,0,3,0v-2a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v2a1.5,1.5,0,0,0,3,0v-2a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v4A1.5,1.5,0,0,1,19.5,9,1.5,1.5,0,0,0,18,10.5V21Zm9-8v2.5A1.5,1.5,0,0,1,13.5,17h-3A1.5,1.5,0,0,1,9,15.5V13a3,3,0,0,1,6,0Z"/></svg>

);
