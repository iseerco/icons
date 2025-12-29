import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsTransporter5 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m4,23h16v1H4v-1Zm19.884-5.51l-2.6,1.301-1.3,2.6-1.3-2.6-2.6-1.301,2.6-1.301,1.3-2.6,1.3,2.6,2.6,1.301Zm-2.235,0l-1.11-.555-.555-1.109-.555,1.109-1.109.555,1.109.555.555,1.109.555-1.109,1.11-.555ZM4.606,4.63l-1.123,2.245-1.123-2.245L.116,3.507l2.246-1.123L3.484.139l1.123,2.245,2.246,1.123-2.246,1.123Zm-.745-.746l.754-.377-.754-.377-.377-.755-.377.755-.754.377.754.377.377.755.377-.755Zm14.139,5.116H6v1h12v-1Zm-1,6v-1H7v1h10ZM15,0h-6v1h6V0Z"/></svg>

);
