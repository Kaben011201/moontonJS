<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\User\MovieController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\User\DashboardController;

Route::redirect('/', '/login');

// Route::get('/dashboard', function () {
//     return Inertia::render('User/Dashboard/Index');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth', 'role:user'])->prefix('dashboard')->name('user.dashboard.')->group(function(){
    Route::get('/', [DashboardController::class, 'index'])->name('index');

    Route::get('/movie/{movie:slug}', [MovieController::class, 'show'])->name('movie.show');
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
