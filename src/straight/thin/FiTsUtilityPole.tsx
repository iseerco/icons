import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsUtilityPole = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23,0v2h-3V0h-1v2h-6.5V0h-1v2h-6.5V0h-1v2H1V0H0v3h4.293l7.207,7.207v13.793h1v-13.793l7.207-7.207h4.293V0h-1Zm-11.5,8.793L5.707,3h5.793v5.793Zm1,0V3h5.793l-5.793,5.793Z"/>
</svg>

);
