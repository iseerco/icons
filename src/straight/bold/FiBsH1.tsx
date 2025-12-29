import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsH1 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m11,4h3v16h-3v-7h-6v7h-3V4h3v6h6v-6Zm8.781,0l-3.854,3.953,2.147,2.094.926-.949v10.902h3V4h-2.219Z"/></svg>

);
