import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FaceLying = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,16h-7v-2h7c.551,0,1-.448,1-1s-.449-1-1-1h-7v-2h7c1.54,0,2.798,1.171,2.966,2.667,.012-.222,.034-.442,.034-.667C24,5.373,18.627,0,12,0S0,5.373,0,12s5.373,12,12,12c5.954,0,10.881-4.341,11.824-10.027-.406,1.175-1.512,2.027-2.824,2.027ZM15.5,6c.828,0,1.5,.672,1.5,1.5s-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5,.672-1.5,1.5-1.5Zm-7,0c.828,0,1.5,.672,1.5,1.5s-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5,.672-1.5,1.5-1.5Zm3.5,10c-2.331,0-4.316,1.73-4.336,1.747l-1.33-1.493c.103-.092,2.559-2.254,5.666-2.254v2Z"/></svg>

);
