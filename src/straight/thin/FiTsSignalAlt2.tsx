import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSignalAlt2 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,2v22h-6V2c0-1.103.897-2,2-2h2c1.103,0,2,.897,2,2Zm-11,4h-2c-1.103,0-2,.897-2,2v16h6V8c0-1.103-.897-2-2-2Zm-9,6h-2c-1.103,0-2,.897-2,2v10h6v-10c0-1.103-.897-2-2-2Z"/>
</svg>

);
