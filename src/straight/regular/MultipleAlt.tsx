import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MultipleAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,8h-1v-1c0-1.654-1.346-3-3-3h-1v-1c0-1.654-1.346-3-3-3H3C1.346,0,0,1.346,0,3v13h4v4h4v4h16v-13c0-1.654-1.346-3-3-3ZM2,14V3c0-.551.449-1,1-1h10c.551,0,1,.449,1,1v1h-7c-1.654,0-3,1.346-3,3v7h-2Zm4,4V7c0-.551.449-1,1-1h10c.551,0,1,.449,1,1v1h-7c-1.654,0-3,1.346-3,3v7h-2Zm16,4h-12v-11c0-.551.449-1,1-1h10c.551,0,1,.449,1,1v11Z"/>
</svg>

);
