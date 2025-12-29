import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const JugBottle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19.493,6.105l-6.493-1.082v-3.023h1V0H5v2h1v3.178l-2.053.77c-1.165.437-1.947,1.565-1.947,2.809v15.244h20v-14.936c0-1.473-1.054-2.717-2.507-2.959Zm-2.493,3.395c0-.827.673-1.5,1.5-1.5s1.5.673,1.5,1.5v5.5c0,.827-.673,1.5-1.5,1.5s-1.5-.673-1.5-1.5v-5.5Zm-13,12.5v-13.244c0-.415.261-.791.649-.936l3.351-1.257V2h3v4.718l4.636.773c-.401.569-.636,1.262-.636,2.01v5.5c0,1.93,1.57,3.5,3.5,3.5.536,0,1.045-.122,1.5-.338v3.838H4Z"/>
</svg>

);
