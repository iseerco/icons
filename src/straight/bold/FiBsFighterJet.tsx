import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFighterJet = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15.376,8.078,12.277,3H14V0H7V8H4.621L3.5,6.879A3.02,3.02,0,0,0,1.379,6H0V18H1.379A3.02,3.02,0,0,0,3.5,17.121L4.621,16H7v8h7V21H12.283l3.093-5.052C21.1,15.492,24,14.165,24,12S21.1,8.514,15.376,8.078Zm-.971,4.931-.778.05L10,18.983V13H4V11h6V5.027l3.628,5.945.783.047a25.79,25.79,0,0,1,5.9.983A25.794,25.794,0,0,1,14.405,13.009Z"/></svg>

);
