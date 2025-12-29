import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrTurnRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.531,9.633l-6.176,6.22c-.098.099-.227.147-.355.147-.127,0-.255-.049-.353-.146-.196-.194-.197-.511-.002-.707l6.104-6.147H4.5c-1.93,0-3.5,1.57-3.5,3.5v9c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-9c0-2.481,2.019-4.5,4.5-4.5h18.25l-6.105-6.147c-.194-.196-.193-.513.002-.708.196-.194.511-.194.708.002l6.177,6.221c.623.624.623,1.64-.001,2.265Z"/>
</svg>

);
