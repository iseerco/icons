import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTable = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20.5,2H3.5c-1.93,0-3.5,1.57-3.5,3.5v16.5h24V5.5c0-1.93-1.57-3.5-3.5-3.5Zm-10,5v4.5H3v-4.5h7.5Zm3,0h7.5v4.5h-7.5v-4.5ZM3,14.5h7.5v4.5H3v-4.5Zm10.5,4.5v-4.5h7.5v4.5h-7.5Z"/></svg>

);
