import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsArtificialIntelligence = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m16,11h3v8h-3v-8Zm3.5-2l1.5-3,3-1.5-3-1.5-1.5-3-1.5,3-3,1.5,3,1.5,1.5,3Zm-7.435-1.902l2.935,11.902h-3.079l-.499-2h-3.844l-.499,2h-3.079l2.952-11.975c.174-.751.669-1.385,1.357-1.737.703-.36,1.506-.383,2.26-.067.736.308,1.295,1.01,1.496,1.876Zm-1.069,6.902l-1.496-6-1.496,6h2.992Zm10.004-3v10H3V3.5c0-.276.224-.5.5-.5h9.5V0H3.5C1.57,0,0,1.57,0,3.5v20.5h24v-13h-3Z"/>
</svg>

);
