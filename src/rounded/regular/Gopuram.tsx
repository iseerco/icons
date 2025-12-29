import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Gopuram = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22,16.556v-3.556c0-1.474-.81-2.75-2-3.444V1c0-.552-.447-1-1-1s-1,.448-1,1v1h-2v-1c0-.552-.447-1-1-1s-1,.448-1,1v1h-4v-1c0-.552-.448-1-1-1s-1,.448-1,1v1h-2v-1c0-.552-.448-1-1-1s-1,.448-1,1v8.556c-1.19.694-2,1.97-2,3.444v3.556c-1.19.694-2,1.97-2,3.444v3c0,.552.448,1,1,1s1-.448,1-1v-3c0-1.103.897-2,2-2h16c1.103,0,2,.897,2,2v3c0,.552.447,1,1,1s1-.448,1-1v-3c0-1.474-.81-2.75-2-3.444ZM6,4h12v5h-4v-1c0-1.105-.895-2-2-2s-2,.895-2,2v1h-4v-5Zm8,12v-1c0-1.105-.895-2-2-2s-2,.895-2,2v1h-6v-3c0-1.103.897-2,2-2h12c1.103,0,2,.897,2,2v3h-6Zm0,6v1c0,.552-.448,1-1,1h-2c-.552,0-1-.448-1-1v-1c0-1.105.895-2,2-2s2,.895,2,2Z"/>
</svg>

);
