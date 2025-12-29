import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PaintRoller = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,3h-1V0H0V8H20v-3h1c.551,0,1,.448,1,1v3c0,.552-.449,1-1,1H12c-1.654,0-3,1.346-3,3v1.172c-1.164,.413-2,1.524-2,2.828v7h6v-7c0-1.304-.836-2.415-2-2.828v-1.172c0-.552,.449-1,1-1h9c1.654,0,3-1.346,3-3v-3c0-1.654-1.346-3-3-3Zm-3,3H2V2H18V6Zm-7,16h-2v-5c0-.552,.449-1,1-1s1,.448,1,1v5Z"/></svg>

);
