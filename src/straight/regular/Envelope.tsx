import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Envelope = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g id="_01_align_center" data-name="01 align center"><path d="M21,1H3A3,3,0,0,0,0,4V23H24V4A3,3,0,0,0,21,1ZM3,3H21a1,1,0,0,1,1,1v.667l-7.878,7.879a3.007,3.007,0,0,1-4.244,0L2,4.667V4A1,1,0,0,1,3,3ZM2,21V7.5L8.464,13.96a5.007,5.007,0,0,0,7.072,0L22,7.5V21Z"/></g></svg>

);
