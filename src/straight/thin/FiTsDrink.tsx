import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsDrink = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,0V.5c0,1.469,.623,2.879,1.711,3.868L11.5,13.267v9.733H6v1h12v-1h-5.5V13.267L22.289,4.368c1.088-.989,1.711-2.398,1.711-3.868V0H0ZM21.617,3.627L12,12.37,2.793,4h15.707l1-1H1.819c-.429-.586-.702-1.276-.788-2H22.97c-.12,1.003-.598,1.941-1.353,2.627Z"/></svg>

);
