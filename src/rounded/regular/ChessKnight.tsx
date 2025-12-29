import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChessKnight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,22V10c0-.091-.109-9.093-9.572-9.987a2.838,2.838,0,0,0-2.881,1.8c-.992,2.47-2.886,3.583-5.424,4.5A3.235,3.235,0,0,0,2,9.355,2.649,2.649,0,0,0,4.645,12H9.82c-1.244,5.927-6.032,9.308-7.1,10H2a1,1,0,0,0,0,2H22a1,1,0,0,0,0-2ZM11.992,11.124A1,1,0,0,0,11,10H4.645A.645.645,0,0,1,4,9.355a1.231,1.231,0,0,1,.8-1.164c2.51-.9,5.256-2.275,6.6-5.631A.858.858,0,0,1,12.239,2,8.1,8.1,0,0,1,20,10V22H6.012A17.517,17.517,0,0,0,11.992,11.124Z"/></svg>

);
