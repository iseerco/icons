import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrLessThan = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.891,23.062c-.235.584-.798.938-1.392.938-.187,0-.377-.035-.561-.109L2.783,16.155C1.08,15.467-.021,13.836-.021,12s1.101-3.467,2.803-4.155L21.938.109c.767-.311,1.643.062,1.952.829.311.768-.061,1.643-.829,1.952L3.906,10.626c-.859.348-.927,1.14-.927,1.374s.067,1.026.928,1.374l19.154,7.735c.769.31,1.14,1.185.829,1.952Z"/>
</svg>

);
