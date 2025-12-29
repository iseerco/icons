import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsHandshakeSimpleSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17.15,3.262l3.476,1.738h3.354V2h-2.646l-2.844-1.422C16.477-.428,13.882-.018,12.347,1.436l-.358,.303-.341-.311c-1.012-.921-2.322-1.428-3.728-1.428-.845,0-1.691,.2-2.45,.578l-1.847,.924L2.16,.04,.039,2.161,21.84,23.96l2.121-2.121-4.378-4.378,2.018-1.462h2.379v-3h-2.033L13.407,4.479l.937-.806c.737-.696,1.896-.865,2.807-.412Zm-10.34,0c.849-.423,2.048-.315,2.816,.384l.05,.046-2.095,1.77-1.723-1.723,.952-.476Zm12.121,10.967l-1.497,1.084-5.635-5.635,1.41-1.157,5.721,5.708Zm-5.598,4.054l2.148,2.148-3.508,2.541L2.488,16H0v-3H3.473l8.515,6.258,1.346-.975Z"/></svg>

);
