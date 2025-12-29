import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMoneyCheckEdit = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,7v3h-3v-3h3Zm1.275,6.639l-7.275,7.275v3.086h3.086l7.275-7.275c.852-.852,.852-2.234,0-3.086s-2.234-.852-3.086,0Zm-6.275,.861c0-1.544-.984-2.909-2.448-3.397l-3.154-1.052c-.238-.08-.397-.301-.397-.551,0-.276,.225-.5,.5-.5h2c.275,0,.5,.224,.5,.5v.5h3v-.5c0-1.758-1.308-3.204-3-3.449v-1.051h-3v1.051c-1.692,.245-3,1.691-3,3.449,0,1.544,.984,2.909,2.448,3.397l3.154,1.052c.238,.08,.397,.301,.397,.551,0,.276-.225,.5-.5,.5h-2c-.275,0-.5-.224-.5-.5v-.5h-3v.5c0,1.758,1.308,3.204,3,3.449v1.051h3v-1.051c1.692-.245,3-1.691,3-3.449ZM20.5,1H3.5C1.57,1,0,2.57,0,4.5V23H11v-3H3V4.5c0-.276,.225-.5,.5-.5H20.5c.275,0,.5,.224,.5,.5v6.585c1.017-.201,2.091-.015,3,.542V4.5c0-1.93-1.57-3.5-3.5-3.5Z"/></svg>

);
