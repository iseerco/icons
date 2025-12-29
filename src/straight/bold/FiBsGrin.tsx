import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsGrin = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M11.993,14A21.923,21.923,0,0,0,18,13c-.615,2.28-2.664,5-6,5s-5.392-2.72-6.007-5A21.841,21.841,0,0,0,11.993,14ZM8,11A2,2,0,0,0,8,7,2,2,0,0,0,8,11Zm8-4a2,2,0,0,0,0,4A2,2,0,0,0,16,7Zm8,5A12.013,12.013,0,0,1,12,24C-3.9,23.4-3.893.6,12,0A12.013,12.013,0,0,1,24,12Zm-3,0a9.01,9.01,0,0,0-9-9C.077,3.452.08,20.549,12,21A9.01,9.01,0,0,0,21,12Z"/></svg>

);
