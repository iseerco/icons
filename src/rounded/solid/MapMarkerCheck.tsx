import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MapMarkerCheck = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.778,3.222C17.7,1.144,14.937,0,12,0S6.3,1.145,4.222,3.222c-2.078,2.077-3.222,4.839-3.222,7.778s1.144,5.7,3.25,7.805l3.943,3.643c1.022,1.001,2.375,1.552,3.807,1.552s2.784-.551,3.786-1.533l3.992-3.689c2.078-2.078,3.222-4.84,3.222-7.778s-1.144-5.701-3.222-7.778Zm-2.079,5.49l-5.793,5.707c-.387,.387-.896,.58-1.407,.58s-1.025-.195-1.416-.585l-2.782-2.696c-.396-.385-.406-1.018-.021-1.414,.385-.398,1.018-.406,1.414-.022l2.793,2.707,5.809-5.701c.395-.387,1.027-.382,1.414,.011,.388,.393,.384,1.026-.01,1.414Z"/></svg>

);
