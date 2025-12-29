import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Eraser = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m7.242,7.438L12.751,1.911c1.17-1.175,3.213-1.175,4.383,0l5.935,5.955c1.206,1.21,1.206,3.179,0,4.389l-5.506,5.525L7.242,7.438Zm7.111,13.562l1.798-1.804L5.83,8.855.882,13.82c-1.206,1.21-1.206,3.179,0,4.389l4.774,4.791h18.344v-2h-9.647Z"/></svg>

);
