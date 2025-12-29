import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PlugCircleMinus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M9,18.922v4.078c0,.553-.447,1-1,1s-1-.447-1-1v-4.078c-3.417-.479-6-3.458-6-6.922v-4c-.553,0-1-.447-1-1s.447-1,1-1h3V1c0-.553,.447-1,1-1s1,.447,1,1V6h5V1c0-.553,.447-1,1-1s1,.447,1,1V6h3c.553,0,1,.447,1,1s-.447,1-1,1H3v4c0,2.475,1.844,4.603,4.289,4.95,.976,.139,1.711,.986,1.711,1.972Zm10.5-2.922h-5c-.553,0-1,.447-1,1s.447,1,1,1h5c.553,0,1-.447,1-1s-.447-1-1-1Zm4.5,1c0,3.859-3.141,7-7,7s-7-3.141-7-7,3.141-7,7-7,7,3.141,7,7Zm-2,0c0-2.757-2.243-5-5-5s-5,2.243-5,5,2.243,5,5,5,5-2.243,5-5Z"/>
</svg>

);
