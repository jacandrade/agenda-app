<?php

namespace App\Http\Controllers;

use App\Message;
use App\Http\Resources\MessageCollection;
use App\Http\Resources\MessageResource;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new MessageCollection(Message::all());
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $message = Message::create([
            'body' => request('messageBody'),
            'contact_id' => request('contact_id'),
        ]);
        if($message)
        {
            return new MessageCollection(Message::all());
        }
        else
        {
            return response()->json([
                'error' => true,
                'message' => 'There was an error saving the message. Please, contact an admin.'
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Message  $message
     * @return \Illuminate\Http\Response
     */
    public function show(Message $message)
    {
        return new MessageResource($message);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Message  $message
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Message $message)
    {
        //
        if(
            $message->update([
                'body' => request('messageBody'),
                'contact_id' => request('contact_id'),
            ])
          )
        {
            return new MessageResource($message);
        }
        else
        {
            return response()->json([
                'error' => true,
                'message' => 'There was an error updating this message. Please, contact an admin.'
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Message  $message
     * @return \Illuminate\Http\Response
     */
    public function destroy(Message $message)
    {
        if($message->delete())
        {
            return response()->json([
                'message' => 'Success! Message deleted.'
            ]);
        }
        else
        {
            return response()->json([
                'error' => true,
                'message' => 'There was an error deleting this message. Please, contact an admin.'
            ]);
        }
    }
}
