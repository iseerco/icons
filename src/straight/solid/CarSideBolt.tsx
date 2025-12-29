import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CarSideBolt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,10h-5v-2h3.825l-3.985-5.715c-.561-.804-1.48-1.285-2.461-1.285H6.381c-1.239,0-2.367,.778-2.806,1.937l-1.919,5.063h2.344v2h-1c-1.654,0-3,1.346-3,3v4H24v-4c0-1.654-1.346-3-3-3Zm-8.228,1.426l-1.764,3.534-1.789-.894,1.53-3.066h-2.134c-.509,0-.994-.244-1.297-.653s-.396-.943-.249-1.43l2.224-4.161,1.76,.95-1.778,3.294h2.121c.592,0,1.133,.324,1.413,.846,.268,.499,.252,1.098-.037,1.58Zm-4.83,7.574c.034,.162,.058,.328,.058,.5,0,1.381-1.119,2.5-2.5,2.5s-2.5-1.119-2.5-2.5c0-.172,.024-.338,.058-.5H7.942Zm13,0c.034,.162,.058,.328,.058,.5,0,1.381-1.119,2.5-2.5,2.5s-2.5-1.119-2.5-2.5c0-.172,.024-.338,.058-.5h4.885Z"/></svg>

);
