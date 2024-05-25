import SubsriptionCard from "@/Components/SubsriptionCard";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React from "react";

export default function () {
    return (
        <Authenticated>
          <Head title="Subscription"/>
            <div className="mx-auto">
                <div className="py-20 flex flex-col items-center">
                    <div className="text-black font-semibold text-[26px] mb-3">
                        Pricing for Everyone
                    </div>
                    <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                        Invest your little money to get a whole new experiences
                        from movies.
                    </p>

                    {/* <!-- Pricing Card --> */}
                    <div className="flex justify-center gap-10 mt-[70px]">
                        {/* <!-- Basic --> */}
                        <SubsriptionCard name="Basic" price={299000} duration={3} features={["Unlock 10 basic movies", "Up to 3 users", "Support 24/7 ready"]}/>
                        {/* <!-- End Basic --> */}

                        {/* <!-- Premium --> */}
                        <SubsriptionCard isPremium name="For Greatest" price={800000} duration={3} features={["Unlock 200 awards movies", "180 subtitles available", "iOS, Android, TV", "Offline Mode", "Up to 20 users", "Support 24/7 ready"]}/>
                        {/* <!-- End Premium --> */}
                    </div>
                    {/* <!-- /Pricing Card --> */}
                </div>
            </div>
        </Authenticated>
    );
}
