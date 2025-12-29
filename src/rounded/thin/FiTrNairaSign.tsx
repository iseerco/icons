import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrNairaSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.5,12h-1.5V.39c0-.28-.22-.5-.5-.5s-.5,.22-.5,.5V12H12.6L5.34,.84C4.9,.14,4.1-.16,3.3,.08c-.79,.23-1.3,.92-1.3,1.74V12H.5c-.28,0-.5,.22-.5,.5s.22,.5,.5,.5h1.5v10.61c0,.28,.22,.5,.5,.5s.5-.22,.5-.5V13H12.05l6.6,10.16c.45,.69,1.25,.99,2.04,.76,.79-.23,1.3-.92,1.3-1.74V13h1.5c.28,0,.5-.22,.5-.5s-.22-.5-.5-.5Zm-20.5,0V1.82c0-.45,.3-.7,.59-.78,.28-.08,.67-.04,.92,.34l6.9,10.62H3Zm18,10.18c0,.45-.3,.7-.59,.78-.28,.08-.67,.04-.92-.34l-6.25-9.62h7.75v9.18Z"/></svg>

);
