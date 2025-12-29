import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFileAi = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><polygon points="7.142 5.061 6.591 6.508 7.688 6.508 7.142 5.061"/><path d="M21,0H3A3,3,0,0,0,0,3V24H17.471L24,17.471V3A3,3,0,0,0,21,0ZM11.267,3h1.25V9.065h-1.25ZM6.612,2.941l1.065,0,2.334,6.184-1.337,0L8.159,7.758H6.115L5.6,9.123H4.257ZM21,15H15v6H3V11H21Z"/></svg>

);
