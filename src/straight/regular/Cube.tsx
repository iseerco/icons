import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Cube = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12.122,0,1.622,6V18l10.5,6,10.5-6V6Zm7.513,6.6-7.623,4.252L4.673,6.56,12.122,2.3ZM3.622,8.262,11,12.574v8.482L3.622,16.839ZM13,21.194V12.587l7.622-4.251v8.5Z"/></svg>

);
