import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Flute = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m13.551,4.215L0,17.765l6.235,6.236,13.551-13.55-6.236-6.236Zm-7.451,15.1l-1.414-1.414,1.5-1.5,1.414,1.414-1.5,1.5Zm2.5-2.5l-1.414-1.414,1.5-1.5,1.414,1.414-1.5,1.5Zm2.5-2.5l-1.414-1.414,1.5-1.5,1.414,1.414-1.5,1.5Zm1.086-3.914l1.5-1.5,1.414,1.414-1.5,1.5-1.414-1.414Zm2.813-7.565l.314.01c1.868.081,4.161-2.058,4.176-2.073l.622-.564,3.688,3.683-.572.623c-.012.014-2.128,2.3-2.071,4.175l.009.313-6.166-6.166Z"/>
</svg>

);
