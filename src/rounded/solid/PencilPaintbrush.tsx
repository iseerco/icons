import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PencilPaintbrush = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m17.31,15c3.845,0,5.76,4.029,6.607,6.695.364,1.147-.521,2.305-1.748,2.305h-4.264c-2.38,0-4.905-2.015-4.905-4.5,0-2.485,1.93-4.5,4.31-4.5ZM1.172,19.119c-.75.75-1.172,1.768-1.172,2.828v2.053h2.053c1.061,0,2.078-.421,2.828-1.172l13.43-13.43-3.71-3.71L1.172,19.119ZM23.232.768c-1.024-1.024-2.685-1.024-3.71,0l-3.507,3.507,3.71,3.71,3.507-3.507c1.024-1.024,1.024-2.685,0-3.71ZM.768,4.478C-.256,3.454-.256,1.793.768.768,1.793-.256,3.454-.256,4.478.768l5.899,6.317-3.71,3.71L.768,4.478Z"/></svg>

);
