<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    protected $fillable = ['name', 'surname', 'email', 'phone'];
    //
    /**
     * Get the messages fort this contact.
     */
    public function messages()
    {
        return $this->hasMany('App\Message');
    }
}
