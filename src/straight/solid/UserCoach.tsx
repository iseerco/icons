import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const UserCoach = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,18.5v5.5H3v-5.5c0-2.103,1.456-3.86,3.409-4.351l3.053,4.851,2.5-3,2.5,3,3.122-4.853c1.957.488,3.416,2.247,3.416,4.353ZM6.084,5c.477-2.834,2.948-5,5.916-5,2.216,0,4.155,1.208,5.194,3h2.806v2H6.084Zm0,2h11.832c-.477,2.834-2.948,5-5.916,5s-5.439-2.166-5.916-5Z"/>
</svg>

);
