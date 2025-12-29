import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsHandBackPointRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.405,7.881c-.476-.56-1.17-.881-1.905-.881H12.709L8.51,2.732c-.943-.944-2.592-.944-3.535,0L0,7.707v14.293H12.91l2-10h6.483c1.273,0,2.379-.896,2.573-2.084,.119-.734-.085-1.476-.562-2.035Zm-.426,1.875c-.115,.709-.797,1.245-1.586,1.245h-7.303l-2,10H1V8.121L5.682,3.439c.566-.566,1.558-.563,2.118-.003l3.506,3.563H7v1h14.5c.44,0,.857,.193,1.143,.529,.29,.341,.409,.776,.336,1.227Z"/></svg>

);
