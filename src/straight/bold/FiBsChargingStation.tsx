import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsChargingStation = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10.749,10.108a2.1,2.1,0,0,1-.037,2.057L8.956,15.683l-2.685-1.34L7.441,12H7.115A2.115,2.115,0,0,1,5.091,9.271L7.354,5.018,9.993,6.443,8.613,9H8.9A2.1,2.1,0,0,1,10.749,10.108ZM24,2V6.5a2.5,2.5,0,0,1-2,2.45V17.5A3.5,3.5,0,0,1,18.5,21H16v3H0V3.5A3.5,3.5,0,0,1,3.5,0h9A3.5,3.5,0,0,1,16,3.5V18h2.5a.5.5,0,0,0,.5-.5V8.95A2.5,2.5,0,0,1,17,6.5V2h3V4h1V2ZM13,3.5a.5.5,0,0,0-.5-.5h-9a.5.5,0,0,0-.5.5V21H13Z"/></svg>

);
