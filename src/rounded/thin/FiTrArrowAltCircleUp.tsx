import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrArrowAltCircleUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Zm.908-17.62c-.484-.49-1.331-.491-1.816,0l-4.36,4.418c-.368,.373-.475,.927-.272,1.412,.204,.487,.655,.79,1.18,.79h3.861v6.5c0,.276,.224,.5,.5,.5s.5-.224,.5-.5v-6.5h3.86c.524,0,.977-.303,1.181-.79,.202-.485,.096-1.039-.272-1.412l-4.361-4.419Zm3.71,5.445c-.022,.053-.092,.175-.258,.175H7.639c-.166,0-.235-.123-.257-.175-.023-.056-.063-.198,.062-.324l4.36-4.418c.053-.054,.123-.083,.197-.083s.144,.029,.196,.083l4.36,4.418c.125,.126,.084,.269,.062,.324Z"/></svg>

);
