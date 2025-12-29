import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsExplosion = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M24,23v1h-7.34l5.438-8h-4.442L21.816,3.232l-8.133,7.444L9,3.965V12.299l-6.784-2.266,4.304,6.967H2.344l5.553,7H0v-1H5.828L.275,16H4.727L-.086,8.211l8.086,2.699V.783l5.85,8.386L23.944-.07l-4.91,15.07h4.953l-5.438,8h5.451Zm-9.027-5l.056-5.998-3.292,4.319-2.736-2.735v5.414h-2.545l3.889,5h1.267l-3.111-4h1.5v-4l1.837,1.837,2.163-2.837-.037,4h2.537l-3.5,5h1.221l4.2-6h-3.448Z"/>
</svg>

);
