import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HexagonCheck = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.356,9.48l-3.501-6c-.893-1.53-2.547-2.48-4.318-2.48h-7.072c-1.771,0-3.426.951-4.319,2.48L.646,9.48c-.907,1.554-.907,3.485,0,5.039l3.5,6c.893,1.53,2.547,2.48,4.319,2.48h7.072c1.771,0,3.426-.951,4.319-2.48l3.5-6c.906-1.554.906-3.485,0-5.039Zm-5.156,1.031l-4.426,4.345c-.783.768-1.791,1.151-2.799,1.151-.998,0-1.997-.376-2.777-1.129l-1.899-1.868c-.394-.387-.399-1.02-.012-1.414.387-.395,1.019-.4,1.414-.012l1.893,1.861c.778.75,2.002.746,2.781-.018l4.425-4.344c.393-.388,1.024-.381,1.414.013.387.394.381,1.027-.014,1.414Z"/>
</svg>

);
