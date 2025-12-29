import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBanner = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24.008,7.097l-.938-.135c-3.047-.438-7.439-.961-11.069-.961s-8.022.523-11.069.961L-.008,7.097l4.647,5.053L.349,17.983l1.17-.16c2.244-.307,6.59-.822,10.481-.822s8.237.515,10.481.822l1.17.16-4.291-5.833,4.647-5.053Zm-2.557,9.583c-2.422-.303-6.098-.679-9.451-.679s-7.029.375-9.451.679l3.384-4.601-3.918-4.259c2.934-.4,6.771-.819,9.985-.819s7.052.419,9.985.819l-3.918,4.259,3.384,4.601Z"/>
</svg>

);
