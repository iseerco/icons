import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CloudDrizzle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M11,21h2v3H11ZM8,18h2V15H8ZM5,24H7V21H5Zm9-6h2V15H14Zm3,6h2V21H17Zm.441-18.941A8,8,0,0,0,2.265,10.05,5.5,5.5,0,0,0,4,19.792v-2.13a3.5,3.5,0,0,1-.089-6.282l.8-.408-.319-.838A6,6,0,0,1,10,2a6.035,6.035,0,0,1,5.752,4.289l.206.691L16.679,7A5.5,5.5,0,0,1,20,16.74v2.392A7.5,7.5,0,0,0,17.441,5.059Z"/></svg>

);
