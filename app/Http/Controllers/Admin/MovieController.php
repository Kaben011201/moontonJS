<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Movie\Store;
use App\Http\Requests\Admin\Movie\Update;
use App\Models\Movie;
use Illuminate\Http\Request;
use Storage;
use Str;

class MovieController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $movies = Movie::all();
        return inertia('Admin/Movie/Index', [
            'movies'=> $movies,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Admin/Movie/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Store $request)
    {
        $data = $request->validated();
        $data['thumbnail'] = Storage::disk('public')->put('movies', $request->file('thumbnail')); //cause if we save img in database, we will get bad performance when we fetch data from database. So, just save in LOCAL STOREGE of LARAVEL
        $data['slug'] = Str::slug($data['name']);
        $movie = Movie::create($data);
        return redirect(route('admin.dashboard.movie.index'))->with([ //this part is flash message that will appear just once.
            'message' => __('Movie Insert Succsessfully'),
            'type' => 'success'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Movie $movie)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Movie $movie)
    {
        return inertia('Admin/Movie/Edit', [
            'movie'=> $movie
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Update $request, Movie $movie)
    {
        $data = $request->validated();

        if($request->file('thumbnail')){
            $data['thumbnail'] = Storage::disk('public')->put('movies', $request->file('thumbnail')); //change the old thumbnail with new thumbnail where their id are same
            Storage::disk('public')->delete($movie->thumbnail); //delete the old thumbnail
        }else{
            $data['thumbnail'] = $movie->thumbnail; //if there is no new image, we just use old image
        }

        $movie->update($data);
        return redirect(route('admin.dashboard.movie.index'))->with([
            'message'=> "Movie updated successfully",
            "type"=> "success"
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Movie $movie)
    {
        //
    }
}
