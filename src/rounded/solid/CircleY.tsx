import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CircleY = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm4.781,7.875l-3.781,4.727v4.398c0,.553-.447,1-1,1s-1-.447-1-1v-4.398l-3.781-4.727c-.345-.432-.274-1.061.156-1.406.433-.346,1.061-.274,1.406.156l3.219,4.024,3.219-4.024c.347-.429.975-.502,1.406-.156.431.346.501.975.156,1.406Z"/></svg>

);
