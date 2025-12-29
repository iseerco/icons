import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BatteryThreeQuarters = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M5,8h7c.552,0,1,.448,1,1v6c0,.552-.448,1-1,1H5c-.552,0-1-.448-1-1v-6c0-.552,.448-1,1-1Zm19,1v6c0,.552-.448,1-1,1h-1.101c-.465,2.279-2.485,4-4.899,4H5c-2.757,0-5-2.243-5-5v-6c0-2.757,2.243-5,5-5h12c2.414,0,4.435,1.721,4.899,4h1.101c.552,0,1,.448,1,1Zm-9,0c0-1.657-1.343-3-3-3H5c-1.657,0-3,1.343-3,3v6c0,1.657,1.343,3,3,3h7c1.657,0,3-1.343,3-3v-6Z"/></svg>

);
