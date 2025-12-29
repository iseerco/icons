import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTrashCanPlus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23,3h-5v-.5c0-1.379-1.122-2.5-2.5-2.5h-7c-1.378,0-2.5,1.121-2.5,2.5v.5H1v3h2v15.5c0,1.379,1.122,2.5,2.5,2.5h13c1.378,0,2.5-1.121,2.5-2.5V6h2v-3Zm-5,18H6V6h12v15Zm-10-9h2.5v-2.5h3v2.5h2.5v3h-2.5v2.5h-3v-2.5h-2.5v-3Z"/>
</svg>

);
