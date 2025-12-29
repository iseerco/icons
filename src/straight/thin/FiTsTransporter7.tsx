import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsTransporter7 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m4,23h16v1H4v-1Zm0-15.317l-1.301-2.601L.1,3.782l2.6-1.301L4-.117l1.301,2.599,2.6,1.301-2.6,1.3-1.301,2.601Zm-.555-3.347l.555,1.11.555-1.11,1.109-.554-1.109-.555-.555-1.11-.555,1.11-1.109.555,1.109.554Zm20.423,11.064l-2.245,1.123-1.123,2.245-1.123-2.245-2.245-1.123,2.245-1.123,1.123-2.245,1.123,2.245,2.245,1.123Zm-2.236,0l-.755-.377-.377-.755-.377.755-.755.377.755.377.377.755.377-.755.755-.377Z"/></svg>

);
