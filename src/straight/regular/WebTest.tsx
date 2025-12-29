import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const WebTest = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M21,1H3C1.346,1,0,2.346,0,4V23H24V4c0-1.654-1.346-3-3-3ZM3,3H21c.552,0,1,.449,1,1v4H2V4c0-.551,.448-1,1-1Zm-1,18V10H22v11H2ZM3,5.5c0-.828,.672-1.5,1.5-1.5s1.5,.672,1.5,1.5-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5Zm4,0c0-.828,.672-1.5,1.5-1.5s1.5,.672,1.5,1.5-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5Zm3.003,4.869l1.414,1.414-2.692,2.692c-.352,.352-.809,.528-1.266,.528-.441,0-.883-.164-1.23-.493l-1.43-1.354,1.375-1.452,1.281,1.213,2.548-2.548Zm0,5l1.414,1.414-2.692,2.692c-.352,.352-.809,.528-1.266,.528-.441,0-.883-.164-1.23-.493l-1.43-1.355,1.375-1.451,1.281,1.213,2.548-2.548Zm3.539-3.369h5.458v2h-7.5l2.042-2Zm0,5h5.458v2h-7.5l2.042-2Z"/>
</svg>

);
