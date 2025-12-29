import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Waffle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m10,10h4v4h-4v-4Zm10.485,10.485c-2.339,2.339-5.413,3.509-8.485,3.509s-6.146-1.169-8.485-3.509C-1.164,15.807-1.164,8.193,3.515,3.515,8.194-1.165,15.807-1.164,20.485,3.515c4.678,4.679,4.678,12.292,0,16.971Zm-1.485-12.485h-3v-3h-2v3h-4v-3h-2v3h-3v2h3v4h-3v2h3v3h2v-3h4v3h2v-3h3v-2h-3v-4h3v-2Z"/>
</svg>

);
