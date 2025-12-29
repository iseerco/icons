import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Screw = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m8.981,13.67l6-5.512v2.4l-6,5.512v-2.4Zm0,7.302l.086.086,5.914-5.433v-2.351l-6,5.512v2.186Zm3.216-12.972h-3.216v2.954l3.216-2.954Zm-1.819,14.368l1.603,1.603,3-3v-2.832l-4.603,4.229ZM17.981,3V0H5.981v3l3,3h6l3-3Z"/>
</svg>

);
