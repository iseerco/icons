import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CategoryAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,0H3C1.346,0,0,1.346,0,3v21h24V3c0-1.654-1.346-3-3-3Zm1,22H2V3c0-.551.448-1,1-1h18c.552,0,1,.449,1,1v19ZM4,11h7v-7h-7v7Zm2-5h3v3h-3v-3Zm7,5h7v-7h-7v7Zm2-5h3v3h-3v-3Zm-11,14h7v-7h-7v7Zm2-5h3v3h-3v-3Zm7,5h7v-7h-7v7Zm2-5h3v3h-3v-3Z"/>
</svg>

);
