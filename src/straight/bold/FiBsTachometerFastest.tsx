import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTachometerFastest = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,13a12.019,12.019,0,0,1-5.112,9.818l-.937.659-3.408-2.822,1.914-2.31,1.587,1.313A9,9,0,1,0,5.95,19.653l1.553-1.3,1.928,2.3L6.056,23.48l-.944-.662A12,12,0,1,1,24,13Zm-6.779,3.878,1.185-2.756-4.6-1.977A2,2,0,1,0,12.623,14.9Z"/></svg>

);
