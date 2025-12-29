import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBracketRound = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15.36,23.13l-.61,.79c-.23-.18-5.75-4.54-5.75-11.92S14.51,.26,14.75,.08l.61,.79c-.05,.04-5.36,4.26-5.36,11.13s5.3,11.09,5.36,11.13Z"/></svg>

);
