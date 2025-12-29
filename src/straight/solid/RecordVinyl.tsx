import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RecordVinyl = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,9a3,3,0,1,0,3,3A3,3,0,0,0,12,9Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,12,13ZM12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,17a5,5,0,1,1,5-5A5.006,5.006,0,0,1,12,17Z"/></svg>

);
