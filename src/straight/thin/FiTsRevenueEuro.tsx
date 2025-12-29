import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsRevenueEuro = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m6.962,8.999l.038,15-1,.003-.038-15,1-.003ZM1,24h1v-12h-1v12ZM10.962,6.001l.038,18,1-.002-.038-18-1,.002Zm9.038,16.999c-1.654,0-3-1.346-3-3h3v-1h-3v-2h3v-1h-3c0-1.654,1.346-3,3-3s3,1.346,3,3h1c0-2.206-1.794-4-4-4s-4,1.794-4,4h-1v1h1v2h-1v1h1c0,2.206,1.794,4,4,4s4-1.794,4-4h-1c0,1.654-1.346,3-3,3Zm-3.038-12.165V3h-1v8.575c.306-.28.641-.528,1-.74Zm5.038-.485V0h-1v10.09c.344.058.678.145,1,.26Z"/>
  <path d="m6.962,8.999l.038,15-1,.003-.038-15,1-.003ZM1,24h1v-12h-1v12ZM10.962,6.001l.038,18,1-.002-.038-18-1,.002Zm9.038,16.999c-1.654,0-3-1.346-3-3h3v-1h-3v-2h3v-1h-3c0-1.654,1.346-3,3-3s3,1.346,3,3h1c0-2.206-1.794-4-4-4s-4,1.794-4,4h-1v1h1v2h-1v1h1c0,2.206,1.794,4,4,4s4-1.794,4-4h-1c0,1.654-1.346,3-3,3Zm-3.038-12.165V3h-1v8.575c.306-.28.641-.528,1-.74Zm5.038-.485V0h-1v10.09c.344.058.678.145,1,.26Z"/>
</svg>

);
