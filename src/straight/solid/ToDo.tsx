import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ToDo = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21.5,18l-2.5-2.5V2.5c0-1.379,1.121-2.5,2.5-2.5s2.5,1.121,2.5,2.5v13l-2.5,2.5ZM14,0H3C1.343,0,0,1.343,0,3v18.357c0,1.308.941,2.499,2.242,2.63,1.496.15,2.758-1.021,2.758-2.487v-3.5h12V3c0-1.657-1.343-3-3-3Zm-7.226,13.534c-.31.31-.717.465-1.124.465s-.814-.155-1.124-.465l-1.647-1.647,1.414-1.414,1.357,1.357,2.537-2.537,1.414,1.414-2.827,2.827Zm0-6c-.31.31-.717.465-1.124.465s-.814-.155-1.124-.465l-1.647-1.647,1.414-1.414,1.357,1.357,2.537-2.537,1.414,1.414-2.827,2.827Zm13.226,13.466v-1s-13,0-13,0v1.5c0,.924-.28,1.784-.76,2.5h10.76c1.657,0,3-1.343,3-3Z"/>
</svg>

);
