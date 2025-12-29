import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsChartSimpleHorizontal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,9H0v6H22c1.1,0,2-.9,2-2v-2c0-1.1-.9-2-2-2Zm1,4c0,.55-.45,1-1,1H1v-4H22c.55,0,1,.45,1,1v2Zm-5-9V2c0-1.1-.9-2-2-2H0V6H16c1.1,0,2-.9,2-2ZM1,1h15c.55,0,1,.45,1,1v2c0,.55-.45,1-1,1H1V1ZM10,18H0v6H10c1.1,0,2-.9,2-2v-2c0-1.1-.9-2-2-2Zm1,4c0,.55-.45,1-1,1H1v-4H10c.55,0,1,.45,1,1v2Z"/></svg>

);
