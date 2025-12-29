import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Flask = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m17,9.04V2h2V0H5v2h2v7.04c-.947.829-3.497,3.181-5.242,5.909h18.057c.49.654.937,1.329,1.298,2H.678c-.42.973-.678,1.958-.678,2.908,0,3.035,2.765,4.044,2.882,4.086l.162.057h17.912l.162-.057c.117-.042,2.882-1.051,2.882-4.086,0-4.39-5.503-9.506-7-10.817Z"/>
</svg>

);
