import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrChessPawnAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.5,19c-2.182,0-4.5-3.855-4.5-11h1.5c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5h-1.857c.832-.733,1.357-1.806,1.357-3,0-2.206-1.794-4-4-4s-4,1.794-4,4c0,1.194,.526,2.267,1.357,3h-1.857c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h1.5c0,7.145-2.318,11-4.5,11-1.378,0-2.5,1.121-2.5,2.5s1.122,2.5,2.5,2.5h15c1.378,0,2.5-1.121,2.5-2.5s-1.122-2.5-2.5-2.5ZM9,4c0-1.654,1.346-3,3-3s3,1.346,3,3-1.346,3-3,3-3-1.346-3-3Zm1,4h4c0,5.181,1.216,9.216,3.142,11H6.858c1.926-1.784,3.142-5.819,3.142-11Zm9.5,15H4.5c-.827,0-1.5-.673-1.5-1.5s.673-1.5,1.5-1.5h15c.827,0,1.5,.673,1.5,1.5s-.673,1.5-1.5,1.5Z"/></svg>

);
