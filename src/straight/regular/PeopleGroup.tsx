import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PeopleGroup = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M9.5,4.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm7.5,6.5v8h-2v5h-2v-5h-2v5h-2v-5h-2V11c0-1.654,1.346-3,3-3h4c1.654,0,3,1.346,3,3Zm-2,0c0-.551-.449-1-1-1h-4c-.551,0-1,.449-1,1v6h6v-6Zm4.5-6c1.381,0,2.5-1.119,2.5-2.5s-1.119-2.5-2.5-2.5-2.5,1.119-2.5,2.5,1.119,2.5,2.5,2.5Zm4.5,4c0-1.654-1.346-3-3-3h-4c-.472,0-.913,.119-1.311,.314,.918,.332,1.706,.921,2.285,1.686h3.026c.551,0,1,.449,1,1v6h-3v2h1v5h2v-5h2V9ZM4.5,5c1.381,0,2.5-1.119,2.5-2.5S5.881,0,4.5,0,2,1.119,2,2.5s1.119,2.5,2.5,2.5Zm2.5,1H3c-1.654,0-3,1.346-3,3v8H2v5h2v-5h1v-2H2v-6c0-.551,.449-1,1-1h3.026c.579-.765,1.367-1.353,2.285-1.686-.398-.195-.839-.314-1.311-.314Z"/>
</svg>

);
