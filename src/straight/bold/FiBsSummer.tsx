import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSummer = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,16.037a3,3,0,1,1-4.5-2.584V8.036h3v5.417A2.987,2.987,0,0,1,19,16.037ZM24,16A8,8,0,0,1,8,16a7.9,7.9,0,0,1,2-5.271V6.036a6,6,0,0,1,12,0v4.693A7.9,7.9,0,0,1,24,16Zm-3,0a4.95,4.95,0,0,0-1.541-3.59L19,11.968V6.036a3,3,0,1,0-6,0v5.932l-.46.443A4.948,4.948,0,0,0,11,16a5,5,0,0,0,10,0ZM10,0H7V2.7a5.925,5.925,0,0,0-1.531.651L3.55,1.429,1.429,3.55,3.341,5.462A5.935,5.935,0,0,0,2.711,7H0v3H2.7a6.024,6.024,0,0,0,.638,1.541L1.428,13.45,3.55,15.571l3.182-3.182A9.983,9.983,0,0,1,8,10.019V6.037A7.957,7.957,0,0,1,10,.763Z"/></svg>

);
