import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const InputNumeric = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m8,8v8c0,.553-.448,1-1,1s-1-.447-1-1v-5.586l-.293.293c-.391.391-1.023.391-1.414,0s-.391-1.023,0-1.414l2-2c.286-.286.714-.374,1.09-.217.374.154.617.52.617.924Zm16,0v8c0,2.757-2.243,5-5,5H5c-2.757,0-5-2.243-5-5v-8C0,5.243,2.243,3,5,3h14c2.757,0,5,2.243,5,5Zm-2,0c0-1.654-1.346-3-3-3H5c-1.654,0-3,1.346-3,3v8c0,1.654,1.346,3,3,3h14c1.654,0,3-1.346,3-3v-8Z"/></svg>

);
