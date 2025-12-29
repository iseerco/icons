import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GingerbreadMan = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.7,7.277a2.578,2.578,0,0,0-3.112-1.129l-2.846.886a.443.443,0,0,1-.485-.689,4.006,4.006,0,1,0-6.5,0,.443.443,0,0,1-.485.689L5.417,6.148a2.5,2.5,0,1,0-1.734,4.691l1.6.661c2.106.745,2.021,3.561,1.023,5.175L4.427,20.061a2.5,2.5,0,1,0,4.147,2.794L11.43,18.3a.688.688,0,0,1,1.14,0l2.856,4.552a2.5,2.5,0,1,0,4.147-2.794L17.7,16.675c-1-1.613-1.083-4.43,1.023-5.175l1.6-.661A2.516,2.516,0,0,0,21.7,7.277ZM12,16a1.5,1.5,0,0,1,0-3A1.5,1.5,0,0,1,12,16Zm0-4a1.5,1.5,0,0,1,0-3A1.5,1.5,0,0,1,12,12Z"/></svg>

);
