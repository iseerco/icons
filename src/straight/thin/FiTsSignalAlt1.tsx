import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSignalAlt1 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22,0h-2c-1.103,0-2,.897-2,2v22h6V2c0-1.103-.897-2-2-2Zm1,23h-4V2c0-.551.449-1,1-1h2c.551,0,1,.449,1,1v21Zm-8-15v16h-6V8c0-1.103.897-2,2-2h2c1.103,0,2,.897,2,2Zm-9,6v10H0v-10c0-1.103.897-2,2-2h2c1.103,0,2,.897,2,2Z"/>
</svg>

);
