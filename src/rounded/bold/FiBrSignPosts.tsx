import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrSignPosts = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,2.607v-1.107c0-.828-.671-1.5-1.5-1.5s-1.5.672-1.5,1.5v.5H6v-.5c0-.828-.671-1.5-1.5-1.5s-1.5.672-1.5,1.5v1.107C1.222,3.52,0,5.368,0,7.5v6c0,2.132,1.222,3.98,3,4.893v4.107c0,.828.671,1.5,1.5,1.5s1.5-.672,1.5-1.5v-3.5h12v3.5c0,.828.671,1.5,1.5,1.5s1.5-.672,1.5-1.5v-4.107c1.778-.912,3-2.761,3-4.893v-6c0-2.132-1.222-3.98-3-4.893Zm0,10.893c0,1.379-1.122,2.5-2.5,2.5H5.5c-1.378,0-2.5-1.121-2.5-2.5v-6c0-1.379,1.122-2.5,2.5-2.5h13c1.378,0,2.5,1.121,2.5,2.5v6Z"/>
</svg>

);
