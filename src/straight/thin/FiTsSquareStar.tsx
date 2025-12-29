import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSquareStar = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12.42,5.66h-.85l-1.52,4.34H5.71v.83l3.13,2.52-1.17,3.91,.67,.51,3.65-2.37,3.66,2.37,.67-.51-1.17-3.91,3.13-2.52v-.83h-4.34l-1.52-4.34Zm1.59,7.33l.93,3.12-2.94-1.91-2.94,1.91,.93-3.12-2.47-1.99h3.25l1.24-3.53,1.24,3.53h3.25l-2.47,1.99ZM21.5,0H2.5C1.12,0,0,1.12,0,2.5V24H24V2.5c0-1.38-1.12-2.5-2.5-2.5Zm1.5,23H1V2.5c0-.83,.67-1.5,1.5-1.5H21.5c.83,0,1.5,.67,1.5,1.5V23Z"/></svg>

);
