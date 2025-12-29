import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const NotEqual = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23,15h-11.265l2.727-6h8.538c.553,0,1-.447,1-1s-.447-1-1-1h-7.629l2.539-5.586c.229-.503.007-1.096-.496-1.324-.508-.231-1.097-.005-1.324.496l-2.915,6.414H1c-.553,0-1,.447-1,1s.447,1,1,1h11.265l-2.727,6H1c-.553,0-1,.447-1,1s.447,1,1,1h7.629l-2.539,5.586c-.229.503-.007,1.096.496,1.324.135.062.275.09.413.09.381,0,.744-.218.911-.586l2.915-6.414h12.174c.553,0,1-.447,1-1s-.447-1-1-1Z"/>
</svg>

);
