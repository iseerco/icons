import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSkillAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m0,0V8h8V0H0Zm4.212,5.651c-.459.474-1.22.471-1.675-.007L.5,3.491l1.387-1.441,1.496,1.581L5.926,1l1.398,1.43-3.113,3.221Zm3.788,12.349H0v-8h8v8Zm-2.005,3h7.005s0-3,0-3h4.889c.248,0,.462-.186.495-.432l.703-5.568h1.557c-.063-.146-.127-.292-.19-.438-.991-2.284-2.021-4.145-2.976-5.327-1.746-2.331-4.588-3.508-7.478-3.153V.075c3.835-.349,7.556,1.26,9.844,4.317,1.178,1.456,2.24,3.394,3.361,5.975.222.512.795,1.815.795,1.815v2.818h-2.298s-.346,2.978-.346,2.978c-.238,1.723-1.729,3.022-3.468,3.022h-1.894s0,3,0,3H3v-4h2.995v1Z"/>
</svg>

);
