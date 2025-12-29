import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SortSizeUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M7.41,.59l4.5,4.5-1.41,1.41-3.5-3.5V24h-2V3L1.5,6.5,.09,5.09,4.59,.59c.78-.78,2.05-.78,2.83,0Zm8.59,14.41h8v8h-8V15Zm2,6h4v-4h-4v4ZM24,1V11H14V1h10Zm-2,2h-6v6h6V3Z"/></svg>

);
