import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ManatSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,13v10c0,.55-.45,1-1,1s-1-.45-1-1V13c0-4.07-3.06-7.44-7-7.94V23c0,.55-.45,1-1,1s-1-.45-1-1V5.06c-3.94,.49-7,3.87-7,7.94v10c0,.55-.45,1-1,1s-1-.45-1-1V13C2,7.82,5.95,3.55,11,3.05V1c0-.55,.45-1,1-1s1,.45,1,1V3.05c5.05,.5,9,4.77,9,9.95Z"/></svg>

);
