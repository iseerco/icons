import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CommentImage = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12.836,.029C9.363-.208,5.961,1.064,3.509,3.521,1.057,5.976-.211,9.378,.03,12.854c.44,6.354,6.052,11.146,13.054,11.146h5.917c2.757,0,5-2.243,5-5v-6.66C24,5.862,19.096,.454,12.836,.029ZM6.5,7c.828,0,1.5,.672,1.5,1.5s-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5,.672-1.5,1.5-1.5Zm13.207,4.207l-3.293,3.293c-.779,.78-2.049,.78-2.828,0l-2.586-2.586-4.293,4.293c-.195,.195-.451,.293-.707,.293s-.512-.098-.707-.293c-.391-.391-.391-1.023,0-1.414l4.293-4.293c.756-.756,2.072-.756,2.828,0l2.586,2.586,3.293-3.293c.391-.391,1.023-.391,1.414,0s.391,1.023,0,1.414Z"/></svg>

);
