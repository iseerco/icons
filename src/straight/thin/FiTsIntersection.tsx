import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsIntersection = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,24h-1v-15c0-4.411-3.589-8-8-8S4,4.589,4,9v15h-1v-15C3,4.037,7.038,0,12,0s9,4.037,9,9v15Z"/>
</svg>

);
