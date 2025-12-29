import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTrademark = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,5H9v3h-3v11H3V8H0v-3Zm22.48,.09c-.91-.27-1.89,.09-2.45,.95l-2.53,4.13-2.55-4.17c-.54-.82-1.51-1.18-2.42-.91-.91,.27-1.52,1.13-1.52,2.13v11.78h3V10.2l3.5,5.73,3.5-5.73v8.8h3V7.22c0-1-.61-1.86-1.52-2.13Z"/></svg>

);
