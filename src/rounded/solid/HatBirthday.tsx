import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HatBirthday = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.43,15.33,14.319,24H10.405l8.071-11.47Zm-5.165-7.4L4.046,23.89A5.432,5.432,0,0,0,5.127,24H7.961l9.3-13.214Zm6.382,9.144L16.766,24h2.107A3.989,3.989,0,0,0,22.6,22.019a4.122,4.122,0,0,0-.465-4.241ZM15,3a3,3,0,1,0-4.592,2.534L1.861,17.778A4.122,4.122,0,0,0,1.4,22.019a3.38,3.38,0,0,0,.813,1.006L14.046,6.184l-.454-.65A2.989,2.989,0,0,0,15,3Z"/></svg>

);
