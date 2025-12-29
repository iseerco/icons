import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CircleY = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12.038.02C5.421.02.038,5.402.038,12.02s5.383,12,12,12,12-5.383,12-12S18.655.02,12.038.02Zm0,22c-5.514,0-10-4.486-10-10S6.524,2.02,12.038,2.02s10,4.486,10,10-4.486,10-10,10Zm4.781-14.125l-3.781,4.727v4.398c0,.553-.447,1-1,1s-1-.447-1-1v-4.398l-3.781-4.727c-.345-.432-.274-1.061.156-1.406.433-.346,1.061-.274,1.406.156l3.219,4.024,3.219-4.024c.346-.429.974-.502,1.406-.156.431.346.501.975.156,1.406Z"/></svg>

);
