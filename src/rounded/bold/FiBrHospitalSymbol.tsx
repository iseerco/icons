import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrHospitalSymbol = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,21c-4.963,0-9-4.038-9-9S7.037,3,12,3s9,4.038,9,9-4.037,9-9,9Zm5-13.5v9c0,.829-.672,1.5-1.5,1.5s-1.5-.671-1.5-1.5v-3h-4v3c0,.829-.672,1.5-1.5,1.5s-1.5-.671-1.5-1.5V7.5c0-.829.672-1.5,1.5-1.5s1.5.671,1.5,1.5v3h4v-3c0-.829.672-1.5,1.5-1.5s1.5.671,1.5,1.5Z"/></svg>

);
