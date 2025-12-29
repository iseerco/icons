import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MortarPestle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19,22v2H5v-2c.552,0,1-.449,1-1,0-.283-.307-.729-.648-1h13.297c-.342.271-.648.717-.648,1,0,.551.448,1,1,1ZM0,9v1c0,2.979,1.123,5.819,3.078,8h17.844c1.955-2.181,3.078-5.021,3.078-8v-1H0ZM23.268.732c-.976-.976-2.559-.976-3.536,0l-5.178,6.268h5.406l3.307-2.732c.976-.976.976-2.559,0-3.536Z"/></svg>

);
