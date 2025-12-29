import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const JarAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m14,17H2v-5h12v5Zm3-12H7c-2.757,0-5,2.243-5,5h12c1.105,0,2,.895,2,2v5c0,1.105-.895,2-2,2H2c0,2.761,2.239,5,5,5h10c2.761,0,5-2.239,5-5v-9c0-2.761-2.239-5-5-5ZM7,3h10c.695,0,1.366.102,2,.292v-.792c0-1.381-1.119-2.5-2.5-2.5H7.5c-1.381,0-2.5,1.119-2.5,2.5v.792c.634-.189,1.305-.292,2-.292Z"/>
</svg>

);
