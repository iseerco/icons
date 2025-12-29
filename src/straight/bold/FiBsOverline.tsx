import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsOverline = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,24c-4.411,0-8-3.589-8-8v-3c0-4.411,3.589-8,8-8s8,3.589,8,8v3c0,4.411-3.589,8-8,8Zm0-16c-2.757,0-5,2.243-5,5v3c0,2.757,2.243,5,5,5s5-2.243,5-5v-3c0-2.757-2.243-5-5-5ZM22,0H2V3H22V0Z"/></svg>

);
