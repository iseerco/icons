import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const AngleDoubleSmallUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17.281,11.281l-5.281-5.281-5.281,5.281-1.414-1.414,5.281-5.281c.756-.756,2.072-.756,2.828,0l5.281,5.281-1.414,1.414Zm1.414,5.591l-5.871-5.871c-.455-.455-1.193-.455-1.648,0l-5.871,5.871,1.414,1.414,5.281-5.281,5.281,5.281,1.414-1.414Z"/></svg>

);
