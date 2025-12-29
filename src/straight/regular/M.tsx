import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const M = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,24h-2V2.499c0-.257-.087-.415-.257-.468-.151-.047-.383-.017-.552,.222l-9.191,14.103L2.791,2.226c-.149-.212-.382-.241-.534-.195-.17,.054-.257,.211-.257,.468V24H0V2.499C0,1.373,.65,.44,1.655,.123c1.032-.323,2.153,.07,2.792,.983l7.553,11.587L19.534,1.134c.657-.941,1.775-1.335,2.811-1.011,1.005,.317,1.655,1.25,1.655,2.376V24Z"/></svg>

);
