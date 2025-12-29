import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsMercury = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20,10c0-3.435-2.176-6.371-5.222-7.502,1.362-.51,2.548-1.383,3.444-2.498h-1.365c-1.258,1.229-2.962,2-4.857,2s-3.599-.771-4.857-2h-1.365c.897,1.115,2.083,1.988,3.444,2.498-3.046,1.132-5.222,4.067-5.222,7.502,0,4.243,3.321,7.725,7.5,7.984v3.016h-2.5v1h2.5v2h1v-2h2.5v-1h-2.5v-3.016c4.179-.259,7.5-3.741,7.5-7.984Zm-15,0c0-3.859,3.14-7,7-7s7,3.141,7,7-3.14,7-7,7-7-3.141-7-7Z"/>
</svg>

);
