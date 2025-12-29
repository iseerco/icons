import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsTransporter6 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m4,23h16v1H4v-1ZM23.884,4.025l-2.601,1.301-1.3,2.6-1.3-2.6-2.6-1.301,2.6-1.3,1.3-2.601,1.3,2.601,2.601,1.3Zm-2.236,0l-1.109-.554-.555-1.11-.555,1.11-1.109.554,1.109.555.555,1.109.555-1.109,1.109-.555ZM4.606,17.604l-1.123,2.245-1.123-2.245L.116,16.48l2.246-1.123,1.123-2.245,1.123,2.245,2.246,1.123-2.246,1.123Zm-.745-.746l.754-.377-.754-.377-.377-.755-.377.755-.754.377.754.377.377.755.377-.755Zm14.139-7.857H6v1h12v-1ZM15,0h-6v1h6V0Z"/></svg>

);
