import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MattressPillow = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m10,21h-5c-2.414,0-4.435-1.721-4.899-4h3.899c1.654,0,3-1.346,3-3v-4c0-1.654-1.346-3-3-3H.101c.465-2.279,2.485-4,4.899-4h5v18Zm-5-7v-4c0-.552-.449-1-1-1H0v6h4c.551,0,1-.448,1-1ZM19,3h-7v18h7c2.757,0,5-2.243,5-5v-8c0-2.757-2.243-5-5-5Z"/>
</svg>

);
