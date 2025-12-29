import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DisplayMedical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,19V6c0-1.654-1.346-3-3-3H3c-1.654,0-3,1.346-3,3v13h11v1h-4v2h10v-2h-4v-1h11Zm-13-4v-3h-3v-2h3v-3h2v3h3v2h-3v3h-2Z"/>
</svg>

);
