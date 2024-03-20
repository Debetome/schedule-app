import React, { useRef, useEffect } from 'react';

interface PopMenuProps {
    items: string[],
    x: number,
    y: number,
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const PopMenu: React.FC<PopMenuProps> = (props: PopMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);  

  const style: React.CSSProperties = {    
    top: `${props.y}px`,
    left: `${props.x}px`,
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        props.setIsOpen(false);
        console.log("hello")
      }
    };

    document.onclick = handleClickOutside;

    return () => {
      document.onclick = handleClickOutside;
    };
  }, []);

  return (
    <>
      {props.isOpen ? (
        <div className="absolute right-0 w-48 bg-white border rounded-md shadow-lg" style={style}>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Menu Item 1</a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Menu Item 2</a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Menu Item 3</a>
        </div>
      ) : ""}    
    </>                
  );
}

export default PopMenu;
