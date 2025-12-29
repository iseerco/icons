import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const IndustryAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m16,10.196v-5l-8,5V2h1V0H0v2h1v19c0,1.654,1.346,3,3,3h17c1.654,0,3-1.346,3-3V5.196l-8,5Zm6,10.804c0,.551-.448,1-1,1H4c-.552,0-1-.449-1-1V2h3v17h2v-6.445l6-3.75v5l8-5v12.196Zm-11-5h3v3h-3v-3Zm8,3h-3v-3h3v3Z"/>
</svg>

);
