import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RotateSquare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,0H3C1.346,0,0,1.346,0,3v21h24V3c0-1.654-1.346-3-3-3Zm1,22H2V3c0-.551.448-1,1-1h18c.552,0,1,.449,1,1v19Zm-5-17h2v4c0,1.103-.897,2-2,2h-4v-2h2.997c-.928-1.234-2.398-2-3.997-2-2.414,0-4.434,1.721-4.899,4h-2.021c.488-3.387,3.401-6,6.92-6,1.924,0,3.709.8,5,2.12v-2.12Zm-.101,8h2.021c-.488,3.387-3.401,6-6.92,6-1.924,0-3.709-.8-5-2.12v2.12h-2v-4c0-1.103.897-2,2-2h4v2h-2.997c.928,1.234,2.398,2,3.997,2,2.414,0,4.434-1.721,4.899-4Z"/>
</svg>

);
