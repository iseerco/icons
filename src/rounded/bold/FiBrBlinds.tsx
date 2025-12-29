import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrBlinds = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,17.338V5c0-2.757-2.243-5-5-5H5C2.243,0,0,2.243,0,5v13c0,2.757,2.243,5,5,5H13.5c.828,0,1.5-.672,1.5-1.5s-.672-1.5-1.5-1.5H5c-1.103,0-2-.897-2-2H15.5c.828,0,1.5-.672,1.5-1.5V3c1.103,0,2,.897,2,2v12.338c-1.181,.563-2,1.769-2,3.162,0,1.93,1.57,3.5,3.5,3.5s3.5-1.57,3.5-3.5c0-1.393-.819-2.599-2-3.162Zm-8-7.338H3v-2H14v2ZM3,15v-2H14v2H3ZM14,5H3c0-1.103,.897-2,2-2H14v2Z"/></svg>

);
