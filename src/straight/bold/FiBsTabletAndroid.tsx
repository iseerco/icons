import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTabletAndroid = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18.5,0H5.5c-1.93,0-3.5,1.57-3.5,3.5v20.5h20V3.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,21H5V3.5c0-.276.224-.5.5-.5h13c.275,0,.5.224.5.5v17.5Zm-9-5h4v3h-4v-3Z"/>
</svg>

);
