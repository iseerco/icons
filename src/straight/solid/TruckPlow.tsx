import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TruckPlow = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24.02,21.605,22.605,23.02,20,20.414V16H18v2H0V14a3,3,0,0,1,3-3H15a3,3,0,0,1,3,3h2V9.586l2.543-2.543,1.414,1.414L22,10.414v9.172ZM2.058,20c-.587,3.954,5.472,3.952,4.884,0Zm9,0c-.587,3.954,5.472,3.952,4.884,0ZM10.84,3.285A3,3,0,0,0,8.379,2H4V9H14.824Z"/></svg>

);
