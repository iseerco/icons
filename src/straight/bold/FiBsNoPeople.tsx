import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsNoPeople = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,1H3.5C1.57,1,0,2.57,0,4.5v15c0,1.93,1.57,3.5,3.5,3.5H20.5c1.93,0,3.5-1.57,3.5-3.5V4.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,18.5c0,.28-.22,.5-.5,.5H3.5c-.28,0-.5-.22-.5-.5V4.5c0-.28,.22-.5,.5-.5H20.5c.28,0,.5,.22,.5,.5v15Z"/></svg>

);
