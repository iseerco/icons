import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDrawer = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18.5,0H5.5c-1.93,0-3.5,1.57-3.5,3.5v20.5h3v-3h14v3h3V3.5c0-1.93-1.57-3.5-3.5-3.5ZM5.5,3h5v2h3v-2h5c.276,0,.5.224.5.5v2.5H5v-2.5c0-.276.224-.5.5-.5Zm-.5,9v-3h5.5v2h3v-2h5.5v3H5Zm0,6v-3h5.5v2h3v-2h5.5v3H5Z"/>
</svg>

);
