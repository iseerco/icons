import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CloudExclamation = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m17.797,7.203c-.824-3.584-4.054-6.203-7.797-6.203C5.589,1,2,4.589,2,9c0,1.29.303,2.535.884,3.66-1.746.943-2.884,2.786-2.884,4.84,0,3.032,2.467,5.5,5.5,5.5h10.5c4.411,0,8-3.589,8-8,0-3.743-2.62-6.973-6.203-7.797Zm-4.797,12.797h-2v-2h2v2Zm0-4h-2V7h2v9Z"/></svg>

);
