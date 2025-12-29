import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsNoteSticky = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,0H3.5C1.57,0,0,1.57,0,3.5V24H18.38l5.62-5.66V3.5c0-1.93-1.57-3.5-3.5-3.5ZM3,3.5c0-.28,.22-.5,.5-.5H20.5c.28,0,.5,.22,.5,.5v12.5h-5v5H3V3.5Z"/></svg>

);
