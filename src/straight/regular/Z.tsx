import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Z = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,24H4.388c-.976,0-1.847-.583-2.221-1.484-.373-.901-.168-1.929,.521-2.618L19.897,2.688c.166-.166,.126-.347,.087-.439s-.138-.249-.373-.249H2V0H19.612c.976,0,1.847,.583,2.221,1.484,.373,.901,.168,1.929-.521,2.618L4.103,21.312c-.166,.166-.126,.347-.087,.439s.138,.249,.373,.249H22v2Z"/></svg>

);
