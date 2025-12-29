import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsDiagramProject = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,9V3c0-1.103-.897-2-2-2h-4c-1.103,0-2,.897-2,2v2H8V3c0-1.103-.897-2-2-2H2C.897,1,0,1.897,0,3v6H7.191l3.328,6.657c-.323,.355-.519,.827-.519,1.343v6h8v-6c0-1.103-.897-2-2-2h-4c-.223,0-.438,.037-.638,.105l-3.362-6.723v-2.382h8v3h8Zm-7-6c0-.552,.449-1,1-1h4c.551,0,1,.448,1,1v5h-6V3ZM7,8H1V3c0-.552,.449-1,1-1H6c.551,0,1,.448,1,1v5Zm9,8c.551,0,1,.448,1,1v5h-6v-5c0-.552,.449-1,1-1h4Z"/></svg>

);
