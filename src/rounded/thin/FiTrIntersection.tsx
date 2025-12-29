import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrIntersection = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20.5,24c-.276,0-.5-.224-.5-.5v-14.5c0-4.411-3.589-8-8-8S4,4.589,4,9v14.5c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-14.5C3,4.037,7.038,0,12,0s9,4.037,9,9v14.5c0,.276-.224.5-.5.5Z"/>
</svg>

);
