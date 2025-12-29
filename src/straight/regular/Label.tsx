import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Label = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g id="_01_align_center" data-name="01 align center"><path d="M19,24H5a3,3,0,0,1-3-2.982V5.522L12,0,22,5.522v15.5A3,3,0,0,1,19,24ZM4,6.692V21.018a1,1,0,0,0,1,.994H19a1,1,0,0,0,1-.994V6.692L12,2.274Z"/><circle cx="12" cy="7.072" r="1.5"/></g></svg>

);
