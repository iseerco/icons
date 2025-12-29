import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Percentage = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M1.707,23.707l-1.414-1.414L22.293,.293l1.414,1.414L1.707,23.707ZM9,5c0-2.206-1.794-4-4-4S1,2.794,1,5s1.794,4,4,4,4-1.794,4-4Zm-2,0c0,1.103-.897,2-2,2s-2-.897-2-2,.897-2,2-2,2,.897,2,2Zm16,14c0-2.206-1.794-4-4-4s-4,1.794-4,4,1.794,4,4,4,4-1.794,4-4Zm-2,0c0,1.103-.897,2-2,2s-2-.897-2-2,.897-2,2-2,2,.897,2,2Z"/></svg>

);
