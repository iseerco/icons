import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Cabin = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16,13h7c.552,0,1,.448,1,1h0c0,.552-.448,1-1,1h-5v2h5c.552,0,1,.448,1,1h0c0,.552-.448,1-1,1h-5v2h5.576c-.774,1.763-2.531,3-4.576,3h-2c-.552,0-1-.448-1-1V13ZM0,15H6v2H0v2H6v2H.424c.774,1.763,2.531,3,4.576,3h2c.553,0,1-.448,1-1V13H0v2Zm24-5.276v.276s0,1-1,1H1c-1,0-1-1-1-1v-.276c0-1.662,.826-3.216,2.204-4.145L9.203,.855c1.69-1.141,3.904-1.141,5.594,0l5.203,3.511V2c0-.552,.447-1,1-1s1,.448,1,1v3.724c1.256,.942,2,2.418,2,4Zm-10.5-3.224c0-.828-.672-1.5-1.5-1.5s-1.5,.672-1.5,1.5,.672,1.5,1.5,1.5,1.5-.672,1.5-1.5Z"/></svg>

);
