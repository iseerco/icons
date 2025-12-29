import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTrashCanList = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m5,21h9v3H4.5c-1.378,0-2.5-1.121-2.5-2.5V6H0v-3h5v-.5c0-1.379,1.122-2.5,2.5-2.5h6c1.378,0,2.5,1.121,2.5,2.5v.5h5v3H5v15Zm11-13v3h8v-3h-8Zm0,8h6v-3h-6v3Zm0,5h4v-3h-4v3Z"/>
</svg>

);
