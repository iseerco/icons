import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Eraser = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m14.353,21l8.716-8.746c1.206-1.21,1.206-3.179,0-4.389l-5.935-5.955c-1.17-1.175-3.213-1.175-4.383,0L.882,13.82c-1.206,1.21-1.206,3.179,0,4.389l4.774,4.791h18.344v-2h-9.647Zm-.186-17.677c.416-.416,1.135-.416,1.551,0l5.935,5.955c.43.431.43,1.134,0,1.565l-5.504,5.523-7.49-7.515,5.509-5.527Zm-7.681,17.677l-4.188-4.203c-.43-.431-.43-1.134,0-1.565l4.949-4.966,7.49,7.515-3.207,3.218h-5.043Z"/></svg>

);
