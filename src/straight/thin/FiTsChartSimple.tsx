import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsChartSimple = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13,0h-2c-1.1,0-2,.9-2,2V24h6V2c0-1.1-.9-2-2-2Zm1,23h-4V2c0-.55,.45-1,1-1h2c.55,0,1,.45,1,1V23ZM22,6h-2c-1.1,0-2,.9-2,2V24h6V8c0-1.1-.9-2-2-2Zm1,17h-4V8c0-.55,.45-1,1-1h2c.55,0,1,.45,1,1v15ZM4,12H2c-1.1,0-2,.9-2,2v10H6V14c0-1.1-.9-2-2-2Zm1,11H1V14c0-.55,.45-1,1-1h2c.55,0,1,.45,1,1v9Z"/></svg>

);
