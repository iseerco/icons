import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsWindowFrame = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22,21V3.5c0-1.93-1.57-3.5-3.5-3.5H5.5c-1.93,0-3.5,1.57-3.5,3.5v17.5H0v3h24v-3h-2Zm-3,0h-5.5v-7.5h5.5v7.5Zm0-17.5v7h-5.5V3h5c.276,0,.5.224.5.5Zm-13.5-.5h5v7.5h-5.5V3.5c0-.276.224-.5.5-.5Zm-.5,10.5h5.5v7.5h-5.5v-7.5Z"/>
</svg>

);
