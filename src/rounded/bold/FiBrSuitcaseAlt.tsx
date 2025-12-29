import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrSuitcaseAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.5,3h-.626c-.445-1.724-2.013-3-3.874-3h-4c-1.86,0-3.428,1.276-3.873,3h-.627C2.467,3,0,5.468,0,8.5v10c0,3.032,2.467,5.5,5.5,5.5h13c3.032,0,5.5-2.468,5.5-5.5V8.5c0-3.032-2.468-5.5-5.5-5.5Zm2.5,15.5c0,1.379-1.121,2.5-2.5,2.5h-.5V9.5c0-.828-.672-1.5-1.5-1.5s-1.5,.672-1.5,1.5v11.5h-6V9.5c0-.828-.671-1.5-1.5-1.5s-1.5,.672-1.5,1.5v11.5h-.5c-1.378,0-2.5-1.121-2.5-2.5V8.5c0-1.379,1.122-2.5,2.5-2.5h13c1.379,0,2.5,1.121,2.5,2.5v10Z"/></svg>

);
