import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsGlass = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M.771,0l3,21a3.517,3.517,0,0,0,3.464,3h9.532a3.517,3.517,0,0,0,3.464-3L23.229,0ZM17.26,20.571a.5.5,0,0,1-.494.429H7.234a.5.5,0,0,1-.494-.429L5.372,11h11.1L17,8H4.944L4.229,3H19.771Z"/></svg>

);
