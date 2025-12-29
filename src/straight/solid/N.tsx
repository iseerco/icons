import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const N = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.744,24.005c-.748,0-1.457-.375-1.88-1.033L4.454,2.116c-.024-.039-.103-.155-.277-.104-.177,.052-.177,.191-.177,.236V24H2V2.249C2,1.243,2.648,.377,3.613,.093c.965-.283,1.979,.094,2.522,.94l13.41,20.856c.025,.038,.097,.158,.277,.103,.177-.052,.177-.19,.177-.236V0h2V21.756c0,1.006-.648,1.872-1.613,2.155-.214,.063-.43,.094-.643,.094Z"/></svg>

);
