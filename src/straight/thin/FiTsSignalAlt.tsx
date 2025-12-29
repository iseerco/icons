import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSignalAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22,0h-2c-1.103,0-2,.897-2,2v22h6V2c0-1.103-.897-2-2-2Zm1,23h-4V2c0-.551.449-1,1-1h2c.551,0,1,.449,1,1v21ZM13,6h-2c-1.103,0-2,.897-2,2v16h6V8c0-1.103-.897-2-2-2Zm1,17h-4v-15c0-.551.449-1,1-1h2c.551,0,1,.449,1,1v15ZM6,14v10H0v-10c0-1.103.897-2,2-2h2c1.103,0,2,.897,2,2Z"/>
</svg>

);
