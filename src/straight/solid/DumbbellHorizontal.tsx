import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DumbbellHorizontal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M24,11h-2V6c0-1.654-1.346-3-3-3h-3V11H8V3h-3c-1.654,0-3,1.346-3,3v5H0v2H2v5c0,1.654,1.346,3,3,3h3V13h8v8h3c1.654,0,3-1.346,3-3v-5h2v-2Z"/>
</svg>

);
