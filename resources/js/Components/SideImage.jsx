import React from "react";

export default function SideImage() {
    return (
        <div className="h-full items-start overflow-hidden w-full p-10">
            <div className="flex gap-10 mr-20">
                <div className="grid gap-10 animate-scrollUp">
                    {[1, 2, 3, 4].map((index) => (
                        <img
                            key={index}
                            className="h-80 w-full object-cover object-center rounded-lg gap-10 !m-0 !p-0"
                            src={`/images/browse-${index}.png`}
                            alt=""
                        />
                    ))}
                </div>
                <div className="grid gap-10 animate-scrollDown">
                    {[1, 2, 3, 4].map((index) => (
                        <img
                            key={index}
                            className="h-80 w-full object-cover object-center rounded-lg gap-10 !m-0 !p-0"
                            src={`/images/browse-${index}.png`}
                            alt=""
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
