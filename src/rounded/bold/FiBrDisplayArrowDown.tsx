import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrDisplayArrowDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,6.5v6c0,3.033-2.468,5.5-5.5,5.5h-5v2h2.5c.828,0,1.5.671,1.5,1.5s-.672,1.5-1.5,1.5h-8c-.828,0-1.5-.671-1.5-1.5s.672-1.5,1.5-1.5h2.5v-2h-5c-3.032,0-5.5-2.467-5.5-5.5v-6C0,3.467,2.468,1,5.5,1h1c.828,0,1.5.671,1.5,1.5s-.672,1.5-1.5,1.5h-1c-1.379,0-2.5,1.122-2.5,2.5v6c0,1.378,1.121,2.5,2.5,2.5h13c1.379,0,2.5-1.122,2.5-2.5v-6c0-1.378-1.121-2.5-2.5-2.5h-1c-.828,0-1.5-.671-1.5-1.5s.672-1.5,1.5-1.5h1c3.032,0,5.5,2.467,5.5,5.5Zm-15.871,1.044l3.163,3.163c.391.391,1.024.391,1.414,0l3.163-3.163c.63-.63.184-1.707-.707-1.707h-1.663V1.5c0-.829-.672-1.5-1.5-1.5s-1.5.671-1.5,1.5v4.336h-1.664c-.891,0-1.337,1.077-.707,1.707Z"/>
</svg>

);
