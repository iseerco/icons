import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBarcodeScan = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,9v3H0v-3H2V1h3V9h2V1h4V9h1V1h3V9h3V1h4V9h2ZM2,23h3V14H2v9Zm10,0h3V14h-3v9Zm-5,0h4V14H7v9Zm11,0h4V14h-4v9Z"/></svg>

);
