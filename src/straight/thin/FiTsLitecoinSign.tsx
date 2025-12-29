import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsLitecoinSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,23v1H6.5c-1.38,0-2.5-1.12-2.5-2.5V12L0,13.33v-1l4-1.33V0h1V10.67l11-3.67v1l-11,3.67v9.83c0,.83,.67,1.5,1.5,1.5h15.5Z"/></svg>

);
