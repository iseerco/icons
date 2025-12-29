import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const InputNumeric = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19,3H5C2.243,3,0,5.243,0,8v8c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5v-8c0-2.757-2.243-5-5-5Zm-11,13c0,.553-.448,1-1,1s-1-.447-1-1v-5.586l-.293.293c-.391.391-1.023.391-1.414,0s-.391-1.023,0-1.414l2-2c.286-.286.714-.374,1.09-.217.374.154.617.52.617.924v8Z"/></svg>

);
