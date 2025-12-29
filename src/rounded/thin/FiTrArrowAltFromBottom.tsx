import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrArrowAltFromBottom = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,23H12.5V7h3.861c.524,0,.976-.302,1.18-.79,.203-.485,.096-1.039-.272-1.412L12.908,.38c-.484-.49-1.331-.491-1.816,0L6.731,4.799c-.368,.373-.475,.927-.272,1.412,.204,.487,.655,.79,1.18,.79h3.861V23H3.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5H20.5c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5ZM7.382,5.825c-.023-.056-.063-.198,.062-.324L11.803,1.083c.053-.054,.123-.083,.197-.083s.144,.029,.196,.083l4.36,4.418c.125,.126,.084,.269,.062,.324-.022,.052-.091,.175-.257,.175H7.639c-.166,0-.235-.123-.257-.175Z"/></svg>

);
