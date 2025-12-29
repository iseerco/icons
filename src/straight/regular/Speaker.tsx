import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Speaker = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g id="_01_align_center" data-name="01 align center"><path d="M21,24H3V3A3,3,0,0,1,6,0H18a3,3,0,0,1,3,3ZM5,22H19V3a1,1,0,0,0-1-1H6A1,1,0,0,0,5,3Z"/><path d="M12,9a3,3,0,1,1,3-3A3,3,0,0,1,12,9Zm0-4a1,1,0,1,0,1,1A1,1,0,0,0,12,5Z"/><path d="M12,20a5,5,0,1,1,5-5A5.006,5.006,0,0,1,12,20Zm0-8a3,3,0,1,0,3,3A3,3,0,0,0,12,12Z"/><rect x="11" y="14" width="2" height="2"/></g></svg>

);
