import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LeftFromBracket = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M19,7H11V.049L.884,9.873c-.57,.567-.884,1.322-.884,2.126s.314,1.559,.885,2.126l10.115,9.804v-6.929h8V7Zm5-4V21c0,1.654-1.346,3-3,3h-6v-2h6c.552,0,1-.449,1-1V3c0-.551-.448-1-1-1h-6V0h6c1.654,0,3,1.346,3,3Z"/>
</svg>

);
