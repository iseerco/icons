import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBs9 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.996,8C19.862,3.744,16.483,.185,12.351,.008c-2.154-.099-4.205,.66-5.782,2.119-1.578,1.46-2.488,3.445-2.563,5.591-.073,2.103,.737,4.207,2.225,5.771,1.484,1.562,3.54,2.477,5.64,2.511,1.914,.016,3.681-.587,5.131-1.753v1.254c0,3.032-2.468,5.499-5.5,5.499H6v3.001h5.5c4.687-.001,8.5-3.814,8.5-8.5l-.004-7.5Zm-7.996,5.005c-2.761,0-5-2.239-5-5s2.239-5,5-5,5,2.239,5,5-2.239,5-5,5Z"/></svg>

);
