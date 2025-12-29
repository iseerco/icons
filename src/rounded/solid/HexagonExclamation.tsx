import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HexagonExclamation = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23.34,9.48l-3.5-6c-.893-1.53-2.547-2.48-4.319-2.48h-7.072c-1.771,0-3.426.95-4.319,2.48L.631,9.48c-.907,1.554-.907,3.485,0,5.039l3.5,6c.893,1.53,2.547,2.48,4.319,2.48h7.072c1.771,0,3.426-.95,4.319-2.48l3.5-6c.907-1.554.907-3.485,0-5.039Zm-12.34-2.48c0-.553.448-1,1-1s1,.447,1,1v5.5c0,.553-.448,1-1,1s-1-.447-1-1v-5.5Zm1,11c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5,1.5.672,1.5,1.5-.672,1.5-1.5,1.5Z"/></svg>

);
