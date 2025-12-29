import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrManatSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,12.97v10.55c0,.28-.22,.5-.5,.5s-.5-.22-.5-.5V12.97c0-4.8-3.77-8.73-8.5-8.99V23.5c0,.28-.22,.5-.5,.5s-.5-.22-.5-.5V3.99c-4.73,.26-8.5,4.19-8.5,8.99v10.55c0,.28-.22,.5-.5,.5s-.5-.22-.5-.5V12.97C2,7.63,6.22,3.25,11.5,2.99V.5c0-.28,.22-.5,.5-.5s.5,.22,.5,.5V2.99c5.28,.26,9.5,4.64,9.5,9.99Z"/></svg>

);
