import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsMoneyCheck = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,22H0V4.5c0-1.378,1.122-2.5,2.5-2.5H21.5c1.378,0,2.5,1.122,2.5,2.5V22ZM1,21H23V4.5c0-.827-.673-1.5-1.5-1.5H2.5c-.827,0-1.5,.673-1.5,1.5V21ZM20,13H12V7h8v6Zm-7-1h6v-4h-6v4Zm-3,0H4v1h6v-1Zm10,4H4v1H20v-1Z"/></svg>

);
