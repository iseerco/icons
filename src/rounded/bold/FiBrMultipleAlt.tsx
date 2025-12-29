import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrMultipleAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m5,3c-1.103,0-2,.897-2,2v6.5c0,.829-.671,1.5-1.5,1.5s-1.5-.671-1.5-1.5v-6.5C0,2.243,2.243,0,5,0h6.5c.829,0,1.5.671,1.5,1.5s-.671,1.5-1.5,1.5h-6.5Zm19,11.5v5c0,2.481-2.019,4.5-4.5,4.5h-5c-2.481,0-4.5-2.019-4.5-4.5v-5c0-2.481,2.019-4.5,4.5-4.5h5c2.481,0,4.5,2.019,4.5,4.5Zm-3,0c0-.827-.673-1.5-1.5-1.5h-5c-.827,0-1.5.673-1.5,1.5v5c0,.827.673,1.5,1.5,1.5h5c.827,0,1.5-.673,1.5-1.5v-5Zm-4.5-6.5c.829,0,1.5-.671,1.5-1.5s-.671-1.5-1.5-1.5h-6.5c-2.757,0-5,2.243-5,5v6.5c0,.829.671,1.5,1.5,1.5s1.5-.671,1.5-1.5v-6.5c0-1.103.897-2,2-2h6.5Z"/>
</svg>

);
