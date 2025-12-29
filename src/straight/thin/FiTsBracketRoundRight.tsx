import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBracketRoundRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15,12c0,7.38-5.51,11.74-5.75,11.92l-.61-.79c.05-.04,5.36-4.26,5.36-11.13S8.7,.91,8.64,.87l.61-.79c.23,.18,5.75,4.54,5.75,11.92Z"/></svg>

);
