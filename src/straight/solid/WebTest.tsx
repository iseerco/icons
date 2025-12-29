import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const WebTest = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M20,1H2C.346,1-1,2.346-1,4v4H23V4c0-1.654-1.346-3-3-3ZM2.5,6c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5,1.5,.672,1.5,1.5-.672,1.5-1.5,1.5Zm4,0c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5,1.5,.672,1.5,1.5-.672,1.5-1.5,1.5ZM-1,23H23V10H-1v13ZM11.542,13h7.458v2H9.5l2.042-2Zm0,5h7.458v2H9.499l2.042-2Zm-7.367-5.296l1.281,1.213,2.548-2.548,1.414,1.414-2.692,2.692c-.352,.352-.809,.528-1.266,.528-.441,0-.883-.164-1.23-.493l-1.43-1.354,1.375-1.452Zm0,5l1.281,1.213,2.548-2.548,1.414,1.414-2.692,2.692c-.352,.352-.809,.528-1.266,.528-.441,0-.883-.164-1.23-.493l-1.43-1.355,1.375-1.451Z"/>
</svg>

);
