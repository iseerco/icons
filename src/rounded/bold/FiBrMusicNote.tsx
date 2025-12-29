import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrMusicNote = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19.5,0h-2.5c-2.757,0-5,2.243-5,5v8.602c-.751-.385-1.6-.602-2.5-.602-3.032,0-5.5,2.468-5.5,5.5s2.468,5.5,5.5,5.5,5.5-2.468,5.5-5.5V5c0-1.103.897-2,2-2h2.5c.828,0,1.5-.672,1.5-1.5s-.672-1.5-1.5-1.5Zm-10,21c-1.379,0-2.5-1.121-2.5-2.5s1.121-2.5,2.5-2.5,2.5,1.121,2.5,2.5-1.121,2.5-2.5,2.5Z"/>
</svg>

);
