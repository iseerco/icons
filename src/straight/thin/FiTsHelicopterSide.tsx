import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsHelicopterSide = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,3v-1H15V1h-1v1H6v1H14v3H1v-2H0v5.904l7,1.5v1.096c0,2.864,2.201,5.224,5,5.477v4.023H7v1h14.5c1.379,0,2.5-1.122,2.5-2.5v-.5h-1v.5c0,.827-.673,1.5-1.5,1.5h-2.5v-4h1.5c1.93,0,3.5-1.57,3.5-3.5v-1c0-4.136-3.364-7.5-7.5-7.5h-1.5V3h9Zm-6,19h-5v-4h5v4Zm2.5-5H12.5c-2.481,0-4.5-2.019-4.5-4.5v-1.904l-7-1.5v-2.096H14v7h9v.5c0,1.378-1.121,2.5-2.5,2.5Zm-4-10c3.416,0,6.225,2.649,6.481,6h-7.981V7h1.5Z"/></svg>

);
