import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ClipboardUser = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21,2v19c0,1.654-1.346,3-3,3H6c-1.654,0-3-1.346-3-3V2h5.171c.413-1.164,1.525-2,2.829-2h2c1.304,0,2.416.836,2.829,2h5.171Zm-11.5,8.5c0,1.379,1.121,2.5,2.5,2.5s2.5-1.121,2.5-2.5-1.121-2.5-2.5-2.5-2.5,1.121-2.5,2.5Zm7.5,6.5c0-1.654-1.346-3-3-3h-4c-1.654,0-3,1.346-3,3v2h2v-2c0-.551.449-1,1-1h4c.551,0,1,.449,1,1v2h2v-2Z"/></svg>

);
