import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsWalkieTalkie = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18.5,3h-5.5V1h-3v2h-2V0h-3v3.036c-1.694.243-3,1.704-3,3.464v5.948c0,1.018.35,2.016.986,2.811l1.014,1.268v7.474h16v-7.474l1.014-1.268c.636-.795.986-1.793.986-2.811v-5.948c0-1.93-1.57-3.5-3.5-3.5Zm.5,9.448c0,.339-.117.672-.329.937l-1.671,2.089v5.526H7v-5.526l-1.671-2.089c-.212-.265-.329-.598-.329-.937v-5.948c0-.276.224-.5.5-.5h13c.276,0,.5.224.5.5v5.948Zm-12-4.448h10v4H7v-4Z"/></svg>

);
