import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ThirdMedal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19.48,6.912c-1.731-1.595-3.973-2.643-6.449-2.867L15.033,0h7.867l-3.42,6.912Zm-8.451-2.866l-1.996-4.046H1.061l3.446,6.985c1.74-1.635,4.01-2.71,6.522-2.939Zm10.004,10.954c0,4.963-4.038,9-9,9S3.033,19.963,3.033,15,7.07,6,12.033,6s9,4.037,9,9Zm-5.366,2c0-.959-.453-1.813-1.155-2.363.308-.471.488-1.033.488-1.637,0-1.654-1.346-3-3-3h-2.5v2h2.5c.552,0,1,.448,1,1s-.448,1-1,1h-1v2h1.667c.552,0,1,.448,1,1s-.448,1-1,1h-3.167v2h3.167c1.654,0,3-1.346,3-3Z"/>
</svg>

);
