import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrCaretCircleDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,24A12,12,0,1,1,24,12,12.013,12.013,0,0,1,12,24ZM12,3a9,9,0,1,0,9,9A9.011,9.011,0,0,0,12,3ZM6.269,11.6l5.087,5.154a.9.9,0,0,0,1.288,0L17.731,11.6a.924.924,0,0,0-.644-1.575H6.913A.924.924,0,0,0,6.269,11.6Z"/></svg>

);
