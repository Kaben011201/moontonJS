<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\SubscriptionPlan;
use App\Models\UserSubscription;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Auth;

class SubscriptionPlanController extends Controller
{

    public function index(){
        $subscriptionPlan = SubscriptionPlan::all();
        return inertia('User/Dashboard/SubscriptionPlan/Index', ['subscriptionPlans' => SubscriptionPlan::all()]);
    }

    public function userSubscribe(Request $request, SubscriptionPlan $subscriptionPlan){
        // 'user_id', 'subscription_plan_id', 'price', 'expired_date', 'payment_status', 'snapToken'

        $data=[
            'user_id' => Auth::id(),
            'subscription_plan_id' => $subscriptionPlan->id,
            'price' => $subscriptionPlan->price, // we record the price to keep value of the variabel to avoid changes price later
            'expired_date' => Carbon::now()->addMonths($subscriptionPlan->active_period_in_months),
            'payment_status' => 'paid',
        ];

        $userSubscription = UserSubscription::create($data);

        return redirect(route('user.dashboard.index'));
    }
}
