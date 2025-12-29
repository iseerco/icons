import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCakeWedding = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,15.5a3.494,3.494,0,0,0-3-3.449V10.5a3.5,3.5,0,0,0-2.678-3.392l-.661-3.3A1,1,0,0,0,14.68,3h-.36a1,1,0,0,0-.981.8L12.7,7H10.75l.75-3a1,1,0,0,0-1-1h-2a1,1,0,0,0-1,1l.756,3.025A3.493,3.493,0,0,0,5,10.5v1.551A3.494,3.494,0,0,0,2,15.5V21H0v3H24V21H22ZM8.5,10h7a.5.5,0,0,1,.5.5V12H8V10.5A.5.5,0,0,1,8.5,10ZM5,17.666A2.923,2.923,0,0,0,6.333,18a2.765,2.765,0,0,0,2.834-2.5A2.778,2.778,0,0,0,12,18a2.764,2.764,0,0,0,2.833-2.5A2.779,2.779,0,0,0,17.667,18,2.923,2.923,0,0,0,19,17.666V21H5Z"/><circle cx="9.5" cy="1.5" r="1.5"/><circle cx="14.5" cy="1.5" r="1.5"/></svg>

);
