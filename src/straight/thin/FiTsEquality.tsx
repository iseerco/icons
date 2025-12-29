import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsEquality = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.832,2h-7.332V0h-1V2H4.168L.039,11.806l-.039,.694c0,2.481,2.019,4.5,4.5,4.5s4.5-2.019,4.5-4.5v-.5L5.25,3h6.25V23H4v1H20v-1h-7.5V3h6.247l-3.708,8.806-.039,.694c0,2.481,2.019,4.5,4.5,4.5s4.5-2.019,4.5-4.5v-.5L19.832,2ZM4.5,16c-1.76,0-3.221-1.306-3.465-3H7.965c-.244,1.694-1.705,3-3.465,3ZM1.043,12L4.5,3.789l3.457,8.211H1.043ZM19.5,3.789l3.457,8.211h-6.914l3.457-8.211Zm0,12.211c-1.76,0-3.221-1.306-3.465-3h6.93c-.244,1.694-1.705,3-3.465,3Z"/></svg>

);
