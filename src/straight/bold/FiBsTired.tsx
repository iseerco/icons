import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTired = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17,18a16.352,16.352,0,0,0-5-1,16.352,16.352,0,0,0-5,1,5.425,5.425,0,0,1,5.006-4A5.409,5.409,0,0,1,17,18Zm7-6A12.013,12.013,0,0,1,12,24C-3.9,23.4-3.893.6,12,0A12.013,12.013,0,0,1,24,12Zm-3,0a9.01,9.01,0,0,0-9-9C.077,3.452.08,20.549,12,21A9.01,9.01,0,0,0,21,12Zm-8-2c0,2.267,3.369,3,5,3-2.607-2.759-2.59-3.254,0-6C16.369,7,13,7.733,13,10Zm-2,0c0-2.267-3.369-3-5-3,2.607,2.759,2.59,3.254,0,6C7.631,13,11,12.267,11,10Z"/></svg>

);
