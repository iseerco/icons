import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PersonPilates = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M11.73,19l5.005-4.838,6.004-2.92-.875-1.799-6.146,2.989-4.235,4.05-4.909-5.483h7.426v-2H5v.025c-.674-.022-1.357,.166-1.918,.619-.623,.502-1.003,1.218-1.071,2.015-.068,.797,.186,1.566,.712,2.165l4.527,5.176H0v2H24v-2H11.73ZM1,5.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Z"/>
</svg>

);
