import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsHomeHeart = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22.657,7.408L14.157.756c-1.271-.994-3.045-.994-4.314,0L1.344,7.407c-.854.668-1.344,1.673-1.344,2.757v13.824h24v-13.824c0-1.084-.489-2.089-1.343-2.756Zm-1.657,13.58H3v-10.824c0-.155.07-.298.192-.394L11.692,3.118c.182-.142.434-.142.615,0l8.501,6.652c.121.095.191.239.191.394v10.824Zm-4.519-8.513c0,2.592-4.5,5.775-4.5,5.775,0,0-4.5-3.183-4.5-5.775,0-1.367,1.007-2.475,2.25-2.475s2.25,1.108,2.25,2.475c0-1.367,1.007-2.475,2.25-2.475s2.25,1.108,2.25,2.475Z"/>
</svg>

);
