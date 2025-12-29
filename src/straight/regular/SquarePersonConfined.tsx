import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SquarePersonConfined = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M21,0H3C1.346,0,0,1.346,0,3V24H24V3c0-1.654-1.346-3-3-3Zm1,22H2V3c0-.551,.449-1,1-1H21c.551,0,1,.449,1,1V22Zm-3.83-12.762c-1.432-.662-3.335,.101-3.907,1.534l-2.315,4.634-2.725-3.406h-1.342L3.882,20h2.236l2.671-5.342,3.276,4.095,.007-.006c.317,.442,.743,.796,1.257,1.014,1.432,.661,3.335-.1,3.907-1.534l2.525-5.056c.661-1.471-.094-3.334-1.591-3.933Zm-.224,3.095l-2.526,5.057c-.199,.5-.822,.75-1.311,.53-.473-.171-.742-.824-.557-1.253l2.526-5.057c.199-.499,.82-.751,1.311-.53,.473,.171,.742,.824,.557,1.253Zm-6.946-5.833c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Z"/>
</svg>

);
