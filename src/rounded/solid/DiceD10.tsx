import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DiceD10 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14.807,11.645l-2.8,2.105L9.194,11.644l2.812-7.718ZM7.26,11.11,11.068.657A1,1,0,0,1,12.007,0h0A3.986,3.986,0,0,0,8.914,1.462L1.991,9.708A4.973,4.973,0,0,0,1,12.147ZM12.948.659,16.741,11.11,23,12.146a5.081,5.081,0,0,0-1.013-2.47L15.1,1.469A3.984,3.984,0,0,0,12.01,0,1,1,0,0,1,12.948.659ZM11.008,15.5,7.742,13.057,1.171,14.146a5.11,5.11,0,0,0,1.172,2.04l6.788,6.72A3.961,3.961,0,0,0,11.008,24Zm5.251-2.444L13.008,15.5V24a3.912,3.912,0,0,0,1.855-1.076L21.7,16.149a4.976,4.976,0,0,0,1.143-2Z"/></svg>

);
