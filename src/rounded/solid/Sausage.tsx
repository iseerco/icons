import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Sausage = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.83,3.36C21.816,2.73,22.8.207,21,0a1,1,0,0,0-1,1,1,1,0,0,1-2,0,1,1,0,0,0-1-1c-1.8.207-.817,2.723.165,3.356A4.925,4.925,0,0,0,14,7.905c-.056,2.2-3.616,5.929-6.081,6.111a5.008,5.008,0,0,0-4.566,3.148C2.723,16.182.206,15.2,0,17a1,1,0,0,0,1,1,1,1,0,0,1,0,2,1,1,0,0,0-1,1c.208,1.8,2.727.816,3.359-.169,1.955,4.906,9.267,3.965,15.51-1.946C24.83,12.63,25.724,5.333,20.83,3.36Z"/></svg>

);
