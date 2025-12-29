import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LampFloor = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m13,11h7.844l-1.381-8.285c-.262-1.573-1.61-2.715-3.205-2.715H7.743c-1.595,0-2.943,1.142-3.206,2.715l-1.381,8.285h7.844v11h-4v2h10v-2h-4v-11Z"/>
</svg>

);
