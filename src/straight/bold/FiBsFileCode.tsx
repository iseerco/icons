import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFileCode = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M11.218,13.561l-2.006,2.006,1.849,1.849-2.121,2.121-2.21-2.21c-.47-.47-.729-1.095-.729-1.759s.259-1.29,.729-1.76l2.368-2.368,2.121,2.121Zm3.685-2.121l-2.121,2.121,2.006,2.006-1.872,1.873,2.121,2.121,2.234-2.234c.47-.47,.729-1.095,.729-1.759s-.259-1.29-.729-1.76l-2.368-2.368Zm7.097-5.775V24H2V3C2,1.346,3.346,0,5,0h11.381l5.619,5.665Zm-3,15.335V8h-5V3H5V21h14Z"/></svg>

);
