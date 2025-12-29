import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPersonSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m5,2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5ZM24,0h-9v7h3v3h-3.75l-1.65-2.201c-.846-1.126-2.191-1.799-3.6-1.799h-3.5c-1.93,0-3.5,1.57-3.5,3.5v8.5h2v6h3v-6h1v6h3v-9h-6v-5.5c0-.276.225-.5.5-.5h3.5c.47,0,.918.225,1.2.6l2.55,3.4h8.25v-6h3V0Z"/>
</svg>

);
