import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChartMixed = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M5,10.41L.29,5.71l1.41-1.41,3.29,3.29L12,.59l5,5L22.29,.29l1.41,1.41-6.71,6.71L12,3.41l-7,7Zm3,3.59h-2v10h2V14Zm-5-2H1v12H3V12Zm10-4h-2V24h2V8Zm5,3h-2v13h2V11Zm5-4h-2V24h2V7Z"/></svg>

);
