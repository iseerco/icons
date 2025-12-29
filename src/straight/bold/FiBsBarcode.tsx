import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBarcode = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M3,22H0V2H3V22ZM13,2h-3V22h3V2Zm-4,0H5V22h4V2Zm10,0h-4V22h4V2Zm5,0h-3V22h3V2Z"/></svg>

);
