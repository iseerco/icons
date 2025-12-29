import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrStocking = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23.5,0H7.5c-.276,0-.5.224-.5.5s.224.5.5.5h1.5v6.881c0,1.06-.672,2.008-1.672,2.359l-2.73.958C1.151,12.274-.776,15.955.299,19.403c.86,2.75,3.372,4.597,6.25,4.597.662,0,1.32-.101,1.967-.304l7.709-2.608c3.454-1.168,5.775-4.404,5.775-8.051V1h1.5c.276,0,.5-.224.5-.5s-.224-.5-.5-.5Zm-2.5,13.037c0,3.218-2.048,6.073-5.096,7.104l-7.698,2.605c-.539.169-1.097.254-1.657.254-2.438,0-4.566-1.565-5.295-3.896-.912-2.921.722-6.041,3.658-6.958l2.747-.963c1.4-.491,2.341-1.819,2.341-3.303V1h11v12.037Z"/></svg>

);
