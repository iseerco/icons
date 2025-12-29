import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Bookmark = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g id="_01_align_center" data-name="01 align center"><path d="M23,24,12,13.053,1,24V3A3,3,0,0,1,4,0H20a3,3,0,0,1,3,3ZM12,10.232l9,8.953V3a1,1,0,0,0-1-1H4A1,1,0,0,0,3,3V19.185Z"/></g></svg>

);
