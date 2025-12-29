import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsTrashCanCheck = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m9.401,16.561l-2.42-2.334.693-.721,2.427,2.341c.102.102.227.153.359.153h0c.134,0,.259-.052.354-.146l5.487-5.402.701.713-5.484,5.399c-.28.28-.657.437-1.058.437h0c-.401,0-.777-.156-1.06-.439Zm12.599-11.561h-2v16.5c0,1.379-1.121,2.5-2.5,2.5H6.5c-1.379,0-2.5-1.121-2.5-2.5V5h-2v-1h5v-1.5c0-1.379,1.121-2.5,2.5-2.5h5c1.379,0,2.5,1.121,2.5,2.5v1.5h5v1Zm-14-1h8v-1.5c0-.827-.673-1.5-1.5-1.5h-5c-.827,0-1.5.673-1.5,1.5v1.5Zm11,1H5v16.5c0,.827.673,1.5,1.5,1.5h11c.827,0,1.5-.673,1.5-1.5V5Z"/>
</svg>

);
