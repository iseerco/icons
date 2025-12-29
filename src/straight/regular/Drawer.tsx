import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Drawer = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19,0H5c-1.654,0-3,1.346-3,3v21h2v-4h16v4h2V3c0-1.654-1.346-3-3-3ZM5,2h6v2h2v-2h6c.551,0,1,.449,1,1v3H4v-3c0-.551.449-1,1-1Zm-1,10v-4h7v2h2v-2h7v4H4Zm0,6v-4h7v2h2v-2h7v4H4Z"/>
</svg>

);
