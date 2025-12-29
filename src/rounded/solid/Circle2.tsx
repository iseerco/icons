import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Circle2 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm3,18h-5.162c-.724,0-1.362-.407-1.666-1.062-.307-.664-.203-1.424,.272-1.983,.634-.748,1.569-1.257,2.559-1.797,1.906-1.037,3.058-1.777,2.994-3.29-.043-1.029-.939-1.867-1.997-1.867-1.103,0-2,.897-2,2,0,.553-.448,1-1,1s-1-.447-1-1c0-2.206,1.794-4,4-4,2.151,0,3.906,1.662,3.995,3.783,.122,2.866-2.281,4.175-4.035,5.131-.673,.366-1.315,.716-1.742,1.086h4.781c.552,0,1,.447,1,1s-.448,1-1,1Z"/></svg>

);
