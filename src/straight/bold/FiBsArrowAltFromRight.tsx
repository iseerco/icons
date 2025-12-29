import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsArrowAltFromRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,3v7.5H6V6L.445,11.083c-.593,.532-.593,1.461,0,1.993l5.555,5.083v-4.659h15v7.5h3V3h-3Z"/></svg>

);
