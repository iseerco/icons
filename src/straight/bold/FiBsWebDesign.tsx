import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsWebDesign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20.5,1H3.5C1.57,1,0,2.57,0,4.5v18.5h24V4.5c0-1.93-1.57-3.5-3.5-3.5Zm-11,2c.828,0,1.5.672,1.5,1.5s-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5.672-1.5,1.5-1.5Zm-5,0c.828,0,1.5.672,1.5,1.5s-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5.672-1.5,1.5-1.5Zm16.5,17H3v-12h18v12Zm-8-7H5v-3h8v3Zm-8,5v-3h8v3H5Zm14,0h-4v-8h4v8Z"/>
</svg>

);
