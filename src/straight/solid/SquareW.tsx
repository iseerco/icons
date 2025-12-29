import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SquareW = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21,0H3C1.346,0,0,1.346,0,3v21h24V3c0-1.654-1.346-3-3-3Zm-4.146,17.828c-.115.605-.583,1.059-1.189,1.154-.609.093-1.204-.208-1.473-.693l-2.19-4.993-2.137,4.879c-.323.599-.922.905-1.526.808-.608-.096-1.076-.549-1.191-1.146l-2.223-12.836h2.029l1.843,10.631,3.204-7.315,3.208,7.31,1.841-10.625h2.029l-2.223,12.828Z"/></svg>

);
