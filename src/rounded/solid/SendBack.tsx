import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SendBack = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m7,11h-3c-2.206,0-4-1.794-4-4v-3C0,1.794,1.794,0,4,0h3c2.206,0,4,1.794,4,4v3c0,2.206-1.794,4-4,4Zm13,13h-3c-2.206,0-4-1.794-4-4v-3c0-2.206,1.794-4,4-4h3c2.206,0,4,1.794,4,4v3c0,2.206-1.794,4-4,4Zm-9-7c0-3.309,2.691-6,6-6h1v-1c0-2.206-1.794-4-4-4h-1v1c0,3.309-2.691,6-6,6h-1v1c0,2.206,1.794,4,4,4h1v-1Z"/></svg>

);
