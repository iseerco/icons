import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Seven = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M7.999,24c-.162,0-.327-.04-.479-.123-.485-.265-.663-.873-.398-1.357L17.962,2.691c.096-.193,.005-.383-.039-.455-.044-.071-.174-.237-.425-.237H5c-.552,0-1-.448-1-1s.448-1,1-1h12.498c.873,0,1.668,.443,2.126,1.186,.459,.742,.5,1.651,.11,2.433L8.877,23.479c-.182,.333-.524,.521-.878,.521Z"/></svg>

);
