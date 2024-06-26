<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\SubscriptionPlan;

class SubscriptionPlanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $subscriptionPlans = [
            [
                'name' => 'Basic',
                'price' => 299000,
                'active_period_in_months' => 3,
                'features' => json_encode(["Unlock 10 basic movies", "Up to 3 users", "Support 24/7 ready"])
            ],
            [
                'name' => 'Premium',
                'price' => 800000,
                'active_period_in_months' => 6,
                'features' => json_encode(["Unlock 200 awards movies", "180 subtitles available", "iOS, Android, TV", "Offline Mode", "Up to 20 users", "Support 24/7 ready"])
            ],
        ];

        SubscriptionPlan::insert($subscriptionPlans);
    }
}
