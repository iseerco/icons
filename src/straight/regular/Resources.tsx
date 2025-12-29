import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Resources = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g id="_01_align_center" data-name="01 align center"><path d="M24,3H13V7.736L10.329,3.108a2,2,0,0,0-3.464,0L0,15H7.294a7,7,0,1,0,13.023-1H24ZM3.464,13,8.6,4.109l3.548,6.147A7,7,0,0,0,8.26,13ZM14,22a5,5,0,1,1,5-5A5.006,5.006,0,0,1,14,22Zm8-10H18.894A6.969,6.969,0,0,0,15,10.08V5h7Z"/></g></svg>

);
