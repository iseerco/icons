import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CrossReligion = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.5,7h-4.5V2.5c0-1.379-1.122-2.5-2.5-2.5h-1c-1.378,0-2.5,1.121-2.5,2.5V7H4.5c-1.378,0-2.5,1.121-2.5,2.5v3.5h7v11h6V13h7v-3.5c0-1.379-1.122-2.5-2.5-2.5Z"/></svg>

);
