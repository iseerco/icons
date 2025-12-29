import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrTruckTow = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23.615,11.602l-.841-2.525c-.614-1.84-2.33-3.077-4.269-3.077h-2.004c-1.378,0-2.5,1.122-2.5,2.5v3.215L5.176.569c-.285-.359-.718-.569-1.176-.569h-.5c-.829,0-1.5.671-1.5,1.5v5.5h-.5c-.829,0-1.5.671-1.5,1.5s.671,1.5,1.5,1.5h.5c1.654,0,3-1.346,3-3v-1.82l5.399,6.82h-4.899c-3.033,0-5.5,2.467-5.5,5.5v2c0,.829.671,1.5,1.5,1.5h1.5v.5c0,1.381,1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5v-.5h8v.5c0,1.381,1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5v-.536c1.694-.243,3-1.704,3-3.464v-3.526c0-.808-.129-1.606-.385-2.372Zm-5.11-2.602c.646,0,1.219.412,1.423,1.025l.841,2.525c.153.459.231.938.231,1.423v.026h-4v-5h1.504Zm-4.504,9H3v-.5c0-1.378,1.122-2.5,2.5-2.5h8.5v3Z"/></svg>

);
