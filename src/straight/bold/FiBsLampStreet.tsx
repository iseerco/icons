import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsLampStreet = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,15.5c0-4.214-3.084-7.722-7.114-8.386C16.222,3.084,12.714,0,8.5,0,3.813,0,0,3.813,0,8.5v15.5h3v-15.5c0-3.032,2.468-5.5,5.5-5.5,2.572,0,4.737,1.775,5.336,4.164-3.892.776-6.836,4.219-6.836,8.336v1.5h6v.5c0,1.381,1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5v-.5h6v-1.5Zm-13.792-1.5c.654-2.306,2.779-4,5.292-4s4.638,1.694,5.292,4h-10.584Z"/>
</svg>

);
