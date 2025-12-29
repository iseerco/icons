import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PumpMedical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21.456.671c-.66-.438-1.427-.671-2.218-.671h-7.238c-1.654,0-3,1.346-3,3v2.863c-2.978,1.209-5,4.158-5,7.417v10.72h16v-10.72c0-3.259-2.022-6.208-5-7.417v-3.863h4.238c.396,0,.779.116,1.109.336l2.502,1.668,1.109-1.664-2.503-1.669Zm-10.456,2.329c0-.552.448-1,1-1h1v4h-2v-3Zm7,10.28v8.72H6v-8.72c0-2.219,1.249-4.247,3.15-5.28h5.7c1.901,1.034,3.15,3.061,3.15,5.28Zm-5,.72h3v2h-3v3h-2v-3h-3v-2h3v-3h2v3Z"/></svg>

);
