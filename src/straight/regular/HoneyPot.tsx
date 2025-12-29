import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HoneyPot = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21.634,2h1.366V0H1v2h1.366C.895,4.276,0,7.188,0,9.905c0,4.153,2.699,9.858,5.374,13.669l.298.426h12.655l.298-.426c2.675-3.812,5.374-9.517,5.374-13.669,0-2.717-.895-5.629-2.366-7.905Zm-4.352,20H6.718c-2.395-3.538-4.718-8.524-4.718-12.095,0-2.772,1.133-5.889,2.85-7.905h.65c.827,0,1.5.673,1.5,1.5v8.5h2V3.5c0-.827.673-1.5,1.5-1.5s1.5.673,1.5,1.5v4.5h2V3.5c0-.827.673-1.5,1.5-1.5h3.65c1.717,2.016,2.85,5.132,2.85,7.905,0,3.571-2.323,8.557-4.718,12.095Z"/>
</svg>

);
