<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    protected $fillable = ['body', 'contact_id'];
     /**
     * Get the contact that owns the message.
     */
    public function contact()
    {
        return $this->belongsTo('App\Contact');
    }
}
