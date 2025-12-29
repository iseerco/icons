import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const YogaMoon = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M24,11.5c0,1.381-1.119,2.5-2.5,2.5s-2.5-1.119-2.5-2.5,1.119-2.5,2.5-2.5,2.5,1.119,2.5,2.5ZM16,1h2V22h-2V14h-5.4l3.4,8h-2.307l-3.283-8h-2.474l-3.616,8H0L5.5,10.118c.697-1.306,2.05-2.118,3.53-2.118h6.97V1Zm0,11v-2h-6.97c-.74,0-1.416,.406-1.792,1.12l-.398,.88h9.16Z"/>
</svg>

);
