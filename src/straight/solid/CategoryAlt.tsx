import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CategoryAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m9,9h-3v-3h3v3Zm0,6h-3v3h3v-3Zm9,0h-3v3h3v-3Zm6-12v21H0V3C0,1.346,1.346,0,3,0h18c1.654,0,3,1.346,3,3Zm-13,10h-7v7h7v-7Zm0-9h-7v7h7v-7Zm9,9h-7v7h7v-7Zm0-9h-7v7h7v-7Zm-2,2h-3v3h3v-3Z"/>
</svg>

);
