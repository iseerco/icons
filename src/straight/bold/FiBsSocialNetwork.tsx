import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSocialNetwork = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15.543,7l.182-1.072a3.39,3.39,0,0,0-.035-1.46A3.451,3.451,0,0,0,9.226,3.8L7.59,7H3a3,3,0,0,0-3,3v9a3,3,0,0,0,3,3H22.02L24,11.345,24.025,7ZM3,10H7v9H3Zm18,.934L19.5,19H10V8.861L11.919,5.1a.446.446,0,0,1,.4-.243.445.445,0,0,1,.438.52L11.974,10H21Z"/></svg>

);
