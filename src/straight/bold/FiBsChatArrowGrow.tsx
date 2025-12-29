import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsChatArrowGrow = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M3,20.5V0H0V20.5A3.5,3.5,0,0,0,3.5,24H24V21H3.5A.5.5,0,0,1,3,20.5Z"/><path d="M22.5,5H17l2.439,2.439L16,10.879l-2.5-2.5-7.061,7.06,2.122,2.122,4.939-4.94,2.5,2.5,5.561-5.56L24,12V6.5A1.5,1.5,0,0,0,22.5,5Z"/></svg>

);
