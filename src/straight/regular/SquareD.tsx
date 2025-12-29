import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SquareD = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21,0H3C1.346,0,0,1.346,0,3v21h24V3c0-1.654-1.346-3-3-3Zm1,22H2V3c0-.551.448-1,1-1h18c.552,0,1,.449,1,1v19ZM11.857,5h-3.857c-1.103,0-2,.897-2,2v10c0,1.103.897,2,2,2h3.857c3.387,0,6.143-2.756,6.143-6.143v-1.714c0-3.387-2.756-6.143-6.143-6.143Zm4.143,7.857c0,2.285-1.858,4.143-4.143,4.143h-3.857V7s3.857,0,3.857,0c2.284,0,4.143,1.858,4.143,4.143v1.714Z"/></svg>

);
