import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GraphCurve = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m3.058,22h20.942v2H0V0h2v17.495c2.582-7.085,9.886-12.495,18-12.495h1.001l-2.218-2.277,1.433-1.395,3.207,3.293c.771.77.771,2.039-.009,2.818l-3.25,3.25-1.414-1.414,2.275-2.275h-1.025C11.301,7,3.65,13.902,3.058,22Z"/>
</svg>

);
