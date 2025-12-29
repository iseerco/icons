import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ShieldTrust = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21.5,9.479V3.5h-5.979L12-.021l-3.521,3.521H3.5v4.979L-.021,12l3.521,3.521v4.979h4.979l3.521,3.521,3.521-3.521h4.979v-4.979l3.521-3.521-2.521-2.521Zm-9.401,5.963c-.356.357-.836.557-1.347.558h0c-.511,0-.99-.199-1.352-.562l-3.602-3.543,1.402-1.425,3.551,3.491,7.148-7.073,1.41,1.419-7.209,7.135Z"/>
</svg>

);
