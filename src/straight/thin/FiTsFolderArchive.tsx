import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsFolderArchive = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M4,21h4V10H4v11Zm1-10h2v9h-2V11ZM6,3c-1.378,0-2.5,1.121-2.5,2.5s1.122,2.5,2.5,2.5,2.5-1.121,2.5-2.5-1.122-2.5-2.5-2.5Zm0,4c-.827,0-1.5-.673-1.5-1.5s.673-1.5,1.5-1.5,1.5,.673,1.5,1.5-.673,1.5-1.5,1.5ZM21.5,0h-7.5c-.821,0-1.544,.403-2,1.015-.456-.613-1.179-1.015-2-1.015H2.5C1.122,0,0,1.121,0,2.5V24H24V2.5c0-1.379-1.121-2.5-2.5-2.5ZM11.5,23H1V2.5c0-.827,.673-1.5,1.5-1.5h7.5c.827,0,1.5,.673,1.5,1.5V23Zm11.5,0H12.5V2.5c0-.827,.673-1.5,1.5-1.5h7.5c.827,0,1.5,.673,1.5,1.5V23Zm-7-2h4V10h-4v11Zm1-10h2v9h-2V11Zm1-8c-1.379,0-2.5,1.121-2.5,2.5s1.121,2.5,2.5,2.5,2.5-1.121,2.5-2.5-1.121-2.5-2.5-2.5Zm0,4c-.827,0-1.5-.673-1.5-1.5s.673-1.5,1.5-1.5,1.5,.673,1.5,1.5-.673,1.5-1.5,1.5Z"/>
</svg>

);
