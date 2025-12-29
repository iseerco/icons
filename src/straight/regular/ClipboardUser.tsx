import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ClipboardUser = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m15.829,2c-.413-1.164-1.525-2-2.829-2h-2c-1.304,0-2.416.836-2.829,2H3v19c0,1.654,1.346,3,3,3h12c1.654,0,3-1.346,3-3V2h-5.171Zm3.171,19c0,.551-.449,1-1,1H6c-.551,0-1-.449-1-1V4h5v-1c0-.551.449-1,1-1h2c.551,0,1,.449,1,1v1h5v17Zm-5-7c1.654,0,3,1.346,3,3v2h-2v-2c0-.551-.449-1-1-1h-4c-.551,0-1,.449-1,1v2h-2v-2c0-1.654,1.346-3,3-3h4Zm-4.5-3.5c0,1.379,1.121,2.5,2.5,2.5s2.5-1.121,2.5-2.5-1.121-2.5-2.5-2.5-2.5,1.121-2.5,2.5Z"/></svg>

);
