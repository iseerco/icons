import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrTruckSide = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.682,5H16.815a5.314,5.314,0,0,0-5.133-4H5.318A5.324,5.324,0,0,0,0,6.318v9.319a4.354,4.354,0,0,0,3.02,4.129C3.014,19.844,3,19.92,3,20a3,3,0,0,0,6,0h6a3,3,0,0,0,6,0c0-.08-.014-.155-.02-.233A4.355,4.355,0,0,0,24,15.637V10.272A5.3,5.3,0,0,0,18.682,5ZM21,10.272V11H17V8h1.682A2.271,2.271,0,0,1,21,10.272ZM4.364,17A1.365,1.365,0,0,1,3,15.637V6.318A2.321,2.321,0,0,1,5.318,4h6.364A2.321,2.321,0,0,1,14,6.318V17Zm15.273,0H17V14h4v1.637A1.364,1.364,0,0,1,19.637,17Z"/></svg>

);
