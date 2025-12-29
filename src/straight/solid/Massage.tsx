import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Massage = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m13,22c0-6.075,4.925-11,11-11,0,6.075-4.925,11-11,11m-2,0c0-6.075-4.925-11-11-11,0,6.075,4.925,11,11,11m1-5c1.026-2.452,2.782-4.526,4.995-5.947-.208-3.283-1.724-6.53-4.288-9.093l-.707-.707-.707.707c-2.563,2.563-4.08,5.81-4.288,9.093,2.213,1.421,3.969,3.495,4.995,5.947Z"/>
</svg>

);
