import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsStepForward = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18,0v10.19L3,.063v23.874l15-10.127v10.19h3V0h-3ZM6,18.292V5.708l9.319,6.292-9.319,6.292Z"/></svg>

);
