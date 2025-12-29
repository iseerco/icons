import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsGraphCurve = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m1.529,23h22.471v1H0V0h1v19.69c1.951-7.63,9.52-13.69,18-13.69h3.716l-3.556-3.638.715-.699,3.72,3.806c.581.581.581,1.532-.004,2.117l-3.737,3.737-.707-.707,3.616-3.616h-3.763C9.856,7,1.833,14.421,1.529,23Z"/>
</svg>

);
