import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Gopuram = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22,16v-7h-2V0h-2v2h-2V0h-2v2h-4V0h-2v2h-2V0h-2v9h-2v7H0v8h2v-6h20v6h2v-8h-2ZM6,4h12v5h-4v-1c0-1.105-.895-2-2-2s-2,.895-2,2v1h-4v-5Zm-2,7h16v5h-6v-1c0-1.105-.895-2-2-2s-2,.895-2,2v1h-6v-5Zm10,11v2h-4v-2c0-1.105.895-2,2-2s2,.895,2,2Z"/>
</svg>

);
