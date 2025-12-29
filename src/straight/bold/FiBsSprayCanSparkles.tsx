import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSprayCanSparkles = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12.5,7h-.5V2c0-1.105-.895-2-2-2h-3c-1.105,0-2,.895-2,2v5h-.5c-2.481,0-4.5,2.019-4.5,4.5v12.5h17v-12.5c0-2.481-2.019-4.5-4.5-4.5Zm1.5,14H3v-9.5c0-.827.673-1.5,1.5-1.5h8c.827,0,1.5.673,1.5,1.5v9.5Zm-2-5.5c0,1.933-1.567,3.5-3.5,3.5s-3.5-1.567-3.5-3.5,1.567-3.5,3.5-3.5,3.5,1.567,3.5,3.5Zm7-13l-1.667.833-.833,1.667-.833-1.667-1.667-.833,1.667-.833.833-1.667.833,1.667,1.667.833Zm0,3l1.667-.833.833-1.667.833,1.667,1.667.833-1.667.833-.833,1.667-.833-1.667-1.667-.833Zm2.333,5.167l1.667.833-1.667.833-.833,1.667-.833-1.667-1.667-.833,1.667-.833.833-1.667.833,1.667Z"/>
</svg>

);
