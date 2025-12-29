import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowTurnLeftUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M22,23c0,.552-.448,1-1,1H13c-2.757,0-5-2.243-5-5V2.387c-.036,.03-.082,.042-.116,.075L2.704,7.599c-.392,.389-1.025,.387-1.414-.006-.389-.392-.386-1.025,.006-1.414L6.473,1.045c1.346-1.346,3.705-1.349,5.057,.003l5.174,5.131c.392,.389,.395,1.022,.006,1.414-.195,.197-.453,.296-.71,.296-.254,0-.509-.097-.704-.29L10.119,2.465c-.034-.034-.082-.047-.119-.077V19c0,1.654,1.346,3,3,3h8c.552,0,1,.448,1,1Z"/>
</svg>

);
