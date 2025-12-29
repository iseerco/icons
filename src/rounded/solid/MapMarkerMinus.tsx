import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MapMarkerMinus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  

<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
<path d="M422.147,69.996c-90.589-92.147-238.726-93.411-330.873-2.822S-2.137,305.9,88.452,398.047  c1.126,1.145,2.264,2.279,3.413,3.401l83.868,77.487c44.837,43.862,116.448,44.041,161.504,0.404l84.91-78.465  C513.513,309.503,513.513,161.367,422.147,69.996z M341.789,256.705H171.628c-11.747,0-21.27-9.523-21.27-21.27  s9.523-21.27,21.27-21.27h170.161c11.747,0,21.27,9.523,21.27,21.27S353.536,256.705,341.789,256.705z"/>
</svg>

);
