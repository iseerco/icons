import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Folder = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g id="_01_align_center" data-name="01 align center"><path d="M21,3H12.236l-4-2H3A3,3,0,0,0,0,4V23H24V6A3,3,0,0,0,21,3ZM3,3H7.764l4,2H21a1,1,0,0,1,1,1v.881L2,6.994V4A1,1,0,0,1,3,3ZM2,21V8.994l20-.113V21Z"/></g></svg>

);
