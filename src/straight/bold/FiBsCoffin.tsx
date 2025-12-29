import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCoffin = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m16.146,0H7.854c-1.431,0-2.718.871-3.25,2.2l-2.669,6.673,3.361,15.127h13.406l3.361-15.127-2.669-6.673c-.531-1.329-1.819-2.2-3.25-2.2Zm.151,21H7.703l-2.639-11.873,2.451-6.127h8.969l2.451,6.127-2.639,11.873Z"/></svg>

);
