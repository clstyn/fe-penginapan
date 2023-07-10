import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";

import { HiMenu, HiX } from "react-icons/hi";

export default function Dropdown(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Menu as="div" className="relative inline-block">
      <Menu.Button onClick={toggleMenu}>
        {menuOpen ? <HiX /> : <HiMenu />}
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-36 z-50 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg focus:outline-none font-poppins text-c-dark-green">
          <div className="px-1 py-1 ">
            {props.items.map((data) => {
              const { id, value, linkTo } = data;
              return (
                <div key={id}>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to={linkTo}
                        className={`${
                          active ? "bg-[#3F65FF] text-white" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        {value}
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              );
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
