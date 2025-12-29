import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowTrendUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,6h-7v2h5.586l-7.586,7.586-6-6L.03,16.556l1.414,1.414,5.556-5.556,6,6,9-9v5.586h2v-7c0-1.103-.897-2-2-2Z"/></svg>

);
