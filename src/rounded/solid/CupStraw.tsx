import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CupStraw = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22,5h-7.494l.266-2.124c.062-.5.489-.876.992-.876h3.235c.553,0,1-.448,1-1s-.447-1-1-1h-3.235c-1.509,0-2.788,1.129-2.977,2.627l-.297,2.373H2c-.553,0-1,.448-1,1s.447,1,1,1h.611l1.486,12.586c.298,2.516,2.433,4.414,4.966,4.414h5.875c2.533,0,4.668-1.897,4.966-4.414l1.486-12.586h.611c.553,0,1-.448,1-1s-.447-1-1-1Z"/>
</svg>

);
