import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Seal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,24.021l-3.521-3.521H3.5v-4.979L-.021,12l3.521-3.521V3.5h4.979L12-.021l3.521,3.521h4.979v4.979l3.521,3.521-3.521,3.521v4.979h-4.979l-3.521,3.521Z"/>
</svg>

);
