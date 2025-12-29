import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrMehBlank = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10,9A2,2,0,0,1,6,9,2,2,0,0,1,10,9Zm6-2a2,2,0,0,0,0,4A2,2,0,0,0,16,7Zm8,5A12.013,12.013,0,0,0,12,0C-3.9.6-3.893,23.4,12,24A12.013,12.013,0,0,0,24,12Zm-3,0a9.01,9.01,0,0,1-9,9C.076,20.548.081,3.45,12,3A9.01,9.01,0,0,1,21,12Z"/></svg>

);
