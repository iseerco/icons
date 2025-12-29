import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const EnvelopePlus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,4V6H20v4H18V6H14V4h4V0h2V4ZM12,15.422a3,3,0,0,0,2.122-.876L16.969,11.7A6.991,6.991,0,0,1,12.294,3H3A3,3,0,0,0,.219,4.886l9.659,9.66A3,3,0,0,0,12,15.422Zm3.536.538a5.007,5.007,0,0,1-7.072,0L0,7.5V24H24V9.894a6.972,6.972,0,0,1-4.478,2.08Z"/></svg>

);
