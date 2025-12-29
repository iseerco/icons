import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Album = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,6c-3.31,0-6,2.69-6,6s2.69,6,6,6,6-2.69,6-6-2.69-6-6-6Zm0,7.5c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5,1.5,.67,1.5,1.5-.67,1.5-1.5,1.5ZM21,0H3C1.35,0,0,1.35,0,3V24H24V3c0-1.65-1.35-3-3-3ZM12,20c-4.41,0-8-3.59-8-8S7.59,4,12,4s8,3.59,8,8-3.59,8-8,8Z"/></svg>

);
