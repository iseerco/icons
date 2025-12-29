import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCommentUser = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12.014,23.666a2.515,2.515,0,0,1-1.675-.636L6.741,20H0V3.5A3.5,3.5,0,0,1,3.5,0h17A3.5,3.5,0,0,1,24,3.5V20H17.328L13.62,23.065A2.4,2.4,0,0,1,12.014,23.666ZM3,17H7.836L12,20.511,16.248,17H21V3.5a.5.5,0,0,0-.5-.5H3.5a.5.5,0,0,0-.5.5Zm9-7A2.5,2.5,0,1,0,9.5,7.5,2.5,2.5,0,0,0,12,10ZM8,13v2h8V13a2,2,0,0,0-2-2H10A2,2,0,0,0,8,13Z"/></svg>

);
