import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsFileCode = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17.564,15.015c.581,.581,.581,1.524,0,2.105l-3.256,3.256-.707-.707,3.256-3.256c.19-.19,.19-.5,0-.691l-3.323-3.323,.707-.707,3.323,3.323Zm-7.098-2.616l-.707-.707-3.323,3.323c-.581,.581-.581,1.524,0,2.105l3.256,3.256,.707-.707-3.256-3.256c-.19-.19-.19-.5,0-.691l3.323-3.323Zm11.534-5.106V24H2V2.5C2,1.122,3.122,0,4.5,0H14.707l7.293,7.293Zm-7-.293h5.293L15,1.707V7Zm6,16V8h-7V1H4.5c-.827,0-1.5,.673-1.5,1.5V23H21Z"/></svg>

);
