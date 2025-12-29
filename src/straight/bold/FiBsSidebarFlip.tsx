import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSidebarFlip = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,5.5V22H24V5.5c0-1.93-1.57-3.5-3.5-3.5H3.5C1.57,2,0,3.57,0,5.5Zm18,5.5h3v3h-3v-3Zm0-6h3v3h-3v-3Zm-15,.5c0-.275,.224-.5,.5-.5H15v14H3V5.5Z"/></svg>

);
