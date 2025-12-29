import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ContainerStorage = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23,19V5c.552,0,1-.448,1-1s-.448-1-1-1H1c-.552,0-1,.448-1,1s.448,1,1,1v14c-.552,0-1,.448-1,1s.448,1,1,1h22c.552,0,1-.448,1-1s-.448-1-1-1Zm-15-3c0,.552-.448,1-1,1s-1-.448-1-1v-8c0-.552.448-1,1-1s1,.448,1,1v8Zm5,0c0,.552-.448,1-1,1s-1-.448-1-1v-8c0-.552.448-1,1-1s1,.448,1,1v8Zm5,0c0,.552-.448,1-1,1s-1-.448-1-1v-8c0-.552.448-1,1-1s1,.448,1,1v8Z"/>
</svg>

);
