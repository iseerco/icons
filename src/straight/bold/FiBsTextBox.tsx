import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTextBox = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,6V2c0-1.105-.895-2-2-2h-4v1H6V0H2C.895,0,0,.895,0,2v4h1v12H0v6h6v-1h12v1h6v-6h-1V6h1Zm-4,12h-2v2H6v-2h-2V6h2v-2h12v2h2v12ZM8,7h8v3h-2.5v7h-3v-7h-2.5v-3Z"/>
</svg>

);
