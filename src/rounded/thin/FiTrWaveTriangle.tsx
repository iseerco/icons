import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrWaveTriangle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m17,22h-.012c-.181-.004-.346-.107-.43-.267L6.975,3.525.931,13.754c-.141.238-.446.316-.685.176-.238-.141-.316-.447-.176-.685L6.569,2.246c.092-.156.276-.245.443-.246.181.004.346.107.43.267l9.583,18.208,6.044-10.229c.142-.237.448-.315.685-.176.238.141.316.447.176.685l-6.5,11c-.09.152-.254.246-.431.246Z"/></svg>

);
