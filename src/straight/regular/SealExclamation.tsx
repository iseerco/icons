import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SealExclamation = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13,14h-2V6h2V14Zm0,2h-2v2h2v-2Zm2.52,4.5h4.98v-4.98l3.52-3.52-3.52-3.52V3.5h-4.98L12-.02l-3.52,3.52H3.5v4.98L-.02,12l3.52,3.52v4.98h4.98l3.52,3.52,3.52-3.52ZM5.5,14.69l-2.69-2.69,2.69-2.69v-3.81h3.81l2.69-2.69,2.69,2.69h3.81v3.81l2.69,2.69-2.69,2.69v3.81h-3.81l-2.69,2.69-2.69-2.69h-3.81v-3.81Z"/></svg>

);
