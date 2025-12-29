import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsOutdent = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m.922,12.768c-.48-.4-.48-1.137,0-1.536l5.078-4.232v10L.922,12.768ZM0,3v3h24v-3H0Zm0,18h24v-3H0v3Zm8-10h16v-3H8v3Zm0,5h16v-3H8v3Z"/></svg>

);
