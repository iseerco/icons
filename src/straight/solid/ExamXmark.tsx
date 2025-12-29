import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ExamXmark = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19 0h-14c-1.654 0-3 1.346-3 3v21h20v-21c0-1.654-1.346-3-3-3zm-12 5h10v2h-10zm0 4h10v2h-10zm2.384 6h-2.384v-2h4.384zm8.736 3.691-1.414 1.414-1.693-1.693-1.693 1.693-1.414-1.414 1.693-1.693-1.693-1.693 1.414-1.414 1.693 1.693 1.693-1.693 1.414 1.414-1.693 1.693z"/></svg>
);
