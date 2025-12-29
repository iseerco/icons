import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSealExclamation = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12.5,14h-1V6h1V14Zm-.5,2c-.55,0-1,.45-1,1s.45,1,1,1,1-.45,1-1-.45-1-1-1Zm3.52,4.5h4.98v-4.98l3.52-3.52-3.52-3.52V3.5h-4.98L12-.01l-3.52,3.52H3.5v4.98L-.01,12l3.52,3.52v4.98h4.98l3.52,3.52,3.52-3.52ZM4.5,15.1l-3.1-3.1,3.1-3.1V4.5h4.39l3.1-3.1,3.1,3.1h4.39v4.39l3.1,3.1-3.1,3.1v4.39h-4.39l-3.1,3.1-3.1-3.1H4.5v-4.39Z"/></svg>

);
