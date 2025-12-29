import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsLiraSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,13c0,5.607-4.487,10-10.214,10h-3.786V12.628l9-2.469v-1.053l-9,2.469v-3.053l9-2.469v-1.053L7,7.469V0h-1V7.743l-4,1.097v1.053l4-1.097v3.053l-4,1.097v1.053l4-1.097v11.097h4.786c6.289,0,11.214-4.832,11.214-11h-1Z"/></svg>

);
