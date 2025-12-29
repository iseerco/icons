import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Keyboard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g id="_01_align_center" data-name="01 align center"><path d="M21,6H13V2H11V6H3A3,3,0,0,0,0,9V20H24V9A3,3,0,0,0,21,6Zm1,12H2V9A1,1,0,0,1,3,8H21a1,1,0,0,1,1,1Z"/><rect x="8" y="14" width="8" height="2"/><rect x="9" y="10" width="3" height="2"/><rect x="14" y="10" width="6" height="2"/><rect x="4" y="10" width="3" height="2"/><rect x="4" y="14" width="2" height="2"/><rect x="18" y="14" width="2" height="2"/></g></svg>

);
