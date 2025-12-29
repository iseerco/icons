import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CircleCalendar = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m16,11v4h-8v-4h8Zm8,1c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-6-3c0-1.103-.897-2-2-2v-2h-2v2h-4v-2h-2v2c-1.103,0-2,.897-2,2v8h12v-8Z"/></svg>

);
