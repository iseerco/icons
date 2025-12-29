import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSortAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M11.618,18.117l.707,.707-4.717,4.717c-.296,.296-.689,.459-1.107,.459h0c-.418,0-.812-.163-1.107-.459L.676,18.824l.707-.707,4.617,4.616V0h1V22.735l4.618-4.618ZM23.324,5.176L18.606,.459c-.589-.591-1.623-.593-2.214,0l-4.717,4.717,.707,.707L17,1.266V24h1V1.267l4.617,4.616,.707-.707Z"/></svg>

);
