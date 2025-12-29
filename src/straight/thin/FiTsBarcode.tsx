import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBarcode = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M1,22H0V2H1V22ZM21,2h-1V22h1V2Zm-9,0h-1V22h1V2Zm-6,0h-2V22h2V2Zm3,0h-2V22h2V2Zm9,0h-2V22h2V2Zm-3,0h-1V22h1V2Zm9,0h-1V22h1V2Z"/></svg>

);
