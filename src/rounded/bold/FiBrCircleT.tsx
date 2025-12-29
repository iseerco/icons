import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrCircleT = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m17,8c0,.828-.671,1.5-1.5,1.5h-2v7.25c0,.828-.671,1.5-1.5,1.5s-1.5-.672-1.5-1.5v-7.25h-2c-.829,0-1.5-.672-1.5-1.5s.671-1.5,1.5-1.5h7c.829,0,1.5.672,1.5,1.5Zm7,4c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-3,0c0-4.963-4.038-9-9-9S3,7.037,3,12s4.038,9,9,9,9-4.037,9-9Z"/></svg>

);
