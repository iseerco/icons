import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LastSquare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M17,6.5h-2v4.353L7,6.353v11.294l8-4.5v4.352h2V6.5Zm-8,7.728v-4.455l3.96,2.227-3.96,2.228ZM21,0H3C1.346,0,0,1.346,0,3V24H24V3c0-1.654-1.346-3-3-3Zm1,22H2V3c0-.551,.449-1,1-1H21c.551,0,1,.449,1,1V22Z"/>
</svg>

);
