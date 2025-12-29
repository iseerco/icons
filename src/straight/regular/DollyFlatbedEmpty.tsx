import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DollyFlatbedEmpty = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,18H6c-.551,0-1-.448-1-1V3c0-1.654-1.346-3-3-3H0v2h2c.551,0,1,.448,1,1v14c0,1.654,1.346,3,3,3v.5c0,1.93,1.57,3.5,3.5,3.5s3.5-1.57,3.5-3.5v-.5h3v.5c0,1.93,1.57,3.5,3.5,3.5s3.5-1.57,3.5-3.5v-.5h1v-2Zm-13,2.5c0,.827-.673,1.5-1.5,1.5s-1.5-.673-1.5-1.5v-.5h3v.5Zm10,0c0,.827-.673,1.5-1.5,1.5s-1.5-.673-1.5-1.5v-.5h3v.5Z"/>
</svg>

);
