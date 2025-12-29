import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BatteryBolt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,8v-1c0-1.654-1.346-3-3-3H0V20H19c1.654,0,3-1.346,3-3v-1h2V8h-2Zm-7.897,5.969l-2.327,4.491-1.775-.92,2.353-4.54h-3.429c-.621,0-1.206-.288-1.563-.769-.35-.472-.451-1.072-.277-1.646l2.524-5.036,1.785,.901-2.321,4.549h3.41c.692,0,1.332,.389,1.668,1.016,.335,.624,.315,1.366-.047,1.953Z"/></svg>

);
