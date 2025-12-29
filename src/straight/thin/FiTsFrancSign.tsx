import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsFrancSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M6,2.5V11h12v1H6v5h7v1H6v6h-1v-6H0v-1H5V2.5c0-1.38,1.12-2.5,2.5-2.5h14.5V1H7.5c-.83,0-1.5,.67-1.5,1.5Z"/></svg>

);
