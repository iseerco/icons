import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const EnvelopeDot = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20,8c-2.21,0-4-1.79-4-4S17.79,0,20,0s4,1.79,4,4-1.79,4-4,4Zm-10.12,6.12c1.17,1.17,3.07,1.17,4.24,0l4.33-4.33c-2.56-.68-4.45-3.01-4.45-5.79,0-.34,.04-.67,.09-1H3c-1.15,0-2.13,.65-2.64,1.6L9.88,14.12Zm11.31-4.24l-5.65,5.65c-.97,.97-2.26,1.46-3.54,1.46s-2.56-.49-3.54-1.46L0,7.07V24H24V8.46c-.78,.7-1.74,1.2-2.81,1.42Z"/></svg>

);
