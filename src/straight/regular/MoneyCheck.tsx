import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MoneyCheck = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,22H0V5c0-1.654,1.346-3,3-3H21c1.654,0,3,1.346,3,3V22ZM2,20H22V5c0-.551-.449-1-1-1H3c-.551,0-1,.449-1,1v15Zm18-7H12V7h8v6Zm-6-2h4v-2h-4v2Zm-4,0H4v2h6v-2Zm10,4H4v2H20v-2Z"/></svg>

);
