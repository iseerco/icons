import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCurveAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m0,24v-1c5.84,0,10.786-4.753,11.503-11.057C12.278,5.135,17.651,0,24,0v1c-5.84,0-10.786,4.753-11.503,11.057-.775,6.809-6.147,11.943-12.497,11.943Z"/>
</svg>

);
