import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChartKanban = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22,0h-2c-1.103,0-2,.897-2,2v22h6V2c0-1.103-.897-2-2-2Zm0,22h-2V2h2v20ZM4,0h-2C.897,0,0,.897,0,2v17h6V2c0-1.103-.897-2-2-2Zm0,17h-2V2h2v15ZM13,0h-2c-1.103,0-2,.897-2,2v11h6V2c0-1.103-.897-2-2-2Zm0,11h-2V2h2v9Z"/>
</svg>

);
