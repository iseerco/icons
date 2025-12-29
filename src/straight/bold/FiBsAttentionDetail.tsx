import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsAttentionDetail = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m17.5,16c0,.829-.671,1.5-1.5,1.5s-1.5-.671-1.5-1.5.671-1.5,1.5-1.5,1.5.671,1.5,1.5Z"/>
  <path d="m21.163,19.042c.528-.893.837-1.931.837-3.042,0-3.308-2.692-6-6-6s-6,2.692-6,6,2.692,6,6,6c1.111,0,2.148-.309,3.042-.837l2.744,2.744,2.121-2.121-2.744-2.744Zm-5.163-.042c-2.772,0-4.117-2.225-4.5-3,.385-.777,1.728-3,4.5-3s4.115,2.223,4.5,3c-.385.777-1.728,3-4.5,3Z"/>
  <path d="m14.382,0H3.5C1.57,0,0,1.57,0,3.5v20.5h13.999v-.261c-1.695-.438-3.175-1.412-4.239-2.739H3V3.5c0-.275.224-.5.5-.5h8.5v5h8v-2.336L14.382,0Z"/>
</svg>

);
