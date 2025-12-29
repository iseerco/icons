import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DrawerEmpty = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M18.806,12H5.198l.727-5h12.164l.716,5ZM5.986,5h12.014V0H5.994l-.008,5Zm14.014,2l.834,5h2.962l-1.967-9.665c-.227-.998-.926-1.771-1.829-2.124V7ZM3.165,12l.835-5V.221c-.895,.361-1.604,1.142-1.833,2.135L.185,12H3.165Zm20.835,2v10H0L.018,14H24Zm-9,4h-6v2h6v-2Z"/>
</svg>

);
