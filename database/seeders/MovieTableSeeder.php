<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $movie = [
            [
                'name' => 'The Shawshank Redemption',
                'slug' => 'the-shawshank-redemption',
                'category' => 'Drama',
                'video_url' => 'http://www.youtube.com/watch?v=6hB3S9bIaco',
                'thumbnail' => 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=859&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'rating' => 9.3,
                'is_featured' => false,
            ],
            [
                'name' => 'The Godfather',
                'slug' => 'the-godfather',
                'category' => 'Drama',
                'video_url' => 'http://www.youtube.com/watch?v=sY1S34973zA',
                'thumbnail' => 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=859&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGV',
                'rating' => 9.2,
                'is_featured' => false,
            ],
            [
                'name' => 'The Godfather: Part Two',
                'slug' => 'the-godfather-part-two',
                'category' => 'Drama',
                'video_url' => 'http://www.youtube.com/watch?v=h8z-QB41EBw',
                'thumbnail' => 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=859&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGV',
                'rating' => 9.0,
                'is_featured' => false,
            ]
        ];
        Movie::insert($movie);
    }
}
