import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LandLayers = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m7.021,3.321L12,.334l5.021,3.013-4.979,2.987-5.021-3.013Zm6.965,4.179l4.979,2.987,4.979-2.987-4.979-2.987-4.979,2.987Zm-3.888,0l-5.021-3.013L.056,7.5l5.021,3.013,5.021-3.013Zm1.944,1.166l-5.021,3.013,4.979,2.987,5.021-3.013-4.979-2.987Zm11.957.971l-12,7.2L0,9.637v2.332l12,7.2,12-7.2v-2.332Zm0,4.331l-12,7.2L0,13.968v2.332l12,7.2,12-7.2v-2.332Z"/>
</svg>

);
