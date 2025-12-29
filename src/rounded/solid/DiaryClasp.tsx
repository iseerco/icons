import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DiaryClasp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19,9h3v2h-3c-.552,0-1-.448-1-1s.448-1,1-1Zm-14,7h1V.1C3.672.575,2,2.624,2,5v12.025c.699-.527,1.525-.86,2.395-.964.199-.041.402-.061.605-.061Zm-3,5c0,1.657,1.343,3,3,3h12c2.761,0,5-2.239,5-5v-1H5c-1.657,0-3,1.343-3,3Zm17-8c-1.654,0-3-1.346-3-3s1.346-3,3-3h3v-2c0-2.761-2.239-5-5-5h-9v16h14v-3h-3Z"/>
</svg>

);
