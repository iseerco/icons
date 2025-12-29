import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DownToLine = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,24H0v-2H24v2Zm-9.86-4.89l9.82-10.11h-6.95V0H7V9H.07l9.8,10.11h0c.57,.58,1.32,.89,2.12,.89h0c.8,0,1.56-.31,2.13-.89ZM4.79,11h4.21V2h6V11h4.22l-6.51,6.71c-.19,.19-.44,.29-.71,.29h0c-.27,0-.52-.1-.7-.29l-6.5-6.71Z"/></svg>

);
