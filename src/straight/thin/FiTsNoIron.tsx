import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsNoIron = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M22.707,22h1.293V7.5c0-3.032-2.468-5.5-5.5-5.5H8v1h10.5c2.481,0,4.5,2.019,4.5,4.5v2.5H10.707L.703-.004-.004,.703,23.297,24.004l.707-.707-1.297-1.297Zm.293-11v10h-1.293L11.707,11h11.293Zm-11,6c-.552,0-1-.448-1-1s.448-1,1-1,1,.448,1,1-.448,1-1,1Zm-5-1c0-.552,.448-1,1-1s1,.448,1,1-.448,1-1,1-1-.448-1-1Zm10.465,5l1,1H0v-2c0-4.448,2.922-8.225,6.946-9.519l.813,.813c-3.88,1-6.759,4.518-6.759,8.706v1H17.465Z"/>
</svg>

);
