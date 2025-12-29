import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CircleWaveformLines = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,22c-5.514,0-10-4.486-10-10S6.486,2,12,2s10,4.486,10,10-4.486,10-10,10Zm-1-16v12c0,.552-.447,1-1,1s-1-.448-1-1V6c0-.552.447-1,1-1s1,.448,1,1Zm-4,3v6c0,.552-.447,1-1,1s-1-.448-1-1v-6c0-.552.447-1,1-1s1,.448,1,1Zm8-1v8c0,.552-.447,1-1,1s-1-.448-1-1v-8c0-.552.447-1,1-1s1,.448,1,1Zm4,3v3c0,.552-.447,1-1,1s-1-.448-1-1v-3c0-.552.447-1,1-1s1,.448,1,1Z"/>
</svg>

);
