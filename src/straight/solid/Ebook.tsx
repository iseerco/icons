import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Ebook = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20.175 17h-4.35c.381-.824 1.209-1.4 2.175-1.4s1.794.576 2.175 1.4zm3.825 1c0 3.314-2.686 6-6 6s-6-2.686-6-6 2.686-6 6-6 6 2.686 6 6zm-2.141-1c-.446-1.722-1.997-3-3.859-3-2.209 0-4 1.791-4 4s1.791 4 4 4c1.297 0 2.436-.624 3.162-1.582-1.624-.011-2.856-.018-3.162-.018-1.115 0-2.046-.768-2.315-1.8h6.254c.105-.525.06-1.093-.081-1.6zm-19.859 1c-.738-.001-1.451.271-2 .765v-15.765c0-1.657 1.343-3 3-3h1v18zm8 0h-4v-18h12c1.105 0 2 .895 2 2v8.252c-.639-.165-1.309-.252-2-.252-4.418 0-8 3.582-8 8zm2.709 6h-10.709c-1.105 0-2-.895-2-2s.895-2 2-2h8.252c.405 1.573 1.276 2.958 2.457 4z"/></svg>
);
