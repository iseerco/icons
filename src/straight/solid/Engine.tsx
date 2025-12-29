import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Engine = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,9v-3h-5v-3h4V1h-10v2h4v3h-3.968l-2.5,3h-2.532v4h-3v-4H0v10h2v-4h3v3.414l3.586,3.586h12.414v-2h3v-11h-3Z"/>
</svg>

);
