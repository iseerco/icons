import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Surfing = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23.124.876a2.958 2.958 0 0 0 -2.4-.861c-2.272.221-8.014 1.2-12.263 5.446a34.9 34.9 0 0 0 -8.219 13.053l-.242.608 4.855 4.855.609-.238a34.981 34.981 0 0 0 13.071-8.2c4.248-4.248 5.225-9.991 5.446-12.263a2.971 2.971 0 0 0 -.857-2.4zm-6 13.249a32.127 32.127 0 0 1 -11.777 7.512l-.785-.785 12.145-12.145-1.414-1.414-12.145 12.145-.8-.8a32.536 32.536 0 0 1 7.527-11.763c3.792-3.791 8.986-4.669 11.044-4.87a.992.992 0 0 1 .791.285.982.982 0 0 1 .29.791c-.206 2.058-1.084 7.253-4.875 11.044z"/></svg>
);
