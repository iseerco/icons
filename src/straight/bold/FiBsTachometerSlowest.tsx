import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTachometerSlowest = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14,13a2,2,0,0,1-2.623,1.9l-4.6,1.977L5.593,14.122l4.6-1.977A2,2,0,0,1,14,13ZM12,1A11.995,11.995,0,0,0,5.112,22.818l.937.659,3.408-2.822-1.914-2.31L5.956,19.659a9,9,0,1,1,12.094-.006l-1.552-1.3-1.929,2.3,3.375,2.831.944-.662A11.995,11.995,0,0,0,12,1Z"/></svg>

);
