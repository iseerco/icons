import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMehBlank = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10,10a2,2,0,0,1-4,0A2,2,0,0,1,10,10Zm6-2a2,2,0,0,0,0,4A2,2,0,0,0,16,8Zm8,4A12.013,12.013,0,0,1,12,24C-3.9,23.4-3.894.6,12,0A12.013,12.013,0,0,1,24,12Zm-3,0a9.01,9.01,0,0,0-9-9C.077,3.452.08,20.55,12,21A9.01,9.01,0,0,0,21,12Z"/></svg>

);
