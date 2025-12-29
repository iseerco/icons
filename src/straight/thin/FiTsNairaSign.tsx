import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsNairaSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,12h-2V0h-1V12H12.6L5.34,.84C4.9,.14,4.1-.16,3.3,.08c-.79,.23-1.3,.92-1.3,1.74V12H0v1H2v11h1V13H12.05l6.6,10.16c.35,.54,.9,.84,1.51,.84,.18,0,.35-.03,.53-.08,.79-.23,1.3-.92,1.3-1.74V13h2v-1Zm-21,0V1.82c0-.45,.3-.7,.59-.78,.28-.08,.67-.04,.92,.34l6.9,10.62H3Zm18,10.18c0,.45-.3,.7-.59,.78-.28,.08-.67,.04-.92-.34l-6.25-9.62h7.75v9.18Z"/></svg>

);
