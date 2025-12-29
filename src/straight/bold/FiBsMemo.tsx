import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMemo = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m17.5,0H6.5c-1.93,0-3.5,1.57-3.5,3.5v20.5h18V3.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,21H6V3.5c0-.275.225-.5.5-.5h11c.275,0,.5.225.5.5v17.5ZM8,5h8v3h-8v-3Zm0,5h8v3h-8v-3Zm0,5h4v3h-4v-3Z"/></svg>

);
