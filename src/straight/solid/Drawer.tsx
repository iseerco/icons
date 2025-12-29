import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Drawer = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m13,16h9v8h-2v-2H4v2h-2v-8h9v2h2v-2ZM19,0h-6v2h-2V0h-6c-1.654,0-3,1.346-3,3v3h20v-3c0-1.654-1.346-3-3-3Zm-6,10h-2v-2H2v6h20v-6h-9v2Z"/>
</svg>

);
