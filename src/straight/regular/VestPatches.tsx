import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const VestPatches = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M5,15h3v-3h-3v3Zm18-3.369v12.369H1V11.632c.681-.801,2-2.699,2-3.632V3.394c0-1.358,.905-2.549,2.202-2.896,1.847-.492,3.719-.498,3.798-.498h6c.079,0,1.951,.006,3.798,.498,1.297,.347,2.202,1.537,2.202,2.896v4.606c0,.973,1.426,2.958,2,3.631Zm-12,.545L7.344,2.121c-.503,.064-1.07,.161-1.626,.309-.423,.113-.718,.509-.718,.963v4.606c0,1.646-1.405,3.602-2,4.356v9.644H11V12.176Zm1-3.102l2.573-7.074h-5.145l2.573,7.074Zm9,3.282c-.595-.754-2-2.71-2-4.356V3.394c0-.454-.295-.85-.718-.963-.556-.148-1.123-.246-1.626-.309l-3.656,10.055v9.824h8V12.356Zm-6,2.644h4l-2-3-2,3Zm-7,3.5c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5,.672-1.5,1.5-1.5,1.5,.672,1.5,1.5Z"/></svg>

);
