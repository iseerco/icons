import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsReplyAll = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,10.5v13.5h-1V10.5c0-.827-.673-1.5-1.5-1.5H7.245l6.622,7.16-.734,.68-6.677-7.221c-.61-.611-.61-1.627,.014-2.252L13.133,.16l.734,.68-6.621,7.16h14.254c1.378,0,2.5,1.121,2.5,2.5ZM1.19,8.061L7.867,.84l-.734-.68L.469,7.367c-.624,.625-.624,1.641-.014,2.252l6.677,7.221,.734-.68L1.176,8.926c-.234-.234-.234-.617,.014-.865Z"/></svg>

);
