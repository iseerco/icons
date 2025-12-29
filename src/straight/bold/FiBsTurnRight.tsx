import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTurnRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.238,11.34l-6.173,6.217-2.129-2.113,4.412-4.443H3.5c-.276,0-.5.224-.5.5v10.5H0v-10.5c0-1.93,1.57-3.5,3.5-3.5h15.848l-4.412-4.443,2.129-2.114,6.177,6.221c1.011,1.011,1.011,2.662-.004,3.676Z"/>
</svg>

);
