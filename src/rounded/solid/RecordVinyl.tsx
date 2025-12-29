import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RecordVinyl = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16Zm1-4a1,1,0,1,1-1-1A1,1,0,0,1,13,12Z"/></svg>

);
