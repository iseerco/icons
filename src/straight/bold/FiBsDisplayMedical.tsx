import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDisplayMedical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,18V4c0-1.654-1.346-3-3-3H3C1.346,1,0,2.346,0,4v14h10.5v2h-4v3h11v-3h-4v-2h10.5ZM3,4h18v11H3V4Zm10.5,4h2.5v3h-2.5v2.5h-3v-2.5h-2.5v-3h2.5v-2.5h3v2.5Z"/>
</svg>

);
