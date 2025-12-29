import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrTruckPlow = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,15.318V11.682a6.17,6.17,0,0,1,1.618-4.17A1.5,1.5,0,0,0,21.4,5.488,9.171,9.171,0,0,0,19,11.682V12H16.291c-.019-.036-.04-.071-.062-.105L11.361,4.481A5.483,5.483,0,0,0,6.764,2H6.5A3.5,3.5,0,0,0,3,5.5v4.757A4.508,4.508,0,0,0,0,14.5v2a2.505,2.505,0,0,0,2,2.45v.55a2.5,2.5,0,0,0,5,0V19h3v.5a2.5,2.5,0,0,0,5,0v-.55a2.505,2.505,0,0,0,2-2.45V15h2v.318a9.171,9.171,0,0,0,2.4,6.194,1.5,1.5,0,0,0,2.215-2.024A6.17,6.17,0,0,1,22,15.318ZM6.5,5h.264a2.493,2.493,0,0,1,2.09,1.128L11.4,10H6V5.5A.5.5,0,0,1,6.5,5ZM3,14.5A1.5,1.5,0,0,1,4.5,13h8A1.5,1.5,0,0,1,14,14.5V16H3Z"/></svg>

);
