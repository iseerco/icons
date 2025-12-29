import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsGripVertical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19.5,0h-6.5v24h6.5c1.93,0,3.5-1.57,3.5-3.5V3.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,20.5c0,.276-.225.5-.5.5h-3.5v-4h4v3.5Zm0-6.5h-4v-4h4v4Zm-4-7V3h3.5c.275,0,.5.224.5.5v3.5h-4ZM1,3.5v17c0,1.93,1.57,3.5,3.5,3.5h6.5V0h-6.5C2.57,0,1,1.57,1,3.5Zm7,17.5h-3.5c-.275,0-.5-.224-.5-.5v-3.5h4v4Zm0-7h-4v-4h4v4Zm0-7h-4v-3.5c0-.276.225-.5.5-.5h3.5v4Z"/></svg>

);
