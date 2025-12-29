import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrCardSpade = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m15.5,0h-7C5.468,0,3,2.467,3,5.5v13c0,3.033,2.468,5.5,5.5,5.5h7c3.032,0,5.5-2.467,5.5-5.5V5.5c0-3.033-2.468-5.5-5.5-5.5Zm2.5,18.5c0,1.378-1.121,2.5-2.5,2.5h-7c-1.379,0-2.5-1.122-2.5-2.5V5.5c0-1.378,1.121-2.5,2.5-2.5h7c1.379,0,2.5,1.122,2.5,2.5v13Zm-2-5.5c0,1.105-.895,2-2,2-.558,0-1.062-.229-1.425-.597.193.657.452,1.274.798,1.812.219.341-.003.785-.407.785h-1.931c-.405,0-.626-.445-.407-.785.346-.538.604-1.155.798-1.812-.363.368-.867.597-1.425.597-1.105,0-2-.895-2-2,0-2.333,4-5,4-5,0,0,4,2.667,4,5Z"/>
</svg>

);
