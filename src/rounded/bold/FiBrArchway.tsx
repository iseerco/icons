import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrArchway = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.5,20h-.5V6.62l1.248-1.252c.734-.734,.952-1.829,.556-2.788-.397-.959-1.325-1.58-2.364-1.58H2.561C1.521,1,.594,1.62,.196,2.58-.2,3.539,.018,4.633,.75,5.365l1.25,1.255v13.38h-.5c-.828,0-1.5,.671-1.5,1.5s.672,1.5,1.5,1.5H6.5c1.93,0,3.5-1.57,3.5-3.5v-5.5c0-1.103,.897-2,2-2s2,.897,2,2v5.5c0,1.93,1.57,3.5,3.5,3.5h5c.828,0,1.5-.671,1.5-1.5s-.672-1.5-1.5-1.5Zm-3.5,0h-1.5c-.275,0-.5-.224-.5-.5v-5.5c0-2.757-2.243-5-5-5s-5,2.243-5,5v5.5c0,.276-.225,.5-.5,.5h-1.5V6h14v14Z"/></svg>

);
