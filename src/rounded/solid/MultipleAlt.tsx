import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MultipleAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19,24h-6c-2.757,0-5-2.243-5-5v-6c0-2.757,2.243-5,5-5h6c2.757,0,5,2.243,5,5v6c0,2.757-2.243,5-5,5Zm-13-6v-9c0-1.654,1.346-3,3-3h9c.552,0,1-.448,1-1s-.448-1-1-1h-9c-2.757,0-5,2.243-5,5v9c0,.552.448,1,1,1s1-.448,1-1Zm-4-4V5c0-1.654,1.346-3,3-3h9c.552,0,1-.448,1-1s-.448-1-1-1H5C2.243,0,0,2.243,0,5v9c0,.552.448,1,1,1s1-.448,1-1Z"/>
</svg>

);
