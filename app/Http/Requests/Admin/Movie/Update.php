<?php

namespace App\Http\Requests\Admin\Movie;

use Illuminate\Foundation\Http\FormRequest;
use Auth;

class Update extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Auth::user()->hasRole("admin");
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'nullable|unique:movies,name,'.$this->movie->id, //$this->movie->id is added to handle the duplicate checked. if we don't add $this->movie->id, the database will think the data is duplicate
            'category' => 'nullable',
            'video_url' => 'nullable|url',
            'thumbnail' => 'nullable|image',
            'rating' => 'nullable|numeric|min:0|max:5',
            'is_featured' => 'nullable|boolean'
            //we use nullable cause we don't really need the changes from admin. We can use the default value or the old value
        ];
    }
}
