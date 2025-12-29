import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsWindowFrameOpen = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,21v3H0v-3h2v-6h3v6h14v-6h3v6h2Zm-2-8H2V3.5c0-1.93,1.57-3.5,3.5-3.5h13c1.93,0,3.5,1.57,3.5,3.5v9.5Zm-17-3h5.5V3h-5c-.276,0-.5.224-.5.5v6.5Zm14-6.5c0-.276-.225-.5-.5-.5h-5v7h5.5V3.5Z"/>
</svg>

);
