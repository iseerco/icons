import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CheckInCalendar = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,7v1H0v-1C0,4.239,2.239,2,5,2h1v-1c0-.552.448-1,1-1s1,.448,1,1v1h8v-1c0-.552.448-1,1-1s1,.448,1,1v1h1c2.761,0,5,2.239,5,5ZM0,10v6h7.948l-1.571-1.571c-.391-.391-.391-1.023,0-1.414s1.023-.391,1.414,0l2.659,2.659c.731.731.731,1.92,0,2.651l-2.659,2.659c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023,0-1.414l1.571-1.571H0v1c0,2.761,2.239,5,5,5h14c2.761,0,5-2.239,5-5v-9H0Z"/>
</svg>

);
