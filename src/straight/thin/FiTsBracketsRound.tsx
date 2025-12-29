import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBracketsRound = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,12c0,7.38-5.51,11.74-5.74,11.92l-.61-.79c.05-.04,5.36-4.26,5.36-11.13S17.7,.91,17.64,.87l.61-.79c.23,.18,5.74,4.54,5.74,11.92Z"/><path d="M6.36,23.13l-.61,.79c-.23-.18-5.74-4.54-5.74-11.92S5.51,.26,5.74,.08l.61,.79c-.05,.04-5.36,4.26-5.36,11.13s5.3,11.09,5.36,11.13Z"/></svg>

);
