<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('user_subscriptions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained();
            $table->foreignId('subscription_plan_id')->constrained();
            $table->unsignedInteger('price');
            $table->dateTime('expired_date')->nullable(); //cause we won't give expired date when the payment have finished
            $table->string('payment_status', 10)->default('pending');
            $table->string('snapToken')->nullable(); //we save token here not an URL. The token is given by snap js. And we can customise with Back-End and Midtrans API
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_subscriptions');
    }
};
