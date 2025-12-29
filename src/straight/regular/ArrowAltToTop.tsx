import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowAltToTop = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,0H3V2H11.77c-.28,.056-.547,.212-.753,.445l-5.017,5.555h5V24h2V8h5L12.983,2.445c-.206-.233-.473-.389-.753-.445h8.77V0Z"/></svg>

);
