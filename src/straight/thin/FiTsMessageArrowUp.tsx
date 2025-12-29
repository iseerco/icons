import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsMessageArrowUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21.5,0H2.5C1.122,0,0,1.121,0,2.5v17.5h7.106l3.897,3.283c.286.254.645.38,1.001.38.353,0,.703-.123.979-.368l3.985-3.295h7.032V2.5c0-1.379-1.122-2.5-2.5-2.5Zm1.5,19h-6.391l-4.276,3.535c-.19.171-.475.169-.675-.009l-4.187-3.526H1V2.5c0-.827.673-1.5,1.5-1.5h19c.827,0,1.5.673,1.5,1.5v16.5ZM13.394,5.571l3.203,3.202-.707.707-3.203-3.202c-.057-.057-.12-.106-.187-.146v8.867h-1V6.133c-.066.04-.129.088-.187.146l-3.203,3.202-.707-.707,3.203-3.202c.769-.769,2.019-.769,2.787,0Z"/></svg>

);
