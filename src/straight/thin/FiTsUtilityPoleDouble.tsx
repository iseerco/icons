import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsUtilityPoleDouble = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12.5,3h11.5V0h-1v2h-3V0h-1v2h-6.5V0h-1v2h-6.5V0h-1v2H1V0H0v3h11.5v4h-6.5v-2h-1v2H1v-2H0v3h4.293l7.207,7.207v8.793h1v-8.793l7.207-7.207h4.293v-3h-1v2h-3v-2h-1v2h-6.5V3Zm-6.793,5h5.793v5.793l-5.793-5.793Zm12.586,0l-5.793,5.793v-5.793h5.793Z"/>
</svg>

);
