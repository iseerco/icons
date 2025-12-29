import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsHouseCrackAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22.657,7.408L14.156.755c-1.27-.993-3.043-.994-4.313,0L1.343,7.407c-.854.668-1.343,1.673-1.343,2.757v13.824h24v-13.824c0-1.084-.489-2.089-1.343-2.756Zm-1.657,13.58h-4.891l-3.988-3.988,3.75-3.75-4.811-4.811-2.121,2.121,2.689,2.689-3.75,3.75,3.988,3.988H3v-10.824c0-.155.07-.298.192-.394L11.692,3.119c.182-.143.435-.142.616,0l8.5,6.652c.121.095.191.239.191.394v10.824Z"/>
</svg>

);
