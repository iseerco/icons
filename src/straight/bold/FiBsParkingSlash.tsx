import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsParkingSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,0H3.5C1.57,0,0,1.57,0,3.5V24H24V3.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,3.5v15.379l-4.935-4.935c1.182-.924,1.935-2.364,1.935-3.944,0-2.757-2.243-5-5-5h-2.5c-.934,0-1.784,.368-2.412,.967l-2.967-2.967h15.379c.275,0,.5,.224,.5,.5Zm-7.096,8.283l-3.692-3.692c.081-.057,.18-.092,.287-.092h2.5c1.103,0,2,.897,2,2,0,.766-.442,1.449-1.096,1.783ZM3,5.121l15.879,15.879H3V5.121Zm7.051,9.879h-.051v4h-3v-7.051l3.051,3.051Z"/></svg>

);
