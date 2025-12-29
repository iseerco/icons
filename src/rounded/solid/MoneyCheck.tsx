import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MoneyCheck = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,2H5C2.243,2,0,4.243,0,7v10c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V7c0-2.757-2.243-5-5-5ZM4,11h6c.552,0,1,.448,1,1s-.448,1-1,1H4c-.552,0-1-.448-1-1s.448-1,1-1Zm16,6H4c-.552,0-1-.448-1-1s.448-1,1-1H20c.552,0,1,.448,1,1s-.448,1-1,1Zm1-6c0,1.103-.897,2-2,2h-4c-1.103,0-2-.897-2-2v-2c0-1.103,.897-2,2-2h4c1.103,0,2,.897,2,2v2Zm-2-2v2h-4v-2h4Z"/></svg>

);
