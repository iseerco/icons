import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MinusHexagon = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23.341,9.48l-3.501-6c-.893-1.53-2.547-2.48-4.318-2.48h-7.071c-1.771,0-3.426.951-4.319,2.48L.631,9.48c-.906,1.554-.906,3.485,0,5.039l3.501,6c.893,1.53,2.547,2.48,4.318,2.48h7.071c1.771,0,3.426-.95,4.319-2.48l3.5-6c.906-1.554.906-3.485,0-5.039Zm-7.341,3.52h-8c-.553,0-1-.448-1-1s.447-1,1-1h8c.553,0,1,.448,1,1s-.447,1-1,1Z"/></svg>

);
