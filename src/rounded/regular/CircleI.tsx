import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CircleI = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m13.039,8.019v8h1.999c.553,0,1,.447,1,1s-.447,1-1,1h-6c-.552,0-1-.447-1-1s.448-1,1-1h2v-8h-2c-.552,0-1-.448-1-1s.448-1,1-1h6c.553,0,1,.448,1,1s-.447,1-1,1h-1.999Zm10.999,4c0,6.617-5.383,12-12,12S.039,18.636.039,12.019,5.422.019,12.039.019s12,5.383,12,12Zm-2,0c0-5.514-4.485-10-10-10S2.039,6.505,2.039,12.019s4.486,10,10,10,10-4.486,10-10Z"/></svg>

);
