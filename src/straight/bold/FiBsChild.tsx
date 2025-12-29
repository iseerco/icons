import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsChild = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m10,6.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm7,13.5h-1v4h-3v-4h-1v4h-3v-4h-1v-6.5c0-1.93,1.57-3.5,3.5-3.5h2c1.93,0,3.5,1.57,3.5,3.5v6.5Zm-6-3h3v-3.5c0-.275-.224-.5-.5-.5h-2c-.276,0-.5.225-.5.5v3.5Z"/>
</svg>

);
