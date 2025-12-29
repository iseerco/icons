import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPedestal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22,21V3.5c0-1.93-1.57-3.5-3.5-3.5H5.5c-1.93,0-3.5,1.57-3.5,3.5v17.5H0v3h24v-3h-2ZM5,3.5c0-.275.225-.5.5-.5h13c.275,0,.5.225.5.5v17.5H5V3.5Zm5,3c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Zm7,0c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Z"/>
</svg>

);
