import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BellSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m15.682,20l.93.93c-.757,1.802-2.539,3.07-4.612,3.07-2.414,0-4.435-1.721-4.899-4h8.582ZM3.232,7.55l-2.03,6.564c-.597,1.93.846,3.886,2.866,3.886h9.614L3.232,7.55Zm16.182,10.45h.31c2.08,0,3.529-2.065,2.821-4.021l-2.853-7.885C18.692,2.493,15.413,0,11.675,0c-2.755,0-5.248,1.352-6.774,3.487L1.433.019.019,1.433l22.548,22.548,1.414-1.414-4.567-4.567Z"/></svg>

);
