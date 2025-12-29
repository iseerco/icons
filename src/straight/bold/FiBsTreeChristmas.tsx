import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTreeChristmas = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  

<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
<path d="M288.832,512v-42.667h219.157l-86.037-128.277h53.909l-85.333-127.723h46.933c0,0-99.234-145.073-134.869-191.552  c-0.811-1.058-3.413-4.096-3.413-4.096C288.014,6.338,272.751-0.036,256.832,0l0,0c-15.925-0.047-33.431,6.363-42.347,17.707  L73.301,213.333H121.6l-85.333,128h53.717l-86.059,128h220.907V512H288.832z M155.733,277.333l85.333-128h-42.901l58.581-81.472  l57.344,81.472h-43.285l85.333,127.723h-54.187l86.037,128.277H124.075l86.059-128H155.733z"/>
<circle cx="245.333" cy="352" r="32"/>
<circle cx="266.667" cy="245.333" r="32"/>
</svg>

);
