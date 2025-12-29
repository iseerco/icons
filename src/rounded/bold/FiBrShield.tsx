import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrShield = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,24a1.5,1.5,0,0,1-.609-.129C11,23.7,1.909,19.569,1.909,12V7.247A5.492,5.492,0,0,1,5.67,2.029L11.525.077a1.513,1.513,0,0,1,.95,0L18.33,2.029a5.493,5.493,0,0,1,3.761,5.218V12c0,8.618-9.224,11.792-9.616,11.923A1.49,1.49,0,0,1,12,24ZM12,3.081,6.619,4.875a2.5,2.5,0,0,0-1.71,2.372V12c0,4.735,5.421,7.952,7.168,8.865,1.757-.733,7.014-3.383,7.014-8.865V7.247a2.5,2.5,0,0,0-1.71-2.372Z"/></svg>

);
