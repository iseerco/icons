import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPager = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20.5,2H3.5c-1.93,0-3.5,1.57-3.5,3.5v16.5h24V5.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,17H3V5.5c0-.276.225-.5.5-.5h17c.275,0,.5.224.5.5v13.5ZM5,7h14v4H5v-4Zm0,6h3v3h-3v-3Zm5,0h3v3h-3v-3Zm5,0h3v3h-3v-3Z"/></svg>

);
