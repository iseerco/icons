import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const VideoCameraAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,4.086l-4,4v-1.086c0-1.654-1.346-3-3-3H3c-1.654,0-3,1.346-3,3v13H20v-4.086l4,4V4.086Zm-6,13.914H2V7c0-.552,.449-1,1-1h14c.552,0,1,.448,1,1v11Zm4-2.914l-2-2v-2.172l2-2v6.172Z"/></svg>

);
