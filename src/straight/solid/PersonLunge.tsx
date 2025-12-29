import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PersonLunge = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M11,2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm10,13.5v8h-2v-6h-6c-1.654,0-3-1.346-3-3v-5.973l-2.438,1.912,1.376,3.714-1.875,.695-1.562-4.217v-1.118l4.083-3.2c.705-.529,1.558-.813,2.417-.813h0c1.654,0,3,1.346,3,3v7h6Zm-12.228,6H3v2h7.177l1.514-4.196c-.666-.182-1.271-.496-1.795-.916l-1.123,3.112Z"/>
</svg>

);
