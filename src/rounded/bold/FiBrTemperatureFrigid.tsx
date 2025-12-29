import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrTemperatureFrigid = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,16.037a2.995,2.995,0,1,1-4.5-2.584V8.5a1.5,1.5,0,0,1,3,0v4.953A2.987,2.987,0,0,1,19,16.037ZM24,16a8.009,8.009,0,0,1-8,8c-6.738.135-10.571-8.318-6-13.271V6.037c.253-7.932,11.75-7.926,12,0v4.692A7.907,7.907,0,0,1,24,16Zm-3,0a4.952,4.952,0,0,0-1.541-3.59A1.5,1.5,0,0,1,19,11.33V6.037a3,3,0,0,0-6,0V11.33a1.5,1.5,0,0,1-.459,1.08A4.994,4.994,0,1,0,21,16ZM8,1.5a1.5,1.5,0,0,0-3,0V3.911l-2.092-1.2a1.5,1.5,0,1,0-1.492,2.6L3.484,6.5,1.416,7.686a1.5,1.5,0,1,0,1.492,2.6L5,9.089V11.5a1.5,1.5,0,0,0,3,0Z"/></svg>

);
