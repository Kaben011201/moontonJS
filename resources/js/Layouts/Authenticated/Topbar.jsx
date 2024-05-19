import { Link } from "@inertiajs/react";
import React from "react";
import { useState } from "react";

export default function Topbar({auth}) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const triggerDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className="flex justify-between items-center cursor-pointer">
            <input
                type="text"
                className="top-search"
                placeholder="Search movie, cast, genre"
            />
            <div className="flex items-center gap-4">
                <span className="text-black text-sm font-medium">
                    Welcome, {auth}
                </span>

                {/* <!-- user avatar --> */}
                <div className="collapsible-dropdown flex flex-col gap-2 relative">
                    <div
                        className={`outline outline-2 ${ dropdownOpen ? 'outline-alerange' : 'outline-gray-2'} p-[5px] rounded-full w-[60px] dropdown-button`}
                        onClick={triggerDropdown}
                    >
                        <img
                            src="/images/avatar.jpg"
                            className="rounded-full object-cover w-full"
                            alt="Profil"
                        />
                    </div>
                    {dropdownOpen && (
                        <div className="bg-white rounded-2xl text-black font-medium flex flex-col gap-1 absolute z-[999] right-0 top-[80px] min-w-[180px] overflow-hidden">
                            <a
                                href="#!"
                                className="transition-all hover:bg-sky-100 p-4"
                            >
                                Dashboard
                            </a>
                            <a
                                href="#!"
                                className="transition-all hover:bg-sky-100 p-4"
                            >
                                Settings
                            </a>
                            <Link
                                href={route('logout')}
                                method="post"
                                as="button"
                                className="transition-all hover:bg-sky-100 p-4 text-left"
                            >
                                Sign Out
                            </Link>
                        </div>
                    )}
                </div>
            </div>
            <style jsx="true">
                {`
                    .top-search {
                        background-image: url("/icons/ic_search.svg");
                    }
                `}
            </style>
        </div>
    );
}
