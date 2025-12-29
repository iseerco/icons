import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DiagramProject = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,9V3.5c0-1.379-1.122-2.5-2.5-2.5h-3c-1.378,0-2.5,1.121-2.5,2.5v.5H8v-.5c0-1.379-1.122-2.5-2.5-2.5H2.5C1.122,1,0,2.121,0,3.5v5.5H5.928l4.345,7.387c-.169,.337-.273,.711-.273,1.113v5.5h8v-5.5c0-1.379-1.122-2.5-2.5-2.5h-3c-.231,0-.451,.042-.663,.101l-3.837-6.523v-2.578h8v3h8Z"/></svg>

);
