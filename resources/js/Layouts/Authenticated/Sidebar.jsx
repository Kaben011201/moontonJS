import { Link } from "@inertiajs/react";
import React from "react";
import SubscriptionDetail from "./SubscriptionDetail";
import { UserMenu, UserOthers } from "./MenuList";
import MenuItem from "./MenuItem";

export default function Sidebar({ auth }) {
    console.log(auth);
    return (
        <>
            <aside className="fixed z-50 w-[300px] h-full bg-white">
                <div className="flex flex-col p-[30px] pr-0 border-r border-gray-[#F1F1F1] overflow-y-auto h-full">
                    <a href="/">
                        <img src="/images/moonton.svg" alt="" />
                    </a>
                    <div className="links flex flex-col mt-[60px] h-full gap-[30px]">
                        {/* <!-- Menu --> */}
                        <div>
                            <div className="text-gray-1 text-sm mb-4">Menu</div>

                            {UserMenu.map((menu, index) => (
                                <MenuItem
                                    key={`${index}-${menu.text}`}
                                    link={menu.link}
                                    icon={menu.icon}
                                    text={menu.text}
                                    isActive={menu.link && route().current(menu.link)}
                                />
                            ))}
                        </div>
                        {/* <!-- ./Menu --> */}

                        {/* <!-- Others --> */}
                        <div>
                            <div className="text-gray-1 text-sm mb-4">
                                Others
                            </div>

                            {UserOthers.map((other, index) => (
                                <MenuItem
                                    key={`${index}-${other.text}`}
                                    link={other.link}
                                    icon={other.icon}
                                    text={other.text}
                                    isActive={other.link && route().current(other.link)}
                                    method={other.method}
                                />
                            ))}
                        </div>
                        {/* <!-- ./Others --> */}

                        {/* <!-- Subscription details --> */}
                        {auth.activePlan && (
                            <SubscriptionDetail
                                name={auth.activePlan.name}
                                remainingActiveDays={
                                    auth.activePlan.remainingActiveDays
                                }
                                activeDays={auth.activePlan.activeDays}
                                isPremium={auth.activePlan.name === "Premium"}
                            />
                        )}
                        {/* ./Subscription details */}
                    </div>
                </div>
            </aside>
        </>
    );
}
