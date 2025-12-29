import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HandBackPointLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.955,2.952c-.441-.46-1.012-.774-1.637-.9-.976-.185-1.98,.125-2.682,.828l-3.025,3.121h5.389v2H2.5c-1.381,0-2.5,1.119-2.5,2.5s1.119,2.5,2.5,2.5h5.681l2.014,9h13.806V8l-5.045-5.049Z"/></svg>

);
