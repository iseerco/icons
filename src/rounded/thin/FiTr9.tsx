import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTr9 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.993,7.917C19.825,3.65,16.546,.206,12.389,.009c-2.363-.105-4.638,.814-6.244,2.54-1.607,1.725-2.367,4.069-2.086,6.43,.432,3.632,3.386,6.563,7.022,6.969,2.313,.256,4.531-.447,6.251-1.984,.676-.605,1.237-1.314,1.668-2.093v2.63c0,4.686-3.813,8.499-8.5,8.499H6.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h4c5.238,0,9.5-4.261,9.5-9.499,0,0-.002-6.557-.007-6.584Zm-7.987,7.083c-3.866,0-7-3.134-7-7S8.14,1,12.006,1s7,3.134,7,7-3.134,7-7,7Z"/></svg>

);
