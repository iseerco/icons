import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrTurnLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,12.5v9c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-9c0-1.93-1.57-3.5-3.5-3.5H1.25l6.104,6.147c.195.196.193.513-.002.708-.098.097-.226.145-.353.145-.129,0-.257-.049-.354-.147L.469,9.631c-.302-.301-.469-.703-.469-1.131s.167-.831.47-1.133L6.646,1.147c.194-.195.511-.197.707-.002.195.195.197.511.002.708L1.25,8h18.25c2.481,0,4.5,2.019,4.5,4.5Z"/>
</svg>

);
