<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Movie;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $featuredMovies = Movie::whereIsFeatured(true)->get();
        $movie = Movie::all();

        return Inertia::render('User/Dashboard/Index', [
            'featuredMovies' => $featuredMovies,
            'movies' => $movie,
        ]);
    }
}
