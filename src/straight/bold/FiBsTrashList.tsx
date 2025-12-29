import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTrashList = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m6.34,21h6.66v3h-6.66c-1.807,0-3.338-1.41-3.487-3.21L1.62,6H0v-3h5v-.5c0-1.379,1.121-2.5,2.5-2.5h6c1.379,0,2.5,1.121,2.5,2.5v.5h5v3H4.631l1.212,14.541c.021.262.235.459.497.459Zm9.66-12v3h8v-3h-8Zm0,8h6v-3h-6v3Zm0,5h4v-3h-4v3Z"/>
</svg>

);
