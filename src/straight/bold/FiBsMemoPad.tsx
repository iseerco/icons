import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMemoPad = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18.5,0H5.5c-1.93,0-3.5,1.57-3.5,3.5v20.5h20V3.5c0-1.93-1.57-3.5-3.5-3.5ZM5,21V5h14v16H5Zm2-14h10v3H7v-3Zm0,5h6v3h-6v-3Z"/></svg>

);
