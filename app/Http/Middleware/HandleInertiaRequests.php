<?php

namespace App\Http\Middleware;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;
use Auth;
use Session;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */

     private function activePlan(){
        $activePlan = Auth::user() ? Auth::user()->LastActiveUserSubscription : null;

        if(!$activePlan){
            return null;
        }

        $lastDay = Carbon::parse($activePlan->updated_at)->addMonths($activePlan->subscriptionPlan->active_period_in_months);
        $activeDays = Carbon::parse($activePlan->updated_at)->diffInDays($lastDay);
        $remainingActiveDays = Carbon::parse($activePlan->expired_date)->diffInDays(Carbon::now(), true); //true to make value of remainingActiveDays being positive

        return [
            'name' => $activePlan->subscriptionPlan->name,
            'remainingActiveDays' => intval($remainingActiveDays), //intval to make sure that value of remainingActiveDays is integer
            'activeDays' => $activeDays,
        ];
     }

    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
                'activePlan' => $this->activePlan(),
            ],

            'flashMessage' => [
                'message' => Session::get('message'),
                'type' => Session::get('type')
            ],

            'env' => [
                'MIDTRANS_CLIENTKEY' => env('MIDTRANS_CLIENTKEY')
            ],

            'ziggy' => function () {
                return (new Ziggy) ->toArray();
            }
        ];
    }
}
