import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrReel = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20,13.458c2.376-.21,4-1.767,4-3.958,0-.828-.672-1.5-1.5-1.5s-1.5,.672-1.5,1.5c0,.629-.504,.869-1,.955V3h2.5c.828,0,1.5-.672,1.5-1.5s-.672-1.5-1.5-1.5H1.538C.71,0,.038,.672,.038,1.5s.672,1.5,1.5,1.5h2.497l-.033,18H1.5c-.828,0-1.5,.672-1.5,1.5s.672,1.5,1.5,1.5H22.462c.828,0,1.5-.672,1.5-1.5s-.672-1.5-1.5-1.5h-2.462v-7.542Zm-3-2.958H7.022l.005-2.5h9.974v2.5Zm-9.984,3h9.984v2.5H7.012l.005-2.5ZM17,3v2H7.032l.004-2h9.965ZM7.003,21l.004-2h9.994v2H7.003Z"/></svg>

);
