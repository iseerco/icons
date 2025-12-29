import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Mortgage = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22.812,7.635l-.812-.637V2h-2v3.432L13.908.659c-1.124-.881-2.693-.881-3.815,0L1.188,7.635c-.755.591-1.188,1.48-1.188,2.439v13.926h24v-13.926c0-.959-.433-1.849-1.188-2.439Zm-15.812,3.865c0-.828.672-1.5,1.5-1.5s1.5.672,1.5,1.5-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5Zm.846,7.5l5.833-9h2.474l-5.833,9h-2.474Zm7.654,0c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5,1.5.672,1.5,1.5-.672,1.5-1.5,1.5Z"/>
</svg>

);
