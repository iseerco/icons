import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrInterlining = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10.544,7h12a1.5,1.5,0,0,0,0-3h-12a1.5,1.5,0,0,0,0,3Z"/><path d="M22.544,11h-12a1.5,1.5,0,0,0,0,3h12a1.5,1.5,0,0,0,0-3Z"/><path d="M22.544,18h-12a1.5,1.5,0,0,0,0,3h12a1.5,1.5,0,0,0,0-3Z"/><path d="M5.13,7a1,1,0,0,0,.707-1.707L3.751,3.207a1,1,0,0,0-1.414,0L.251,5.293A1,1,0,0,0,.958,7h.586V18H.958a1,1,0,0,0-.707,1.707L2.3,21.755a1,1,0,0,0,1.414,0l2.048-2.048A1,1,0,0,0,5.054,18h-.51V7Z"/></svg>

);
