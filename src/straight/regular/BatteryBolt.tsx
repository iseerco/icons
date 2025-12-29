import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BatteryBolt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,8v8h-2v1c0,1.654-1.346,3-3,3h-4.896l1.08-2h3.816c.552,0,1-.449,1-1V7c0-.551-.448-1-1-1h-4.909l1.087-2h3.822c1.654,0,3,1.346,3,3v1h2ZM2,6H7.262l1.08-2H0V20H7.268l1.087-2H2V6Zm12.762,6.016c-.336-.627-.976-1.016-1.668-1.016l-4.011,.05,3.287-6.042-1.757-.956-3.53,6.532c-.174,.574-.073,1.174,.277,1.646,.357,.481,.942,.769,1.563,.769h4.041l-3.029,6.107,1.792,.889,2.994-6.036c.356-.585,.374-1.323,.041-1.944Z"/></svg>

);
