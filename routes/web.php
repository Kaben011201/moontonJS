<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\User\MovieController;
use App\Http\Controllers\Admin\MovieController as AdminMovieController;
use App\Http\Controllers\User\SubscriptionPlanController;
use App\Http\Middleware\CheckUserSubscription;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\User\DashboardController;



// MIDTRANS ROUTE
Route::post('midtrans/notification', [SubscriptionPlanController::class,'midtransCallback']);


//APP ROUTE
Route::redirect('/', '/login');

Route::middleware(['auth', 'role:user'])->prefix('dashboard')->name('user.dashboard.')->group(function(){
    Route::get('/', [DashboardController::class, 'index'])->name('index');

    Route::get('movie/{movie:slug}', [MovieController::class, 'show'])->name('movie.show')->middleware('checkUserSubscription:true');

    Route::get('subscription-plan', [SubscriptionPlanController::class, 'index'])->name('subscriptionPlan.index')->middleware('checkUserSubscription:false');

    Route::post('subscription-plan/{subscriptionPlan}/user-subscribe', [SubscriptionPlanController::class, 'userSubscribe'])->name('subscriptionPlan.userSubscribe')->middleware('checkUserSubscription:false');
});

Route::middleware(['auth', 'role:admin'])->prefix('admin')->name('admin.dashboard.')->group(function(){
    Route::put('movie/{movie}/restore', [AdminMovieController::class,'restore'])->name('movie.restore');
    Route::resource('movie', AdminMovieController::class);
});

Route::prefix('prototype')->name('prototype.')->group(function(){
    route::get('/login', function(){
        return Inertia::render('Prototype/Login');
    })->name('login');

    route::get('/register', function(){
        return Inertia::render('Prototype/Register');
    })->name('register');

    route::get('/dashboard', function(){
        return Inertia::render('Prototype/Dashboard');
    })->name('dashboard');

    route::get('/subscriptionPlan', function(){
        return Inertia::render('Prototype/SubscriptionPlan');
    })->name('subscriptionPlan');

    route::get('/movie/{slug}', function(){
        return Inertia::render('Prototype/Movie/Show');
    })->name('movie.show');
});

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

require __DIR__.'/auth.php';
