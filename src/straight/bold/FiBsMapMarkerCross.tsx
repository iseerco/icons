import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMapMarkerCross = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  

<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
<path d="M173.298,254.423l41.296-41.275l-41.296-41.275l45.17-45.17L259.743,168l41.275-41.296l45.17,45.17l-41.296,41.275  l41.296,41.275l-45.17,45.17l-41.275-41.296l-41.275,41.296L173.298,254.423z M106.82,365.369  c-84.444-81.794-86.592-216.556-4.798-301s216.556-86.592,301-4.798c1.549,1.5,3.075,3.024,4.578,4.571  c83.128,83.129,83.128,217.906,0,301.035L257.082,512.396L106.82,365.369z M108.076,214.617  c-0.102,39.54,15.61,77.479,43.638,105.369l105.369,103.048l105.603-103.304c58.058-58.323,57.843-152.668-0.48-210.726  s-152.668-57.843-210.726,0.48C123.679,137.411,108.073,175.213,108.076,214.617L108.076,214.617z"/>
</svg>

);
