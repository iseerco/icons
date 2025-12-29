import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Barcode = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M2,22H0V2H2V22ZM6,2h-2V22h2V2Zm15,0h-2V22h2V2Zm-8,0h-2V22h2V2Zm-3,0h-3V22h3V2Zm8,0h-3V22h3V2Zm6,0h-2V22h2V2Z"/></svg>

);
