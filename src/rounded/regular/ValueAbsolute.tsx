import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ValueAbsolute = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m16.707,8.707l-3.293,3.293,3.293,3.293c.391.391.391,1.023,0,1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-3.293-3.293-3.293,3.293c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023,0-1.414l3.293-3.293-3.293-3.293c-.391-.391-.391-1.023,0-1.414s1.023-.391,1.414,0l3.293,3.293,3.293-3.293c.391-.391,1.023-.391,1.414,0s.391,1.023,0,1.414ZM1,0C.447,0,0,.448,0,1v22c0,.552.447,1,1,1s1-.448,1-1V1c0-.552-.447-1-1-1Zm22,0c-.553,0-1,.448-1,1v22c0,.552.447,1,1,1s1-.448,1-1V1c0-.552-.447-1-1-1Z"/></svg>

);
