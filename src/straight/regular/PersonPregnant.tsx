import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PersonPregnant = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M8.5,2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm9.5,12c0,1.713-.946,4.512-1.055,4.826l-.232,.674h-2.713v4h-2v-4h-2v4h-2v-4h-2.133l1.422-11.372c.187-1.498,1.467-2.628,2.977-2.628h1.469c1.51,0,2.79,1.13,2.977,2.628l.114,.909c1.923,.896,3.175,2.817,3.175,4.963Zm-2,0c0-1.5-.968-2.828-2.408-3.305l-.6-.198-.266-2.121c-.062-.5-.489-.876-.992-.876h-1.469c-.503,0-.93,.376-.992,.876l-.311,2.487,3.485,1.742-.895,1.789-2.853-1.427-.567,4.532h7.139c.309-1.006,.729-2.583,.729-3.5Z"/></svg>

);
