import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Refrigerator = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m2,9v-4C2,2.243,4.243,0,7,0h10c2.757,0,5,2.243,5,5v4h-5v-3c0-.552-.447-1-1-1s-1,.448-1,1v3H2Zm15,2v6c0,.553-.447,1-1,1s-1-.447-1-1v-6H2v8c0,2.757,2.243,5,5,5h10c2.757,0,5-2.243,5-5v-8h-5Z"/>
</svg>

);
