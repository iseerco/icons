import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SdCard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m16,0h-5.344c-1.326,0-2.598.527-3.536,1.465l-2.656,2.657c-.937.938-1.464,2.209-1.464,3.535v11.343c0,2.761,2.239,5,5,5h8c2.761,0,5-2.239,5-5V5c0-2.761-2.239-5-5-5Zm-6,6c0,.552-.447,1-1,1s-1-.448-1-1v-2c0-.552.447-1,1-1s1,.448,1,1v2Zm4,0c0,.552-.447,1-1,1s-1-.448-1-1v-2c0-.552.447-1,1-1s1,.448,1,1v2Zm4,0c0,.552-.447,1-1,1s-1-.448-1-1v-2c0-.552.447-1,1-1s1,.448,1,1v2Z"/>
</svg>

);
