import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CarBattery = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,5V2H13V5H11V2H3V5A3,3,0,0,0,0,8V22H24V8A3,3,0,0,0,21,5ZM10,12H4V10h6Zm10,0H18v2H16V12H14V10h2V8h2v2h2Z"/></svg>

);
