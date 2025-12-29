import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const JarAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m14,17H2v-5h12v5Zm3-12H7c-2.757,0-5,2.243-5,5h14v9H2v2c0,1.654,1.346,3,3,3h14c1.654,0,3-1.346,3-3v-11c0-2.757-2.243-5-5-5ZM7,3h10c.695,0,1.366.102,2,.292V0H5v3.292c.634-.189,1.305-.292,2-.292Z"/>
</svg>

);
