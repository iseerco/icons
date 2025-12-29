import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TrashCanList = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,10v2h-8v-2h8Zm-8,7h6v-2h-6v2Zm0,5h4v-2h-4v2Zm2-14h-4v16H5c-1.654,0-3-1.346-3-3V6H0v-2h5v-2c0-1.103.897-2,2-2h6c1.103,0,2,.897,2,2v2h5v2h-2v2Zm-5-6h-6v2h6v-2Z"/>
</svg>

);
