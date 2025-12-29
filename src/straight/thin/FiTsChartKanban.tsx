import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsChartKanban = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22,0h-2c-1.103,0-2,.897-2,2v22h6V2c0-1.103-.897-2-2-2Zm1,23h-4V2c0-.551.448-1,1-1h2c.552,0,1,.449,1,1v21ZM4,0h-2C.897,0,0,.897,0,2v16h6V2c0-1.103-.897-2-2-2Zm1,17H1V2c0-.551.449-1,1-1h2c.551,0,1,.449,1,1v15ZM13,0h-2c-1.103,0-2,.897-2,2v10h6V2c0-1.103-.897-2-2-2Zm1,11h-4V2c0-.551.449-1,1-1h2c.552,0,1,.449,1,1v9Z"/>
</svg>

);
