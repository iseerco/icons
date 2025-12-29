import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MattressPillow = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,3H3c-1.654,0-3,1.346-3,3v12c0,1.654,1.346,3,3,3h18c1.654,0,3-1.346,3-3V6c0-1.654-1.346-3-3-3ZM2,9h4v6H2v-6Zm0,9v-1h6V7H2v-1c0-.552.449-1,1-1h7v14H3c-.551,0-1-.448-1-1Zm20,0c0,.552-.448,1-1,1h-9V5h9c.552,0,1,.448,1,1v12Z"/>
</svg>

);
