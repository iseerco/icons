import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Tags = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.194,9.023L13.177,.006,4.9,.903l.215,1.988,7.325-.793,8.34,8.339c.296,.296,.296,.777-.012,1.084l-.962,.994L11.099,3.808,1.962,5.057,.953,14.18l9.013,9.012c.521,.521,1.213,.808,1.95,.808s1.43-.287,1.962-.819l6.244-6.449c.665-.665,.916-1.588,.759-2.451l1.314-1.357c1.075-1.076,1.075-2.826,0-3.901Zm-16.194,.977c-.552,0-1-.448-1-1,0-.552,.448-1,1-1,.552,0,1,.448,1,1s-.448,1-1,1Z"/></svg>

);
