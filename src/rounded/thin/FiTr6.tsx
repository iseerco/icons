import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTr6 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M4.007,16.083c.168,4.268,3.447,7.711,7.604,7.908,2.363,.105,4.638-.814,6.244-2.54,1.607-1.725,2.367-4.069,2.086-6.43-.432-3.632-3.386-6.563-7.022-6.969-2.313-.256-4.531,.447-6.251,1.984-.676,.605-1.237,1.314-1.668,2.093v-2.63C5,4.812,8.813,1,13.5,1h4c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5h-4C8.262,0,4,4.261,4,9.499c0,0,.002,6.557,.007,6.584Zm7.987-7.083c3.866,0,7,3.134,7,7s-3.134,7-7,7-7-3.134-7-7,3.134-7,7-7Z"/></svg>

);
