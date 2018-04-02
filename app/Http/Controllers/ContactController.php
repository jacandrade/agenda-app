<?php

namespace App\Http\Controllers;

use App\Contact;
use App\Http\Resources\ContactCollection;
use App\Http\Resources\ContactResource;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new ContactCollection(Contact::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $contact = Contact::create([
            'name' => request('name'),
            'surname' => request('surname'),
            'email' => request('email'),
            'phone' => request('phone'),
        ]);
        if($contact)
        {
            return new ContactCollection(Contact::all());
        }
        else
        {
            return response()->json([
                'error' => true,
                'message' => 'There was an error saving the contact. Please, contact an admin.'
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function show(Contact $contact)
    {
        //
        return new ContactResource($contact);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Contact $contact)
    {
        if(
            $contact->update([
                'name' => request('name'),
                'surname' => request('surname'),
                'email' => request('email'),
                'phone' => request('phone'),
            ])
          )
        {
            return new ContactResource($contact);
        }
        else
        {
            return response()->json([
                'error' => true,
                'message' => 'There was an error updating this contact. Please, contact an admin.'
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function destroy(Contact $contact)
    {
        if($contact->delete())
        {
            return response()->json([
                'message' => 'Success! Contact deleted.'
            ]);
        }
        else
        {
            return response()->json([
                'error' => true,
                'message' => 'There was an error deleting this contact. Please, contact an admin.'
            ]);
        }
    }
}
