import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const UserInterfaceUi = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19,0H5C2.243,0,0,2.243,0,5v14c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5Zm-5,13c0,2.206-1.794,4-4,4s-4-1.794-4-4v-5c0-.552.448-1,1-1s1,.448,1,1v5c0,1.103.897,2,2,2s2-.897,2-2v-5c0-.552.448-1,1-1s1,.448,1,1v5Zm4,3c0,.552-.448,1-1,1s-1-.448-1-1v-8c0-.552.448-1,1-1s1,.448,1,1v8Z"/>
</svg>

);
