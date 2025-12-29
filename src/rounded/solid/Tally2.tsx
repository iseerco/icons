import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Tally2 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m1,24c-.552,0-1-.448-1-1V1C0,.448.448,0,1,0s1,.448,1,1v22c0,.552-.448,1-1,1Zm8-1V1c0-.552-.448-1-1-1s-1,.448-1,1v22c0,.552.448,1,1,1s1-.448,1-1Z"/></svg>

);
