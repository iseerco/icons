import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MartiniGlassCitrus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18.462,8.477c.977-.888,1.537-2.155,1.537-3.477v-1H-.001v1C-.001,6.32.559,7.588,1.537,8.477l7.462,6.784v6.739h-4v2h10v-2h-4v-6.739l7.463-6.784Zm5.421-3.757c.806,3.882-2.135,7.297-5.874,7.297-.149,0-.296-.012-.442-.022l2.242-2.038h0c1.393-1.267,2.191-3.074,2.191-4.957h0c0-1.657-1.343-3-3-3h-5.458c1.357-1.511,3.46-2.337,5.736-1.869s4.131,2.308,4.605,4.589Z"/>
</svg>

);
