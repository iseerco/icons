import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFolderCheck = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M20.5,3H12.354L8.354,1H3.5C1.57,1,0,2.57,0,4.5V23H24V6.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,17H3V8H21v12Zm-11.768-2.732l-2.793-2.793,2.121-2.121,2.439,2.439,4.439-4.439,2.121,2.121-4.793,4.793c-.975,.975-2.56,.975-3.535,0Z"/>
</svg>

);
