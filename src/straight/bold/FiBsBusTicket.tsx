import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBusTicket = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22.5 10.5h1.5v-4c0-1.93-1.57-3.5-3.5-3.5h-17c-1.93 0-3.5 1.57-3.5 3.5v11c0 1.93 1.57 3.5 3.5 3.5h17c1.93 0 3.5-1.57 3.5-3.5v-4h-1.5c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5zm-1.5-2.743c-1.746.619-3 2.288-3 4.243s1.254 3.624 3 4.243v1.257c0 .275-.225.5-.5.5h-17c-.275 0-.5-.225-.5-.5v-11c0-.276.225-.5.5-.5h17c.275 0 .5.224.5.5zm-6.287 1.528c-.311-.696-.969-1.151-1.713-1.246v-.039h-5.833c-1.138 0-2.063.884-2.15 2h-.017v5h1.092c.207.581.756 1 1.408 1s1.202-.419 1.408-1h3.184c.207.581.756 1 1.408 1s1.202-.419 1.408-1h1.092v-2.217c0-.399-.082-.787-.244-1.15zm-7.713.715h5v2h-5z"/></svg>
);
