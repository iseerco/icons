import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ObjectsColumn = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m0,3v6h11V0H3C1.346,0,0,1.346,0,3Zm13,21h8c1.654,0,3-1.346,3-3v-6h-11v9ZM21,0h-8v13h11V3c0-1.654-1.346-3-3-3ZM0,21c0,1.654,1.346,3,3,3h8v-13H0v10Z"/>
</svg>

);
