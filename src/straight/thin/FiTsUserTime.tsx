import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsUserTime = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m8.5,11c3.033,0,5.5-2.468,5.5-5.5S11.533,0,8.5,0,3,2.468,3,5.5s2.467,5.5,5.5,5.5Zm0-10c2.481,0,4.5,2.019,4.5,4.5s-2.019,4.5-4.5,4.5-4.5-2.019-4.5-4.5S6.019,1,8.5,1Zm9,10c-3.584,0-6.5,2.916-6.5,6.5s2.916,6.5,6.5,6.5,6.5-2.916,6.5-6.5-2.916-6.5-6.5-6.5Zm0,12c-3.033,0-5.5-2.468-5.5-5.5s2.467-5.5,5.5-5.5,5.5,2.468,5.5,5.5-2.467,5.5-5.5,5.5Zm.5-5.707l1.854,1.854-.707.707-2.146-2.146v-3.707h1v3.293Zm-7.702-4.293c-.2.32-.381.653-.538,1h-5.26c-1.93,0-3.5,1.57-3.5,3.5v6.5H0v-6.5c0-2.481,2.019-4.5,4.5-4.5h5.798Z"/>
</svg>

);
