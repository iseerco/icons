import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSensorAlert = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,2.5V20.61l-1-1.714V2.5c0-.827-.673-1.5-1.5-1.5H2.5c-.827,0-1.5,.673-1.5,1.5V23H5.606l-.583,1H0V2.5C0,1.122,1.122,0,2.5,0H21.5c1.379,0,2.5,1.122,2.5,2.5ZM3,4c0,.552,.448,1,1,1s1-.448,1-1-.448-1-1-1-1,.448-1,1Zm6,0c0-.552-.448-1-1-1s-1,.448-1,1,.448,1,1,1,1-.448,1-1Zm-1.662,20h5.662v-1h-3.921l6.421-11.008,6.422,11.008h-3.922v1h5.662L15.5,10.008,7.338,24Zm8.662-8h-1v5h1v-5Zm-.5,6c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Z"/></svg>

);
