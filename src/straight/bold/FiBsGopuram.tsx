import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsGopuram = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22,16v-7h-2V0h-3v2h-3.5V0h-3v2h-3.5V0h-3v9h-2v7H0v8h3v-5h18v5h3v-8h-2ZM7,5h10v4h-3v-1c0-1.105-.895-2-2-2s-2,.895-2,2v1h-3v-4Zm-2,7h14v4h-5v-1c0-1.105-.895-2-2-2s-2,.895-2,2v1h-5v-4Zm9,10v2h-4v-2c0-1.105.895-2,2-2s2,.895,2,2Z"/>
</svg>

);
