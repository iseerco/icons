import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrChevronDoubleUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g><path d="M0,11.96A1.492,1.492,0,0,1,.439,10.9L8.111,3.224a5.5,5.5,0,0,1,7.778,0L23.561,10.9a1.5,1.5,0,1,1-2.122,2.121L13.768,5.345a2.5,2.5,0,0,0-3.536,0h0L2.561,13.017A1.5,1.5,0,0,1,0,11.96Z"/><path d="M0,21.5a1.5,1.5,0,0,1,.439-1.061L9.525,11.36a3.505,3.505,0,0,1,4.95,0l9.086,9.081a1.5,1.5,0,0,1-2.122,2.119l-9.085-9.086a.5.5,0,0,0-.707,0h0L2.561,22.56A1.5,1.5,0,0,1,0,21.5Z"/></g></svg>

);
