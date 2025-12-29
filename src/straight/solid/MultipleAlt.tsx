import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MultipleAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,24H8v-13c0-1.654,1.346-3,3-3h10c1.654,0,3,1.346,3,3v13Zm-7-20H7c-1.654,0-3,1.346-3,3v13h2V7c0-.551.449-1,1-1h12.816c-.414-1.161-1.514-2-2.816-2ZM13,0H3C1.346,0,0,1.346,0,3v13h2V3c0-.551.449-1,1-1h12.816c-.414-1.161-1.514-2-2.816-2Z"/>
</svg>

);
