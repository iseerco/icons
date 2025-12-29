import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CheckOutCalendar = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m0,10h24v9c0,2.761-2.239,5-5,5H5c-2.761,0-5-2.239-5-5v-2c0,.501.195.972.549,1.326l2.659,2.659c.195.195.451.293.707.293s.512-.098.707-.293c.391-.391.391-1.023,0-1.414l-1.57-1.571h6.948c.552,0,1-.448,1-1s-.448-1-1-1H3.052l1.57-1.571c.391-.391.391-1.024,0-1.414-.391-.391-1.023-.391-1.414,0l-2.659,2.659c-.354.354-.55.825-.55,1.326v-7ZM19,2h-1v-1c0-.552-.448-1-1-1s-1,.448-1,1v1h-8v-1c0-.552-.448-1-1-1s-1,.448-1,1v1h-1C2.239,2,0,4.239,0,7v1h24v-1c0-2.761-2.239-5-5-5Z"/>
</svg>

);
