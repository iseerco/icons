import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCheckDouble = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23.354,7.691l-13.577,13.577c-.473.473-1.1.732-1.768.732h-.005c-.669,0-1.297-.264-1.769-.738L.666,15.65l.71-.705,5.569,5.611c.283.285.659.442,1.061.443h.003c.401,0,.777-.156,1.061-.439l13.577-13.577.707.707Zm-15.359,3.31h.014c.668,0,1.295-.26,1.768-.732L17.976,2.068l-.707-.707-8.2,8.2c-.284.284-.66.439-1.061.439h-.008c-.404-.002-.781-.162-1.063-.451L2.858,5.385l-.715.699,4.078,4.165c.471.481,1.1.748,1.773.751Z"/></svg>

);
