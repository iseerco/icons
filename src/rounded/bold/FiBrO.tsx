import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrO = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12.021,24c-5.525,0-10.021-4.526-10.021-10.091v-3.818c.507-13.352,19.5-13.383,20,0v3.818c0,5.564-4.477,10.091-9.979,10.091Zm0-21c-3.871,0-7.021,3.181-7.021,7.091v3.818c.278,9.333,13.777,9.427,14,0v-3.818c0-3.976-3.065-7.091-6.979-7.091Z"/></svg>

);
