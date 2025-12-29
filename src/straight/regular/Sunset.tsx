import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Sunset = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g><path d="M18.92,22a6.952,6.952,0,0,0-.433-1.619l4.4-2.559-1.006-1.728-4.4,2.56a7.046,7.046,0,0,0-1.14-1.137l2.553-4.39-1.729-1.005L14.61,16.51A6.95,6.95,0,0,0,13,16.08V11H11v5.08a6.914,6.914,0,0,0-1.6.425l-2.55-4.383L5.126,13.127l2.548,4.381a7.028,7.028,0,0,0-1.147,1.14L2.14,16.094,1.134,17.822l4.382,2.551A6.924,6.924,0,0,0,5.08,22H0v2H24V22ZM7.1,22a5,5,0,0,1,9.8,0Z"/><path d="M8.707,3.707,7.293,5.121l3.293,3.293a2,2,0,0,0,2.828,0l3.293-3.293L15.293,3.707,13,6V0H11V6Z"/></g></svg>

);
