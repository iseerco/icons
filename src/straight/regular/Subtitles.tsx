import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Subtitles = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g id="_01_align_center" data-name="01 align center"><path d="M24,22H0V5A3,3,0,0,1,3,2H21a3,3,0,0,1,3,3ZM2,20H22V5a1,1,0,0,0-1-1H3A1,1,0,0,0,2,5Z"/><rect x="9" y="11" width="11" height="2"/><rect x="4" y="11" width="3" height="2"/><rect x="4" y="16" width="11" height="2"/><rect x="17" y="16" width="3" height="2"/></g></svg>

);
