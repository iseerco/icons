import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrThermometerHalf = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15,16.037a2.995,2.995,0,1,1-4.5-2.584V8.037a1.5,1.5,0,0,1,3,0v5.416A2.987,2.987,0,0,1,15,16.037ZM20,16a8.009,8.009,0,0,1-8,8c-6.773.089-10.563-8.262-6-13.271V6.037c.253-7.931,11.75-7.926,12,0v4.692A7.9,7.9,0,0,1,20,16Zm-3,0a4.95,4.95,0,0,0-1.541-3.59A1.5,1.5,0,0,1,15,11.33V6.037a3,3,0,0,0-6,0V11.33a1.5,1.5,0,0,1-.459,1.08A4.994,4.994,0,1,0,17,16Z"/></svg>

);
