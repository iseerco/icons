import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCrossReligion = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15,24h-6V13H2v-3.5c0-1.379,1.122-2.5,2.5-2.5h4.5V2.5c0-1.379,1.122-2.5,2.5-2.5h1c1.378,0,2.5,1.121,2.5,2.5V7h4.5c1.378,0,2.5,1.121,2.5,2.5v3.5h-7v11Zm-5-1h4V12h7v-2.5c0-.827-.673-1.5-1.5-1.5h-5.5V2.5c0-.827-.673-1.5-1.5-1.5h-1c-.827,0-1.5,.673-1.5,1.5v5.5H4.5c-.827,0-1.5,.673-1.5,1.5v2.5h7v11Z"/></svg>

);
