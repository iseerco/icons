import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Inboxes = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,24H5c-2.76,0-5-2.24-5-5v-3c0-1.65,1.35-3,3-3h3c1.1,0,2,.9,2,2s.9,2,2,2h4c1.1,0,2-.9,2-2s.9-2,2-2h3c1.65,0,3,1.35,3,3v3c0,2.76-2.24,5-5,5Zm0-13H5C2.24,11,0,8.76,0,6V3C0,1.35,1.35,0,3,0h3c1.1,0,2,.9,2,2s.9,2,2,2h4c1.1,0,2-.9,2-2s.9-2,2-2h3c1.65,0,3,1.35,3,3v3c0,2.76-2.24,5-5,5Z"/></svg>

);
