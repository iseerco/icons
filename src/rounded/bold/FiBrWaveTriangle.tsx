import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrWaveTriangle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m16.5,22c-.013,0-.027,0-.04,0-.541-.015-1.032-.319-1.286-.798L7.418,6.552l-4.632,7.72c-.426.709-1.347.941-2.058.514-.71-.426-.94-1.348-.514-2.058L6.214,2.728c.278-.464.787-.758,1.326-.728.541.015,1.032.319,1.286.798l7.756,14.65,4.632-7.72c.426-.709,1.348-.94,2.058-.514.71.426.94,1.348.514,2.058l-6,10c-.271.452-.76.728-1.286.728Z"/></svg>

);
