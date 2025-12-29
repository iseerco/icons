import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Square2 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,0H5C2.243,0,0,2.243,0,5v14c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5Zm-4,18h-5.162c-.724,0-1.362-.407-1.666-1.062-.307-.663-.203-1.423,.272-1.983,.634-.749,1.569-1.258,2.559-1.797,1.905-1.038,3.057-1.778,2.994-3.29-.044-1.03-.939-1.868-1.997-1.868-1.103,0-2,.897-2,2,0,.552-.448,1-1,1s-1-.448-1-1c0-2.206,1.794-4,4-4,2.15,0,3.905,1.662,3.995,3.783,.121,2.867-2.281,4.175-4.035,5.131-.673,.367-1.315,.717-1.742,1.086h4.781c.553,0,1,.448,1,1s-.447,1-1,1Z"/></svg>

);
