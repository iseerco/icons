import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Highlighter = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10.648,22H3.414l-1.707,1.707-1.414-1.414,1.707-1.707v-7.234l8.648,8.648ZM23.121,3.539l-2.66-2.66c-1.123-1.123-2.929-1.175-4.115-.12L3.494,12.017l8.508,8.508L23.238,7.658c1.059-1.186,1.007-2.996-.117-4.12Z"/></svg>

);
