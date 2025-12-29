import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const WrenchSimple = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15,1.076V7.83c0,1.624-1.216,3.081-2.839,3.166-1.73,.091-3.161-1.285-3.161-2.996V1.076c0-.804-.844-1.304-1.567-.953C3.645,1.962,1,5.81,1,10.073c0,4.146,2.295,7.898,5.988,9.792,.614,.315,1.012,.997,1.012,1.736v1.398c0,.552,.448,1,1,1h6c.552,0,1-.448,1-1v-1.398c0-.739,.397-1.421,1.012-1.736,3.693-1.894,5.988-5.646,5.988-9.792C23,5.81,20.355,1.962,16.567,.123c-.723-.351-1.567,.15-1.567,.953Z"/></svg>

);
