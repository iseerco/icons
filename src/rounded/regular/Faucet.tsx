import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Faucet = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20.652,18.266s1.848,2.234,1.848,3.234c0,.64-.244,1.28-.732,1.768s-1.128.732-1.768.732c-.64,0-1.28-.244-1.768-.732s-.732-1.128-.732-1.768c0-1,1.848-3.234,1.848-3.234.362-.354.942-.354,1.304,0Zm3.348-4.266c0,1.103-.897,2-2,2h-4c-1.103,0-2-.897-2-2,0-.552-.449-1-1-1H1c-.552,0-1-.447-1-1s.448-1,1-1h8v-4H1c-.552,0-1-.447-1-1s.448-1,1-1h8v-3h-4c-.552,0-1-.447-1-1s.448-1,1-1h10c.552,0,1,.447,1,1s-.448,1-1,1h-4v3h4c4.962,0,9,4.037,9,9Zm-2,0c0-3.859-3.14-7-7-7h-4v4h4c1.654,0,3,1.346,3,3h4Z"/>
</svg>

);
