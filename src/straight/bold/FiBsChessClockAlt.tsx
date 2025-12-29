import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsChessClockAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,8.5A3.5,3.5,0,0,0,20.5,5H19V3h2V0H14V3h2V5H10V3H4V5H3.5A3.5,3.5,0,0,0,0,8.5V22H2v2H5V22H19v2h3V22h2ZM3,8.5A.5.5,0,0,1,3.5,8h17a.5.5,0,0,1,.5.5V19H3ZM16.5,10a3.5,3.5,0,1,1-3.343,4.482l1.884-.942-1.906-.952A3.492,3.492,0,0,1,16.5,10Zm-9,0a3.5,3.5,0,0,1,0,7,3.456,3.456,0,0,1-1.669-.442l.666-2-2.02.674A3.465,3.465,0,0,1,4,13.5,3.5,3.5,0,0,1,7.5,10Z"/></svg>

);
