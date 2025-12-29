import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChessKnightAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20,18H4V16.646a2.978,2.978,0,0,1,2.135-2.87,5.416,5.416,0,0,0,4.086-4.753H4V8.049A3.013,3.013,0,0,1,5.91,5.256C7.76,4.505,8.9,3.569,9.593.781L9.781.023h.781C19.892.023,20,8.438,20,8.523Zm2,6H2V23a3,3,0,0,1,3-3H19a3,3,0,0,1,3,3Z"/></svg>

);
