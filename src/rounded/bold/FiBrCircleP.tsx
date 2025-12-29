import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrCircleP = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m13,6h-2c-1.93,0-3.5,1.57-3.5,3.5v7c0,.828.671,1.5,1.5,1.5s1.5-.672,1.5-1.5v-1.5h2.5c2.481,0,4.5-2.019,4.5-4.5s-2.019-4.5-4.5-4.5Zm0,6h-2.5v-2.5c0-.275.224-.5.5-.5h2c.827,0,1.5.673,1.5,1.5s-.673,1.5-1.5,1.5ZM12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,21c-4.962,0-9-4.037-9-9S7.038,3,12,3s9,4.037,9,9-4.037,9-9,9Z"/></svg>

);
