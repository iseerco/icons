import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const VestPatches = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15.352,.008l-3.352,9.099L8.648,.008c.205-.008,.333-.008,.352-.008h6c.019,0,.148,0,.352,.008Zm7.648,11.623v12.369H13V12.178L17.41,.209c.444,.07,.917,.164,1.388,.289,1.297,.347,2.202,1.537,2.202,2.896v4.606c0,.973,1.426,2.958,2,3.631Zm-3,3.369l-2-3-2,3h4ZM6.59,.209l4.41,11.969v11.822H1V11.632c.681-.801,2-2.699,2-3.632V3.394c0-1.358,.905-2.549,2.202-2.896,.471-.126,.943-.219,1.388-.289Zm1.41,19.291c0-.828-.672-1.5-1.5-1.5s-1.5,.672-1.5,1.5,.672,1.5,1.5,1.5,1.5-.672,1.5-1.5Zm0-7.5h-3v3h3v-3Z"/></svg>

);
