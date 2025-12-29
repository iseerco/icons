import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const OliveOil = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,9a4.011,4.011,0,0,0-6-3.45V3a3,3,0,0,0-3-3H8A1,1,0,0,0,8,2H9V8c-.387,1.593-3.718,3.386-4.81,5H17A4,4,0,0,0,21,9Zm-5.9-.646a2,2,0,1,1,2.54,2.531A11.565,11.565,0,0,1,15.1,8.354ZM20.858,15c.816,3.661-2.882,9.078-6.59,9H9.732c-3.712.076-7.4-5.334-6.59-9Z"/></svg>

);
