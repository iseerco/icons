import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsScrewAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20.88,14h-5.773l-2.887,5,2.887,5h5.773l2.887-5-2.887-5Zm-2.88,7c-1.105,0-2-.895-2-2s.895-2,2-2,2,.895,2,2-.895,2-2,2ZM0,3l2,1.997v14.977l4,4,4-4V5.022l2-2.022V0H0v3Zm7,9.233l-2,2v-2.819l2-2v2.819Zm0-5.647l-2,2v-3.576l2,.006v1.57Zm-1,13.146l-1-1v-1.671l2-2v3.671l-1,1Z"/>
</svg>

);
