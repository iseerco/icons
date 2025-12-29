import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TachometerAltSlow = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M3.611,21.552A4.994,4.994,0,0,0,7.12,22.98h9.766a4.842,4.842,0,0,0,3.355-1.288A12,12,0,0,0,10.617,1.057a11.994,11.994,0,0,0-7.006,20.5Zm13.007-3.323C21.45,14.081,18.362,5.914,12,5.98c-.994-.138-2.538.867-2.968-.5a1,1,0,0,1,.72-1.218c9.1-2.314,15.231,9.249,8.189,15.468a1,1,0,0,1-1.322-1.5ZM10,12.98a1.959,1.959,0,0,1,.074-.511L6.293,8.687A1,1,0,0,1,7.707,7.273l3.781,3.782A2,2,0,1,1,10,12.98Zm-7,0a9.053,9.053,0,0,1,.283-2.248,1,1,0,1,1,1.937.5,7.015,7.015,0,0,0,2.161,7,1,1,0,0,1-1.322,1.5A9,9,0,0,1,3,12.98Z"/></svg>

);
