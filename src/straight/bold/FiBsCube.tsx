import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCube = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12.122,0,1.622,6V18l10.5,6,10.5-6V6Zm5.986,6.876-6.09,3.4L6.171,6.856l5.951-3.4ZM4.622,9.425,10.5,12.861v6.757L4.622,16.259ZM13.5,19.757V12.881l6.122-3.415v6.793Z"/></svg>

);
