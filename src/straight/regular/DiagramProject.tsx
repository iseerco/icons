import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DiagramProject = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,9V3.5c0-1.379-1.122-2.5-2.5-2.5h-3c-1.378,0-2.5,1.121-2.5,2.5v.5H8v-.5c0-1.379-1.122-2.5-2.5-2.5H2.5C1.122,1,0,2.121,0,3.5v5.5H5.928l4.339,7.377c-.171,.338-.268,.719-.268,1.123v5.5h8v-5.5c0-1.379-1.122-2.5-2.5-2.5h-3c-.232,0-.456,.032-.669,.091l-3.831-6.513v-2.578h8v3h8ZM2,3.5c0-.275,.224-.5,.5-.5h3c.276,0,.5,.225,.5,.5v3.5H2V3.5Zm13.5,13.5c.276,0,.5,.225,.5,.5v3.5h-4v-3.5c0-.275,.224-.5,.5-.5h3Zm2.5-13.5c0-.275,.224-.5,.5-.5h3c.276,0,.5,.225,.5,.5v3.5h-4V3.5Z"/></svg>

);
