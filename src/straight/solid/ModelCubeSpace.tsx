import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ModelCubeSpace = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m11,16.005l-3-1.715v-3.424l3,1.714v3.425Zm5-5.139l-3,1.714v3.425l3-1.715v-3.424Zm-9.002-2.875l5.002-2.871,5.002,2.871,4.498-2.571L12-.009,2.5,5.42l4.498,2.571Zm11.002,1.732v5.727l-5,2.857v5.13l9.5-5.429V7.151l-4.5,2.571Zm-7,8.585l-5-2.857v-5.727L1.5,7.151v10.857l9.5,5.429v-5.13Zm-1.988-9.166l2.988,1.708,2.988-1.708-2.988-1.715-2.988,1.715Z"/>
</svg>

);
