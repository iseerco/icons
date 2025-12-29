import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FingerNail = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M17,4V12.5c0,1.297-.557,2.458-1.435,3.279-.822-1.076-2.107-1.779-3.565-1.779s-2.743,.703-3.565,1.779c-.878-.821-1.435-1.981-1.435-3.279V4C7,1.791,8.791,0,11,0h2c2.209,0,4,1.791,4,4ZM0,2.5l1.667,.833,.833,1.667,.833-1.667,1.667-.833-1.667-.833-.833-1.667-.833,1.667-1.667,.833ZM19,6.593v5.907c0,3.59-2.91,6.5-6.5,6.5h-1c-3.59,0-6.5-2.91-6.5-6.5V6.593c-1.895,1.777-3,4.243-3,6.907v10.5H18.962l-1-2-2-1,2-1,1-2,1,2,2,1-2,1-1,2h3.038V13.5c0-2.664-1.105-5.13-3-6.907Z"/>
</svg>

);
