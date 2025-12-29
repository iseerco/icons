import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsQuestionSquare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12.5,16h-1v-.867c0-1.34,.873-2.912,1.946-3.503,1.143-.63,1.734-1.877,1.506-3.177-.211-1.204-1.2-2.193-2.404-2.404-.904-.159-1.785,.072-2.476,.653-.682,.572-1.072,1.41-1.072,2.298h-1c0-1.185,.521-2.302,1.429-3.064,.908-.762,2.105-1.079,3.292-.873,1.611,.283,2.934,1.605,3.216,3.216,.298,1.701-.509,3.399-2.009,4.226-.761,.419-1.428,1.647-1.428,2.627v.867ZM24,2.5c0-1.378-1.122-2.5-2.5-2.5H2.5C1.122,0,0,1.122,0,2.5V24H24V2.5ZM1,2.5c0-.827,.673-1.5,1.5-1.5H21.5c.827,0,1.5,.673,1.5,1.5V23H1V2.5ZM11,19c0,.552,.448,1,1,1s1-.448,1-1-.448-1-1-1-1,.448-1,1Z"/></svg>

);
