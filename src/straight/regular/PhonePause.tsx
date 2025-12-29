import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PhonePause = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17.613,12.848,14.2,16.262A12.138,12.138,0,0,1,7.746,9.793l3.4-3.406L4.887.122l-3.17,3.17A5.887,5.887,0,0,0,0,7.5C0,14.748,9.252,24,16.5,24a5.893,5.893,0,0,0,4.207-1.715l3.171-3.172Zm1.679,8.023A3.906,3.906,0,0,1,16.5,22C10.267,22,2,13.734,2,7.5A3.9,3.9,0,0,1,3.13,4.708L4.887,2.951,8.323,6.387,5.389,9.323l.246.613a14.362,14.362,0,0,0,8.446,8.436l.606.232,2.926-2.928,3.437,3.437ZM22,8H20V0h2ZM18,8H16V0h2Z"/></svg>

);
