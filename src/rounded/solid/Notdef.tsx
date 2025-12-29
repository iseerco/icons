import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Notdef = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13.24,12L20.24,2.38c.48,.77,.76,1.66,.76,2.62v14c0,.97-.29,1.86-.76,2.62l-7-9.62Zm-1.24-1.7L18.84,.89c-.81-.56-1.78-.89-2.84-.89H8c-1.06,0-2.03,.33-2.84,.89l6.84,9.41Zm0,3.4l-6.84,9.41c.81,.56,1.78,.89,2.84,.89h8c1.06,0,2.03-.33,2.84-.89l-6.84-9.41ZM3.76,2.38c-.48,.77-.76,1.66-.76,2.62v14c0,.97,.29,1.86,.76,2.62l7-9.62L3.76,2.38Z"/></svg>

);
