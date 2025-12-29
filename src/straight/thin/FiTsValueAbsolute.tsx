import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsValueAbsolute = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m17.854,6.854l-5.146,5.146,5.146,5.146-.707.707-5.146-5.146-5.146,5.146-.707-.707,5.146-5.146-5.146-5.146.707-.707,5.146,5.146,5.146-5.146.707.707ZM0,24h1V0H0v24ZM23,0v24h1V0h-1Z"/></svg>

);
